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
          <a href="#" class="btn btn-outline-primary btn-sm rounded-0"><i class="bi bi-telephone"></i><span> Call</span></a>
          <a href="#" class="btn btn-success btn-sm rounded-0"><i class="bi bi-whatsapp"></i><span> WhatsApp</span></a>  
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