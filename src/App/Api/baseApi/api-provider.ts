import axios, { AxiosInstance } from "axios";
import RequestConfig from "./request-config";

export interface IBaseApiResponse<T> {
  page: number;
  total_results: null | number;
  total_pages: null | number;
  result: any[];
}
export default class ApiProvider {
  protected instance: AxiosInstance;
  public constructor(config: RequestConfig) {
    this.instance = axios.create(config);
  }
  public async request<T>(config: RequestConfig): Promise<any> {
    const response = await this.instance.request<IBaseApiResponse<T>>(config);
    return response.data;
  }
}
