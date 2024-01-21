let babyshowerList = [
    {
    _id: "1",
    cardTitle: "Extravaganza",
    cardText: "<br>Balloon extravaganza sets the tone with the cloud of colorful balloons, creating a whimsical and celebratory atmosphere for the baby shower.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/BalloonExtravaganzaForBabyArrival.jpg",
    imgSrc: [
      "./assets/img/baby-shower/BalloonExtravaganzaForBabyArrival.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7059455747479865/918779366396"
   },
   {
    _id: "2",
    cardTitle: "Joyful Beginnings",
    cardText: "<br>Joyful beginnings decorates the space with charming balloons, symbolizing the joy and excitement surrounding the upcoming arrival.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/JoyfulBeginnings.jpg",
    imgSrc: [
      "./assets/img/baby-shower/JoyfulBeginnings.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/6963224647130733/918779366396"
   },
   {
    _id: "3",
    cardTitle: "Oh Baby Tiny Toes",
    cardText: "<br>Tiny Toes theme features adorable footprints infusing a sweet and endearing touch to the baby shower celebration.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/OhBabyTinyToes.jpg",
    imgSrc: [
      "./assets/img/baby-shower/OhBabyTinyToes.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7210245129058369/918779366396"
   },
   {
    _id: "4",
    cardTitle: "Hey Baby",
    cardText: "<br>Hey baby transforms the venue into a playful heaven making it delightful for guests.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/HeyBaby.jpg",
    imgSrc: [
      "./assets/img/baby-shower/HeyBaby.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7577388855618096/918779366396"
   },
   {
    _id: "5",
    cardTitle: "Pop To Know",
    cardText: "<br>A popping extravaganza revealing the much-anticipated gender in a burst of colorful surprise.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/PopToKnow.jpg",
    imgSrc: [
      "./assets/img/baby-shower/PopToKnow.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/6560101350760445/918779366396"
   },
   {
    _id: "6",
    cardTitle: "Pink Or Blue",
    cardText: "<br>Step into a dreamy dual-toned wonderland where the gender question is celebrated with whimsy and charm.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/PinkOrBlue.jpg",
    imgSrc: [
      "./assets/img/baby-shower/PinkOrBlue.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/24845170198430719/918779366396"
   },
   {
    _id: "7",
    cardTitle: "Magical Moment",
    cardText: "<br>Prepare for a magical celebration where each corner holds a delightful surprise, turning the baby shower into a captivating spectacle.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/BabyShowerSpectacle.jpg",
    imgSrc: [
      "./assets/img/baby-shower/BabyShowerSpectacle.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/6804432946331762/918779366396"
   },
   {
    _id: "8",
    cardTitle: "Oh Baby Bliss",
    cardText: "<br>Immerse in the serenity of pastel hues and delicate decor, creating an atmosphere of pure bliss for the impending arrival.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/OhBabyBliss.jpg",
    imgSrc: [
      "./assets/img/baby-shower/OhBabyBliss.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7320166674689457/918779366396"
   },
   {
    _id: "9",
    cardTitle: "Bundle Of Joy:",
    cardText: "<br>A heartwarming celebration adorned with soft hues, capturing the essence of the imminent bundle of joy.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/BundleOfJoy.jpg",
    imgSrc: [
      "./assets/img/baby-shower/BundleOfJoy.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/6454984621270185/918779366396"
   },
   {
    _id: "10",
    cardTitle: "Sweet Beginnings:",
    cardText: "<br>Celebrate the anticipation of 'Sweet Beginnings' with enchanting baby shower decorations, ushering in joy and love for the little one.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/SweetBeginnings.jpg",
    imgSrc: [
      "./assets/img/baby-shower/SweetBeginnings.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7017155831693459/918779366396"
   },
   {
    _id: "11",
    cardTitle: "Stitch Disney",
    cardText: "<br>Embark on a whimsical adventure with 'Stitch Disney' baby shower decorations, merging the charm of Disney with the cuteness of Stitch for a celebration as unique as your little one.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/StitchDisney.jpg",
    imgSrc: [
      "./assets/img/baby-shower/StitchDisney.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/7089528184471002/918779366396"
   },
   {
    _id: "12",
    cardTitle: "Boy Or Girl",
    cardText: "<br>Embrace the anticipation with 'Boy Or Girl' baby shower decorations, creating an enchanting ambiance that keeps everyone guessing in joyful celebration of the upcoming bundle of joy.<br><br> Tap on call or whatsapp to receive further details.",
    thumbSrc: "./assets/img/baby-shower/BoyOrGirl.jpg",
    imgSrc: [
      "./assets/img/baby-shower/BoyOrGirl.jpg"
    ], 
    whatsappUrl: "https://wa.me/p/6485049454930351/918779366396"
   }
];
  
  
  var babyshowerHTML;
  babyshowerHTML = '<div class="container"> <div class="row">';
  
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
  
  babyshowerList.forEach(function(list) {
    babyshowerHTML+=`
    <div type="button" class="col-6 col-lg-3 col-md-4 mb-4" data-toggle="modal" data-target="#exampleModal${list._id}">
      <div class="card">
        <img class="card-img-top" src="${list.thumbSrc}" alt="Card image cap">
      <div class="card-body py-2">
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
          <h5 class="modal-title" id="exampleModalLabel">Baby Shower Decoration</h5>
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
  
  babyshowerHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("baby-shower-details").innerHTML = babyshowerHTML;