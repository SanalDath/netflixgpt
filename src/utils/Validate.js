export const Validate = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email); //always put this "/backslaches/"
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    const error = []
    if(!isEmailValid) error.push("Email is not valid");
    if(!isPasswordValid) error.push("Password is not valid");

    return error.length? error : null
};

export const signUpValidate = (firstName, lastName, secEmail, secPassword, confirmPassword) => {
    const errors = [];

    const isFirstNameValid = /^[a-zA-Z]+$/.test(firstName);
    const isLastNameValid = /^[a-zA-Z]+$/.test(lastName);
    const isSecEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(secEmail);
    const isSecPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(secPassword);

    if (!isFirstNameValid) errors.push("First name is not valid");
    if (!isLastNameValid) errors.push("Last name is not valid");
    if (!isSecEmailValid) errors.push("Email is not valid");
    if (!isSecPasswordValid) errors.push("Password is not valid");
    if (secPassword !== confirmPassword) errors.push("Passwords don't match");

    return errors.length ? errors : null
};

