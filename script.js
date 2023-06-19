fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data)
    return data.json();
}).then((completedata) => {
    // console.log(completedata);
    let data1 = "";
    completedata.map((vrednost) => {
        data1+= ` <div class="card">
        <h1 class="title">${vrednost.title}</h1>
        <img src=${vrednost.image} alt="img" class="images">
        <p>${vrednost.description}</p>
        <p class="category">${vrednost.category}</p>
        <p class="price">${vrednost.price}</p>
    </div> `
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err) =>{
    console.log(err);
})
