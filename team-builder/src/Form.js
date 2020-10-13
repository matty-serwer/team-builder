import React from "react";

const Form = (props) => {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>
          Name
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
          />
        </label>
        <label>
          Role
          <select className='select' name='role' onChange={onChange} value={values.role}>
              <option value="">Select Role</option>
              <option value="Web UI Developer">Web UI Developer</option>
              <option value="Front End Developer">Front End Developer</option>
              <option value="Front End Framework Developer">Front End Framework Developer</option>
              <option value="Back End Developer">Back End Developer</option>
          </select>
        </label>
        <div className='submit'>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
