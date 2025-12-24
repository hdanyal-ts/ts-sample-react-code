export { fetchPositions }

const OPS_API_ENDPOINT = 'http://localhost:3000/dcm'

async function fetchPositions (token) {
  const res = await fetch(`${OPS_API_ENDPOINT}/employee/positions`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      // Handle the response here
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => data)
    .catch(error => {
      // Handle any errors from the request or response
      console.error('There was a problem with the fetch operation:', error)
      return error
    })
  return res.positions
}
