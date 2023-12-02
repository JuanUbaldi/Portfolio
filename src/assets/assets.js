const detailVideos = [
  {
    id: 1,
    titulo: "Artículos de pesca: El Besugo",
    descripcion:
      "E-commerce en el cual se puede seleccionar y comprar varios articulos de pesca, cargarlos en el carrito y generar una orden de compra",
    Tecnologias: "Js, React, Firebase, Firestore",
    video: "../../../besugo.mp4",
  },
  {
    id: 2,
    titulo: "Punto Hamburguesa",
    descripcion:
      "E-commerce en el cual se puede seleccionar y comprar hamburguesas, cargarlas en el carrito y generar una orden de compra",
    Tecnologias: "Js, React, Firebase, Firestore",
    video: "../../../hamburguesa.mp4",
  },
  {
    id: 3,
    titulo: "Tienda virtual",
    descripcion:
      "Recreamos un E-commerce en el cual se puede seleccionar y comprar varios productos,previamente a haberse logueado. Los productos se pueden cargar en el carrito ",
    Tecnologias: "Js, React, Redux, bootstrap",
    video: "../../../reduxEcommerce.mp4",
  },
  {
    id: 4,
    titulo: "Create Task",
    descripcion:
      "Aplicación sencilla en la cual podemos crear, modificar, y borrar tareas",
    Tecnologias: "Js, React, redux, tailwind-css",
    video: "../../../task.mp4",
  },
  {
    id: 5,
    titulo: "Rick and Morty",
    descripcion:
      "Aplicación en la cual se utiliza la API de Rick and Morty. Se cargan los diferentes personajes, permite cargar personajes al azar, y agregar a una sección favoritos. Ademas en la seccion favoritos existen multiples posibilidades de filtrados",
    Tecnologias: "Js, React, Redux, postgres, sequelize, express js",
    video: "../../../rick.mp4",
  },
  {
    id: 6,
    titulo: "Dogs",
    descripcion:
      "Aplicación en la cual se utiliza la API de Dogs. Se cargan los diferentes perritos, permite buscar los perritos por nombre, y ver el detalle. Ademas hay una seccion de filtros y ordenamientos. ",
    Tecnologias: "Js, React, Redux, postgres, sequelize, express js",
    video: "../../../dogs.mp4",
  },
  {
    id: 7,
    titulo: "Jenshy Fitness",
    descripcion:
      "En el contexto del proyecto final de Henry (en el cual simulamos la realización de actividades y la rutina de una empresa IT) , realizamos un E-commerce de una tienda de venta de suplementos fitness. Dicho proyecto fue ejecutado por 7 compañeros mas y por mi, generando un sitio interactivo y completamente responsivo, donde abarcamos tecnologías como Figma (diseño del sitio),git-flow (comandos, y manejo fluido de git y github), React-js, Redux (uso de redux-toolkit),tailwind, Mongo DB, express, uso de distintas herramientas como pasarelas de pago: stripe y plataformas de autenticación como auth0. Además usamos nodemailer para el envío de correos electrónicos. Implementamos metodologías agiles (scrum) y organizamos nuestras tareas con trello",
    Tecnologias: "Js, React, Redux, express, mongo db, tailwind css",
    video: "../../../jenshy.mp4",
  },
];

export default function detailVideo(idParams) {
  let itemsRequested = detailVideos.find(
    (item) => item.id === Number(idParams)
  );

  return itemsRequested;
}
