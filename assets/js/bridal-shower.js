let bridalshowerList = [
  {
    _id: "1",
    cardTitle: "Elegance in White",
    cardText: "<br>A scerene ambiance is created with pristine white decor, invoking a sense of purity and sophistication.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/bridal-shower/EleganceInWhite.jpg",
    imgSrc: [
      "./assets/img/bridal-shower/EleganceInWhite.jpg"
    ]
   },
   {
    _id: "2",
    cardTitle: "Gold Rush Decor",
    cardText: "<br>Experience the epitome of luxury with our opulent gold themed setup, where every detail shines with elegance and sophistication.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/GoldSetup.jpg",
    imgSrc: [
      "./assets/img/common/GoldSetup.jpg"
    ]
   },
   {
     _id: "3",
     cardTitle: "Vibrant Setup",
     cardText: "<br>Mark your celebration with a vibrant setup that reflects the refined taste and timeless celebration.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/VibrantSetup.jpg",
     imgSrc: [
       "./assets/img/common/VibrantSetup.jpg"
     ]
   },
   {
     _id: "4",
     cardTitle: "Balloons And Bears",
     cardText: "<br>Whisk away into a world of enchantment, where balloons and bears join forces to create an ambiance of pure love and joy.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/BalloonsAndBears.jpg",
     imgSrc: [
       "./assets/img/common/BalloonsAndBears.jpg"
     ]
   },
   {
     _id: "5",
     cardTitle: "Balloon League",
     cardText: "<br>Join the league of love with an enchanting array of balloons, transforming your celebration into a symphony of elegance.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/BalloonLeague.jpg",
     imgSrc: [
       "./assets/img/common/BalloonLeague.jpg"
     ]
   },
   {
     _id: "6",
     cardTitle: "Tickled Pink",
     cardText: "<br>Delight in the charming Tickled Pink theme. Soft pastels, whimsical decor, and an abundance of pink create a sweet and playful atmosphere for the celebration.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/TickledPink.jpg",
     imgSrc: [
       "./assets/img/common/TickledPink.jpg"
     ]
   },
   {
     _id: "7",
     cardTitle: "Flamingo Fiesta",
     cardText: "<br>Turn the party into a tropical paradise with a Flamingo Fiesta. Flamingos, vibrant colors, and a touch of aloha spirit make for a lively and festive celebration.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/FlamingoFiesta.jpg",
     imgSrc: [
       "./assets/img/common/FlamingoFiesta.jpg"
     ]
   },
   {
     _id: "8",
     cardTitle: "Butterfly Kisses",
     cardText: "<br>Shower the bride with Butterfly Kisses. Delicate butterflies, gentle hues, and enchanting decor elements set the stage for a celebration filled with love and sweetness.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/ButterflyKisses.jpg",
     imgSrc: [
       "./assets/img/common/ButterflyKisses.jpg"
     ]
   },
   {
    _id: "9",
    cardTitle: "Miss To Mrs",
    cardText: "<br>Elevate the bridal shower experience with the Miss to Mrs theme, featuring elegant decor that celebrates the bride's journey to matrimony.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/bridal-shower/MissToMrs.jpg",
    imgSrc: [
      "./assets/img/bridal-shower/MissToMrs.jpg"
    ]
   },
   {
    _id: "10",
    cardTitle: "Pure White",
    cardText: "<br>Immerse in the timeless beauty of a Pure White bridal shower, where pristine decor creates a sophisticated and serene atmosphere for the celebration.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/bridal-shower/PureWhite.jpg",
    imgSrc: [
      "./assets/img/bridal-shower/PureWhite.jpg"
    ]
   },
   {
     _id: "11",
     cardTitle: "Glamour",
     cardText: "<br>Unleash the Glamour with a sophisticated decor ensemble, featuring chic elements that radiate style and sophistication.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/Glamour.jpg",
     imgSrc: [
       "./assets/img/common/Glamour.jpg"
     ]
   },
   {
     _id: "12",
     cardTitle: "Pink Garland",
     cardText: "<br>Envelop your space in the charm of Pink Garland, weaving a trail of delicate blossoms to create a romantic atmosphere.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/PinkGarland.jpg",
     imgSrc: [
       "./assets/img/common/PinkGarland.jpg"
     ]
   },
   {
     _id: "13",
     cardTitle: "Disco Balloons",
     cardText: "<br>Transport your guests to a disco-inspired realm with White Disco Balloons, bringing a dance-worthy vibe to your event.<br><br> Tap on call or whatsapp to receive further details.",
     thumbSrc: "./assets/img/common/DiscoBalloons.jpg",
     imgSrc: [
       "./assets/img/common/DiscoBalloons.jpg"
     ]
   }
];
  
  
  var bridalshowerHTML;
  bridalshowerHTML = '<div class="container"> <div class="row">';
  
  function carouselFunction(imgList) {
    var carouselHtml = '';
    for(var i=1;i<imgList.length;i++){
      carouselHtml += `
      <div class="carousel-item">
        <img class="d-block w-100" src="${imgList[i]}">
      </div>`
    }
    return carouselHtml;
  }
  
  bridalshowerList.forEach(function(list) {
    bridalshowerHTML+=`
    <div type="button" class="col-6 col-lg-3 col-md-4 mb-4" data-toggle="modal" data-target="#exampleModal${list._id}">
      <div class="card">
        <img class="card-img-top" src="${list.thumbSrc}" alt="Card image cap">
      <div class="card-body py-2">
        <h6 class="card-title card-title-text">${list.cardTitle}</h6>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
        <a href="tel:+918779366396" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
        <a href="https://wa.me/918779366396" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>
        </div>
      </div>
    </div>
  
    <div class="modal fade" id="exampleModal${list._id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Bridal Shower Decoration</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-7 col-md-7">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="${list.imgSrc[0]}" alt="First slide">
                    </div>
                    ${carouselFunction(list.imgSrc)}
                  </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                </div>  
              </div>
              <div class="col-12 col-lg-5 col-md-5">
                <h7>${list.cardTitle}</h7>
                <p class="card-text">${list.cardText}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary btn-sm rounded-0" data-dismiss="modal">Close</button>
          <a href="tel:+918779366396" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
          <a href="https://wa.me/918779366396" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>  
        </div>
      </div>
    </div>
  </div>
  
    `
  })
  
  bridalshowerHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("bridal-shower-details").innerHTML = bridalshowerHTML;