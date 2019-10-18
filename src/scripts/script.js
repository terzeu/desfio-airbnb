
var xmlhttp = new XMLHttpRequest();
var hoteis = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    hoteis = JSON.parse(this.responseText);
    console.log(hoteis)
    hoteis.forEach((element,index) => {
      var node = document.createElement("DIV");
      node.classList.add("card-item");
      node.innerHTML = `
        <div class="card-body">
          <div class="content-img">
            <img class="card-img" src="${element.photo}">
          </div>
          <div>
            <p class="subtitle">${element.property_type}<p>
            <p class="card-title">${element.name}<p>
            <p>R$${element.price}/noite<p>
          </div>
        </div>
      `
      document.getElementById("cards").appendChild(node);
    });
  }
};

xmlhttp.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72", true);
xmlhttp.send();

function setDataHoteis(hoteis) {
  
}

function filterValue(event) {
  
}
