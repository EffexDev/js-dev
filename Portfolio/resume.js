function loadContent(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById('contentArea').innerHTML = xhr.responseText;
    } else {
        console.error('Request failed. Returned status of ' + xhr.status);
    }
    };

    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.dynamic-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            loadContent(url);
        });
    });
  });