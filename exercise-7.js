//Menyusun barisan bintang
var rows1 = 10;

for (count = 0; count < rows1; count++)
{
    console.log('*');
}

console.log('====================')

//Menyusun Barisan Bintang dengan Nested Looping

rows2 = 5;
bintang = '';

for (var y = 0; y <= rows2; y++) 
{  
   for (var x = 0; x <= rows2; x++){
    bintang += '*';
   }
   console.log(bintang);
   bintang = '';
}
console.log('====================')


//MEnyusun Barisan Tangga Bintang dengan Nested loop
var rows3 = 8;
var vertikal = 1;
var horizontal = 1;
var bintang = '';

while (vertikal <= rows3){
    while (horizontal <= rows3){
        bintang += '*';
        console.log(bintang);
        horizontal++;
    }
    vertikal += rows3;
}

