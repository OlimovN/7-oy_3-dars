import React, { useState } from "react";
import styles from "./dynamicForms.module.css";x

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([
    { name: "", number: "", remarks: "" },
  ]);

  const handleAddFields = () => {
    setFormFields([...formFields, { name: "", number: "", remarks: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...formFields];
    values.splice(index, 1);
    setFormFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...formFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else if (event.target.name === "number") {
      values[index].number = event.target.value;
    } else if (event.target.name === "remarks") {
      values[index].remarks = event.target.value;
    }
    setFormFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formFields));
    console.log("Form Data:", formFields);
    alert("data successfull save to localstorage");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formcontainer}>
      {formFields.map((formField, index) => (
        <div key={index} className={styles.formrow}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formField.name}
            onChange={(event) => handleInputChange(index, event)}
            className={styles.inputfield}
          />
          <input
            name="number"
            type="text"
            placeholder="Enter number..."
            value={formField.number}
            onChange={(event) => handleInputChange(index, event)}
            className={styles.inputfield}
          />
          <input
            name="remarks"
            type="text"
            placeholder="For testing remarks"
            value={formField.remarks}
            onChange={(event) => handleInputChange(index, event)}
            className={styles.inputfield}
          />
          <button
            type="button"
            onClick={() => handleRemoveFields(index)}
            className={styles.removebtn}
            disabled={formFields.length === 1}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFields} className={styles.addbtn}>
        Add More
      </button>
      <button type="submit" className={styles.submitbtn} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
