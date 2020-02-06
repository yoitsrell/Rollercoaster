function ride(height, weight)
num1 = Number(height)
num2 = Number(weight)

if (num1 >= 84 || (num1 <= 48 ) ){
    return 'Height ineligible to ride coaster'
}
else if(num2 >= 300 || (num2 <= 100)){
    return 'Weight ineligible to ride coaster'
}
else if(num1 <= 84 || (num1 >= 48 ) && (num2 <= 300 || num2 >= 100)){
    return 'Height and Weight eligible'
}
else()
    return 'Go away'