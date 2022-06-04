import React,{useState} from 'react';


const Form = () => {
    const [select,setSelect] = useState('Choose');
    return (
        <div style={{ width: '500px' }}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Product Name</span>
                </div>
                <input type="text" className="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Catagories</label>
                </div>
                <select class="custom-select" onChange = {(e)=>setSelect(e.target.value)} value = {select} id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="Gadgets">Gadgets</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Textbooks">Textbooks</option>
                </select>
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                </div>
                <textarea className="form-control" placeholder='Description' aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Price (INR)</span>
                </div>
                <input type="number" className="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Phone No.</span>
                </div>
                <input type="number" className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email Id</span>
                </div>
                <input type="email" className="form-control" placeholder="Email ID" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">State</span>
                </div>
                <input type="text" className="form-control" placeholder="State" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-2 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">City</span>
                </div>
                <input type="text" className="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button className='btn btn-primary'>Add Image</button>
            <button className='btn btn-success ml-2'>Sell</button>
        </div>
    )
}

export default Form