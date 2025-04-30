// simulando una base de datos externa con promesas y fetch
const conexionBDExterna = (conexionExitosa) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        conexionExitosa ? resolve("Conexión establecida por Glitch Wolfy") : reject("Falló la conexión de Glitch");
      }, 3000);
    });
  };
  
  conexionBDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
  
  // Obtencion de productos desde una API externa
  const obtenerProductos = fetch("https://fakestoreapi.com/products");
  
  obtenerProductos
    .then(respuesta => respuesta.json())
    .then(productos => console.log(`Primer producto: ${productos[0].title} - Precio: $${productos[0].price}`))
    .catch(error => console.log("Error al obtener productos: ", error));
  