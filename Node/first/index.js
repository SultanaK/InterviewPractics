// telephone

let pattern = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{4}")
let valitedNumberFunction = validatedNumber => {
  if (validatedNumber) {
    if (typeof validatedNumber !== 'string') {
      return false
    }
    if (validatedNumber.trim().length === 0) {
      return false
    }

    return pattern.test(validatedNumber)
  } else {
    return false
  }
}

module.exports = { valitedNumberFunction}