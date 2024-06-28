import Image from "/Users/stevenklimek/bloom-repos/react-projects/portfolio-projet/src/images/IMG_4707.jpeg";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import "./Contacts.css"



// Initial values for the form fields
const getInitialFormValues = () => ({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Initial error messages for the form fields
const getInitialErrors = () => ({
  name: "",
  email: "",
  message: "",
});

// Custom error messages for validation
const validationError = {
  nameRequirement: "Name must be at least 3-20 characters",
  emailRequirement: "Must be a valid email address",
  messageRequirement: "Must type a message for Steven to read",
};

// Validation schema for the form using Yup
const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, validationError.nameRequirement)
    .max(20, validationError.nameRequirement)
    .required("Name is required")
    .trim(),
  email: Yup.string()
    .matches(
      /[A-Za-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
      validationError.emailRequirement
    )
    .required("Email is required"),
  message: Yup.string().required(validationError.messageRequirement).trim(),
  phone: Yup.string(),
});

export default function Contacts() {
  // State hooks to manage form values and errors
  const [values, setValues] = useState(getInitialFormValues());
  const [errors, setErrors] = useState(getInitialErrors());
  const [enabled, setEnabled] = useState(false);
  
  const [serverSuccess, setServerSuccess] = useState();

  // Effect hook to validate form asynchronously on value change
  useEffect(() => {
    contactSchema.isValid(values).then((isValid) => {
      setEnabled(isValid); // Enables or disables the submit button based on form validity
    });
  }, [values]);

  // Function to validate a single field using Yup and update error state
  const validate = (key, value) => {
    Yup.reach(contactSchema, key)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [key]: "" }); // Clear errors if validation succeeds
      })
      .catch((error) => {
        setErrors({ ...errors, [key]: error.errors[0] }); // Set error message if validation fails
      });
  };

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring to get name and value from event target
    validate(name, value); // Validate the field on change
    setValues({ ...values, [name]: value }); // Update the form values state
  };

  // Handler for form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Message will be received", values); // Log form values to console
  };

  return (
    <>
      <div className="contact-container">
        <div>
          <img className="image" src={Image} alt="Steven Klimek" />
        </div>
        <div className="contact-information">
          <h2>Contact Me:</h2>
          <h3>
            Email:{" "}
            <a href="mailto:Steven.Klimek7@yahoo.com">
              Steven.Klimek7@yahoo.com
            </a>
          </h3>
          <h3>
            Phone: <a href="tel:+18155577238">&#40;815&#41;557-7238</a>
          </h3>
          <h3>
            LinkedIn: <a href="https://www.linkedin.com/in/steven-klimek/">Steven_Klimek</a>
          </h3>
          <h3>
            GitHub: <a href="https://github.com/StevenKlimek07">StevenKlimek07</a>
          </h3>
          <h3>Located: Chicago, IL</h3>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <h4 className="success"></h4>

        <label htmlFor="name" className="labelstyle">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-field"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <label htmlFor="email" className="labelstyle">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input-field"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <label htmlFor="phone" className="labelstyle">
          Phone (optional):
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="input-field"
          value={values.phone}
          onChange={handleChange}
        />
        <label htmlFor="message" className="labelstyle">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="input-field"
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
        <button type="submit" disabled={!enabled}>
          Submit
        </button>
      </form>
    </>
  );
}
