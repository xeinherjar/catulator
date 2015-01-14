var num_one      = document.getElementById('num_one'),
    num_two      = document.getElementById('num_two'),
    calculateBtn = document.getElementById('calculateBtn'),
    answer       = document.getElementById('answer');



function createButton(name, operator) {
  var elem = document.createElement('input');
  elem.type = 'submit';
  elem.calculate = operator;
  return elem;
};

var add_btn = createButton('Add', '+');
var sub_btn = createButton('Substract', '-');
var mul_btn = createButton('Multiply', '*');
var sub_btn = createButton('Divide', '/');





calculateBtn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = op1 + op2;
  answer.innerHTML = result;
}
