// butuh bilangan bulat (bulatin ke atas apa kebawah?)
// butuh modulo bagi 60 supaya tau sisa menit
// supaya exact output gimana nampilin menit dibawah 10 (05, 07,00)

function konversiMenit(menit) {
    var jam = Math.floor(menit/60);
    var minute = + menit % 60;
    if (minute > 10){
        return jam + ':' + minute;
    } else {
        return jam + ':0' + minute;
    }
}

  

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
