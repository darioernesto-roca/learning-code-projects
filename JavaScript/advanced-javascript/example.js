function cajaFuerteExterna() {
    let counter = 0;
    function cajaFuerteInterna() {
        counter++;
        console.log(counter);
    }
    return cajaFuerteInterna;
}
const abrirCajaFuerte = cajaFuerteExterna();
fn(); // Output: 1
fn(); // Output: 2
fn(); // Output: 3


