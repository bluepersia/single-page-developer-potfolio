document.querySelector ('.form').addEventListener ('submit', submit);
const inputName = document.querySelector ('.form__input-name');
const inputEmail = document.querySelector ('.form__input-email');
const inputMsg = document.querySelector ('.form__input-msg');

function submit (e) 
{
    e.preventDefault ();

    validateInput (inputName);
    validateInput (inputEmail);
    validateInput (inputMsg);
}



function validateInput (input)
{
    const container = input.parentElement;
    container.classList.remove ('invalid');
    container.classList.remove ('valid');

    let err;

    if (input.dataset.required && !input.value)
        err = 'Is required';
    else if (input.dataset.min && input.value.length < input.dataset.min)
        err = `Must be at least ${input.dataset.min} characters`;
    else if(input.dataset.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test (input.value))
        err = 'Must be a valid email';

    if (err)
    {
        container.classList.add ('invalid');
        container.querySelector ('.form__input-error').textContent = err;
        return;
    }
    container.classList.add ('valid');
}