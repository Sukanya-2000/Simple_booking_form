// Get references to form and display div
const bookingForm = document.getElementById("bookingForm");
const displayDetails = document.getElementById("displayDetails");

// Add event listener for form submission
bookingForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Create a data object to send in the POST request
  const data = {
    name,
    email,
    phone,
  };

  try {
    // Make a POST request to the cloud API
    const response = await axios.post("https://crudcrud.com/api/8f8c54a8b9be4da5842c7d0db09f8488", data);

    // Check if the request was successful
    if (response.status === 201) {
      // Display a success message
      const detailsParagraph = document.createElement("p");
      detailsParagraph.textContent = "Booking details saved successfully!";
      displayDetails.appendChild(detailsParagraph);
    } else {
      // Display an error message
      const detailsParagraph = document.createElement("p");
      detailsParagraph.textContent = "Failed to save booking details.";
      displayDetails.appendChild(detailsParagraph);
    }
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error("Error:", error);
  }

  // Clear the form inputs
  bookingForm.reset();
});
