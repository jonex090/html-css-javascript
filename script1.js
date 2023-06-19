fetch('https://jsonplaceholder.typicode.com/users?fbclid=IwAR1hvQEmF50APk8AOn_YSNELNZJrfxibZnW3VltHasg0o3qlkY0b7OA020U').then((data) => {
    // console.log(data)
    return data.json();
}).then((completedata) => {
    // console.log(completedata);
    let data1 = "";
    completedata.map((vrednost) => {
        data1+= `     <div class="card">
        <ul>
            <h1 class="id">ID: ${vrednost.id}</h1>
            <li>Name: ${vrednost.name}</li>
            <li>UserName: ${vrednost.username}</li>
            <li>Email: ${vrednost.email}</li>
            <li>Address</li>
            <p>Street: ${vrednost.address.street}</p>
            <p>City: ${vrednost.address.city}</p>
            <p>ZipCode: ${vrednost.address.zipcode}</p>
            <li>Phone: ${vrednost.phone}</li>
            <li>Website: ${vrednost.website}</li>
            <li>Company: ${vrednost.company.name}</li>
            <p>${vrednost.company.catchPhrase}</p>
            <p>${vrednost.company.bs}</p>
        </ul> 
    </div> `
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err) =>{
    console.log(err);
})
