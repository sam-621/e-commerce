import { Result, validationResult } from 'express-validator';
import { NextFunction, Response, Request } from 'express';
import ControllerResponse from '../helpers/ControllerResponse';
import { responses, statusCodes } from '../config';

function areWrongData(req: Request, res: Response, next: NextFunction) {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return new ControllerResponse(res, null, responses.WRONG_DATA_SCHEMA, statusCodes.BAD_REQUES);
  }

  next();
}

export default areWrongData;
