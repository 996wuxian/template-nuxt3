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

// fetch版本
// let baseUrl = "http://127.0.0.1/";
// // 指定后端返回的基本数据类型
// export interface IResponse<T> {
//   data?: T;
//   code: number;
//   headers: Headers;
// }
// function fetch<T>(url: string, options?: any): Promise<IResponse<T>> {
//   return $fetch<IResponse<T>>(url, {
//     ...options,
//     baseURL: baseUrl,
//     onResponse({ response }) {
//       // fetch 是会自动解析数据的，进入onResponse前就已经解析过了，它会智能地解析 JSON 和本机值，如果解析失败，则返回到文本，解析的结果就是response._data
//       let contentType = response.headers.get("content-type");
//       // 请求码不为200等正常码的情况
//       if (!response.ok) {
//         // 这里的_data，会被后面catch捕获，因为你可能还需要获取headers等数据，所以需要在这里处理一下数据
//         response._data = { code: -1, data: "请求已到达服务器但未正常响应：" + response.statusText, headers: response.headers };
//         return;
//       }
//       // 我的后端只由json和blob两种类型，如果你的不止，那么就自己根据实际情况修改
//       if (!contentType) {
//         // 如果没有content-enums，则认为返回的数据不符合预期
//         response._data = { code: -1, data: "返回数据不符合预期" };
//         return;
//       } else if (contentType == "application/json; charset=utf-8") {
//         //给数据再添加headers
//         response._data.headers = response.headers;
//         return;
//       } else {
//         // 后端返回的文件流，会包含该请求头
//         const disposition = response.headers.get("content-disposition");
//         if (!disposition) {
//           response._data = { code: -1, data: "返回数据不符合预期" };
//           return;
//         }
//         // 切割出文件名，后端返回格式不同处理就不同
//         const blob = new Blob([response._data], { type: contentType });
//         // 创建ObjectURL，返回给前端
//         const blobUrl = window.URL.createObjectURL(blob);
//         response._data = { code: 1, data: blobUrl, headers: response.headers };
//         return;
//       }
//     },
//     onRequestError({ error }) {
//       // 请求失败的回调，这里的失败是指那种网络不通的之类请求都没到后端的情况，而不是后端返回码不是200之类的情况
//       // 后端返回错误码的情况归onResponse管，这里只处理请求不通的情况
//     },
//   }).catch((error) => {
//     // 请求不为200等正常码的情况，这里会捕获到，并返回给前端
//     return error.data;
//   });
// }
// // 此处的url，无需包含baseUrl
// export function get<T>(url: string, params?: any) {
//   return fetch<T>(url, { method: "get", ...params });
// }

// export function post<T>(url: string, params?: any) {
//   return fetch<T>(url, { method: "post", ...params });
// }
