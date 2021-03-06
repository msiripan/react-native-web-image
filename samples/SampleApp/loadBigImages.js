
export default function loadBigImages () {
  const items = []
  for (let i=0; i<200; i++) {
    const name = 'sample' + (1000 + i)
    const item = {
      id: name,
      title: name,
      uri: `https://testproject-190515.appspot.com/image/${name}.jpg`
    }
    items.push(item)
  }
  return Promise.resolve(items)
}
