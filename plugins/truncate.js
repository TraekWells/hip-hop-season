export default (context, inject) => {
  const truncate = (str) => {
    const array = str.trim().split(' ')
    return array.slice(0, 22).join(' ') + '...'
  }
  inject('truncate', truncate)
  context.$truncate = truncate
}
