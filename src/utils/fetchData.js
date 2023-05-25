export const fetchData = async endpoint => {

  // Fetch data from baseUrl
  try {
    const baseUrl = 'https://services.odata.org/v4/northwind/northwind.svc/'
    const url = new URL(endpoint, baseUrl)
    const response = await fetch(url)
    return await response.json()
  }
  catch (err) {
    console.log(err)
  }
}