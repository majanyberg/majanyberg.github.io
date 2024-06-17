document.addEventListener("DOMContentLoaded", function() {
  loadHTML("#header", "header.html");
  loadHTML("#footer", "footer.html");
});

function loadHTML(elementSelector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(elementSelector).innerHTML = data;
    })
    .catch(error => console.error('Error loading the file:', error));
}
