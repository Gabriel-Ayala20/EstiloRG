const cursos = [
  {
    id: 1,
    name: "Peluqueria General",
    img: "/img/img1.jpg",
    descripcion :"bla bla bla bla" 
  },
  {
    id: 2,
    name: "Lavado",
    img: "/img/img2.jpg",
    descripcion :"bla bla bla bla" 
  },
  {
    id: 3,
    name: "Alisados",
    img: "/img/img7.jpg",
    descripcion :"bla bla bla bla" 
  },
  {
    id: 4,
    name: "Alisados",
    img: "/img/img4.jpg",
    descripcion :"bla bla bla" 
  },
  {
    id: 5,
    name: "Color 1",
    img: "/img/img5.jpg",
    descripcion :"bla bla bla "
  },
  {
    id: 6,
    name: "Color 2",
    img: "/img/img6.jpg",
    descripcion :"bla bla"
  },

];

let card = document.getElementById("card-template");

cursos.map((x) => {
  card.innerHTML += `<div class="swiper-slide card" style="width: 18rem;">
    <img src="${x.img}" class="card-img" alt="${x.name}">
    <div class="card-body">
      <h5 class="card-title text-center">${x.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        <div class="text-center py-3">
          <a href="/cursos" class="btn btn-primary ">Mas información</a>
        </div>
      
    </div>
  </div>`;
});


