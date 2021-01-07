import { Router } from 'express';
import { registerController, loginController } from './user.controllers';
import { registerValidator, loginValidator } from './user.validators';
const router = Router();

router.post('/register', registerValidator, registerController);

router.post('/login', loginValidator, loginController);

export { router as userRouter };
