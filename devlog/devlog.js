// has the code for both the devlog html and post html
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ----- For devlog.html -----
if (document.getElementById('devlog-list')) {
  fetch('devlog/posts.json')
    .then(response => response.json())
    .then(posts => {
      const list = document.getElementById('devlog-list');
      posts.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `post.html?file=${post.file}`;
        a.textContent = post.title;
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error loading devlog list:', error);
    });
}

// ----- For post.html -----
if (document.getElementById('post-content')) {
  const file = getQueryParam('file');
  if (file) {
    fetch(`devlog/${file}`)
      .then(response => response.text())
      .then(markdown => {
        const html = marked.parse(markdown);
        document.getElementById('post-content').innerHTML = html;
      })
      .catch(error => {
        console.error('Markdown load error:', error);
        document.getElementById('post-content').innerHTML =
          '<p>Sorry, this post could not be loaded.</p>';
      });
  } else {
    document.getElementById('post-content').innerHTML =
      '<p>No post specified.</p>';
  }
}