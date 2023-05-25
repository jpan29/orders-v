import { Bar } from 'react-chartjs-2'
import { calculateTotalOrders } from '../utils/calculator'
const TotalOrdersChart = ({ orders }) => {

  // Define labels for the x-axis
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Set the Chart data
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Total Orders',
        data: calculateTotalOrders(orders),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'green',
        borderWidth: 2,
      },
    ],
  }

  // Set the chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Orders',
        },
      },

    },
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }


  return (
    <div>
      <h3 className='text-center text-muted'>Total orders per month</h3>
      <Bar data-testid='total-orders-chart' data={data} options={options} />
    </div>
  )
}
export default TotalOrdersChart