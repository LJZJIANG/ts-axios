/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2019-11-24 17:13:33
 * @LastEditors: ljz
 * @LastEditTime: 2019-11-24 20:34:03
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
