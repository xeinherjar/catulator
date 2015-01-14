var num_one      = document.getElementById('num_one'),
    num_two      = document.getElementById('num_two'),
    calculateBtn = document.getElementById('calculateBtn'),
    answer       = document.getElementById('answer');

calculateBtn.onclick = function() {
  var result; 
  op1 = parseInt(num_one.value, 10);
  op2 = parseInt(num_two.value, 10);

  result = op1 + op2;
  answer.innerHTML = result;
}
