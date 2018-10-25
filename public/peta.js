function findLocation(x,y) {
    // console.log(x,y);
        for (var i=0; i< places.length;i++) 
        {
            if (places[i].lokasi[0]==x &&
                places[i].lokasi[1]==y) {
                
                return i;
                }
            }
            return -1;
        }
    
    function showLocation(e) {
        console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
        
        let ix= findLocation(e.latlng.lat,e.latlng.lng);
        
        if (ix >=0) 
        {
            img.src= places[ix].gambar;
            par.textContent=places[ix].review;
        }
    }
    
    let gmb= document.getElementById("gmb");
    //let gmb2= document.getElementById("gmb2");
    //let gmb3= document.getElementById("gmb3");
    let rev= document.getElementById("review");
    let img= document.createElement('img');
    let par= document.createElement('p');
    
    gmb.appendChild(img);
    //gmb2.appendChild(img);
    //gmb3.appendChild(img);
    rev.appendChild(par);
    
    let r0="Warteg menjadi tempat makan paling bersahabat khususnya bagi para pekerja dan mahasiswa";
    let r1="Nasi Ponggol dengan cita rasa rempah yg sangat berasa";
    let r2="Kupat glabed dengan campuran ayam maupun suwiran daging bebek";
    let r3="olos enak disajikan dengan teh hangat ataupu juga bisa cemilan saat santai";
    
    let places= [
    {
        "lokasi"  : [-6.870517, 109.128574],
        "sponsor" : "Warteg Bu Mitri",
        "gambar"  : "https://www.goodnewsfromindonesia.id/wp-content/uploads/images/source/arifinabudi/makanan-indonesia/warteg-juara2.jpg",
        "review"  : r0
    },
    {
        "lokasi" : [-6.879965, 109.138754],
        "sponsor" : "Nasi Ponggol Kusniroh",
        "gambar" : "https://s0.bukalapak.com/img/0935793691/w-1000/ponggol_setan_nasi_ponggol_khas_tegal.jpg",
        "review": r1
    },
    {
        "lokasi": [-6.874663, 109.131191], 
        "sponsor" : "Kupat Glabed", 
        "gambar" : "https://img-global.cpcdn.com/003_recipes/bec4706c9d8c7be5/640x640sq70/photo.jpg", 
        "review": r2
    }, 
    {
        "lokasi": [-6.886211, 109.143294], 
        "sponsor" : "olos",
        "gambar": "https://img-global.cpcdn.com/003_recipes/21376b0ff81e03d1/640x640sq70/photo.jpg",
        "review": r3
    }
    ];
    
    
    for (var p of places) {
    var marker= L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
    marker.on('click', showLocation);
    }