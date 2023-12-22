import { useQuery } from "react-query";
import { apiConfig } from "../../config";
import ApiMovies from "./api-movies";
import { DataParams } from "../../../../interfaces/DataParams";

export const useMovies = () => new ApiMovies(apiConfig());

enum Keys {
  get_all_movies = "get_all_movies",
}
export const useGetAllMovies = (params?: DataParams) => {
  const movies = useMovies();
  return useQuery({
    queryKey: [Keys.get_all_movies, params], // Pass params as the second element in the queryKey array
    queryFn: () => movies.getAll(params), // Pass params to the getAll method
  });
};
