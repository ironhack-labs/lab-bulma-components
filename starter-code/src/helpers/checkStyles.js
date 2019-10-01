const checkStyles = (props, styles, finalClasses) => {
  Object.keys(props).forEach((key, idx) => {
    if (key in styles && key) {
      finalClasses.push(styles[key])
    }
  })

  return finalClasses.join(" ")
}

export default checkStyles
