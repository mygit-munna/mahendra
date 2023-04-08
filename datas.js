const filterDate = document.getElementById("filter-date");
const filterCount = document.getElementById("filter-count");
const bookingsTable = document.getElementById("bookings");
const customername = document.getElementById("filter-by-name");
const time = document.getElementById("filter-by-time");



// let = booking
window.addEventListener('load', () =>{
booking = localStorage.getItem('bookings');
// window.myGlobalVariable = bookings;
renderBookings();
})



function renderBookings(filteredBookings) {
    bookingsTable.innerHTML =`
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Car model</th>
          <th>Date</th>
          <th>Service Type</th>
          <th>Description</th>
          <th>Time</th>
          <th>Delete</th>
        </tr>
      </thead>
    `;
    bookingsTable.innerHTML += "<tbody>";
    const renderBookings = filteredBookings || bookings;
    renderBookings.forEach((booking, i) => {
      const bookingRow = `
        <tr>
          <td>${booking.name}</td>
          <td>${booking.carmodel}</td>
          <td>${booking.date}</td>
          <td>${booking.service_type}</td>
          <td>${booking.description}</td>
          <td>${booking.Time}</td>
          <td>
            
            <button class="edit_b" onclick="deletedata(${i})">Delete</button>
          </td>
        </tr>
      `;
      bookingsTable.innerHTML += bookingRow;
    });
    bookingsTable.innerHTML += "</tbody>";
  }



  
  function filterBookings() {debugger
    const filteredDate = filterDate.value;
    const filteredName = customername.value.trim().toLowerCase();
    const filteredTime = time.value.trim().toLowerCase();
  
    const filteredBookings = bookings.filter((booking) => {
      const bookingDate = booking.date.toLowerCase().includes(filteredDate.toLowerCase());
      const bookingName = booking.name.toLowerCase().includes(filteredName);
      const bookingTime = booking.Time.toLowerCase().includes(filteredTime.toLowerCase());
      return bookingDate && bookingName && bookingTime;
    });
  
    if (filteredBookings.length > 9) {
      filterCount.innerText = `${filteredBookings.length}`;
    } else {
      filterCount.innerText = `0${filteredBookings.length}`;
    }
  
    renderBookings(filteredBookings);
  }
  
  

  function editform(i) {
    index = i;
    const booking = bookings[i];
    document.getElementById("name").value = booking.name;
    document.getElementById("date").value = booking.date;
    document.getElementById("serviceType").value = booking.service_type;
    document.getElementById("description").value = booking.description;
    document.getElementById("submit").innerText = "Update Appointment";
  }
  
  function deletedata(i) {
    bookings.splice(i, 1);
    saveToLocalStorage(bookings);
    renderBookings();
  }





  filterDate.addEventListener("change", filterBookings);
  customername.addEventListener("change", filterBookings);
  time.addEventListener("change", filterBookings);
function saveToLocalStorage(bookings) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

function loadFromLocalStorage() {
  console.log(localStorage.getItem("bookings"));
  const bookingsJSON = localStorage.getItem("bookings");
  if (bookingsJSON !== null) {
    bookings = JSON.parse(bookingsJSON);
  }
}

loadFromLocalStorage();
renderBookings();



