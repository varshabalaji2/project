import React, { useState, useEffect } from 'react';

const RegistrationPage = () => {
  // variables for input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  // Validation state variables
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Validate First and Last Name 
  const validateName = (name) => /^[A-Z][a-z]*$/.test(name);

  // Validate Password Strength
  const validatePassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);

  useEffect(() => {
    setFirstNameValid(validateName(firstName));
    setLastNameValid(validateName(lastName));
    setPasswordValid(validatePassword(password));
    setConfirmPasswordValid(password === confirmPassword);
  }, [firstName, lastName, password, confirmPassword]);

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstNameValid && lastNameValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors in the form.');
    }
  };
}
