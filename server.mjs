import { createServer } from 'http'

const pages = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello World</h1>')
})

pages.listen(3002, () => {
  console.log('Server running at http://localhost:3002/')
})
