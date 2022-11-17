const infoCursos = [
  {
    id: 1,
    name: "Peluqueria General",
    img: "/img/img1.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"

  },
  {
    id: 2,
    name: "Lavado",
    img: "/img/img2.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"
  },
  {
    id: 3,
    name: "Alisados",
    img: "/img/img7.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"
  },
  {
    id: 4,
    name: "Alisados",
    img: "/img/img4.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"
  },
  {
    id: 5,
    name: "Color 1",
    img: "/img/img5.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"
  },
  {
    id: 6,
    name: "Color 2",
    img: "/img/img6.jpg",
    descripcion :"Curso de peluqueria general",
    duracion : "duracion de 6 a 9 meses",
    temas:  "corte, color, brushing, alisados",
    reserva: "./contacto.html"
  },

];

let cards = document.getElementById("card-curso");

infoCursos.map((i)=>{
  cards.innerHTML += `
  
  <div class="card card-curso" >
  <div class="card-body">
  <h5 class="card-title text-center titulo">${i.name}</h5>
  <p class="card-text">${i.descripcion}</p>
  <p class="card-text">${i.duracion}</p>
  <p class="card-text">${i.temas}</p>
</div>
<img src="${i.img}" class="card-img-bottom img-card" alt="...">
<div class="btn-card">
<a href="${i.reserva}" class="btn btn-primary btn-cursos ">Consultar</a>
<a href="${i.reserva}" class="btn btn-primary btn-cursos ">Reservar</a>
</div>

</div>


  `
});

