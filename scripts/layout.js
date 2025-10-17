
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });

    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer").innerHTML = data;
      });
  });
  
  var roboto = document.createElement('link');
  roboto.rel = 'preconnect';
  roboto.href = 'https://fonts.googleapis.com';
  
  var roboto2 = document.createElement('link');
  roboto2.rel = 'preconnect';
  roboto2.href = 'https://fonts.gstatic.com';
  roboto2.setAttribute('crossorigin', '');
  
  var roboto3 = document.createElement('link');
  roboto3.rel = 'stylesheet';
  roboto3.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
  
  var socials = document.createElement('link');
  socials.rel = 'stylesheet';
  socials.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  
  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.sizes = '16x16';
  favicon.href = 'img/favicon-16x16.png';
  

  var head = document.head;
  head.appendChild(roboto);
  head.appendChild(roboto2);
  head.appendChild(roboto3);
  head.appendChild(socials);
  head.appendChild(favicon)