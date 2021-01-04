import { validationResult } from 'express-validator';
import { IController } from './user.interface';

const registerController: IController = async (req, res, next) => {
  return await res.json({ msg: 'hi' });
};

export { registerController };
