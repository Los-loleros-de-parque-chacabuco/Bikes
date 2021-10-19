var totalPago = 0;
const carrito = [];
const articulos = ["Titanium", "Gloryus", "Tron", "Bici4", "Bici5"];
const valoresArticulos = [35000, 45000, 30000, 65000, 50000];
function bicicleta1() {
    var Titanium = confirm("Queres comprar la bici Titanium?")
    if (Titanium === true) {
        totalPago += valoresArticulos[0]
        carrito.push(articulos[0])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}
function bicicleta2() {
    var Gloryus = confirm("Queres comprar la Gloryus?")
    if (Gloryus === true) {
        totalPago += valoresArticulos[1]
        carrito.push(articulos[1])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}
function bicicleta3() {
    var Tron = confirm("Queres comprar la bici Tron?")
    if (Tron === true) {
        totalPago += valoresArticulos[2]
        carrito.push(articulos[2])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}
var pagar;
var cuenta1;
var vuelto;
function carritoCompra() {
    alert("Compraste estos articulos: " + "\n" + carrito + " tenes que pagar $ " + totalPago)
    pagar = parseInt(prompt("¿Con cuento va pagar ?"))
    if (totalPago == 0) {
        alert("Compra algo raton")
    }
    else if (pagar < totalPago) {
        cuenta1 = (totalPago - pagar);
        alert("Te faltan $" + cuenta1)
    }
    else if (totalPago == pagar) {
        alert("Muchas gracias por su compra ;)")
    }
    else {
        vuelto = pagar - totalPago;
        alert("Muchas gracias por su compra ;)\n Su vuelto es $ " + vuelto)
    }
}