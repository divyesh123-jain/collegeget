import React, { useState,useEffect } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, updateDoc,doc } from "firebase/firestore";
import { db, storage } from '../Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
// import { serverTimestamp } from '@firebase/firestore';

const Form = () => {
    const [user,setUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
		onAuthStateChanged(auth,(currentUser)=>{
			if(!currentUser) navigate('/login') ;
            setUser(currentUser);
            console.log(currentUser);
            // console.log(currentUser.photoURL);
		  });
	}, [navigate])
    const [select, setSelect] = useState('Choose');
    const [pname,setPname] = useState('');
    const [phone,setPhone] = useState('');
    const [desc,setDesc] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    const [shareImage, setShareImage] = useState('');
    const [price,setPrice] = useState('');
    const [year,setYear] = useState('');
    const [usn,setUsn] = useState('');
    const [college,setCollege] = useState("");

    const sendPost = async () => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                userImage:user.photoURL,
                email:user.email,
                sname:user.displayName,
                pname,
                phone,  
                usn,
                price,
                college,
                select,
                year,
                desc,
                state,
                city,
                time: serverTimestamp()
            });
            console.log(docRef.id);
            const imageRef = ref(storage, `posts/${docRef.id}/images`);
            if (shareImage) {
                const uploadTask = uploadBytesResumable(imageRef, shareImage);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                        
                    },
                    async() => {
                    
                        const imgURL = await getDownloadURL(uploadTask.snapshot.ref);
                        const update = await updateDoc(doc(db, "posts",docRef.id),{
                            img:imgURL,
                            id:docRef.id,
                        })
                        // console.log(imgURL);
                        reset();
                    }
                );
            }
        
            
        }
        catch (error) {
            alert(error);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendPost();
    }
    const reset = () => {
    //     onst [select, setSelect] = useState('Choose');
    // const [pname,setPname] = useState('');
    // const [email,setEmail] = useState('');
    // const [phone,setPhone] = useState('');
    // const [desc,setDesc] = useState('');
    // const [state,setState] = useState('');
    // const [city,setCity] = useState('');
    // const [shareImage, setShareImage] = useState('');        
        setPname("");
        setDesc("");
        setPhone("");
        setState("");
        setCity("");
        setCollege("");
        setPrice("");
        setShareImage();
        setSelect('Choose');
}


    const handleImageChange = (e) => {
        const image = e.target.files[0];
        if (image === '' || image === undefined) {
            alert(`This is not an image. This is ${typeof image}`);
            return;
        }
        setShareImage(image);
    }
    return (
        <div className="row" style = {{marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ width: '500px' }} className = "col-md-6">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Product Name</span>
                </div>
                <input required type="text" value ={pname} onChange = {(e)=>setPname(e.target.value)} className="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">USN</span>
                </div>
                <input required type="text" value ={usn} onChange = {(e)=>setUsn(e.target.value)} className="form-control" placeholder="Enter USN" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                </div>
                <select required className="custom-select" onChange={(e) => setSelect(e.target.value)} value={select} id="inputGroupSelect01">
                    <option value="Gadgets">Gadgets</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Textbooks">Textbooks</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                </div>
                <textarea required value = {desc} onChange = {(e)=>setDesc(e.target.value)} className="form-control" placeholder='Description' aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span  className="input-group-text" id="basic-addon1">Years Old</span>
                </div>
                <input required type="number" value = {year} onChange = {(e)=>setYear(e.target.value)} className="form-control" placeholder="How much old is your device ?" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span  className="input-group-text" id="basic-addon1">Price (INR)</span>
                </div>
                <input required type="number" className="form-control" value = {price} onChange = {(e)=>setPrice(e.target.value)} placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Phone No.</span>
                </div>
                <input type="number" className="form-control" value = {phone} onChange = {(e)=>setPhone(e.target.value)} placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {user.email && <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email Id</span>
                </div>
                <input disabled value = {user.email}  type="email" className="form-control" placeholder="Email ID" aria-label="Username" aria-describedby="basic-addon1" />
            </div>}
            
            
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">College Name</span>
                </div>
                <input required type="text" className="form-control" style = {{textTransform:"capitalize"}} placeholder="College Name" value = {college} onChange = {(e)=>setCollege(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">State</span>
                </div>
                <input required style = {{textTransform:"capitalize"}} type="text" className="form-control" placeholder="State" value = {state} onChange = {(e)=>setState(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div  className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">City</span>
                </div>
                <input required style = {{textTransform:"capitalize"}} type="text" className="form-control" value ={city} onChange = {(e)=>setCity(e.target.value)} placeholder="City" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button className='btn btn-primary'>
                <input required
                    type="file"
                    id="file"
                    accept="image/gif , image/jpeg, image/png"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                /><label htmlFor="file">
                    Add Photo
                </label>
            </button>
            <button onClick = {handleSubmit}  type = "submit" className='btn btn-success ml-2' disabled = {!shareImage?true:false}>Sell</button>
        </div>
        <div className='col-md-6'>
            {shareImage&& <img src={URL.createObjectURL(shareImage)} style = {{height:"500px",width:"100%"}} alt="" />}
            
        </div>
        </div>
    )
}

export default Form