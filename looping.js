// LOOPING FOR
// NIlai awal
// Nilai akhir 
// Incremenet , decrement

for (let i = 0; i < 10; i++ ) {
    console.log(`looping ke-${i}`);
    
}

// LOOPING WHILE
// mengulangi kode selama kondisi terpenuhi

let nilai = 0;
while (nilai < 5)  {
    console.log(nilai);
    nilai++;
}

// LOOPING DO WHILE
// menjalankan kode selama kondisi terpenuhi
// di jalankan duluu baru di cek 
let input;
let pass = "admin123";
do {
    input = prompt ("masukkan password");
}while(input != pass)