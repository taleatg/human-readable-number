module.exports = function toReadable (number) {
  let num = {
      0: 'zero',
      1: 'one', 
      2: 'two', 
      3: 'three', 
      4: 'four', 
      5: 'five', 
      6: 'six', 
      7: 'seven', 
      8: 'eight', 
      9: 'nine', 
      10: 'ten', 
      11: 'eleven', 
      12: 'twelve', 
      13: 'thirteen', 
      14: 'fourteen', 
      15: 'fifteen', 
      16: 'sixteen', 
      17: 'seventeen', 
      18: 'eighteen', 
      19: 'nineteen', 
      20: 'twenty', 
      30: 'thirty', 
      40: 'forty', 
      50: 'fifty', 
      60: 'sixty', 
      70: 'seventy', 
      80: 'eighty', 
      90: 'ninety', 
      100: 'hundred', 
      1000: 'thousand',
  }

  let result = '';

  if (number > 99) {
      result = `${num[Math.floor(number / 100)]} hundred `;
  }

  if (number % 100) {
      number = number % 100;
      if (number < 20) {
          result = result + `${num[number]}`;
      } else {
          result = result + `${num[Math.floor(number / 10) * 10]} `;
      }
  }

  if (number == 0 || (number > 19 && number % 10) ) {
      number = number % 10;
      result = result + `${num[number]}`;
  }

  return result.trim();
};

