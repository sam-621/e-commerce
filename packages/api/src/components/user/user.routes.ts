import { Router } from 'express';
import { jwtMiddleware } from '../../middleware/jwt';
import { registerController, loginController, refreshTokenController } from './user.controllers';
import { registerValidator, loginValidator } from './user.validators';
const router = Router();

router.post('/register', registerValidator, registerController);

router.post('/login', loginValidator, loginController);

router.get('/auth', jwtMiddleware, refreshTokenController);

export { router as userRouter };
