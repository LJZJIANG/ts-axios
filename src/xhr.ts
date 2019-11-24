/*
 * @Descripttion: ajax 请求
 * @Author: ljz
 * @Date: 2019-11-24 17:25:41
 * @LastEditors: ljz
 * @LastEditTime: 2019-11-24 17:30:01
 */
import { AxiosRequestConfig } from './types/index'

function xhr(config: AxiosRequestConfig): void {
  let { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

export default xhr
