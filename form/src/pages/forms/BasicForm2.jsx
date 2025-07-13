import React, { useState } from "react";

const BasicForm2 = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    termsAccepted: false,
  });

  const [formEntries, setFormEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormInput({ ...formInput, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEntries((prev) => [...prev, formInput]);

    setFormInput({
      name: "",
      email: "",
      dob: "",
      gender: "",
      password: "",
      termsAccepted: false,
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto p-8 mt-10 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-700 mb-6">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-slate-400"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formInput.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formInput.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <fieldset className="border rounded-lg p-4">
            <legend className="font-semibold text-gray-700 mb-2">Gender</legend>
            <div className="flex gap-4">
              {["male", "female", "other"].map((g) => (
                <label key={g} className="flex items-center gap-2 capitalize">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formInput.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formInput.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formInput.termsAccepted}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-slate-600 underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-600 text-white font-semibold py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Register
          </button>
        </form>
      </div>
      {formEntries.length > 0 && (
        <div className="mt-10 mx-10 p-8 bg-white shadow-2xl rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Submitted Entries
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-slate-100 text-slate-800 border-b border-gray-200">
                <tr>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    #
                  </th>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    Email
                  </th>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    DOB
                  </th>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    Gender
                  </th>
                  <th className="border border-gray-500 px-4 py-2 text-left">
                    Terms
                  </th>
                </tr>
              </thead>
              <tbody>
                {formEntries.map((entry, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{entry.name}</td>
                    <td className="border px-4 py-2">{entry.email}</td>
                    <td className="border px-4 py-2">{entry.dob}</td>
                    <td className="border px-4 py-2 capitalize">
                      {entry.gender}
                    </td>
                    <td className="border px-4 py-2">
                      {entry.termsAccepted ? "✅ Accepted" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default BasicForm2;
