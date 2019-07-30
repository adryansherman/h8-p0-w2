

A. Newton Second Law

Algoritma
1. Simpan "m" dengan nilai 600
2. Simpan "a" dengan nilai 2
3. Hitung hasil kali variable 'm' dengan variable 'a'
4. Simpan hasil kalkulasi dengan variabe 'F'
5. Tampilkan 'F'

Pseudocode
    STORE 'm' with 600
    STORE 'a' with 2
    CALCULATE 'm' TIMES 'a'
    STORE 'F' as result from calculation
    DISPLAY 'F'


B. Tahun kabisat

Algoritma
1. Simpan variable "tahun"  dengan nilai berapapun
2. Hitung "tahun" mod 4
3. Simpan hasil perhitungan dengan variable "sisa1"
4. Hitung "tahun" mod 100
5. Simpan hasil perhitungan dengan variable "sisa2"
6. Hitung "tahun" mod 400
7. Simpan hasil perhitungan dengan variable "sisa3"
8. jika ("sisa1" sama dengan 0 dan "sisa" lebih dari 0) atau ("sisa1" AND "sisa2" AND "sisa3" EQUALS TO 0) tampilkan "tahun kabisat"
9. Selain itu tampilkan "bukan kabisat"
10. program selesai

Pseudocode
    STORE "tahun" with any value
    CALCULATE "tahun" mod 4
        STORE "sisa1" as result from calculation
    CALCULATE "tahun" mod 100
        STORE "sisa2" as result from calculation
    CALCULATE "tahun" mod 400
        STORE "sisa3" as result from calculation
    IF ("sisa1" EQUALS TO 0 AND "sisa2" GREATER THAN 0) OR ("sisa1" AND "sisa2" AND "sisa3" EQUALS TO 0) THEN
    DISPLAY "tahun kabisat"
    ELSE 
    DISPLAY "bukan Kabisat"
    ENDIF

C. Laundry D

Algoritma
1. Simpan "londrian" dengan nilai angka 0
2. Ketika "londrian" nilainya kurang dari 20 tambahkan variable "londrian" dengan nilai 1
3. tampilkan nilai dari variable "londrian" untuk status jumlah "londrian" terkini.
4. apabila nilai variable "londrian" sudah 20, tampilkan "londrian sudah dimasukan semua, Nyalakan mesin cuci!"
5. Program selesai

Pseudocode
    STORE "londrian" with 0
    WHILE "londrian" less than 20
        ADD "londrian" by 1
        DISPLAY "londrian"
    DISPLAY "londrian sudah dimasukan semua, Nyalakan mesin cuci!"
    ENDWHILE


D. PERIKSA KUKU

Algoritma
1. Simpan variable "Siswa" dengan nilai 1
2. Simpan variable "kuku-rapih" dengan nilai Boolean manapun
3. Ketika nilai variable "Siswa" kurang dari 41 lanjut proses ke langkah-4, jika tidak maka langsung ke langkah-9
4. Tampilkan nilai variable "siswa" sebagai nilai jumlah siswa yang telah diperiksa kukunya.
5. Berikan nilai Boolean pada "kuku-rapih"
6. Jika variable "kuku-rapih" bernilai true tampilkan "Bagus, pertahankan ya nak!"
7. Selain itu, tampilkan "Tampar pake penggaris!"
8. tambah variable nilai "student" dengan 1, ulangi langkah-3.
9. Program selesai

Pseudocode
    STORE "siswa" with 1
    STORE "kuku-rapih" with any boolean value
    WHILE "siswa" less than 41
        DISPLAY "siswa"
        SET "kuku-rapih" with any boolean value
        IF "kuku-rapih" is true
            DISPLAY 'Bagus, pertahankan ya nak!'
        IF "kuku-rapih" is false
            DISPLAY 'Tampar pake penggaris!'
        END IF
        ADD "siswa" by 1
    ENDWHILE


