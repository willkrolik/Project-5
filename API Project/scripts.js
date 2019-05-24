
window.onload = function(){
  // your JS here

const gallery = $(".gallery");



var request = new XMLHttpRequest();
request.open("GET", "https://randomuser.me/api/?results=12", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(person => {
      const employeeHtml = `<div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${person.picture.medium}" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
          <p class="card-text">${person.email}</p>
          <p class="card-text cap">city, ${person.location.state}</p>
      </div>
      </div>`;
      
      
      $('.card').click(function(){
        $(this).find('.extra').trigger('click');
      });
     

      const p3 = document.createElement("p");
      p3.textContent = `${person.location.state}`;

      const a = document.createElement("a");
      a.innerHTML = `<a href="#openModal" class="extra">More Info</a>`;
      gallery.append(employeeHtml);
      
      
      

      $(".extra")
        .unbind()
        .on("click", e => {
          const pTag = $(".lineOne");
          pTag[0].innerHTML = e.originalEvent.path[2].id;
          console.log(e.originalEvent.path[2].id);
        });

  
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();}

  