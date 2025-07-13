import React, { useState } from "react";

const BasicForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
  });

  const [formEntries, setFormEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEntries((prevEntries) => [...prevEntries, formData]);

    console.log("Form submitted:", [...formEntries, formData]);

    setFormData({
      name: "",
      email: "",
      dob: "",
      gender: "",
      password: "",
    });
    console.log("Form submitted:", [...formEntries, formData]);
  };

 
  const handleEdit = (index) => {
    const entryToEdit = formEntries[index];
    setFormData(entryToEdit);
    setFormEntries((prevEntries) =>
      prevEntries.filter((_, i) => i !== index)
    );
  };

  const handleDelete = (index) => {
    setFormEntries((prevEntries) =>
      prevEntries.filter((_, i) => i !== index) 
    );
  };

  return (
    <div>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-600 text-white py-2 rounded-md hover:bg-slate-700 transition"
        >
          Submit
        </button>
      </form>
     
      </div>
       <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Form Entries</h3>
        <ul className="grid grid-cols-3 gap-3 items-center">  
          {formEntries.map((entry, index) => (
            <li
              key={index}
              className="p-4 border rounded-md bg-gray-50 col-span-1 "
            >
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Email:</strong> {entry.email}</p>
              <p><strong>Date of Birth:</strong> {entry.dob}</p>
              <p><strong>Gender :</strong>{entry.gender}</p>
              <p><strong>Password:</strong> {entry.password}</p>
              <div className="mt-2 flex justify-end space-x-2">
                <button className="bg-slate-500 text-white px-3 py-1 rounded-md hover:bg-slate-600 transition mr-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </li>
            
          ))}
        </ul>
    </div>
      </div>
  );
};

export default BasicForm1;
