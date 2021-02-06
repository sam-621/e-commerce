import { Result, validationResult } from 'express-validator';
import { NextFunction, Response, Request } from 'express';

function areWrongData(req: Request, res: Response, next: NextFunction) {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'WRONG DATA SCHEMA',
      data: null,
    });
  }

  next();
}

export default areWrongData;
