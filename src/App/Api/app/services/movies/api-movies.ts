import { DataParams } from "../../../../interfaces/DataParams";
import { IBaseApiResponse } from "../../../baseApi/api-provider";
import ApiService from "../../../baseApi/api-service";
import { Config } from "../../config";
import { IMovie } from "./interfaces/IMovies";

const URLs = {
  MoviesGet: "/discover/movie/", //get
};
class ApiMovies extends ApiService {
  constructor(config: Config) {
    super({ ...config });
  }

  getAll = (params?: DataParams): Promise<IBaseApiResponse<IMovie[]>> =>
    this.get(URLs.MoviesGet, { params });
}
export default ApiMovies;
