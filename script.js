function sum(a, b) {
  return (a+b);
}
var x = sum(5, 7);
console.log(x);

function isEqual(a, b) {
  return (a === b);
}
var i = isEqual(5, 5);
console.log(i);

function discountPercentage(orig, disc) {
  var discamt = disc / 100;
  var diff = orig - (orig * discamt);
  return diff;
}

var k = discountPercentage(100, 5);
console.log(k);

function stringCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var k = stringCapitalize("robby test string");
console.log(k);

function evenNumbers(min, max) {
  var result = Math.floor(Math.random() * max) + min;
    for (var i=result; i>=0; i-=2) {
        if (i % 2 !== 0) {
            i=i -1;
            i-=2;
        }

      console.log(i);
  }

}
evenNumbers(0, 100);


function isDivisible(num, den) {

     var div = (num % den===0)
    if (div === true) {
  console.log(div); }
  else
  {
    console.log(false);
}
}
isDivisible(15, 5);

function oddNumbers(n) {
 if (n < 40)
    return under40();
  else
    return above40(n);
}

function under40() {
  var result = "";
  for (var i = 1; i < 40; i += 2)
    result += i + " ";
  return result;
}

function above40(n) {
  var result = "";
  for (var i = 41; i <= n; i += 2)
    result += i + " ";
  return result;
}
var num = Math.floor(Math.random() * 100);

console.log(oddNumbers(num));
