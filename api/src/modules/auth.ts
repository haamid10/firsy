import jwt from 'jsonwebtoken'


export const createJWT = (user: { id: any; username: any }) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    }, 
    (process as any).env.JWT_SECRET
  )
  return token
}

export const protect = (req: { headers: { authorization: any } }, res: { status: (arg0: number) => void; json: (arg0: { message: string }) => void }, next: any) => {
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

}