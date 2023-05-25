import { Link } from "react-router-dom"
import OrdersTable from "../components/OrdersTable"

const Orders = ({ orders }) => {

  return <div className='container'>
    <Link to='/' style={{ textDecoration: 'none' }}>
      Go back
    </Link>
    <OrdersTable orders={orders} />
  </div>


}
export default Orders