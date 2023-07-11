let carrito = "";
let nuevaOperacion = false;

let producto = prompt(
  "Ingrese el tamaño de la huerta que desea comprar (Chica, Mediana, Grande, Elevada):"
);
let cantidad = parseInt(
  prompt(`Ingrese la cantidad de huertas ${producto} que desea comprar:`)
);

function hacerCarrito(producto, cantidad) {
  do {
    seleccionarProducto(producto, cantidad);
    nuevaOperacion = confirm("¿Desea agregar otro producto al carrito?");
    if (nuevaOperacion) {
      producto = prompt(
        "Ingrese el tamaño huerta que desea comprar (Chica, Mediana, Grande, Elevada):"
      );
      cantidad = parseInt(
        prompt(`Ingrese la cantidad de huertas ${producto} que desea comprar:`)
      );
    }
  } while (nuevaOperacion);

  console.log("Productos en el carrito:");
  console.log(carrito);
}

function seleccionarProducto(producto, cantidad) {
  switch (producto.toLowerCase()) {
    case "chica":
      carrito += `Huertas Chicas - Cantidad: ${cantidad} - Precio Total: ${
        15 * cantidad
      } USD\n`;
      break;
    case "mediana":
      carrito += `Huertas Medianas - Cantidad: ${cantidad} - Precio Total: ${
        30 * cantidad
      } USD\n`;
      break;
    case "grande":
      carrito += `Huertas Grandes - Cantidad: ${cantidad} - Precio Total: ${
        50 * cantidad
      } USD\n`;
      break;
    case "elebada":
      carrito += `Huertas Elevadas - Cantidad: ${cantidad} - Precio Total: ${
        50 * cantidad
      } USD\n`;
      break;
    default:
      alert("El producto ingresado no está disponible.");
      break;
  }
}

hacerCarrito(producto, cantidad);
