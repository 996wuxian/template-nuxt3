export const useDeviceType = () => {
  let UA: string
  if (process.client) {
    UA = navigator.userAgent
  } else {
    UA = useRequestHeader('user-agent') as string
  }

  const type = ref<'mobile' | 'pc'>('pc')

  if (/(Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet)/i.test(UA)) {
    type.value = 'mobile'
  } else {
    type.value = 'pc'
  }

  return type
}
