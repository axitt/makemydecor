let cardikkiList = [
    {
      _id: "1",
      cardTitle: "Propose Love",
      cardText: "<br>Express your deepest emotions with a love-themed car trunk decoration, setting the stage for a memorable declaration of love.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/car-dikki/ProposeLove.jpg",
      imgSrc: [
        "./assets/img/car-dikki/ProposeLove.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7279649738778601/918779366396"
    },
    {
      _id: "2",
      cardTitle: "Car Dikki",
      cardText: "<br>Elevate your car's style with a specially themed trunk decoration, adding a touch of personalized flair to your ride.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/car-dikki/CarDikki.jpg",
      imgSrc: [
        "./assets/img/car-dikki/CarDikki.jpg"
      ],
      whatsappUrl: "https://wa.me/p/6837063693086670/918779366396"
    },
    {
      _id: "3",
      cardTitle: "Surprise Dikki",
      cardText: "<br>Transform your car's trunk into a surprise wonderland, filled with joy and excitement for your special occasion.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/car-dikki/SurpriseDikki.jpg",
      imgSrc: [
        "./assets/img/car-dikki/SurpriseDikki.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7276419259082902/918779366396"
    },
    {
      _id: "4",
      cardTitle: "Propose Girl",
      cardText: "<br>Create a romantic and charming atmosphere in your car's trunk, perfect for a heartwarming proposal that will be forever cherished.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/car-dikki/ProposeGirl.jpg",
      imgSrc: [
        "./assets/img/car-dikki/ProposeGirl.jpg"
      ],
      whatsappUrl: "https://wa.me/p/6779486152177828/918779366396"
    },
    {
      _id: "5",
      cardTitle: "Car Decoration",
      cardText: "<br>Turn your car into a masterpiece with a thoughtfully curated trunk decoration, showcasing your unique style and celebratory spirit.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/car-dikki/CarDecoration.jpg",
      imgSrc: [
        "./assets/img/car-dikki/CarDecoration.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7231065890307325/918779366396"
    }
  ];
  
  
  var cardikkiHTML;
  cardikkiHTML = '<div class="container"> <div class="row">';
  
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
  
  cardikkiList.forEach(function(list) {
    cardikkiHTML+=`
    <div type="button" class="col-6 col-lg-3 col-md-4 mb-4">
      <div class="card">
        <img class="card-img-top" src="${list.thumbSrc}" alt="Card image cap" data-toggle="modal" data-target="#exampleModal${list._id}">
        <div class="card-body py-2" data-toggle="modal" data-target="#exampleModal${list._id}">
          <h6 class="card-title card-title-text">${list.cardTitle}</h6>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
        <a href="tel:+918779366396" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
        <a href=${list.whatsappUrl} class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>
        </div>
      </div>
    </div>
  
    <div class="modal fade" id="exampleModal${list._id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Car Dikki Decoration</h5>
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
          <a href=${list.whatsappUrl} class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>  
        </div>
      </div>
    </div>
  </div>
  
    `
  })
  
  cardikkiHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("car-dikki-details").innerHTML = cardikkiHTML;