import { Request, response, Response } from 'express'
import { Users } from '../models/users'
import { handleHttp } from '../utils/error.handle'
import { RequestHandler } from 'express'

const getUser:RequestHandler = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.send(users)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
    console.log(error);
    
  }
}

export {getUser};