function ride(height, weight)
num1 = Number(height)
num2 = Number(weight)

if (num1 <= 84 || (num1 >= 48 ) ){
    return 'Eligible to ride coaster'
}
else if(num2 <= 300 || (num2 >= 100)){
    return 'Eligible to ride coaster'
}