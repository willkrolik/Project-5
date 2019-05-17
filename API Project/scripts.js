const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src =
  "https://2kxol83prtb4rozdd1fx5s1x-wpengine.netdna-ssl.com/wp-content/uploads/2013/11/startup-fair.jpg";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://randomuser.me/api/?results=12", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(person => {
      const link = document.createElement("a");
      link.setAttribute("href", "#openModal");
      link.setAttribute("class", "extra");
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute(
        "id",
        `<img src=${person.picture.medium} align="left" class="round">` +
          `<br>${person.name.first}` +
          "     " +
          `<br>${person.name.last}` +
          "     " +
          `<br>${person.email}` +
          "     " +
          "<br>Location:" +
          `${person.location.state}` +
          "     " +
          `<br>${person.phone}` +
          "     " +
          `<br>${person.location.street}` +
          "     " +
          `${person.location.state}` +
          "     " +
          `${person.location.postcode}` +
          "     " +
          "<br>Birthday: " +
          `${person.dob.date.slice(0, 10)}`
      );

      const h1 = document.createElement("h1");
      h1.textContent = person.name.first + " " + person.name.last;

      const p = document.createElement("p");
      p.innerHTML = `<img src=${
        person.picture.medium
      } align="left" class="round">`;

      const p2 = document.createElement("p");
      p2.textContent = "  " + `${person.email}`;

      const p3 = document.createElement("p");
      p3.textContent = `${person.location.state}`;

      const a = document.createElement("a");
      a.innerHTML = `<a href="#openModal" class="extra">More Info</a>`;
      container.appendChild(link);
      link.appendChild(card);
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(a);

      $(".extra")
        .unbind()
        .on("click", e => {
          const pTag = $(".lineOne");
          pTag[0].innerHTML = e.originalEvent.path[2].id;
          console.log(e.originalEvent.path[2].id);
        });

      /* $(".extra").unbind().click(function() {
        console.log("also working");
        const pTag = $(".lineOne");
        pTag[0].innerHTML = `<div> Have a nice day!</div>`;
      });*/

      /*
Modal Needs:
Image
Name
Email
City or location
Cell Number
Detailed Address, 
including street name and number,
state or country, and 
post code.
Birthday
*/
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();

$(document).ready(function() {
  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  function moreInfo(event) {}

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
});
