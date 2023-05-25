import { Line } from 'react-chartjs-2'
import { calculateAverageDays } from '../utils/calculator'


const AverageProcessingChart = ({ orders }) => {

  // Define labels for the x-axis
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Set the Chart data
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Average processing time',
        data: calculateAverageDays(orders),
        backgroundColor: 'transparent',
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
      },
    ],
  }

  // Set the chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 25,
        title: {
          display: true,
          text: 'Average processing time (days)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {

          label: function (context) {
            const value = Math.round(context.parsed.y)
            return `Average Days: ${value} days`
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        },
      }
    }

  }


  return <div>
    <h3 className='text-center text-muted'>Average processing time per month</h3>
    <Line data-testid='average-processing-chart' data={data} options={options} />
  </div>

}



export default AverageProcessingChart 
