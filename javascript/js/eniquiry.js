document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("enquiryForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent page refresh

        // Get input values
        const owner = document.getElementById("ownerName").value.trim();
        const pet = document.getElementById("petName").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const service = document.getElementById("service").value.trim();
        const msg = document.getElementById("message").value.trim();

        // Basic validation
        if (!owner || !pet || !email || !contact || !service) {
            messageBox.style.color = "red";
            messageBox.textContent = "Please fill in all required fields.";
            return;
        }

        // Display dynamic thank-you message
        messageBox.style.color = "green";
        messageBox.textContent = `Thank you, ${owner}! Your enquiry about ${service} has been received.`;

        // Optionally, clear the form
        form.reset();
    });
});