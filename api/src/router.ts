import {Router} from 'express'

const router = Router()

Router.get ('/product', ()=>{})
Router.get ('/product/:id', ()=>{})
Router.put ('/product/:id', ()=>{})
Router.post ('/product', ()=>{})
Router.delete ('/product/:id', ()=>{})

// updates

Router.get ('/update', ()=>{})
Router.get ('/update/:id', ()=>{})
Router.put ('/update/:id', ()=>{})
Router.post ('/update', ()=>{})
Router.delete ('/update/:id', ()=>{})

// update points

Router.get ('/updatepiont', ()=>{})
Router.get ('/updatepiont/:id', ()=>{})
Router.put ('/updatepiont/:id', ()=>{})
Router.post ('/updatepiont', ()=>{})
Router.delete ('/updatepiont/:id', ()=>{})
