var num_one      = document.getElementById('num_one'),
    num_two      = document.getElementById('num_two'),
    calculateBtn = document.getElementById('calculateBtn'),
    answer       = document.getElementById('answer'),
    operator     = operator || '+';



function createButton(op) {
  var elem = document.createElement('input');
  elem.type = 'submit';
  elem.value = op;
  elem.onclick = function() {
    operator = op;
  };
  return elem;
};

var add_btn = createButton('+');
var sub_btn = createButton('-');
var mul_btn = createButton('*');
var div_btn = createButton('/');

calculateBtn.parentNode.insertBefore(div_btn, calculateBtn);
calculateBtn.parentNode.insertBefore(mul_btn, calculateBtn);
calculateBtn.parentNode.insertBefore(sub_btn, calculateBtn);
calculateBtn.parentNode.insertBefore(add_btn, calculateBtn);

var operation = {
  '+' : function(a, b) { return a + b; },
  '-' : function(a, b) { return a - b; },
  '*' : function(a, b) { return a * b; },
  '/' : function(a, b) { return a / b; }
};

calculateBtn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = operation[operator](op1, op2);
  answer.innerHTML = result;
}
