/**
 * Promise terdapat 3 status :
 * 1. pending (tertunda)
 * 2. fullfield/resolve (terpenuhi)
 * 3. rejected (di tolak)
 * 
 */


// ASYNCRONOUS
function rebusAir() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("rebus air")
        }, 3000);
    })
}

function masakMie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("masak mie")
        }, 2000);
    })
}

function makanMie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("makan mie")
        }, 4000);
    })

    
}

// callback hell

// rebusAir(() => {
//     masakMie(() => {
//         makanMie()
//     });
// });


// THEN CATCH

// rebusAir()
// .then((outRebus) => {
//     console.log(outRebus);
//     return masakMie()
// })
// .then((outMasak) => {
//     console.log(outMasak);
//     return makanMie()
    
// })
// .then((outMakan) => {
//     console.log(outMakan);

    
// })


// INI ASYNC AWAIT
async function buatMie() {
    try {
        const outRebus = await rebusAir();
        console.log(outRebus);
        
        const outMasak = await masakMie();
        console.log(outMasak);

        const outmakan = await makanMie();
        console.log(outmakan);

    } catch (error) {
        console.error(`Gagal ${error}`);
        
    }
}
buatMie()