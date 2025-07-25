import React from "react";
import FormInput from "../../components/students/FormInput";
import FormSection from "../../components/students/FormSection";

const AddStudent = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New Student</h1>

      <form className="space-y-8">
        {/* Student Details Section */}
        <FormSection title="Student Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                    >
                      <span>Drag and drop or</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">browse to choose a file</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  id="firstName"
                  placeholder="Samantha"
                  required
                />
                <FormInput
                  label="Last Name"
                  id="lastName"
                  placeholder="William"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Date & Place of Birth"
                  id="dob"
                  placeholder="24 Ferbruary 1997"
                  required
                />
                <FormInput
                  label="Parent Name"
                  id="parentName"
                  placeholder="Mana William"
                  required
                />
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="william@mail.com"
                required
              />
              <FormInput
                label="Phone"
                id="phone"
                type="tel"
                placeholder="+1234567890"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Lorem ipsum dolor sit amet..."
              ></textarea>
            </div>
          </div>
        </FormSection>

        {/* Parent Details Section */}
        <FormSection title="Parent Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="First Name"
              id="parentFirstName"
              placeholder="Mana"
            />
            <FormInput
              label="Last Name"
              id="parentLastName"
              placeholder="William"
            />
            <FormInput
              label="Email"
              id="parentEmail"
              type="email"
              placeholder="mana@mail.com"
            />
            <FormInput
              label="Phone"
              id="parentPhone"
              type="tel"
              placeholder="+923456789"
            />

            <div className="md:col-span-2">
              <label
                htmlFor="parentAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <textarea
                id="parentAddress"
                name="parentAddress"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Lorem ipsum dolor sit amet..."
              ></textarea>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Payments
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="cash"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="cash"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Cash
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="debit"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="debit"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Debit
                  </label>
                </div>
              </div>
            </div>
          </div>
        </FormSection>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
