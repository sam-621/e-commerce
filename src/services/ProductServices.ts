import { AxiosResponse } from 'axios'
import { IAllProducts, IProduct } from '@Types/products'
import HttpRequest from './HttpRequest'
import { IResponse } from '@Types/services'

export default class ProductServices extends HttpRequest {
  private configGetAllProducts(): Promise<AxiosResponse<IGetAllProducts>> {
    this.configEndpoint('products')
    return this.get()
  }

  public async getAllProducts(): Promise<IGetAllProducts> {
    try {
      const response = await this.configGetAllProducts()

      return response.data
    } catch (error) {
      console.log(error)

      return error.response
    }
  }
}

interface IGetAllProducts extends IResponse {
  data?: IAllProducts
}
