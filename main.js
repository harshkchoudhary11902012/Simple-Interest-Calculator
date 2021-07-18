function calculate() {
  p = document.getElementById("amount").value;
  n = document.getElementById("range").value;
  r = document.getElementById("years").value;

  result = document.getElementById("result");

  result.innerHTML = "The interst is " + (p * n * r) / 100;
}
