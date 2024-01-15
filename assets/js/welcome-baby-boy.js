let welcomebabyboyList = [
    {
      _id: "1",
      cardTitle: "Baby Blues",
      cardText: "<br>Baby blues welcomes the little one with a soothing palette of soft blue balloons, creating a calm atmosphere for celebration.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/BabyBlues.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/BabyBlues.jpg"
      ]
    },
    {
      _id: "2",
      cardTitle: "Chocolate Baby Boy",
      cardText: "<br>Chocolate boy incorporates rich brown hues, blending warmth and sweetness to infuse the setup with a cozy and charming feel.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/ChocolateBabyBoy.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/ChocolateBabyBoy.jpg"
      ]
    },
    {
      _id: "3",
      cardTitle: "Heaven Sent",
      cardText: "<br>Transform your space into a celestial haven, adorned with heavenly decor, celebrating the arrival of your little angel.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/HeavenSent.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/HeavenSent.jpg"
      ]
    },
    {
      _id: "4",
      cardTitle: "Blessed",
      cardText: "<br>Embrace the warmth of blessings with a decor ensemble that radiates love and joy, marking the cherished welcome of your baby boy.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/Blessed.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/Blessed.jpg"
      ]
    },
    {
      _id: "5",
      cardTitle: "Joyful Journey",
      cardText: "<br>Embark on a whimsical adventure of joy, where every corner is adorned with delightful decorations, reflecting the beginning of a joyful journey with your baby boy.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/JoyfulJourney.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/JoyfulJourney.jpg"
      ]
    },
    {
      _id: "6",
      cardTitle: "Baby Elephant",
      cardText: "<br>Welcome your little one with the charm of baby elephants, creating a playful and adorable atmosphere for a delightful celebration.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/BabyElephant.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/BabyElephant.jpg"
      ]
    },
    {
      _id: "7",
      cardTitle: "Oh Baby",
      cardText: "<br>Infuse your space with excitement and anticipation, as the Oh Baby theme brings together whimsical elements, capturing the essence of joyful expectancy.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/OhBaby.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/OhBaby.jpg"
      ]
    },
    {
      _id: "8",
      cardTitle: "Star Is Born",
      cardText: "<br>Celebrate the celestial moment when a star is born, with an enchanting decor theme that echoes the magic and wonder of your baby boy's arrival.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-boy/StarIsBorn.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-boy/StarIsBorn.jpg"
      ]
    }
  ];
  
  
  var welcomebabyboyHTML;
  welcomebabyboyHTML = '<div class="container"> <div class="row">';
  
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
  
  welcomebabyboyList.forEach(function(list) {
    welcomebabyboyHTML+=`
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
          <h5 class="modal-title" id="exampleModalLabel">Welcome Baby Boy Decoration</h5>
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
  
  welcomebabyboyHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("welcome-baby-boy-details").innerHTML = welcomebabyboyHTML;