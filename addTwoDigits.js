function addTwoDigits(n) {
    let firstDig = Math.floor(n/10)
    let secondDig = n % 10
    return firstDig + secondDig
    }
    console.log(addTwoDigits(45)) // passed test
    console.log(addTwoDigits(506))