import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../components/user/user.interface';

async function isAnArray(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({
      data: null,
      message: 'WRONG DATA SCHEMA',
    });
  }

  const isOk = await propertiesAreCorrect(req.body);

  if (!isOk) {
    return res.status(400).json({
      data: null,
      message: 'WRONG DATA SCHEMA',
    });
  }

  next();
}

async function propertiesAreCorrect(arr: IProduct[]): Promise<boolean> {
  let isOk = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i].description !== 'string') {
      isOk = false;
      return;
    }

    if (typeof arr[i].image !== 'string') {
      isOk = false;
      return;
    }

    if (typeof arr[i].name !== 'string') {
      isOk = false;
      return;
    }

    if (typeof arr[i].price !== 'number') {
      isOk = false;
      return;
    }

    if (typeof arr[i].frontID !== 'number') {
      isOk = false;
      return;
    }
  }

  return isOk;
}

export default isAnArray;
