import { Router } from 'express';
const router = Router();
import { registerController } from './user.controllers';

router.post('/register', registerController);

export { router as userRouter };
