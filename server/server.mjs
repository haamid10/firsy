import express from 'express'
import pb from 'body-parser'
import morgan from 'morgan'

const app = express()

app.usse (bp.urlencoded({extended: true}))
app.use (pb.json())
app.use(morgan('dev'))

const db = []

app.post('/todo' ,(req,res)=> {
const newTodo ={
  id: Date.now(),
  text: req.body.text
}
db.push(newTodo)
res.json(newTodo)
})

app.get ('/todo', (req,res)=>{
  res.json(db)
})
