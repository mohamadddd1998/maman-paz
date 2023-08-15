const convertToEnglishNumber = (number) => {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  const numberString = String(number)
  let convertedNumber = ""
  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString.charAt(i)
    const digitIndex = persianNumbers.indexOf(digit)
    if (digitIndex !== -1) {
      convertedNumber += englishNumbers[digitIndex]
    } else {
      convertedNumber += digit
    }
  }
  return convertedNumber
}
const convertToFarsihNumber = (number) => {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  const numberString = String(number)
  let convertedNumber = ""
  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString.charAt(i)
    const digitIndex = englishNumbers.indexOf(digit)
    if (digitIndex !== -1) {
      convertedNumber += persianNumbers[digitIndex]
    } else {
      convertedNumber += digit
    }
  }
  return convertedNumber
}
const calculatePrice = (qty, price) => {
  let newPrice = price.split("٬")
  newPrice = newPrice.join("")
  return convertToFarsihNumber(qty * parseInt(convertToEnglishNumber(newPrice)))
}
const totalPrice = (cartItems) => {
  let sum = 0
  for (let i = 0; i < cartItems.length; i++) {
    sum +=
      cartItems[i].qty *
      convertToEnglishNumber(cartItems[i].price.split("٬").join(""))
  }
  return convertToFarsihNumber(sum)
}
const getLocalStorage = () => {
  if (typeof window != undefined) {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  }
}
export { calculatePrice, totalPrice, getLocalStorage }
