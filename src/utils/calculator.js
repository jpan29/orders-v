import moment from 'moment'

// helper function for calculating average processing days for each month
export const calculateAverageDays = (orders) => {
  const months = new Array(12).fill(0)
  const monthCount = new Array(12).fill(0)

  // Accumulate the total days and count for each month
  orders.forEach((order) => {
    const orderMonth = moment(order.OrderDate).month()
    const shippedDate = moment(order.ShippedDate)
    const orderDate = moment(order.OrderDate)
    const daysDiff = shippedDate.diff(orderDate, 'days')

    months[orderMonth] += daysDiff
    monthCount[orderMonth]++

  })

  // Calculate the average processing time for each month 
  const averageDaysByMonth = months.map((totalDays, index) => {
    const count = monthCount[index]
    if (count === 0) return null
    else return totalDays / count

  })

  return averageDaysByMonth
}

// helper function for calculating total orders for each month
export const calculateTotalOrders = (orders) => {
  const months = new Array(12).fill(0)

  // Calculate the total orders for each month 
  orders.forEach((order) => {
    const orderMonth = moment(order.OrderDate).month()
    months[orderMonth]++
  })

  return months
}