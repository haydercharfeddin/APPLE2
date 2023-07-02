


var imagepr=document.querySelector('.img')
var colorbg=document.querySelector('.container')

function phones(phone){
    imagepr.src=phone
}
function colors(color){
    colorbg.style.background=color
}

///////////////



function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  


  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  


  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      if (predicate(element, index)) {
        acc.push(element);
      }
    });
    return acc;
  }

//////






function Iphones(id, name, price, desc, image) {
    return { id, name, price, desc, image };
  }

  

  var phone1 = Iphones(1,"Iphone 12 pro max",3000,"The iPhone 12 Pro Max has a 6.7-inch screen (slightly larger than the 6.5)",src="photos/1.png")

  var phone2 = Iphones(2,"Iphone 11 pro max",2500,"The iPhone 11 Pro max has a 6.4-inch screen (slightly larger than the 6.3)",src="photos/3.png")

  var phone3 = Iphones(3,"Iphone 13 pro max ",5000,"The iPhone 13 Pro max est équipé d'un écran OLED de 6,7 pouces 120 Hz, d'un SoC Apple A15 Bionic compatible 5G  ",src="photos/4.png")

  var phone4 = Iphones(4,"Iphone xs  ",1500,"iPhone XS ; Écran OLED Super Retina HD 3D Touch, HDR, 5,8",src="photos/xsmax.png")

  var allphones=[phone1,phone2,phone3,phone4]
  

  function allPhones(arr) {
    return map(arr, function (elem) {
      // console.log(elem);
      return $('#allphones').append(
        `<h3>${elem.name}</h3>  

        <hr>
        <br>
        <img src=${elem.image}>
  


            <p> Remised Price : <ins style="color: red; font-weight: bold;">${elem.price}</ins></p>
           
           
        <p >${elem.desc}</p>
    `
      );
    });
  }
  allPhones(allphones)
  /************ */

  function Mac(id,name,price,desc,image){
    return { id, name, price, desc, image };

  }

  var mac1 = Mac(1,"MAC 1 ",9660,"L'Apple M1 est un système sur une puce ARM 64 bits (SoC) pour tablette",src="photos/mac1.png")

  var mac2 = Mac(2,"MAC 1PRO",7500,"Apple M1 Pro. CPU 8 cœurs avec 6 cœurs hautes performances et 2 cœurs à haute efficacité énergétique",src="photos/mac3.png")

  var mac3 = Mac(3,"MAC 2",3850,"Apple M2 Le CPU de la puce M2 est 9% plus puissant que celui de la puce M1 et a un moteur neuronal 40% plus rapide",src="photos/mac2.png")

  var mac4 = Mac(4,"MAC 2PRO",2600,"Apple Mac2 Pro avec puce M2 Ultra réunit notre puce Apple la plus puissante à ce jour et les extensions",src="photos/mac1.png")

  var allmac=[mac1,mac2,mac3,mac4]


  function allMac(arr) {
    return map(arr, function (elem) {
      // console.log(elem);
      return $('#allmac').append(
        ` <h3>${elem.name}</h3>  
        <hr>

        <br>
        <img src=${elem.image}>
        <br>
        <br>


            <p> Remised Price : <ins style="color: red; font-weight: bold;">${elem.price}</ins></p>
           
           
        <p >${elem.desc}</p>
       
    `
      );
    });
  }
  allMac(allmac)



  /************* */


  function searchee() {
    var searchbox = document.getElementById('inpute').value.toUpperCase();
    var x = filter(allphones, function (elem) {
      return elem.name.toUpperCase().includes(searchbox);
    });
    var y = filter(allmac, function (elem) {
      return elem.name.toUpperCase().includes(searchbox);
    });

    console.log(x);
    $('#allphones').empty();
    allPhones(x);
    $('#allmac').empty();

    allMac(y)
  }


  




