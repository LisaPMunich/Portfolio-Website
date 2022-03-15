(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');
    let emailErrorElement = document.querySelector('#email-error');
    let messageErrorElement = document.querySelector('#message-error');

    function validateEmail() {
        if (emailInput.value === '') {
            emailErrorElement.innerText='An email address is required';
            return false
        }
        let emailHasAt = (emailInput.value.indexOf('@') !== -1);
        let emailHasDot = (emailInput.value.indexOf('.') !== -1);
        if (!emailHasAt || !emailHasDot) {
            emailErrorElement.innerText ='Please type in a valid email address';
            return false
        }
        emailErrorElement.innerText ='';
        return true
    }

    function validateMessage() {
        if (messageInput.value === '') {
            messageErrorElement.innerText ='Please type in a message';
            return false
        }
        messageErrorElement.innerText ='';
        return true
    }

    function validateForm() {

        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidMessage;
    }

    function formHasError() {
        if (emailErrorElement.innerText.length > 0 || messageErrorElement.innerText.length > 0) {
            return true
        }
        return false
    }

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
    form.addEventListener('submit', (event) => {
        validateForm();
        if(formHasError()){
            event.preventDefault();
        }
    })


})();