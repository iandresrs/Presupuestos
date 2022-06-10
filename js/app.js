const ingresos = [
    new Ingreso("salario", 2000),
    new Ingreso("venta coche", 1500)
];

const egresos = [
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400),
    new Egreso("Carros", 500)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

let totalIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
};

let totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
};

let cargarCabecero = () => {
    let presupuestos = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuestos);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimuFractionDigits: 2,
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "percent",
        minimuFractionDigits: 2,
    });
};

const cargarIngresos = () => {
    let ingresosHtml = "";
    for (let ingreso of ingresos) {
        ingresosHtml += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
};

const crearIngresoHTML = (ingreso) => {
    let ingresosHtml = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `
    return ingresosHtml;
};


const cargarEgresos = () => {
    let egresosHtml = "";
    for (let egreso of egresos) {
        egresosHtml += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHtml;
}

const crearEgresoHTML = (egreso) => {
    let egresosHTML = ` 
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
</div>
    `
    return egresosHTML;
}