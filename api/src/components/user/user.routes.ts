import { Router } from 'express';
import { registerController } from './user.controllers';
import { registerValidator } from './user.validators';
const router = Router();

router.post('/register', registerValidator, registerController);

router.post('/login', registerValidator, registerController);

export { router as userRouter };
