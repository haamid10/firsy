import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt';


const comparePasswords = (password ,hash) => {
   return bcrypt.compare(password,hash)
}
const hasPassword = (password) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user: { id: any; username: any }) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    }, 
    (process as any).env.JWT_SECRET
  )
  return token
}

export const protect = (req: {
  [x: string]: string | jwt.JwtPayload; headers: { authorization: any } 
}, res: { status: (arg0: number) => void; json: (arg0: { message: string }) => void }, next: any) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({message: 'not authorized'})
    return
  }
  const [,token] = bearer.split(' ')
  if(!token){
    res.status(401)
    res.json({message: 'not authorized'})
    return
  }

  try{
    const user = jwt.verify(token,(process as any).env.JWT_SECRET)
    req.user= user
    next()
  }catch(e){
    console.error(e)
    res.status(401)
    res.json({message: 'not valid token'})
    return

  }
  
}