const update = document.getElementById("updateDiv");
const manage = document.getElementById("navbar-button-manage-listing");
const fields = document.getElementsByTagName("input");
manage.addEventListener("load", editCars());

function editCars() {
    fetch("http://localhost:8082/")
    .then(response => response.json())
    .then(arrayOfCars => {
        console.log("Cars: ", arrayOfCars);
        update.innerHTML = '';
        arrayOfCars.forEach(function(car) {
            console.log(car);
            
            const updateCard = document.createElement("div");
            updateCard.className = "update-card";
            update.appendChild(updateCard);

            const cardBody = document.createElement("div");
            cardBody.className = "update-card-body";
            updateCard.appendChild(cardBody);
            //TITLE
            const title = document.createElement("h5");
            title.className = "card-title";
            title.innerText = car.make + " " + car.model;
            cardBody.appendChild(title);

            //MAKE
            const make_label = document.createElement("label");
            make_label.className = "update-card-body";
            make_label.innerText = "Car make: "
            cardBody.appendChild(make_label);
            
            const make = document.createElement("input");
            make.className = "update-card-body-field";
            make.value = car.make; 
            cardBody.appendChild(make);

            

            

            //MODEL
            const model_label = document.createElement("label");
            model_label.className = "update-card-body";
            model_label.innerText = "Car model: "
            cardBody.appendChild(model_label);
            
            const model = document.createElement("input");
            model.className = "update-card-body-field";
            model.value = `${car.model} `
            cardBody.appendChild(model);

            //Engine size

            const engine_size_label = document.createElement("label");
            engine_size_label.className = "update-card-body";
            engine_size_label.innerText = "Engine size: ";
            cardBody.appendChild(engine_size_label);

            const engine_size = document.createElement("input");
            engine_size.className = "update-card-body-field";
            engine_size.value = car.engineSize;
            cardBody.appendChild(engine_size);

            //YEAR
            const year_label = document.createElement("label");
            year_label.className = "update-card-body";
            year_label.innerText = "Year: ";
            cardBody.appendChild(year_label);

            const year = document.createElement("input");
            year.className = "update-card-body-field";
            year.value = car.year;
            cardBody.appendChild(year);

            //COLOUR
            const colour_label = document.createElement("label");
            colour_label.className = "update-card-body";
            colour_label.innerText = "Colour: ";
            cardBody.appendChild(colour_label);

            const colour = document.createElement("input");
            colour.className = "update-card-body-field";
            colour.value = car.colour;
            cardBody.appendChild(colour);

            //GEARBOX
            const gearbox_label = document.createElement("label");
            gearbox_label.className = "update-card-body";
            gearbox_label.innerText ="Gearbox: "
            cardBody.appendChild(gearbox_label);

            const gearbox = document.createElement("input");
            gearbox.className = "update-card-body-field";
            gearbox.value = car.gearbox;
            cardBody.appendChild(gearbox);

            //POST CODE LAST SEEN
            const post_code_last_seen_label = document.createElement("label");
            post_code_last_seen_label.className = "update-card-body";
            post_code_last_seen_label.innerText = "The post code the car was last seen: "
            cardBody.appendChild(post_code_last_seen_label);

            const post_code_last_seen = document.createElement("input");
            post_code_last_seen.className = "update-card-body-field";
            post_code_last_seen.value = car.postCodeLastSeen ;
            cardBody.appendChild(post_code_last_seen);
            //CONTACT NUMBER
            const contact_label = document.createElement("label");
            contact_label.className = "update-card-body";
            contact_label.innerText = "Contact: "
            cardBody.appendChild(contact_label);

            const contactNumber = document.createElement("input");
            contactNumber.className = "update-card-body-field";
            contactNumber.value = car.contactNumber;
            cardBody.appendChild(contactNumber);

            //EMAIL

            const email_label = document.createElement("label");
            email_label.className = "update-card-body";
            email_label.innerText = "Email: "
            cardBody.appendChild(email_label);

            const email = document.createElement("input");
            email.className = "update-card-body-field";
            email.value = car.email;
            cardBody.appendChild(email);
            
            //DESCRIPTION
            const description_label = document.createElement("label");
            description_label.className = "update-card-body";
            description_label.innerText ="Description: "
            cardBody.appendChild(description_label);

            const description = document.createElement("input");
            description.className = "update-card-body-field";
            description.value =car.description;
            cardBody.appendChild(description);

             //Id
             const id_label = document.createElement("label");
             id_label.className = "update-card-body";
             id_label.innerText ="Id: "
             cardBody.appendChild(id_label);
             
             const carId = document.createElement("p");
             carId.className = "update-card-body-field";
             carId.innerText =car.id;
             cardBody.appendChild(carId);
            
            const saveButton = document.createElement("a");
            saveButton.className = "card-link";
            saveButton.setAttribute("id", "saveButton");
            saveButton.innerText = " Save";
            saveButton.addEventListener("click", function(){
                updateCar(carId, make,model,year,colour,engine_size,gearbox,post_code_last_seen,contactNumber,description, email);
                saveButton.innerText="Saved!";
            })
            cardBody.appendChild(saveButton);

            const deleteButton = document.createElement("a");
            deleteButton.className = "card-link";
            deleteButton.setAttribute("id","deleteListing");
            deleteButton.innerText = " Delete";
            deleteButton.addEventListener("click", function(){
                deleteCar(car.id);
            })
            cardBody.appendChild(deleteButton);
        });

    }).catch(error => console.error(error));

    
function updateCar(id,make, model,year, colour,engineSize,gearbox,postCodeLastSeen,contactNumber,description,email){
    fetch("http://localhost:8082/update?id=" + id.innerText, {
        method: "PUT",
        body:JSON.stringify({
            make: make.value,
            model: model.value,
            year: year.value,
            colour: colour.value,
            engineSize: engineSize.value,
            gearbox: gearbox.value,
            contactNumber:contactNumber.value,
            postCodeLastSeen:postCodeLastSeen.value,
            description: description.value,
            email:email.value
        }),
        
        headers: {
            'Content-type' : "application/json"
        }
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        }).catch(error => console.log(error));
    };

    
function deleteCar(id) {
    fetch("http://localhost:8082/remove/" + id, {
        method: "DELETE"    
    }).then(response => {
        console.log(response);
        editCars();
    }).catch(error => console.error(error));
}


}