function confirmation(){
  fetch("action_page.html")
    .then((response) => response.text())
    .then((data) => {
    document.getElementById("containeren").innerHTML = data;
    });
}