export class ApiService {
  async post(url: string, data: any) {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response
      })
      .then((data) => {
        console.log('Data:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}
