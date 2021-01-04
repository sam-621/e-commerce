import { Router } from 'express';
import { registerController } from './user.controllers';
import { registerValidator } from './user.validators';
const router = Router();

router.post('/register', registerValidator, registerController);

export { router as userRouter };
