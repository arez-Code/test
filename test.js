// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n){
//   showSlides(slideIndex += n)
// }

// function currentSlide(n){
//   showSlides(slideIndex = n)
// }

// function showSlides(n){
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if(n > slides.length){slideIndex = 1}
//   if(n < 1){slideIndex = slides.length}

//   let i;
//   for(i = 0; i < slides.length; i++){
//     slides[i].style.display = "none"
//   }
//   for(i = 0; i < dots.length; i++){
//     dots[i].className = dots[i].className.replace("active","")
//   }
// }

function myFunction(){
  const element = document.getElementById('myDiv')

  if(element.className == "myStyle"){
    element.className = "newStyle"
  }else{
    element.className = "myStyle"
  }
}