// Membuat array bisa pake kurung siku  bisa juga dengan array()

const fruits = ["apel", "anggur", "salak"];
const animals = Array("kucing", "singa", "Elang");

//fruits.push("Mangga") // nambah ke belakang
//animals.unshift("Kambing") // nambah ke depan

//forEach

// fruits.forEach((fruit) => console.log(fruit));
// animals.forEach((hewan) => console.log(hewan));

//hapus array

//fruits.shift(); // hapus dari depan
//animals.pop(); // hapus dari belakang

// fruits.forEach((fruit) => console.log(fruit));
// animals.forEach((hewan) => console.log(hewan));

const fruitsUpper = fruits.map((data) => data.toUpperCase());
console.log(fruitsUpper);

const longName = fruits.filter((f) => f.length > 5);
console.log(longName);

// Spread
const combine = [...fruits, ...animals];

const  foundItems = combine.find((c) => c.toLowerCase() == "Apel".toLowerCase())
console.log(foundItems);

console.log(combine.includes("singa"));
