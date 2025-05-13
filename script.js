document.addEventListener("DOMContentLoaded", () => {
  // hamburger
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.querySelector('.header-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  const closeBtn = document.getElementById('close-btn');
  if (closeBtn && nav) {
    closeBtn.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  }

  // modal
  const modal = document.getElementById("artModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const images = document.querySelectorAll(".art-item img");
  const span = document.getElementsByClassName("close")[0];

  if (modal && modalImg && captionText && images.length > 0) {
    images.forEach((img) => {
      img.onclick = function () {
        modal.style.display = "block";
        modal.style.opacity = "0";
        modal.offsetWidth; 
        modal.style.animation = "fadeIn 0.5s forwards";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      };
    });
  }

  if (span && modal) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
});