import { IController } from '../../types/controllers';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import ControllerResponse from '../../helpers/ControllerResponse';

const registerController: IController = async (req, res) => {
  const { data, message, statusCode } = await User.register(req.body);

  return new ControllerResponse(res, data, message, statusCode).response();
};

const loginController: IController = async (req, res) => {
  const { data, message, statusCode } = await User.login(req.body.email, req.body.password);

  return new ControllerResponse(res, data, message, statusCode).response();
};

const getUserData: IController = async (req, res) => {
  const { data, statusCode, message } = await AuthServices.getUser(req.user.id, ['-password']);

  return new ControllerResponse(res, data, message, statusCode).response();
};

const updateUserData: IController = async (req, res) => {
  const { username, email } = req.body;

  const { data, statusCode, message } = await User.UpdateUserInfo(req.user.id, username, email);

  return new ControllerResponse(res, data, message, statusCode).response();
};

const refreshTokenController: IController = async (req, res) => {
  const { data, statusCode, message } = AuthServices.refreshToken(req.user.id);

  return new ControllerResponse(res, data, message, statusCode).response();
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
