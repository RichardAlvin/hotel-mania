dataHotel = [{
    name: "SwissBell Hotel",
    desc: "Swiss Bell Hotel Jambi berlokasi di Kota Jambi, Jambi. Tidak hanya sebagai tempat penginapan, Hotel ini juga memberikan hiburan, restoran, dan tempat perbelanjaan. Selain itu tempat sekitar hotel sangat ramai dengan makanan. Swiss Bell Hotel hanya terletak 20 menit dari Bandara Sultan Thata dan 10 menit dari pusat perbelanjaan lokal. Hotel yang elegan dan dekorasi yang modern juga menampilkan budaya asli Jambi.",
    star: "****",
    img: "assets/images/swissBell.jpg",
    lokasi: "Jambi" 
},
{
    name: "Aston Hotel",
    desc: "Aston Jambi Hotel terdapat 153 kamar dengan berbagai pilihan yang kamu bisa pilih. Hotel Aston pun dekat dengan berbagai pusat perbelanjaan dan makanan. Selain itu fasilitas seperti kolam renang, mini gym, dan lounge serta pelayanan selama 24 jam menjadi senjata utama Hotel Aston",
    star: "****",
    img: "assets/images/aston.jpg",
    lokasi: "Jambi",  
},
{
    name: "Veranda Hotel",
    desc: "Veranda Hotel berada di Jakarta tepatnya di pusat bisnis Jakarta. Hotel Veranda memberikan berbagai penawaran seperti kolam renang, fasilitas rapat, dan wifi gratis. Di sekitarnya terdapat berbagai pusat perbelanjaan seperti Gandaria City Shopping Mall yang hanya perlu 5 menit berkendara.",
    star: "****",
    img: "assets/images/veranda.jpg",
    lokasi: "Jakarta",  
},
{
    name: "Yello Hotel",
    desc: "Yello Hotel terletak di jalan Hayam Wuruk no. 6, Jakarta, 10130, Indonesia. Terdapat banyak pilihan amar seperti superior double, family room, special offer, suite, and double standard. Hotel ini sendiri cukup jauh dari bandara Soekaro Hatta.",
    star: "****",
    img: "assets/images/yelloHotel.jpg",
    lokasi: "Jakarta", 
},
{
    name: "Dayu Beach Hotel",
    desc: "Dayu Beach Hotel terletak di Kartika Plaza, Kuta, Bali, Indonesia. Dayu Beach sendiri hotel dengan suasana yang terbuka dan bernuansa Bali. Fasilitas yang disediakan terdapat kolam berenang berukuran cukup besar dan juga tempat makan. Kamar yang disediakan lumayan bagus dengan harga yang terjangkau.",
    star: "***",
    img: "assets/images/dayuBeach.jpg",
    lokasi: "Bali", 
}
]

let card = document.querySelectorAll(".flex-column");

card[0].innerHTML = "";
card[1].innerHTML = "";

for(let hotel of dataHotel){
    let row = document.createElement("section");
    row.classList.add('flex-basis');
    row.innerHTML = "<img src="+hotel.img+">";
    row.innerHTML += "<h3>"+hotel.name+"</h3>";
    row.innerHTML += "<p>"+hotel.desc+"</p>";
    row.innerHTML += "<p>Star: "+hotel.star+"</p>";
    row.innerHTML += "<button>MoreInfo...</button>";

    if(hotel.lokasi === "Jambi"){
        card[0].appendChild(row);
    }else if(hotel.lokasi === "Jakarta"){
        card[1].appendChild(row);
    }else if(hotel.lokasi === "Bali"){
        card[2].appendChild(row);
    }
}