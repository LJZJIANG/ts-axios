/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2019-11-24 17:14:45
 * @LastEditors: ljz
 * @LastEditTime: 2019-11-24 17:18:18
 */

export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'Delete'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'HEAD'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
