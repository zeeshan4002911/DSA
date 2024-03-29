function convertToRoman(num) {
    const roman = {
      1: 'I',
      2: 'II',
      3: 'III',
      5: 'V',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      50: 'L',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      500: 'D',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM'
    }
    let arr = [];
    let multiplier = 1;
    while (num) {
      let last = (num % 10) * multiplier;
      if (roman[last]) arr.unshift(roman[last]);
      else {
        let flag = true
        let one = 1;
        while (flag && last != 0) {
          if (roman[last + multiplier]) { arr.unshift(roman[multiplier], roman[last + multiplier]); flag = false; }
          else if (roman[last - one*multiplier]) { arr.unshift(roman[last - one*multiplier], roman[one*multiplier]); flag = false; }
          one++;
        }
      }
      // console.log(last)
      // console.log(arr)
      num = parseInt(num / 10);
      multiplier *= 10;
    }
  
    return arr.join("");
  }
  
  console.log(convertToRoman(83));

/*
convertToRoman(2) should return the string II.
Passed: convertToRoman(3) should return the string III.
Passed: convertToRoman(4) should return the string IV.
Passed: convertToRoman(5) should return the string V.
Passed: convertToRoman(9) should return the string IX.
Passed: convertToRoman(12) should return the string XII.
Passed: convertToRoman(16) should return the string XVI.
Passed: convertToRoman(29) should return the string XXIX.
Passed: convertToRoman(44) should return the string XLIV.
Passed: convertToRoman(45) should return the string XLV.
Passed: convertToRoman(68) should return the string LXVIII
Passed: convertToRoman(83) should return the string LXXXIII
Passed: convertToRoman(97) should return the string XCVII
Passed: convertToRoman(99) should return the string XCIX
Passed: convertToRoman(400) should return the string CD
Passed: convertToRoman(500) should return the string D
Passed: convertToRoman(501) should return the string DI
Passed: convertToRoman(649) should return the string DCXLIX
Passed: convertToRoman(798) should return the string DCCXCVIII
Passed: convertToRoman(891) should return the string DCCCXCI
Passed: convertToRoman(1000) should return the string M
Passed: convertToRoman(1004) should return the string MIV
Passed: convertToRoman(1006) should return the string MVI
Passed: convertToRoman(1023) should return the string MXXIII
Passed: convertToRoman(2014) should return the string MMXIV
Passed: convertToRoman(3999) should return the string MMMCMXCIX
*/