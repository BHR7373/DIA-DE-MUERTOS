/*15. Escribe una función llamada calcularPerimetroRectangulo que tome dos parámetros: largo y ancho.
 La función debe calcular el
perímetro de un rectángulo utilizando la fórmula P=2×(largo+ancho) y devolver el resultado. 
Utiliza la función para calcular y mostrar el perímetro de un rectángulo con un largo de 8 unidades y 
un ancho de 5 unidades.*/

let P;

function calcularPerimetroRectangulo(largo, ancho) {
    return P = 2 * (largo + ancho);
}

document.addEventListener('DOMContentLoaded', () => {
    const resultadoElemento = document.querySelector('#resultado');
    const btn = document.querySelector('#calcular');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const largo = parseInt(document.querySelector('#nota1').value);
        const ancho = parseInt(document.querySelector('#nota2').value);

        const perimetro = calcularPerimetroRectangulo(largo, ancho);
        
        resultadoElemento.innerHTML = 'TU PERIMETRO ES: ' + perimetro;
    });
});



