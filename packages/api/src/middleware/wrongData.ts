import { Result, validationResult } from 'express-validator';
import { NextFunction, Response, Request } from 'express';

function areWrongData(req: Request, res: Response, next: NextFunction) {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      data: null,
      message: null,
      error: { msg: 'Some of your data are incorrect' },
    });
  }

  next();
}

export default areWrongData;
