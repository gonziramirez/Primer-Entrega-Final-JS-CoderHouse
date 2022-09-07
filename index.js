class Producto{
    constructor(id,descripcion,precio,categoria,stock){
        this.id = id
        this.descripcion = descripcion
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
    calcularCuotas(){
        let cuotas = parseInt(prompt("Ingrese las cuotas que desea \n3-Tres cuotas sin interes\n6-Seis cuotas con un 40% de recargo\n12-Doce cuotas con un 70% de recargo"))
        switch (cuotas) {
            case 12:
                console.log(this.descripcion + " Precio de $" + this.precio +"\n")
                const cuotas12 = (this.precio * 1.70) / 12
                console.log(this.descripcion + " 12 Cuotas de $" + cuotas12 + " Total de $" + cuotas12 * 12)
                break;
    
            case 6:
                console.log(this.descripcion + " Precio de $" + this.precio +"\n")
                const cuotas6 = (this.precio * 1.40) / 6
                console.log(this.descripcion + " 6 Cuotas de $" + cuotas6 + " Total de $" + cuotas6 * 6)
                break;
    
            case 3:
                console.log(this.descripcion + " Precio de $" + this.precio +"\n")
                const cuotas3 = this.precio / 3
                console.log(this.descripcion + " 3 Cuotas sin interes de $" + cuotas3 + " Total de $" + cuotas3 * 3)
                break;
    
            default:
                console.warn("ERROR")
                break;
        }
    }           
}



/* Busca un producto en especifico y lo muestra por consola (El primero que encuentra) */
const buscarProducto = () =>{
    let prod = prompt("Ingresa el nombre del producto a buscar: ")
    let resultado = productos.find((producto)=> producto.descripcion.includes(prod))
    if(resultado != undefined){
        console.log(resultado)
    }
    else{
        console.warn("No existe el producto")
    }
    
}

/* Busca los productos que contengan el parametro escrito por el usuario y los muestra por consola*/

const filtrarProducto = () =>{
    let parametro = prompt("Ingresa el parametro a filtrar")
    let resultado = productos.filter((producto)=> producto.descripcion.includes(parametro))
    if(resultado != []){
        console.log(resultado)
    }
    else{
        console.warn("No existe algun producto con ese nombre")
    }
}

/* Ordena los productos por precio de menor a mayor y los muestra por consola */
const ordernarProductosMenor = () =>{
    productos.sort((a,b)=> {
        if(a.precio > b.precio){
            return 1
        }
        if(a.precio < b.precio){
            return -1
        }
        return 0
    })
    console.table(productos)
}
/* Ordena los productos por precio de mayor a menor y los muestra por consola */
const ordernarProductosMayor = () =>{
    productos.sort((a,b)=> {
        if(a.precio < b.precio){
            return 1
        }
        if(a.precio > b.precio){
            return -1
        }
        return 0
    })
    console.table(productos)
}

/* Ordena los productos por nombre de menor a mayor (De A a Z) y los muestra por consola*/
const ordernarProductosNombre = () =>{
    productos.sort((a,b)=> {
        if(a.descripcion > b.descripcion){
            return 1
        }
        if(a.descripcion < b.descripcion){
            return -1
        }
        return 0
    })
    console.table(productos)
}


/* Creando array de objetos */
const productos = []

productos.push(new Producto(123,"Remera Essentials Liso",30,"Remeras",true))
productos.push(new Producto(1233,"Remera Essentials Oversize",35,"Remeras",true))
productos.push(new Producto(1234,"Remera Essentials Regular",40,"Remeras",false))
productos.push(new Producto(456,"Buzo Essentials Liso",35,"Buzos",false))
productos.push(new Producto(4566,"Buzo Essentials Oversize",40,"Buzos",true))
productos.push(new Producto(4567,"Buzo Essentials Regular",45,"Buzos",true))
productos.push(new Producto(789,"Pantalon Essentials Liso",60,"Pantalones",true))
productos.push(new Producto(7899,"Pantalon Essentials Cargo",65,"Pantalones",false))
productos.push(new Producto(7890,"Pantalon Essentials Regular",70,"Pantalones",true))


console.table(productos)


// Recorre el array productos y muestra por consola la descripcion y los precios de los productos
for (const producto of productos) {
    console.table(producto.descripcion)
    console.table(producto.precio)
}

// Filtra 3  veces el producto que contenga la palabra escrita por el usuario y lo muestra por consola.
for (let index = 0; index < 3; index++) {
    buscarProducto()
    
} 
// Filtra 3 veces los productos que contengan la palabra escrita por el usuario y los muestra por consola.
for (let index = 0; index < 3; index++) {
    filtrarProducto()   
}
// Recorre el array productos y calcula las cuotas con su respectivo interes , y muestra el total por consola.
for (const producto of productos) {
        producto.calcularCuotas()  
}

ordernarProductosMenor()   //Ordena los productos por precio de menor a mayor
ordernarProductosMayor()   //Ordena los productos por precio de mayor a menor
ordernarProductosNombre()  //Ordena los productos por nombre de menor a mayor




