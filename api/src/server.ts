import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'

const app= express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  req.body = 'doggy'
  res.status(401)
res.send('Nope')
})

//  
app.use('/api', router)


export default  app