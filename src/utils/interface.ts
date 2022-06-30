export type RequestTypes = "GET" | "PUT" | "POST" | "DELETE";

export interface IOptions {
  method?: RequestTypes;
  headers?: { [key: string]: string };
  data?: any;
  timeout?: number;
  retries?: number;
}
