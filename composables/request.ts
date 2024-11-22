import type { NitroFetchRequest } from 'nitropack'
import type { FetchOptions } from 'ofetch'

interface Params {
  url: NitroFetchRequest
  opts: FetchOptions<any>
  method?: 'get' | 'post' | 'put' | 'delete'
}

export async function useMyFetch({ url, opts, method = 'get' }: Params) {
  const config = useRuntimeConfig()

  // 水和key，保证客户端和服务端请求的是同一个地址
  const key = url + ((opts?.method || 'get') as string) + JSON.stringify(opts?.query || {})

  let baseUrl = config.public.apiBase

  if (process.server) {
    baseUrl = `http://test.goodjob.cn/api/`
  }

  const { data } = await useFetch(url, {
    // 缓存key  用于客户端和服务端水和
    key,
    // method此处仅仅只处理了get与post请求
    method,
    // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
    baseURL: baseUrl as any,
    // onRequest相当于请求拦截
    onRequest({ request, options }) {
      console.log('🚀 ~ onRequest ~ request:', request)
      // 设置请求头
      options.headers = { ...options.headers, authorization: '' } as any
      // 设置请求参数
      if (method === 'post') {
        options.body = { ...opts.params }
      } else {
        options.params = { ...opts.params }
      }
    },
    // onResponse相当于响应拦截
    onResponse({ response }) {
      // 处理响应数据
      console.log('🚀 ~ onResponse ~ response:', response)
    },
    onRequestError({ request, options, error }) {
      console.log('🚀 ~ onRequestError ~ request:', request)
      console.log('🚀 ~ onRequestError ~ options:', options)
      // 处理请求错误
      console.warn('request error', error)
    },
    onResponseError({ request, response, options }) {
      console.log('🚀 ~ onResponseError ~ request:', request)
      console.log('🚀 ~ onResponseError ~ options:', options)
      // 处理响应错误
      console.warn('request error', response)
    }
  })
  // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。
  return data.value
}
