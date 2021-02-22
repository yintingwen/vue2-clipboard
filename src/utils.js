export const commonButton = () => {
  if (!commonButton._dom) {
    commonButton._dom = document.createElement('button')
  }
  return commonButton._dom
}

export const isEmptyObject = (obj) => {
  return !!Object.keys(obj).length
}

export const formatText = (text) => {
  if (typeof text === 'function') {
    text = text()
  }
  if (typeof text !== 'string') {
    text = text.toString()
  }
  return () => text
}
