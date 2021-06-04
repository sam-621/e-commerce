import { API_KEY } from '../config';
import { ErrorHandler } from './handleError';
import { IApiKeyMiddleware } from './interfaces.middlewares';

const apiKey: IApiKeyMiddleware = (req, res, next) => {
  try {
    const apiKey = req.headers.apiKey;

    if (!apiKey) throw new ErrorHandler(401, 'No api key provided', null);

    if (apiKey !== API_KEY) throw new ErrorHandler(401, 'Api key dont match', null);

    if (apiKey === API_KEY) return next();
  } catch (e) {
    return res.status(e.statusCode).json({
      data: null,
      message: null,
      error: { msg: e.msg },
    });
  }
};

export { apiKey };
