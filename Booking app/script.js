// Get references to form and display div
const bookingForm = document.getElementById("bookingForm");
const displayDetails = document.getElementById("displayDetails");

// Add event listener for form submission
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create a paragraph element to display the details
  const detailsParagraph = document.createElement("p");
  detailsParagraph.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}`;

  // Append the paragraph to the display div
  displayDetails.appendChild(detailsParagraph);

  // Clear the form inputs
  bookingForm.reset();
});
