//WHILE

console.log('ITERASI PERTAMA')

var iterasi1 = 0;
while (iterasi1 <= 20){
    iterasi1++;
    if(iterasi1 % 2 == 0){
    console.log(iterasi1 + ' - I love coding');
     }
    
}

console.log('====================')

console.log('ITERASI KEDUA')
var iterasi2 = 20;

while (iterasi2 >= 2 ){
    console.log(iterasi2 + ' - I will become fullstack developer');
    iterasi2 -= 2;
}

console.log('====================')


//FOR
console.log('LOOPING PERTAMA')
for (var loop1 = 1; loop1 <= 20; loop1++)
{ 
    console.log(loop1 + ' - I love coding');
}

console.log('====================')
 
console.log('LOOPING KEDUA')
for (var loop2 = 20; loop2 > 0; loop2--)
{ 
    console.log(loop2 + ' - I will become fullstack developer');
}

console.log('====================')

//ganjil genap
for (var count = 0; count <= 100; count++)
{
    if(count % 2 == 0){
        console.log('GENAP')
    } else{
        console.log('GANJIL')
    }
}
console.log('====================')

for (var  counter2 = 1; counter2 <= 100; counter2+=2)
{
    if(counter2 % 3 == 0){
        console.log('"' + counter2 + ' KELIPATAN 3"')
    } else {
        console.log('""')
    }
}

console.log('====================')

for (var  counter5 = 1; counter5 <= 100; counter5+=5)
{
    if(counter5 % 6 == 0){
        console.log('"' + counter5 + ' KELIPATAN 6"')
    } else {
        console.log('""')
    }
}

console.log('====================')
for (var  counter9 = 1; counter9 <= 100; counter9+=9)
{
    if(counter9 % 10 == 0){
        console.log('"' + counter9 + ' KELIPATAN 10"')
    } else {
        console.log('""')
    }
}






