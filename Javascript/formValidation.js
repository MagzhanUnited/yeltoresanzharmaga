function validateSecondSectionForm() {
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value === '') {
        alert('The "Fullname" field must be filled in');
        return false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    if (emailInput.value === '') {
        alert('The "Email" field must be filled in');
        return false;
    } else {
        document.getElementById('email-error').textContent = '';
    }


    if (messageInput.value === '') {
        alert('The "Message" field must be filled in');
        return false;
    }else {
        document.getElementById('message-error').textContent = '';
    }


    return true;
}

const secondSectionForm = document.getElementById('second-section-form');
secondSectionForm.addEventListener('submit', function (event) {
    if (!validateSecondSectionForm()) {
        event.preventDefault(); }
});
