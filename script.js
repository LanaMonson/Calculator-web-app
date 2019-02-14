// function calculate() {
//     document.calculator.output.value = eval(document.calculator.output.value);
// }
// function erase() {
//     document.calculator.output.value = '';
// }
// function entries(s) {
//     document.calculator.output.value+=s;
// }

window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");
    container.addEventListener("click", function(e){
        buttonClick(e.target.id);
    });//(e) - default event parameter, calls all info of event

    function buttonClick(buttonId) {
        if((buttonId != "buttonc") && (buttonId != "button=")) {
            var button = document.getElementById(buttonId);
            var s = buttonId; // s - separate temporary value of button/ string
            s = s.replace("button","")//string replace function "sub_string to be replaced","sub string you need it replace with"
        }
    }
};
