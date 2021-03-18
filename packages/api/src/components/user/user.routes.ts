import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
import {
  registerController,
  loginController,
  refreshTokenController,
  getUserData,
  updateUserData,
} from './user.controllers';
import { registerValidator, loginValidator } from './user.validators';
const router = Router();

router.post('/register', registerValidator, areWrongData, registerController);

router.post('/login', loginValidator, areWrongData, loginController);

router.get('/user', jwtMiddleware, getUserData);

router.post('/user', jwtMiddleware, updateUserData);

router.get('/refresh', jwtMiddleware, refreshTokenController);

export { router as userRouter };
