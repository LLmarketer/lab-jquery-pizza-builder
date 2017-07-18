// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

var sumString =$("strong").text();
var sum = parseInt(sumString.substr(1));
console.log(sum);

var price = parseInt("li");

//iteration 1
$(".btn-pepperonni").on("click", function(){
console.log("hello");
$(".pep").toggle();
$(".price li").eq(0).toggle();
console.log("ciao");
if ($(".pep").hasClass("pep")) {
  sum += 1;
  $("strong").empty();
  $("strong").append(sum);

  console.log("porcupine");
  console.log($("strong"));
} else {
  sum -= 1;
  $("strong").empty();
  $("strong").append(sum);
}
});

$(".btn-mushrooms").on("click", function(){
console.log("hello magic mushroom");
$(".mushroom").toggle();
$(".price li").eq(1).toggle();
console.log("ciao magic mushroom");
if ($(".mushroom").hasClass(".mushroom")) {
  sum += 1;
  $("strong").empty();
  $("strong").append(sum);

  console.log("porcupine");
  console.log($("strong"));
} else {
  sum -= 1;
  $("strong").empty();
  $("strong").append(sum);
}

});

$(".btn-green-peppers").on("click", function(){
console.log("hello disgusting pepper");
$(".green-pepper").toggle();
$(".price li").eq(2).toggle();
console.log("ciao disgusting pepper");

if ($(".pepper").hasClass(".green-pepper")) {
  sum += 1;
  $("strong").empty();
  $("strong").append(sum);

  console.log("porcupine");
  console.log($("strong"));
} else {
  sum -= 1;
  $("strong").empty();
  $("strong").append(sum);
}

});

$(".btn-crust").on("click", function(){
console.log("hello crispy crust");
$(".crust").toggleClass("crust-gluten-free");
$(".price li").eq(4).toggle();
console.log("crispy crust");

if ($(".crust").hasClass("crust-gluten-free")) {
  sum += 5;
  $("strong").empty();
  $("strong").append(sum);

  console.log("porcupine");
  console.log($("strong"));
} else {
  sum -= 5;
  $("strong").empty();
  $("strong").append(sum);
}
});

$(".btn-sauce").on("click", function(){
console.log("white sauce");
$(".sauce").toggleClass("sauce-white");
$(".price li").eq(3).toggle();
if ($(".sauce").hasClass("sauce-white")) {
  sum += 3;
  $("strong").empty();
  $("strong").append(sum);

  console.log("porcupine");
  console.log($("strong"));
} else {
  sum -= 3;
  $("strong").empty();
  $("strong").append(sum);
}
console.log("ciao white sauce");
});


// $(".btn-sauce").on("click", function(){
//   console.log("hello white sauce");
//   if ($("#pizza section.sauce").css("visibility")==="visible"){
//     $("#pizza section.sauce").css("visibility", "hidden");
//     $(".btn btn-sauce active").removeClass("active");
//   }
//   else{ $("#pizza section.sauce").css("visibility", "visible");
//   $(".btn btn-sauce active").addClass("active");
//   $(".price li").eq(4).toggle();
//   console.log("ciao white sauce");
// }

  //  });

$("*.btn").removeClass("active");
$(".crust.crust-gluten-free").removeClass("crust-gluten-free");

});
