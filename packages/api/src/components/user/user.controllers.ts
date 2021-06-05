import { IController } from '../../types/controllers';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import { IPayload } from '../auth/auth.interfaces';

const registerController: IController = async (req, res) => {
  const { id, err } = await User.register(req.body);

  if (err) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  const payload: IPayload = {
    id,
  };

  const token = AuthServices.createToken(payload);

  return res.status(201).json({ data: token, message: 'USER REGISTERED', error: null });
};

const loginController: IController = async (req, res) => {
  const { id, err } = await User.login(req.body.username, req.body.password);

  if (err) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  const payload: IPayload = {
    id,
  };

  const token = AuthServices.createToken(payload);

  return res.status(200).json({ data: token, message: 'USER LOGGED' });
};

const getUserData: IController = async (req, res) => {
  const { data, error, message } = await AuthServices.getUser(req.user.id);

  if (error) {
    return res.status(error.statusCode).json({
      message: null,
      data: null,
      error: { message: error.message },
    });
  }

  return res.status(200).json({
    message: message,
    data: data,
    error: null,
  });
};

const updateUserData: IController = async (req, res) => {
  const { username, email } = req.body;

  const { data, error, message } = await User.UpdateUserInfo(req.user.id, username, email);

  return res.status(error.statusCode || 200).json({
    message: message,
    data: data,
    error: { message: error.message },
  });
};

const refreshTokenController: IController = async (req, res) => {
  const tokenRefreshed: string = AuthServices.refreshToken(req.user.id);

  return res.status(200).json({
    message: 'TOKEN REFRESHED',
    data: tokenRefreshed,
  });
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
