export const commonButton = () => {
  if (!commonButton._dom) {
    commonButton._dom = document.createElement('button')
  }
  return commonButton._dom
}

export const formatText = (text) => {
  if (typeof text === 'function') {
    text = text()
  }
  if (typeof text !== 'string') {
    text = String(text)
  }
  return () => text
}

export const query = (el) => {
  if (!el) return
  if (typeof el === 'string') {
    return document.querySelector(el)
  }
  if (typeof el === 'object' && el.nodeType === 1) {
    return el
  }
}
