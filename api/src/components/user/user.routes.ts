import { Router } from 'express';
import { registerController } from './user.controllers';
const router = Router();

router.post('/register', registerController);

export { router as userRouter };
