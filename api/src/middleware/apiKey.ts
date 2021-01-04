import { API_KEY } from '../config';
import { apiKeyMiddleware } from './interfaces.middlewares';

const apiKey: apiKeyMiddleware = (req, res, next) => {
  const { apiKey } = req.headers;

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
