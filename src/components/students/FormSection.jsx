import React from "react";

const FormSection = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="bg-indigo-800 p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default FormSection;
