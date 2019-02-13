function calculate() {
    document.calculator.output.value = eval(document.calculator.output.value);
}
function erase() {
    document.calculator.output.value = '';
}
function entries(s) {
    document.calculator.output.value+=s;
}
