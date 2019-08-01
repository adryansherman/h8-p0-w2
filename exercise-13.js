//true jika karakter x sama dengan 0

function xo(str) {
  var freqX = 0;
  var freqO = 0;

  for (var i = 0; i < str.length; i++){
      if (str.charAt(i) === 'x'){
        freqX = freqX + 1;
      }else if (str.charAt(i) === 'o' ){
        freqO = freqO + 1;
      }
  }
  if (freqX === freqO){
    return true;
  } else {
    return false;
  }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true