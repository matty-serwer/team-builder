import React from "react";

const Form = (props) => {
  const { values, update, submit } = props;

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

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
            <input 
            type='text' 
            name='role' 
            onChange={onChange} 
            value={values.role}/>
          </label>
          <div className='submit'>
              <button>Submit</button>
          </div>
        </div>
      </form>

  );
};

export default Form;
