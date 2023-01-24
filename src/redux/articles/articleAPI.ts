import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Article } from '../../types/types';
import axios, { AxiosRequestConfig } from 'axios';
import { RootState } from '../store';
const { REACT_APP_DB_BASE_URL } = process.env;

const baseURL: string | undefined = REACT_APP_DB_BASE_URL;

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
      //   keepUnusedDataFor: 1,
      providesTags: ['articles'],
    }),

    getOneArticle: builder.query<Article, any>({
      query: id => ({
        url: `/articles/${id}`,
        method: 'GET',
        providesTags: ['OneArticle'],
      }),
    }),
  }),
});
// export const getNumberOfResults = (state: RootState) => state.articles;

export const { useGetArticlesQuery, useGetOneArticleQuery } = articleApi;
