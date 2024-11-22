export default function (context: any) {
  console.log('🚀 ~ context:', context)
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/login')
  }
}
