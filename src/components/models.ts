export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Hero {
  id: string;
  name: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
}

export interface HeroBackendResponse {
  total: number,
  limit: number,
  skip: number,
  data: Array<Hero>
}