import { IController } from '../../types/controllers';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import { statusCodes } from '../../config';
import ControllerResponse from '../../helpers/ControllerResponse';

const registerController: IController = async (req, res) => {
  const { data, message, error } = await User.register(req.body);

  return new ControllerResponse(res, data, message, statusCodes.CONTENT_CREATED).response();
};

const loginController: IController = async (req, res) => {
  const { data, message, error } = await User.login(req.body.username, req.body.password);

  return new ControllerResponse(res, data, message, statusCodes.OK).response();
};

const getUserData: IController = async (req, res) => {
  const { data, error, message } = await AuthServices.getUser(req.user.id);

  return new ControllerResponse(res, data, message, statusCodes.OK).response();
};

const updateUserData: IController = async (req, res) => {
  const { username, email } = req.body;

  const { data, error, message } = await User.UpdateUserInfo(req.user.id, username, email);

  return new ControllerResponse(res, data, message, statusCodes.OK).response();
};

const refreshTokenController: IController = async (req, res) => {
  const { data, error, message } = AuthServices.refreshToken(req.user.id);

  return new ControllerResponse(res, data, message, statusCodes.OK).response();
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
