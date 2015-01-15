var result = document.getElementById('result');
var num_btns = document.getElementsByClassName('num');
var op_btns  = document.getElementsByClassName('op');
var eq       = document.getElementById('eq');
var clear = true,
    op    = null,
    total = 0;

result.innerHTML = 0;

var ops = {
  'add': function(a, b) { return a + b; },
  'sub': function(a, b) { return a - b; },
  'mul': function(a, b) { return a * b; },
  'div': function(a, b) { return a / b; }
};

for (var i = 0; i < num_btns.length; i++) {
  var value = num_btns[i].id; 
  num_btns[i].onclick = function(value) { 
    if (clear) {
      result.innerHTML = "";
    }
    result.innerHTML += value.target.id; 
    clear = false;
  };
}

for (var i = 0; i < op_btns.length; i++) {
  op = op_btns[i].id;
  op_btns[i].onclick = function(op) {
    op = op.target.id;
    total = ops[op](total, parseFloat(result.innerHTML));
    result.innerHTML = total;
    clear = true;
  };
}

eq.onclick = function() {
  total = ops[op](total, parseFloat(result.innerHTML));
  result.innerHTML = total;
};
