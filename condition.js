// jika nilanya > 90 = A
// jika nilainya > 70 = B
// jika nilainya > 60 = C
// jika nilainya < 60 = D

const nilai = 50;
let grade;
if (nilai > 90 &&  nilai <= 100) {
    grade = "A";
    console.log("A");
    
} else if (nilai > 70 && nilai <= 90) {
    grade = "B";
    console.log("B");
    
} else if(nilai > 60 && nilai <= 70) {
    grade = "C"
    console.log("C");
    
} else if (nilai < 60 && nilai >= 0) {
    grade = "D"
    console.log("D\n");
    
    
} else {
    console.log("Nilai tidak valid");
    
}

// SWITCH CASE

switch (grade) {
    case "A":
        console.log("Sangat baik");
        break;
    case "B":
        console.log("Baik");
        break;
    case "C":
        console.log("Cukup");
        break;
    case "D":
        console.log("Kurang Baik");
        break;
    default:
        "Grade tida valid"
        break;
}

// Oprator ternary
const age = 28;
const status = age > 21 ? "Dewasa" : "Belum dewasa";
console.log(status);
