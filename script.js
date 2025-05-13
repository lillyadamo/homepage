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

  // devlog
  const devlogContainer = document.getElementById("devlog-content");
  if (devlogContainer) {
    loadMarkdown("may-13-2025.md");
  }
});

async function loadMarkdown(filename) {
  try {
    const res = await fetch(`devlog/${filename}`);
    if (!res.ok) throw new Error("Fetch failed");
    const text = await res.text();
    const html = marked.parse(text);
    document.getElementById("devlog-content").innerHTML = html;
  } catch (err) {
    console.error("Markdown load error:", err);
    document.getElementById("devlog-content").innerHTML = "<p>Could not load devlog.</p>";
  }
}
