function calculateTax(amount){
  return amount * 0.1
}

function convertToUpperCase(text){
  return text.toUpperCase()
}

function findMaximum(num1,num2){
  if(num1>num2){
    return num1
  }else{
    return num2
  }
}

function isPalindrome(word){
  if(word === word.split("").reverse().join("")){
    return true
  }else{
    return false
  }
}

function calculateDiscountedPrice(originalPrice,discountPercentage){
  let discount = originalPrice * (discountPercentage * 0.01)
  return originalPrice - discount
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };