window.onload = function() {
  // your JS here

  const gallery = $(".gallery");
  const modal = $(".modal-container");
  let modalData = $(".modal");
  let userArray = [];
  const card = $(".card");

  var request = new XMLHttpRequest();
  request.open("GET", "https://randomuser.me/api/?results=12", true);
  request.onload = function() {
    // Begin accessing JSON data here

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.results.forEach(person => {
        const employeeHtml = `<div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${
            person.picture.medium
          }" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${person.name.first} ${
          person.name.last
        }</h3>
          <p class="card-text">${person.email}</p>
          <p class="card-text cap">${person.location.city}, ${
          person.location.state
        }</p>
      </div>
      </div>`;
        userArray.push(person);
        console.log(Object.values(person));
        // GENERATE MODAL

        const a = document.createElement("a");
        a.innerHTML = `<a href="#openModal">More Info</a>`;
        gallery.append(employeeHtml);
        

        let modalData = document.querySelector(".modal");
        let cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", function() {
            let person = userArray[i];
            const modalHtml = `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                
                <div class="modal-info-container">
                    <img class="modal-img" src="${
                      person.picture.medium
                    }" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${person.name.first} ${
              person.name.last
            }</h3>
                    <p class="modal-text">${person.email}</p>
                    <p class="modal-text cap">${person.location.city}</p>
                    <hr>
                    <p class="modal-text">Phone Number: ${person.phone}</p>
                    <p class="modal-text">${person.location.street}, ${
              person.location.city
            }, ${person.location.state}, ${person.location.postcode}</p>
                    <p class="modal-text">Birthday: ${person.dob.date.slice(
                      0,
                      10
                    )}</p>
                </div>
            </div>
        
            
        </div>`;
        
        
            //modalContainer.style.display = "block";
             document.body.innerHTML += modalHtml;
            
          });
        }
        
      });
    } else {
      const errorMessage = document.createElement("marquee");
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  };
  request.send();
};


$(".modal-close-btn").onclick = function() {
  console.log("working");

};

$( document ).ajaxComplete(function() {
  console.log("I'm Ready");
});

