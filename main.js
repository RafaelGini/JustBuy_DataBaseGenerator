// ------------------------------- Variables -------------------------------//
const inflacion = 1.20;
const DolarBlueventa = 323;
const DolarBluecompra = 318;
const DolarBlueHoy = (DolarBluecompra + DolarBlueventa) / 2;
const usd = "usd";
const ars = "ars";
const tv = "tv";
const celular = "celular";
const pc = "pc";
const consola = "consola";
const comp = "comp";
const other = "other";
let ID_global = 100;

// ------------------------------- Clases -------------------------------//
class Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating){
        this.nombre = nombre;
        this.cantidad = 1;
        this.precio = this.precioToARS(TipoMoneda, monto);
        this.rating = this.setValidRating(rating);
        this.imagen = imagen;
        this.etiquetas = arrayEtiquetas;
        this.id = ID_global;
        ID_global++;
    }

    precioToARS(TipoMoneda, monto){
        if (TipoMoneda == ars) return monto * inflacion;
        else return monto * DolarBlueHoy;
    }

    precioToUSD(TipoMoneda, monto){
        if (TipoMoneda == usd) return monto;
        else return monto / DolarBlueHoy;
    }

    setValidRating(rating) {
        if ((rating % 0.5) != 0) rating = Math.round(rating);
        if (rating > 5) return 5;
        if (rating < 0) return 0;
        else return rating;
    }
}

class SmartTv extends Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, pulgadas, resolucion, rating){
        super(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating);
        this.pulgadas = pulgadas;
        this.resolucion = resolucion;
        this.descripcion = `${this.nombre}: ${this.pulgadas} - ${this.resolucion}`;
        this.title = `Electrodomesticos / Smart Tv`;
    }
}

class Celular extends Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, almacenamiento, color, rating){
        super(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating);
        this.almacenamiento = almacenamiento;
        this.color = color;
        this.descripcion = `${this.nombre}: ${this.almacenamiento} - ${this.color}`;
        this.title = `Moviles / Telefono Movil Ultima Generación`;
    }
}

class Pc extends Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, almacenamiento, pulgadas, rating, GBRam, Grafica, procesador, resolucion){
        super(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating);
        this.almacenamiento = almacenamiento;
        this.pulgadas = pulgadas;
        this.GBRam = GBRam;
        this.Grafica = Grafica;
        this.procesador = procesador;
        this.resolucion = resolucion;
        this.descripcion = `${this.nombre}: ${this.Grafica} - ${this.procesador} - ${this.resolucion} - ${this.GBRam} - ${this.almacenamiento}`;
        this.title = `NoteBooks / Pc Profesional Ultima Generación`;
    }
}

class Consola extends Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, almacenamiento, variante, rating){
        super(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating);
        this.almacenamiento = almacenamiento;
        this.variante = variante;
        this.descripcion = `${this.nombre}: ${this.almacenamiento} - ${this.variante}`;
        this.title = `Consola De juegos / Ps5`;
    }
}

class Componente extends Producto {
    constructor(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating){
        super(nombre, TipoMoneda, monto, imagen, arrayEtiquetas, rating);
        this.descripcion = `${this.nombre}:`;
        this.title = `Componentes / ${this.nombre}`;
    }
}

class Etiquetas {
    constructor(){
        this.EtiquetasIphone = ["Celular", "Celulares", "Movil", "Moviles", "Apple", "Iphone", "Iphones"];
        this.EtiquetasSamsung = ["Celular", "Celulares", "Movil", "Moviles", "Samsung"];
        this.EtiquetaAsusPc = ["Computadora", "Computadoras", "Notebook", "Notebooks", "Pc", "Portatil", "Asus", "Gaming", "Zephyrus", "G14, G15, M16"];
        this.EtiquetaMackBook = ["Apple", "Mackbook", "Mackbooks", "Computadora", "Computadoras", "Notebook", "Notebooks", "Pc", "Portatil", "Gaming", "Pro"];
        this.EtiquetasProcesador = ["Procesador", "Procesadores", "CPU", "intel", "i", "12th gen", "gen", "amd", "Ryzen"];
        this.EtiquetasGrafica = ["Grafica", "GPU", "Gaming"];
        this.EtiquetasSmartTV = ['Televisores', 'Smart TV', 'Plasmas', 'FHD', 'UHD', '4k', 'Pantallas', 'Monitores', 'Pixeles'];
    }
}


// ------------------------------- Declaración de Objetos -------------------------------//
//Etiquetas para cada producto:
const Etiqs = new Etiquetas();

// Todos los Pc 
const AsusZephM16 = new Pc("Asus Zephyrus M16", ars, 450_000, "asus_m16.png", Etiqs.EtiquetaAsusPc, "512 SSD", `15"`, 4.5, "16GB RAM", "RTX 3050", "i9", "OLED UHD");
const AsusRogStrix = new Pc("Asus ROG Strix G15", ars, 700_000, "asusRogStrix.png", Etiqs.EtiquetaAsusPc, "1TB SSD", `15.6"`, 4.5, "32GB RAM", "RTX 2070", "i7", "FHD");
const AsusZephG14 = new Pc("Asus Zephyrus G14", ars, 480_000, "asus_g14.png", Etiqs.EtiquetaAsusPc, "512 SSD", `15"`, 4, "16GB RAM", "RTX 3080", "Ryzen 9", "UHD");
const RazerBlade = new Pc("Razer Blade 15", usd, 5000,  "razer_blade.png", Etiqs.EtiquetaAsusPc, "1TB SSD", `15.6"`, 5, "32GB DDR5 RAM", "Nvidia GeForce RTX 3080 Ti", "12th Gen Intel Core i9 CPU", "4k UHD 144Hz");
const MacbookPro14M1 = new Pc("MackBook Pro 14", ars, 690_000, "macbookproM116 1.png", Etiqs.EtiquetaMackBook, "512 SSD", `14"`, 5, "16GB RAM", "Integrada", "M1", "UHD");
const MacbookPro16M1Pro = new Pc("MackBook Pro 16", ars, 770_900, "macbookproM1Pro 1.png", Etiqs.EtiquetaMackBook, "512 SSD", `16"`, 5, "16GB RAM", "Integrada", "M1 Pro", "UHD");
const MacbookAir13 = new Pc("MackBook Air 13", ars, 270_000, "macbookkair13.png", Etiqs.EtiquetaMackBook, "256 SSD", `13"`, 5, "8GB RAM", "Integrada", "M1", "UHD");
const MacbookPro13 = new Pc("MackBook Pro 13", ars, 478_500, "macbookkpro13.png", Etiqs.EtiquetaMackBook, "512 SSD", `13"`, 5, "8GB RAM", "Integrada", "M1", "UHD");
const TodasLasPc = [AsusZephM16, AsusRogStrix, AsusZephG14, RazerBlade, MacbookPro14M1, MacbookPro16M1Pro, MacbookAir13, MacbookPro13];

// Todos los Televisores 
const Philips7000 = new SmartTv('Smart Tv Philips 7000 Series', ars, 98_000, 'ST_philips7000.png', Etiqs.EtiquetasSmartTV, `50"`, '4k', 4.5);
const Samsung7 = new SmartTv('Smart Tv Samsung Series 7', ars, 99_000, 'ST_samsung7.png', Etiqs.EtiquetasSmartTV, `50"`, '4k', 4.5);
const noblex55 = new SmartTv('Smart Tv Noblex DK', ars, 105_500, 'ST_noblex.png', Etiqs.EtiquetasSmartTV, `55"`, '4k', 5);
const SamsungNEO = new SmartTv('Smart Tv Samsung Neo QLED', ars, 1_579_000, 'ST_samsungNEO.png', Etiqs.EtiquetasSmartTV, `75"`, '8k', 5);
const TodosLosSmartTv = [Philips7000, Samsung7, noblex55, SamsungNEO];

// Todos los Celulares 
const Iphone13ProMax1000 = new Celular("Apple Iphone 13 Pro Max", ars, 600_000, "IphoneProMax.png", Etiqs.EtiquetasIphone, "1TB", "Grafito", 5);
const Iphone13Pro256 = new Celular("Apple Iphone 13 Pro", ars, 378_500, "Iphone13Pro.png", Etiqs.EtiquetasIphone, "256GB", "Aqua", 5);
const SamsungS22Ultra256 = new Celular("Samsung S22 Ultra", ars, 278_900, "S22ultra.png", Etiqs.EtiquetasSamsung, "256GB", "Negro", 4.5);
const SamsungS22Plus256 = new Celular("Samsung S22+", ars, 228_500, "S22mas.png", Etiqs.EtiquetasSamsung, "256GB", "Color Negro", 4);
const TodosLosCelulares = [Iphone13ProMax1000, Iphone13Pro256, SamsungS22Ultra256, SamsungS22Plus256];

// Todos los Consolas
const ps5Disquera = new Consola("Sony PlayStation 5", ars, 220_000, "", [], "800GB", "Disquera", 4.5);
const ps5Digital = new Consola("Sony PlayStation 5", ars, 220_000, "", [], "1000GB", "Digital", 4.5);
const TodasLasConsolas = [];

// Todos los Componentes
const IntelCorei9 = new Componente("12th Gen Intel Core i9 CPU", ars, 200_000, "i9.png", Etiqs.EtiquetasProcesador, 5);
const IntelCorei7 = new Componente("12th Gen Intel Core i7 CPU", ars, 100_000, "i7.png", Etiqs.EtiquetasProcesador, 4.5);
const AmdRyzen95900 = new Componente("AMD Ryzen 9 5900X CPU", ars, 151_900, "r9.png", Etiqs.EtiquetasProcesador, 5);
const NvidiaRTX3090 = new Componente("Nvidia GeForce RTX 3090", ars, 495_900, "nvidia3090.png", Etiqs.EtiquetasGrafica, 5);
const TodosLosComponentes = [IntelCorei9, IntelCorei7, AmdRyzen95900, NvidiaRTX3090];

//Todos los productos:
const TodosLosProductos = [];
TodasLasPc.forEach((prod) => {TodosLosProductos.push(prod)});
TodosLosSmartTv.forEach((prod) => {TodosLosProductos.push(prod)});
TodosLosCelulares.forEach((prod) => {TodosLosProductos.push(prod)});
TodasLasConsolas.forEach((prod) => {TodosLosProductos.push(prod)});
TodosLosComponentes.forEach((prod) => {TodosLosProductos.push(prod)});

//Modificador de precio por la inflacion
let modificadorDePrecio = 1;
TodosLosProductos.forEach((prod) => prod.precio = parseInt(prod.precio * modificadorDePrecio));


// ------------------------------- Escribir el Json -------------------------------//
const fs = require('fs');
let data = {"productos": TodosLosProductos}
let jsonData = JSON.stringify(data);

fs.writeFile('data/productos.json', jsonData, e => {
    if (e) console.log(e);
    else console.log("Todo OK")
});