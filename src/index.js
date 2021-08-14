module.exports = function toReadable (number) {
    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten', 'eleven', 'tvelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number > 0 && number < 20) {
        return (first[number])
    } else if (number >=20 && number < 100) {
        if (number % 10 === 0) 
          return (dec[Math.floor(number / 10) - 2]) 
        else (number % 10 != 0) 
          return (dec[Math.floor(number / 10) - 2] + ' ' + first[number % 10])        
      }
    else if (number >99 && number <1000) {
        if ((number % 100) - ((number % 100)%10) === 0 && (number % 100) === 0)
            return (first[Math.floor(number / 100)] + " hundred")
        else return (first[Math.floor(number / 100)] + " hundred " + toReadable(number %100)) }      
}
