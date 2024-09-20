
function handleSubmit(event) {
    const form = document.getElementById('EnqueryForm');

    if (!form.checkValidity()) {
        form.classList.add('was-validated'); 
        event.preventDefault(); 
        return false;
    }

    event.preventDefault();

    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('Message').value;

    const userData = `
        <b>Name:</b> ${name} <br>
        <b>Email:</b> ${email} <br>
        <b>Phone:</b> ${phone} <br>
        <b>Message:</b> ${message}
    `;
    document.getElementById('userData').innerHTML = userData;

    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'), {});
    confirmationModal.show();

    document.getElementById('okButton').addEventListener('click', function() {
        window.location.href = "index.html"; 
    });
}
