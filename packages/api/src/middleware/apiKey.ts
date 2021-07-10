import { envVars } from '../config';
import ControllerResponse from '../helpers/ControllerResponse';
import { IApiKeyMiddleware } from '../types/middlewares';

const apiKey: IApiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['api_key'];

  if (!apiKey || apiKey !== envVars.API_KEY) {
    return new ControllerResponse(res, null, 'No api key provided', 401).response();
  }

  if (apiKey === envVars.API_KEY) {
    return next();
  }
};

export { apiKey };
