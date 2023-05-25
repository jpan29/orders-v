import moment from "moment"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"

const OrdersTable = ({ orders }) => {
  const columns = [
    {
      dataField: 'OrderID',
      text: 'OrderID'
    },
    {
      dataField: 'OrderDate',
      text: 'OrderDate',
      formatter: (cell) => moment(cell).format('YYYY-MM-DD')

    },
    {
      dataField: 'ShippedDate',
      text: 'ShippedDate',
      formatter: (cell) => moment(cell).format('YYYY-MM-DD')
    },

    {
      dataField: 'Freight',
      text: 'Freight'
    },
    {
      dataField: 'ShipAddress',
      text: 'ShipAddress'
    },
    {
      dataField: 'ShipCity',
      text: 'ShipCity'
    },
    {
      dataField: 'ShipRegion',
      text: 'ShipRegion'
    },
    {
      dataField: 'ShipCountry',
      text: 'ShipCountry'
    }
  ]
  return <div className="container justify-content-center mt-5 " data-testid='orders-table'>
    <BootstrapTable
      keyField='OrderID'
      data={orders}
      columns={columns}
      wrapperClasses='table-responsive'
      pagination={paginationFactory()}
      bordered={false}
      hover
    />
  </div>
}
export default OrdersTable