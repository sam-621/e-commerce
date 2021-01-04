import { API_KEY } from '../config';
import { IApiKeyMiddleware } from './interfaces.middlewares';

const apiKey: IApiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['api_key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      message: 'NO API_KEY PROVIDED',
    });
  }

  if (apiKey === API_KEY) {
    return next();
  }
};

export { apiKey };
