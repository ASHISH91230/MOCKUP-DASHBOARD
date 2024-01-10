var slider = document.getElementById("myRange");
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}
output1.innerHTML = slider1.value; 
slider1.oninput = function() {
    output1.innerHTML = this.value;
  }