// function adalah blok kodeyang dapat di gunakan kembali untuk melakukan tugas tertentu
// MACAM MACAM FUNCTION
// function declaration
// function ekspretion
// arrow function


// FUNCTION DECLARATION
function sapa(nama) {
    console.log(`halo ${nama}`);
    
}
sapa("ucup");

//FUNTION EXPRESSION
const salam = function(nama) {
    console.log(`assalamualaikum ${nama}`);
    
}
salam("hendra")

// ARROW FUNCTION
const ucap = (nama) => {
console.log(`selamat datang di surabaya ${nama}`);

}
ucap("rebecca")