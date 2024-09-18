
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
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone} <br>
        <strong>Message:</strong> ${message}
    `;
    document.getElementById('userData').innerHTML = userData;
    document.getElementById('UserModal').style.display = 'block';

    document.getElementById('EnqueryForm').style.display = 'none';

    document.getElementById('okButton').addEventListener('click', function() {
        window.location.href = "index.html"; 
    });
}
