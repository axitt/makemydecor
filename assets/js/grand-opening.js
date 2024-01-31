let grandopeningList = [
    {
      _id: "1",
      cardTitle: "New Shop",
      cardText: "<br>Transform the grand opening of your new shop into a dazzling event with sophisticated blue and white decorations, creating an atmosphere of excitement and elegance.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/NewShop.jpg",
      imgSrc: [
        "../assets/img/grand-opening/NewShop.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7272786642788331/918779366396"
    },
    {
      _id: "2",
      cardTitle: "Gate Decor",
      cardText: "<br>Welcome your guests with a captivating entrance, adorned with exquisite decorations that set the tone for a grand opening.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/GateDecor.jpg",
      imgSrc: [
        "../assets/img/grand-opening/GateDecor.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7097725920323463/918779366396"
    },
    {
      _id: "3",
      cardTitle: "India Flag",
      cardText: "<br>Pay homage to the nation's pride by incorporating the vibrant colors of the Indian flag, creating a patriotic and uplifting atmosphere.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/IndiaFlag.jpg",
      imgSrc: [
        "../assets/img/grand-opening/IndiaFlag.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7730472573634092/918779366396"
    },
    {
      _id: "4",
      cardTitle: "Independence Day",
      cardText: "<br>Commemorate the spirit of freedom and independence with decorations that echo the sentiments of this historic day.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/IndependenceDay.jpg",
      imgSrc: [
        "../assets/img/grand-opening/IndependenceDay.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7735693019828189/918779366396"
    },
    {
      _id: "5",
      cardTitle: "Republic Day",
      cardText: "<br>Embrace the essence of unity and patriotism as you celebrate with decorations inspired by the Indian Republic Day.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/RepublicDay.jpg",
      imgSrc: [
        "../assets/img/grand-opening/RepublicDay.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7089739617776509/918779366396"
    },
    {
      _id: "6",
      cardTitle: "Entrance Decor",
      cardText: "<br>Make a lasting impression with meticulously crafted entrance decor that reflects the significance and grandeur of your special occasion.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/EntranceDecor.jpg",
      imgSrc: [
        "../assets/img/grand-opening/EntranceDecor.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7043535465742985/918779366396"
    },
    {
      _id: "7",
      cardTitle: "Red And White",
      cardText: "<br>Infuse sophistication and elegance into your grand opening celebration with a striking color scheme of red and white, symbolizing prosperity and purity.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/RedAndWhite.jpg",
      imgSrc: [
        "../assets/img/grand-opening/RedAndWhite.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7188379384576946/918779366396"
    },
    {
      _id: "8",
      cardTitle: "Inauguration",
      cardText: "<br>Mark the beginning of a new chapter with inauguration-themed decorations that radiate a sense of prestige and accomplishment.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/Inauguration.jpg",
      imgSrc: [
        "../assets/img/grand-opening/Inaugurationa.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7198815673572052/918779366396"
    },
    {
      _id: "9",
      cardTitle: "Grand Opening",
      cardText: "<br>Elevate the grandeur of your event with celebratory decorations that signify the exciting commencement of a new venture or enterprise.<br><br> Tap on call or whatsapp to receive further details.",
      thumbSrc: "../assets/img/grand-opening/GrandOpening.jpg",
      imgSrc: [
        "../assets/img/grand-opening/GrandOpening.jpg"
      ],
      whatsappUrl: "https://wa.me/p/7001267433254297/918779366396"
    }
  ];
  
  
  var grandopeningHTML;
  grandopeningHTML = '<div class="container"> <div class="row">';
  
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
  
  grandopeningList.forEach(function(list) {
    grandopeningHTML+=`
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
  
  grandopeningHTML+=`
      </div>
    </div>
    `
  
  document.getElementById("grand-opening-details").innerHTML = grandopeningHTML;