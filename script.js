// Manually list all images in the folder
const imagePaths = [
    'img/photos/motorcycle.JPG',
    'img/photos/espresso.JPG',
    'images/photo3.jpg',
    'images/photo4.jpg'
  ];
  
  // Function to dynamically generate image elements
  function loadImages() {
    const album = document.getElementById('photo-album');
    
    // Loop through the image paths and create image elements
    imagePaths.forEach((path) => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('photo-item');
      
      const imgElement = document.createElement('img');
      imgElement.src = path;
      imgElement.alt = 'Photo';
      
      imgContainer.appendChild(imgElement);
      album.appendChild(imgContainer);
    });
  }
  
  // Call the loadImages function to display images
  loadImages();
  