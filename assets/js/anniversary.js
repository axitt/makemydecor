let anniversaryList = [
  {
    _id: "1",
    cardTitle: "Milestone Memory Setup",
    cardText: "<br>Opt for a eye-catching milestone memory setup to create a lively and celebratory atmosphere.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/anniversary/MilestoneMemorySetup.jpg",
    imgSrc: [
      "./assets/img/anniversary/MilestoneMemorySetup.jpg"
    ]
  },
  {
    _id: "2",
    cardTitle: "Radiant Love Setup",
    cardText: "<br>Welcome guests with a stunning balloon arch in a spectrum of radiant colors, setting the tone for a joyful anniversary.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/anniversary/RadiantLoveSetup.jpg",
    imgSrc: [
      "./assets/img/anniversary/RadiantLoveSetup.jpg"
    ]
  },
  {
    _id: "3",
    cardTitle: "Happy Anniversary Gold Setup",
    cardText: "<br>Experience the epitome of luxury with our opulent gold themed setup, where every detail shines with elegance and sophistication.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/GoldSetup.jpg",
    imgSrc: [
      "./assets/img/common/GoldSetup.jpg"
    ]
  },
  {
    _id: "4",
    cardTitle: "Happy Anniversary Vibrant Setup",
    cardText: "<br>Mark your celebration with a vibrant setup that reflects the refined taste and timeless celebration.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/VibrantSetup.jpg",
    imgSrc: [
      "./assets/img/common/VibrantSetup.jpg"
    ]
  },
  {
    _id: "5",
    cardTitle: "Home Heaven Setup",
    cardText: "<br>Creating an ethereal atmosphere with a mix of helium and metallic balloons, tranforming your home into a dreamy heaven.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/anniversary/HomeHeavenSetup.jpg",
    imgSrc: [
      "./assets/img/anniversary/HomeHeavenSetup.jpg"
    ]
  },
  {
    _id: "6",
    cardTitle: "Pink Bliss Setup",
    cardText: "<br>Celebrate in the shades of pink with our enchanting ballon arrangement, transforming your space into a heaven of pure bliss.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/anniversary/DomesticBlissSetup.jpg",
    imgSrc: [
      "./assets/img/anniversary/DomesticBlissSetup.jpg"
    ]
  },
  {
    _id: "7",
    cardTitle: "Cuddle Companions",
    cardText: "<br>Set the mood with soft teddy and ballons, creating a relaxed and inviting atmosphere.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/CuddleCompanions.jpg",
    imgSrc: [
      "./assets/img/common/CuddleCompanions.jpg"
    ]
  },
  {
    _id: "8",
    cardTitle: "Teddy Tales",
    cardText: "<br>Tranform your space into a magical teddy bear realm to immerse the room in a whimsical narrative.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/TeddyTales.jpg",
    imgSrc: [
      "./assets/img/common/TeddyTales.jpg"
    ]
  },
  {
    _id: "9",
    cardTitle: "Teddy Bear Hugs",
    cardText: "<br>Hide small teddy bear trinkets around the room, encoraging exploration and discovery for loved ones.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/TeddyBearHugs.jpg",
    imgSrc: [
      "./assets/img/common/TeddyBearHugs.jpg"
    ]
  },
  {
    _id: "10",
    cardTitle: "Love Cuddles",
    cardText: "<br>An unfogettable love fusion of balloons and teddy to set a lovely atmosphere.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/anniversary/LoveCuddles.jpg",
    imgSrc: [
      "./assets/img/anniversary/LoveCuddles.jpg"
    ]
  },
  {
    _id: "11",
    cardTitle: "Love Nest Teddy",
    cardText: "<br>Love Nest Teddy introduces a cuddly and charming element, featuring adorable teddy bear accents that add a touch of warmth and affection to the Valentine's Day decor.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/LoveNestTeddy.jpg",
    imgSrc: [
      "./assets/img/common/LoveNestTeddy.jpg"
    ]
  },
  {
    _id: "12",
    cardTitle: "Romantic Radiance",
    cardText: "<br>Romantic Radiance bathes the space in soft, warm lighting, creating an intimate and cozy ambiance perfect for a romantic celebration.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/RomanticRadiance.jpg",
    imgSrc: [
      "./assets/img/common/RomanticRadiance.jpg"
    ]
  },
  {
    _id: "13",
    cardTitle: "Heartfelt Decor",
    cardText: "<br>Heartfelt Decor incorporates sentimental touches to convey love and emotion throughout the setup.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/HeartfeltDecor.jpg",
    imgSrc: [
      "./assets/img/common/HeartfeltDecor.jpg"
    ]
  },
  {
    _id: "14",
    cardTitle: "Cherished Charmer",
    cardText: "<br>Cherished Charmer brings together timeless and elegant decor elements, ensuring a sophisticated and enchanting atmosphere for celebrating love.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/CherishedCharmer.jpg",
    imgSrc: [
      "./assets/img/common/CherishedCharmer.jpg"
    ]
  },
  {
    _id: "15",
    cardTitle: "Romance Retreat",
    cardText: "<br>Romance Retreat transforms the venue into a romantic heaven, with cozy seating, draped fabrics, and soft hues creating an intimate setting for couples.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/common/RomanceRetreat.jpg",
    imgSrc: [
      "./assets/img/common/RomanceRetreat.jpg"
    ]
  }
];


var anniversaryHTML;
anniversaryHTML = '<div class="container"> <div class="row">';

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

anniversaryList.forEach(function(list) {
  anniversaryHTML+=`
  <div type="button" class="col-6 col-lg-3 col-md-4 mb-4" data-toggle="modal" data-target="#exampleModal${list._id}">
    <div class="card">
      <img class="card-img-top" src="${list.thumbSrc}" alt="Card image cap">
      <div class="card-body">
        <h6 class="card-title">${list.cardTitle}</h6>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
      <a href="#" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
      <a href="#" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal${list._id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Anniversary Decoration</h5>
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
        <a href="#" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
        <a href="#" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>  
      </div>
    </div>
  </div>
</div>

  `
})

anniversaryHTML+=`
    </div>
  </div>
  `

document.getElementById("anniversary-details").innerHTML = anniversaryHTML;