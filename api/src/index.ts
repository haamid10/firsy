import * as dotenv from 'dotenv'
dotenv.config()
import app from './server'

app.listen(8000,()=> {
  console.log('Hello on http://localhost:8000s')
})