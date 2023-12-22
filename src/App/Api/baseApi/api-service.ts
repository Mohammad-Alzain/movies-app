// import ApiProvider from "./api-provider";
import RequestConfig from "./request-config";
import HttpMethod from "./http-method";
import BaseClass from "../base-service/BaseClass";

export default class ApiService {
  private provider: BaseClass; //ApiProvider;

  constructor(config: RequestConfig) {
    this.provider = new BaseClass(config);
  }

  protected get<T>(url: string, config?: RequestConfig): Promise<T> {
    const method = HttpMethod.GET;
    return this.provider.request({ method, url, ...config });
  }

  protected delete<T>(url: string, config?: RequestConfig): Promise<T> {
    const method = HttpMethod.DELETE;
    return this.provider.request({ method, url, ...config });
  }

  protected post<T>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    const method = HttpMethod.POST;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  protected put<T>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    const method = HttpMethod.PUT;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }

  protected patch<T>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    const method = HttpMethod.PATCH;
    return this.provider.request({
      method,
      url,
      data,
      ...config,
    });
  }
}
