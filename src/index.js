const createForm = document.getElementById("createForm");
const carOutput = document.getElementById("readDiv");

createForm.addEventListener('submit',function (event) {
event.preventDefault();
console.log(this.make)
const data = {
    make: this.make.value,
    model: this.model.value,
    year: this.year.value,
    colour: this.colour.value,
    engineSize: this.engine_size.value,
    gearbox: this.gearbox.value,
    contactNumber: this.contact_number.value,
    email: this.email.value,
    postCodeLastSeen: this.post_code_last_seen.value,
    description: this.description.value
}
console.log(data);

fetch("http://localhost:8082/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-type' : "application/json"
    }
}).then(response => {
return response.json();
}).then(data => {
    renderCars();
    this.reset();
}).catch(error => console.log(error));
});

function renderCars() {
    fetch("http://localhost:8082/")
    .then(response => response.json())
    .then(arrayOfCars => {
        console.log("Cars: ", arrayOfCars);
        carOutput.innerHTML = '';
        arrayOfCars.forEach(function(car) {
            console.log(car);
            
            const card = document.createElement("div");
            card.className = "card";
            carOutput.appendChild(card);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody);
            
            const title = document.createElement("h5");
            title.className = "card-title";
            title.innerText = car.make + " " + car.model;
            cardBody.appendChild(title);

            const make_model = document.createElement("p");
            make_model.className = "card-body";
            make_model.innerText = `Car: ${car.make} ${car.model} `
            cardBody.appendChild(make_model);

            const engine_size = document.createElement("p");
            engine_size.className = "card-body";
            engine_size.innerText = "Engine size: " + car.engineSize;
            cardBody.appendChild(engine_size);

            const year = document.createElement("p");
            year.className = "card-body";
            year.innerText = "Year: " + car.year;
            cardBody.appendChild(year);

            const colour = document.createElement("p");
            colour.className = "card-body";
            colour.innerText = "Colour: " + car.colour;
            cardBody.appendChild(colour);
            
            const gearbox = document.createElement("p");
            gearbox.className = "card-body";
            gearbox.innerText = "Gearbox: " + car.gearbox;
            cardBody.appendChild(gearbox);

            const post_code_last_seen = document.createElement("p");
            post_code_last_seen.className = "card-body";
            post_code_last_seen.innerText = "Postcode the car was last seen: " + car.postCodeLastSeen;
            cardBody.appendChild(post_code_last_seen);

            const contact = document.createElement("p");
            contact.className = "card-body";
            contact.innerText = "Phone number: " + car.contactNumber;
            cardBody.appendChild(contact);
            
            const description = document.createElement("p");
            description.className = "card-body";
            description.innerText = "Description: " + car.description;
            cardBody.appendChild(description);
        });

    }).catch(error => console.error(error));
}

renderCars();






