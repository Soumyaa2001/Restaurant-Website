function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the form data
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('Message').value;

    // Populate modal content
    const userData = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone} <br>
        <strong>Message:</strong> ${message}
    `;
    document.getElementById('userData').innerHTML = userData;

    // Show modal using Bootstrap's modal method
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'), {});
    confirmationModal.show();

    // Handle "Okay" button click for redirection
    document.getElementById('okButton').addEventListener('click', function() {
        window.location.href = "index.html"; // Redirect to index.html
    });
}
