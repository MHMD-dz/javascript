let dollar = document.getElementById("dollar");
let dinar = document.getElementById("dinar");
let euro = document.getElementById("euro");


dollar.onkeyup = function() {
    let x = dollar.value;
    dinar.value = (x * 132.26).toFixed(3);
    euro.value = (x / 1.13).toFixed(3); ;
}
dinar.onkeyup = function() {
    let y = dinar.value;
    dollar.value = (y / 132.26).toFixed(3);
    euro.value = (y / 149.28).toFixed(3);
}

euro.onkeyup = function() {
    let z = euro.value;
    dollar.value = (z * 1.13).toFixed(3);
    dinar.value = (z * 149.28).toFixed(3);
}