var num_one = document.getElementById('num_one'),
    num_two = document.getElementById('num_two'),
    add_Btn = document.getElementById('add_Btn'),
    sub_Btn = document.getElementById('sub_Btn'),
    mul_Btn = document.getElementById('mul_Btn'),
    div_Btn = document.getElementById('div_Btn'),
    answer  = document.getElementById('answer');



add_Btn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = op1 + op2; 
  answer.innerHTML = result;
}

sub_Btn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = op1 - op2; 
  answer.innerHTML = result;
}

mul_Btn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = op1 * op2; 
  answer.innerHTML = result;
}

div_Btn.onclick = function() {
  var result; 
  op1 = parseFloat(num_one.value);
  op2 = parseFloat(num_two.value);

  result = op1 / op2; 
  answer.innerHTML = result;
}
