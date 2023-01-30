
import React from 'react'

function EmployeeListItem({ image, name, title }) {
  return (
    <div className="employee-container">
      <img src={image} alt={name} className="person-img" />
      <div className="employee-info">
        <h3 className="employee-name">{name}</h3>
        <p className="employee-title">{title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem