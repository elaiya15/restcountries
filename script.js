var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json())
    .then((data1) => foo(data1));


function foo(data1) {
    for (i = 0; i <= data1.length; i++) {
        console.log(i, data1[i])
        var container = document.createElement("div");
        container.setAttribute("class", "container-fluied");

        container.style.color = "green";
        container.fontSize = "10px";
        container.innerHTML = `
        
     <div class= "col-md-4">
        <h5 class="card-title">${data1[i].continents}</h5>
         <img src="${data1[i].flags.png}" class="card-title" alt=". ..">
          <div class="card-body">
          <h6 class="card-title">${data1[i].capital}</h6>
          <h6 class="card-title">${data1[i].region}</h6>
          <h6 class="card-title">${data1[i].postalCode}</h6>
          
          
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`
        document.body.append(container)
    }
}