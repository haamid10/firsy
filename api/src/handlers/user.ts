import prisma from '../db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'

export const createNewUser = async (req: { body: { username: any; password: any } }, res: { json: (arg0: { token: string }) => void }) => {

  const user = await prisma.user.create({
    data:{
      username: req.body.username,
      password: await hashPassword (req.body.password)
    }
  })
  const token = createJWT (user)
  res.json({token: token})
}

export const signIn = async (req: { body: { username: any; password: any } },res: { status: (arg0: number) => void; send: (arg0: { messege: string }) => void; json: (arg0: { token: string }) => void }) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    }
  })
  const isValid = await comparePasswords (req.body.password,(user as any).password)
  if(!isValid){
    res.status(401)
    res.send({messege: 'nope'})
  
  }
  const token = createJWT(user as any)
  res.json({token: token})
}