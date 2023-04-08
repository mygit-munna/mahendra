const bookingForm = document.getElementById("booking-form");
const bookingsTable = document.getElementById("bookings");
const filterDate = document.getElementById("filter-date");
const filterCount = document.getElementById("filter-count");



let index;
let bookings = [];


bookingForm.addEventListener("submit", (event) => {debugger
  event.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const service_type= document.getElementById("serviceType").value;
  const  Time = document.getElementById("time").value;
  const  carmodel = document.getElementById("carmodel").value;
  const booking = { name,carmodel, date,Time,service_type, description };
  if (index !== undefined) {
    bookings[index] = booking;
    document.getElementById("submit").innerText = "Book Appointment";
    index = undefined;
  } else {
    //  check if the timeslot is already booked
        const isAvaleble = bookings.some((appt) => {
            return appt.date === booking.date && appt.Time === booking.Time;
        });
        
        if (isAvaleble) {
            alert('Sorry..! this slot is not Available try another');
            return;
        }
    bookings.push(booking);
    alert("booking successful")

  }
  saveToLocalStorage(bookings);
  location.reload();
  
});





function saveToLocalStorage(bookings) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
 
}



function loadFromLocalStorage() {
  const bookingsJSON = localStorage.getItem("bookings");
  if (bookingsJSON !== null) {
    bookings = JSON.parse(bookingsJSON);
  }
}

loadFromLocalStorage();















