import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import OrdersCard from './components/OrdersCard'
import Orders from './pages/Orders'
import { fetchData } from './utils/fetchData'

// Mock the fetchData function
jest.mock('./utils/fetchData', () => ({
  fetchData: jest.fn(),
}))




describe('Dashboard page', () => {

  const mockOrders = {
    value: [{
      OrderID: 1,
      OrderDate: '2022-01-01',
      ShippedDate: '2022-01-05',
      Freight: 10.5,
      ShipAddress: '123 Shipping Street',
      ShipCity: 'Cityville',
      ShipRegion: 'Regionville',
      ShipCountry: 'Countryland',
    },
    {
      OrderID: 2,
      OrderDate: '2022-02-01',
      ShippedDate: '2022-02-05',
      Freight: 15.75,
      ShipAddress: '456 Delivery Avenue',
      ShipCity: 'Townsville',
      ShipRegion: 'Regionville',
      ShipCountry: 'Countryland',
    },],
  }


  it('fetches orders and display 2 as total orders in OrdersCard component', async () => {

    fetchData.mockResolvedValue(mockOrders)
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>)

    await waitFor(() => {
      expect(screen.getByTestId('total-orders').textContent).toEqual(mockOrders.value.length.toString())
    })
  })


  it('renders average processing time chart succesfully', async () => {

    fetchData.mockResolvedValue(mockOrders)

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>)

    await screen.findByTestId('average-processing-chart')
    expect(screen.getByTestId('average-processing-chart')).toBeInTheDocument()
  })

  it('renders total orders per month chart succesfully', async () => {

    fetchData.mockResolvedValue(mockOrders)

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>)

    await screen.findByText('Total orders per month')
    expect(screen.getByTestId('total-orders-chart')).toBeInTheDocument()

  })

  it('navigates to /orders after clicking explore details button', () => {

    render(
      <BrowserRouter>
        <OrdersCard orders={mockOrders} />
      </BrowserRouter>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const currentPath = window.location.pathname
    expect(currentPath).toEqual('/orders')
  })
})




describe('Orders page', () => {
  const mockOrders = [
    {
      OrderID: 1,
      OrderDate: '2022-01-01',
      ShippedDate: '2022-01-05',
      Freight: 10.5,
      ShipAddress: '123 Shipping Street',
      ShipCity: 'Cityville',
      ShipRegion: 'Regionville',
      ShipCountry: 'Countryland',
    },
    {
      OrderID: 2,
      OrderDate: '2022-02-01',
      ShippedDate: '2022-02-05',
      Freight: 15.75,
      ShipAddress: '456 Delivery Avenue',
      ShipCity: 'Townsville',
      ShipRegion: 'Regionville',
      ShipCountry: 'Countryland',
    },
  ]

  it('renders orders table successfully', async () => {


    render(
      <BrowserRouter>
        <Orders orders={mockOrders} />
      </BrowserRouter>
    )

    const ordersTable = screen.getByTestId('orders-table')
    expect(ordersTable).toBeInTheDocument()

  })

  it('navigates to "/" after clicking "Go back" link', () => {

    render(
      <BrowserRouter>
        <Orders orders={mockOrders} />
      </BrowserRouter>
    )

    const goBackLink = screen.getByText('Go back')
    fireEvent.click(goBackLink)

    const currentPath = window.location.pathname
    expect(currentPath).toEqual('/')

  })

})
