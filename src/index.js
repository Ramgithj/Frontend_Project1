const createForm = document.getElementById("createForm");
const carOutput = document.getElementById("readDiv");
const updateCar = document.getElementById("errormessage");
const update = document.getElementById("updateDiv");

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

// function updateCar(id,make, model,year, colour,engineSize,gearbox, contactNumber,email,postCodeLastSeen,description){
//     fetch("http://localhost:8082/update/" + id, {
//         method: "PUT",
//         body:JSON.stringify(data),
//         headers: {
//             'Content-type' : "application/json"
//         }
//         }).then(response => {
//             return response.json();
//         }).then(json => {
//             console.log(json);
//         }).catch(error => console.log(error));
//     };

    
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

            
            const deleteButton = document.createElement("a");
            deleteButton.className = "card-link";
            deleteButton.innerText = " Delete";
            deleteButton.addEventListener("click", function(){
                deleteCar(car.id);
            })
            cardBody.appendChild(deleteButton);

            const updateButton = document.createElement("a");
            updateButton.className = "card-link";
            updateButton.innerText = " Update";
            updateButton.addEventListener("click", function(){
                editCars();
            })
            cardBody.appendChild(updateButton);
        });

    }).catch(error => console.error(error));
}

renderCars();



function deleteCar(id) {
    fetch("http://localhost:8082/remove/" + id, {
        method: "DELETE"    
    }).then(response => {
        console.log(response);
        renderCars();
    }).catch(error => console.error(error));
}

// UPDATE

updateCar.addEventListener("click", function(){
    editCars();
})
function editCars() {
    console.log("working")
    fetch("http://localhost:8082/")
    .then(response => response.json())
    .then(arrayOfCars => {
        console.log("Cars: ", arrayOfCars);
        update.innerHTML = '';
        arrayOfCars.forEach(function(car) {
            console.log(car);
            
            const updateCard = document.createElement("div");
            updateCard.className = "card";
            update.appendChild(updateCard);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
            updateCard.appendChild(cardBody);
            
            //MAKE
            const make_label = document.createElement("label");
            make_label.className = "card-body";
            make_label.innerText = "Car make: "
            cardBody.appendChild(make_label);
            
            const make = document.createElement("input");
            make.className = "card-body";
            make.value = `${car.make} `
            cardBody.appendChild(make);

            //MODEL
            const model_label = document.createElement("label");
            model_label.className = "card-body";
            model_label.innerText = "Car model: "
            cardBody.appendChild(model_label);
            
            const model = document.createElement("input");
            model.className = "card-body";
            model.value = `${car.model} `
            cardBody.appendChild(model);

            //Engine size

            const engine_size_label = document.createElement("label");
            engine_size_label.className = "card-body";
            engine_size_label.innerText = "Engine size: ";
            cardBody.appendChild(engine_size_label);

            const engine_size = document.createElement("input");
            engine_size.className = "card-body";
            engine_size.value = car.engineSize;
            cardBody.appendChild(engine_size);

            //YEAR
            const year_label = document.createElement("label");
            year_label.className = "card-body";
            year_label.innerText = "Year: ";
            cardBody.appendChild(year_label);

            const year = document.createElement("input");
            year.className = "card-body";
            year.value = car.year;
            cardBody.appendChild(year);

            //COLOUR
            const colour_label = document.createElement("label");
            colour_label.className = "card-body";
            colour_label.innerText = "Colour: ";
            cardBody.appendChild(colour_label);

            const colour = document.createElement("input");
            colour.className = "card-body";
            colour.value = car.colour;
            cardBody.appendChild(colour);

            //GEARBOX
            const gearbox_label = document.createElement("label");
            gearbox_label.className = "card-body";
            gearbox_label.innerText ="Gearbox: "
            cardBody.appendChild(gearbox_label);

            const gearbox = document.createElement("input");
            gearbox.className = "card-body";
            gearbox.value = car.gearbox;
            cardBody.appendChild(gearbox);

            //POST CODE LAST SEEN
            const post_code_last_seen_label = document.createElement("label");
            post_code_last_seen_label.className = "card-body";
            post_code_last_seen_label.innerText = "The post code the car was last seen: "
            cardBody.appendChild(post_code_last_seen_label);

            const post_code_last_seen = document.createElement("input");
            post_code_last_seen.className = "card-body";
            post_code_last_seen.value = car.postCodeLastSeen;
            cardBody.appendChild(post_code_last_seen);

            //CONTACT
            const contact_label = document.createElement("label");
            contact_label.className = "card-body";
            contact_label.innerText = "Contact: "
            cardBody.appendChild(contact_label);

            const contact = document.createElement("input");
            contact.className = "card-body";
            contact.value = car.contactNumber;
            cardBody.appendChild(contact);
            
            //DESCRIPTION
            const description_label = document.createElement("label");
            description_label.className = "card-body";
            description_label.innerText ="Description: "
            cardBody.appendChild(description_label);
            
            const description = document.createElement("input");
            description.className = "card-body";
            description.value =car.description;
            cardBody.appendChild(description);

            

            
            const deleteButton = document.createElement("a");
            deleteButton.className = "card-link";
            deleteButton.innerText = " Delete";
            deleteButton.addEventListener("click", function(){
                deleteCar(car.id);
            })
            cardBody.appendChild(deleteButton);
        });

    }).catch(error => console.error(error));
}