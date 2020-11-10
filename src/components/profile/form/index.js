import React from 'react';

const fields = [
  {
    type: 'text',
    placeholder: 'First name',
    name: 'fname',
    autoFocus: true,
    style: { gridArea: 'fname' },
  },
  {
    type: 'text',
    placeholder: 'Last name',
    name: 'lname',
    style: { gridArea: 'lname' },
  },
  {
    type: 'email',
    placeholder: 'Email',
    name: 'email',
    style: { gridArea: 'email' },
  },
  {
    type: 'text',
    placeholder: 'Phone number',
    name: 'phone',
    style: { gridArea: 'phone' },
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    style: { gridArea: 'password' },
  },
  {
    type: 'password',
    placeholder: 'Confirm Password',
    name: 'confirmpassword',
    style: { gridArea: 'confirmpassword' },
  },
];

const UserForm = () => {
  return (
    <div className="form-container">
      <h3 className='form-title'>My Profile</h3>
      <form className='user-form'>
        {fields.map((fld) => (
          <input key={fld.name} {...fld} />
        ))}
      </form>
      <div>
        <button className='btn btn-secondary mt-4'>ADD NEW ADDRESS</button>
      </div>
    </div>
  );
};

export default UserForm;
