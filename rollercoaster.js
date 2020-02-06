function ride(height, weight){
let num1 = Number(height)
let num2 = Number(weight)


if (num1 >= 84 || (num1 <= 48 ) ){
    return 'Height ineligible to ride coaster'
}
else if(num2 >= 300 || (num2 <= 100)){
    return 'Weight ineligible to ride coaster'
}

else { 
    return 'Eligible'
}
}


module.exports = ride;