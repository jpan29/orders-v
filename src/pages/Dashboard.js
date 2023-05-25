import AverageProcessingChart from "../components/AverageProcessingChart"
import OrdersCard from "../components/OrdersCard"
import TotalOrdersChart from "../components/TotalOrdersChart"

const Dashboard = ({ orders }) => {

  return <div className='App container my-4'>
    <h2 className='text-muted'>Dashboard</h2>
    <div className='row mt-5 mb-3'>
      <div className='col-md-12 col-lg-6'>
        <OrdersCard orders={orders} />
      </div>
    </div>

    {orders.length > 0 ? (
      <div className='container mt-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-12 col-lg-6'> <AverageProcessingChart orders={orders} /></div>
          <div className='col-md-12 col-lg-6'> <TotalOrdersChart orders={orders} /></div>

        </div>
      </div>
    ) : (
      <p>Loading data...</p>
    )
    }
  </div >
}
export default Dashboard