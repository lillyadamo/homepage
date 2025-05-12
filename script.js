const hamburger = document.getElementById('hamburger-btn');
const nav = document.querySelector('.header-nav');

hamburger.addEventListener('click', () => {
nav.classList.toggle('active');
 });

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

// Modal code
const modal = document.getElementById("artModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".art-item img");

images.forEach((img) => {
  img.onclick = function() {
    modal.style.display = "block";  
    modal.style.opacity = "0";      
    modal.offsetWidth;            
    modal.style.animation = "fadeIn 0.5s forwards"; 
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
  };
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}