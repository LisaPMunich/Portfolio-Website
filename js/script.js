(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let telNumberInput = document.querySelector('#contact-tel');
    let messageInput = document.querySelector('#contact-message');
    let emailErrorElement = document.querySelector('#email-error');
    let telErrorElement = document.querySelector('#tel-error');
    let messageErrorElement = document.querySelector('#message-error');

    function validateEmail() {
        if (emailInput.value === '') {
            emailErrorElement.innerText='An email address is required';
            return false
        }

        if (emailInput.value === 'email') {
            emailErrorElement.innerText='The email address cannot contain email';
            return false
        }

        let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!emailInput.value.match(mailFormat)){
            emailErrorElement.innerText ='This is not a valid email format!';
            return false
        }

        let emailHasAt = (emailInput.value.indexOf('@') !== -1);
        let emailHasDot = (emailInput.value.indexOf('.') !== -1);
        if (!emailHasAt || !emailHasDot) {
            emailErrorElement.innerText ='This is not a valid email address';
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

    function validateTelNumber(){
        let telFormat = /^[0-9]+$/;
        if(!telNumberInput.value.match(telFormat)){
            telErrorElement.innerText ='Please type in a valid phone number!'
            return false
        }

        if(typeof(telNumberInput)=== !'number'){
            telErrorElement.innerText ='It has to be numbers!'
            return false
        }
        if(telNumberInput.value === '') {
            telErrorElement.innerText ='Please type in a phone number!'
            return false
        }

        telErrorElement = '';
        return true

    }

    function validateForm() {

        let isValidEmail = validateEmail();
        let isValidTelNumber = validateTelNumber();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidTelNumber && isValidMessage;
    }

    function formHasError() {
        return emailErrorElement.innerText.length > 0 || messageErrorElement.innerText.length > 0;
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