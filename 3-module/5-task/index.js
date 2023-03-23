function getMinMax(str) {
  let str1 = str.split(' ').filter(item => Number(item))
  console.log(str1)
  let result ={
    min: Math.min.apply(null, str1),
    max: Math.max.apply(null, str1)
  }
  return result
}
