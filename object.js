// membuat object bisa dengan 
// {}
// new object()

const user = {
    nama: "ucup",
    age :18,
    address: "depok",
};

const user2 = new Object();
user2.name = "udin";
user2.age = 17;
user2.address = "bogor";

//menampilkan data

for(const key in user) {
    console.log(user[key]);
    
}
console.log(user.nama);
