import {readFile} from 'fs'

const result = await readFile(new URL('app.mjs',import.meta.url),'utf-8',(err,data)=>{
  if(err){
    throw err
  }else{
    console.log(data)
  }
})