import { IController } from '../interfaces/IController';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import { IPayload } from '../auth/auth.interfaces';

const registerController: IController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User(username, email, password);

  const { id, err } = await user.register();

  if (err) {
    return res.status(err.statusCode).json({
      message: err.msg,
    });
  }

  const authService = new AuthServices();

  const payload: IPayload = {
    id,
  };

  const token = authService.createToken(payload);

  return res.status(201).json({ data: token, message: 'USER REGISTERED' });
};

const loginController: IController = async (req, res) => {
  const user = new User('', req.body.email, req.body.password);

  const { id, err } = await user.login();

  if (err) {
    return res.status(err.statusCode).json({
      message: err.msg,
    });
  }

  const authService = new AuthServices();

  const payload: IPayload = {
    id,
  };

  const token = authService.createToken(payload);

  return res.status(200).json({ data: token, message: 'USER LOGGED' });
};

const getUserData: IController = async (req, res) => {
  const authServices = new AuthServices();

  const user = await authServices.getUser(req.user.id);

  if (user.err) {
    return res.status(user.err.statusCode).json({
      message: user.err.msg,
      data: null,
    });
  }

  return res.status(200).json({
    message: user.msg,
    data: user.data,
  });
};

const updateUserData: IController = async (req, res) => {
  const user = new User(req.body.username, req.body.email, '');

  const { data, msg, statusCode } = await user.UpdateUserInfo(req.user.id);

  return res.status(statusCode).json({
    message: msg,
    data: data,
  });
};

const refreshTokenController: IController = async (req, res) => {
  const authService = new AuthServices();

  const tokenRefreshed: string = authService.refreshToken(req.user.id);

  return res.status(200).json({
    message: 'TOKEN REFRESHED',
    data: tokenRefreshed,
  });
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
