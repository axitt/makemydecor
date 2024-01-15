let welcomebabygirlList = [
    {
      _id: "1",
      cardTitle: "Welcome Princess",
      cardText: "<br>Gorgeous pink drapery being an air of sophistication to welcome the pricness, setting the stage for a majestic celebration.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-girl/WelcomePrincess.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-girl/WelcomePrincess.jpg"
      ]
    },
    {
      _id: "2",
      cardTitle: "Sugar And Spice",
      cardText: "<br>Step into a world of sweetness and charm, where every corner is sprinkled with joy, welcoming our little girl with the perfect blend of sugar and spice.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-girl/SugarAndSpice.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-girl/SugarAndSpice.jpg"
      ]
    },
    {
      _id: "3",
      cardTitle: "Pink Princess",
      cardText: "<br>Transform your home into a regal palace adorned in shades of pink, fit for the arrival of our little princess, the newest member of the royal family.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-girl/PinkPrincess.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-girl/PinkPrincess.jpg"
      ]
    },
    {
      _id: "4",
      cardTitle: "Dazzling Dreams",
      cardText: "<br>Embrace the enchantment of a dreamy wonderland, where every detail sparkles and shimmers, setting the stage for a journey filled with dazzling dreams for our baby girl.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-girl/DazzlingDreams.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-girl/DazzlingDreams.jpg"
      ]
    },
    {
      _id: "5",
      cardTitle: "Star Is Born",
      cardText: "<br>Underneath a sky of twinkling stars, our home welcomes the brightest star of all, as we celebrate the magical moment when our little star is born.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "./assets/img/welcome-baby-girl/StarIsBorn.jpg",
      imgSrc: [
        "./assets/img/welcome-baby-girl/StarIsBorn.jpg"
      ]
    }
  ];
  
  
  var welcomebabygirlHTML;
  welcomebabygirlHTML = '<div class="container"> <div class="row">';
  
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
  
  welcomebabygirlList.forEach(function(list) {
    welcomebabygirlHTML+=`
    <div type="button" class="col-6 col-lg-3 col-md-4 mb-4" data-toggle="modal" data-target="#exampleModal${list._id}">
      <div class="card">
        <img class="card-img-top" src="${list.thumbSrc}" alt="Card image cap">
      <div class="card-body py-2">
        <h6 class="card-title card-title-text">${list.cardTitle}</h6>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
        <a href="tel:+918779366396" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
        <a href="#" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>
        </div>
      </div>
    </div>
  
    <div class="modal fade" id="exampleModal${list._id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Welcome Baby Girl Decoration</h5>
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
          <a href="#" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>  
        </div>
      </div>
    </div>
  </div>
  
    `
  })
  
  welcomebabygirlHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("welcome-baby-girl-details").innerHTML = welcomebabygirlHTML;