// Come here after tutorial in script.js
// This is implementation of all the practice in script.js By Ahmed Faraz

// NOTE: TEST BY CHANGING INPUTS HERE
// Then run command: node .\formValidation.js

// Inputs
const formInputs = {
    username: 'ahmedfaraz1',
    // Username must be alphanumeric and contain 5 - 12 characters.
    email: 'a1@gmail.com',
    // Email must be a valid address, e.g. ahmedfaraz.contact@gmail.com.
    password: 'ahmed_f@r@z_1-2-3',
    // Password must be alphanumeric ( `@` , `_` and `-` are allowed) and be 8 - 20 characters.
    phone: '03001234567',
    // Phone must be a valid PK telephone number (11 digits).
    slug: 'ahmed-faraz-12345'
    // Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20 letters.
}

// Defining RegExps
const usernameRegExp = new RegExp(/^[\w]{5,12}$/);
const emailRegExp    = new RegExp(/^([\w]+@[a-z]+.com)$/);
const passwordRegExp = new RegExp(/^([\w@_-]{8,20})$/);
const phoneRegExp    = new RegExp(/^([\d]){11}$/);
const slugRegExp     = new RegExp(/^([a-z0-9-]{8,20})$/);

// Validating Inputs using RegExps and Showing Outputs
console.log('Username :- ', formInputs.username.match(usernameRegExp) ? formInputs.username.match(usernameRegExp)[0] : 'ERROR_INVALID_INPUT');
console.log('Email    :- ', formInputs.email.match(emailRegExp)       ? formInputs.email.match(emailRegExp)[0]       : 'ERROR_INVALID_INPUT');
console.log('Password :- ', formInputs.password.match(passwordRegExp) ? formInputs.password.match(passwordRegExp)[0] : 'ERROR_INVALID_INPUT');
console.log('Phone:   :- ', formInputs.phone.match(phoneRegExp)       ? formInputs.phone.match(phoneRegExp)[0]       : 'ERROR_INVALID_INPUT');
console.log('Slug:    :- ', formInputs.slug.match(slugRegExp)         ? formInputs.slug.match(slugRegExp)[0]         : 'ERROR_INVALID_INPUT');

