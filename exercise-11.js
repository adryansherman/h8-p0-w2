//butuh pemecah string per perkata perhuruf?
//butuh pembalik string
//butuh dikumpulin lagi abis dibalik

function balikKata(kata) {
    var kebalik = '';
    for (var i = 0; i < kata.length; i++){
      kebalik = kata [i] + kebalik;
    }
    return kebalik;
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS


  console.log('====================')
