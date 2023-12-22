export interface Config {
  baseURL: string;
  headers: {
    "Content-Type": string;
    Accept: string;
  };
}
export const apiConfig = (): Config => {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  return {
    baseURL: "https://api.themoviedb.org/3",
    headers: headers,
  };
};
