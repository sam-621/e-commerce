import { IController } from '../../types/controllers';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import { statusCodes } from '../../config';

const registerController: IController = async (req, res) => {
  const { data, message, error } = await User.register(req.body);

  return res.status(error?.statusCode || statusCodes.CONTENT_CREATED).json({
    data,
    message,
    error: { message: error.message },
  });
};

const loginController: IController = async (req, res) => {
  const { data, message, error } = await User.login(req.body.username, req.body.password);

  return res
    .status(error?.statusCode || statusCodes.OK)
    .json({ data, message, error: { message: error.message } });
};

const getUserData: IController = async (req, res) => {
  const { data, error, message } = await AuthServices.getUser(req.user.id);

  return res.status(error?.statusCode || statusCodes.OK).json({
    data,
    message,
    error: { message: error.message },
  });
};

const updateUserData: IController = async (req, res) => {
  const { username, email } = req.body;

  const { data, error, message } = await User.UpdateUserInfo(req.user.id, username, email);

  return res.status(error.statusCode || statusCodes.OK).json({
    data,
    message,
    error: { message: error.message },
  });
};

const refreshTokenController: IController = async (req, res) => {
  const { data, error, message } = AuthServices.refreshToken(req.user.id);

  return res.status(error?.statusCode || statusCodes.OK).json({
    data,
    message,
    error: { message: error.message },
  });
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
