import { Link } from "react-router-dom"

const OrdersCard = ({ orders }) => {

  return <div className='card mb-2'>
    <div className='row'>
      <div className='col-md-5 text-center'>
        <span className='text-secondary'>
          <i className='bi bi-bag-heart' style={{ fontSize: '7rem' }}></i>
        </span>
      </div>
      <div className='col-md-7'>
        <div className='card-body'>
          <h5 className='card-title text-secondary'>Current Total Orders:</h5>
          <p data-testid='total-orders' className='card-text display-5 fw-bold text-secondary'>{orders.length}</p>
          <Link to='/orders'>
            <button className='btn btn-outline-secondary'>Explore details</button>
          </Link>

        </div>
      </div>

    </div>

  </div>


}

export default OrdersCard