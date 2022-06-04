import React from 'react'

const Card = ({ img, title, price, id }) => {
  return (
    <div className='col-md-4 mt-2'>
      <div className="card ">
        <img src="https://www.cnet.com/a/img/resize/d99e4454ef75e27813a73faed58385b57073cac3/2021/10/03/5c27a4a2-9365-4182-9738-0cab4ca42cc0/img-5704.jpg?auto=webp&fit=crop&height=528&width=940" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Card