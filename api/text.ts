import { useMyFetch } from '@/composables/request'

const modules = '/Consult'

// 最新发布
export async function GetNewestArticleList() {
  return (await useMyFetch({
    url: `${modules}/GetNewestArticleList`,
    opts: {},
    method: 'get'
  })) as any
}
