const http = require('http')

const server = http.createServer(async(req,res) => {
  if (req.method === 'GET' && req.url === '/'){
   console.log('Hello from server')

    res.end()
  }
})

server.listen(8000 ,()=>{
  console.log('server on http://localhost:8000')
})