import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Article } from '../types/types';
import axios, { AxiosRequestConfig } from 'axios';

const { REACT_APP_DB_BASE_URL } = process.env;
const baseURL: string | undefined = REACT_APP_DB_BASE_URL;

export type ArticleListState = {
  data: Article[] | [];
  loading: boolean;
};

export const initialState: ArticleListState = {
  loading: true,
  data: [],
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const result = await axios({ url: baseUrl + url, method, data, params });
    return { data: result.data };
    // Add error handling
  };

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL!,
  }),
  tagTypes: ['articles'],

  endpoints: builder => ({
    //
    getArticles: builder.query<Article[], number>({
      query: page => ({
        url: `/articles?_limit=${page}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 30,
      providesTags: ['articles'],
    }),
  }),
});

export const oneArticleApi = createApi({
  reducerPath: 'oneArticle',
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL!,
  }),
  tagTypes: ['oneArticle'],

  endpoints: builder => ({
    getOneArticle: builder.query<Article, any>({
      query: id => ({
        url: `/articles/${id}`,
        method: 'GET',
        providesTags: ['OneArticle'],
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
export const { useGetOneArticleQuery } = oneArticleApi;
