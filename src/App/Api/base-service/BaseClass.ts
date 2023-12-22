import axios from "axios";

import ApiProvider from "../baseApi/api-provider";
import RequestConfig from "../baseApi/request-config";

export default class BaseClass extends ApiProvider {
  constructor(config: RequestConfig) {
    const apiKey = "abbb8597caa2b8a00b4cd4a2884610d8";
    super({ ...config });
    this.instance.interceptors.request.use(
      (config: any) => {
        config.params = {
          ...config.params,
          api_key: apiKey,
        };
        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }
}
