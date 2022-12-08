document.getElementById("tarih").innerHTML = new Date()

function topla( ){
    document.getElementById("sonuc").innerHTML = cevir("s1") + cevir("s2") 
    // let s1 = cevir("s1")
    // let s2 = cevir("s2")
    // document.getElementById("sonuc").innerHTML = s1+s2;
}

function cikar( ){
    document.getElementById("sonuc").innerHTML = cevir("s1") - cevir("s2") 
    // let s1 = cevir("s1")
    // let s2 = cevir("s2")
    // document.getElementById("sonuc").innerHTML = s1-s2;
}

function Böl( ){
    //yaz () = cevir("s1")/ cevir("s2")
    document.getElementById("sonuc").innerHTML = cevir("s1") / cevir("s2") 
    // let s1 = cevir("s1")
    // let s2 = cevir("s2")
    // document.getElementById("sonuc").innerHTML = s1/s2;
}

function carp( ){
    document.getElementById("sonuc").innerHTML = cevir("s1") * cevir("s2") 
//     let s1 = cevir("s1")
//     let s2 = cevir("s2")
//     document.getElementById("sonuc").innerHTML = s1*s2;
// 
}
function cevir(id) {
    
    return Number(document.getElementById(id).value);
}

