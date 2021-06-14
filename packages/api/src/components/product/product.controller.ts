import { statusCodes } from '../../config';
import products from '../../db/products';
import ControllerResponse from '../../helpers/ControllerResponse';
import { IController } from '../../types/controllers';

const getProductController: IController = (_, res) => {
  return new ControllerResponse(res, products, 'OK', statusCodes.OK).response();
};

export { getProductController };
