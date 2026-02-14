// age = 45
// console.log('Age is ' + age) // Age is 25
// var age = 25
// console.log('Age is ' + age) // Age is 25

// var age = 25
// console.log('Age is ' + age) // Age is 25
// var age = 45
// console.log('Age is ' + age) // Age is 45


function getTicketPrice(age, isWeekend) {
    // Your code here
    if (typeof age == 'number' && age < 0){
    return -1
    }
    let price;

    // Determine base price by age group
    if (age <= 12) {
    price = 8;
    } else if (age <= 17) {
    price = 12;
    } else if (age <= 59) {
    price = 15;
    } else {
    price = 10;
    }

    // Apply weekend surcharge
    if (isWeekend === true) {
    price = price + 3;
    }
    return price;
}

result = getTicketPrice(15, true)
console.log(result)

