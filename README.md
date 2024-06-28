# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

{/*
Imports:
Image: Imports an image to be used in the component.
useState and useEffect: React hooks for managing state and side effects.
Yup: Library for validation schema.
Contacts.css: Importing CSS for styling the component.

Initial Values and Errors:
getInitialFormValues: Returns an object with initial form values.
getInitialErrors: Returns an object with initial error messages.

Validation Error Messages:
validationError: Object containing custom error messages for validation.

Validation Schema:
contactSchema: Yup schema to define the rules for form validation.

Contacts Component:
State Management:
values: State to hold the current values of the form fields.
errors: State to hold the error messages for each form field.
enabled: State to enable/disable the submit button based on form validity.
useEffect Hook:
Runs validation on the form values whenever they change, updating the enabled state.
validate Function:
Validates a single form field and updates the error state.
handleChange Function:
Handles changes in form input fields, validating and updating the state.
onSubmit Function:
Handles form submission, preventing the default behavior and logging the form values to the console.
Return Statement:

Renders the contact information and the contact form.
Contact Information:
Displays the image, email, phone, LinkedIn, GitHub, and location information.
Contact Form:
Renders form fields for name, email, phone, and message, with validation error messages.
Submit button is enabled or disabled based on form validity. */}
