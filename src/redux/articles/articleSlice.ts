import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Article } from '../../types/types';
import axios, { AxiosRequestConfig } from 'axios';
// const { REACT_APP_DB_BASE_URL } = process.env;

// const baseURL: string | undefined = REACT_APP_DB_BASE_URL;

export type ArticleListState = {
  data: Article[] | [];
  loading: boolean;
  //   keywords: string;
};

export const initialState: ArticleListState = {
  loading: true,
  data: [],
  //   keywords: '',
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

export const articleApi = createApi({
  reducerPath: 'Articles',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3',
  }),
  tagTypes: ['Articles'],

  endpoints: builder => ({
    //
    getArticles: builder.query<any, void>({
      query: () => ({ url: '/articles', method: 'GET' }),
      keepUnusedDataFor: 1,
      providesTags: ['Articles'],
    }),

    getOneArticle: builder.query({
      query: id => ({
        url: `/articles/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetOneArticleQuery } = articleApi;
