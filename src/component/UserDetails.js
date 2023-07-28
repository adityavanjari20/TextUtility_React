import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

export default function UserDetails() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data, e.g., send it to the server
    const formData = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      city: event.target.city.value,
    };

    // You can perform further actions with the formData, such as sending it to a backend server.
    console.log(formData);
    localStorage.setItem("userDetail", JSON.stringify(formData));

    // Clear the form fields after submission
    setName("");
    setSurname("");
    setCity("");
  };

  const handelGetLocalData = () => {
    let data = JSON.parse(localStorage.getItem("userDetail"));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="my-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          required
        ></input>
      </div>
      <div className="my-3">
        <label htmlFor="surname" className="form-label">
          Surname:
        </label>
        <input
          type="text"
          className="form-control"
          id="surname"
          placeholder="Surname"
          required
        />
      </div>
      <div className="my-3">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="City"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary my-3 mx-3">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={handelGetLocalData}
      >
        Get Local Data
      </button>
    </form>
  );
}
