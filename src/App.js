import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchData } from './utils/fetchData'
import "chart.js/auto"
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'

const App = () => {

  // State to store the orders
  const [orders, setOrders] = useState([])

  // Fetch orders when the component firstly mounts
  useEffect((
  ) => {
    const fetchOders = async () => {

      // Fetch orders data from the API
      const fetchOrders = await fetchData('Orders')

      // Set the orders state with the fetched data
      setOrders(fetchOrders.value)
    }

    fetchOders()

  }, [])



  return (<>
    <Header />
    < Routes >
      <Route path='/' element={<Dashboard orders={orders} />} />
      <Route path='/orders' element={<Orders orders={orders} />} />
    </Routes >
  </>
  )
}

export default App
