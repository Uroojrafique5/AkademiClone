"use client"

import { Upload } from "lucide-react"
import { useState } from "react"

export default function TeacherForm() {
  const [addressLength, setAddressLength] = useState(0)
  const style = `w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 text-[#A098AE] focus:ring-[#4D44B5] focus:border-transparent outline-none transition-all`

  const [formData, setFormData] = useState({
    firstName: "Maria",
    lastName: "Historia",
    email: "Historia@mail.com",
    phone: "+1234567890",
    address:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dateOfBirth: "24 Februari 1997",
    placeOfBirth: "Jakarta, Indonesia",
    university: "University Akademi Historia",
    degree: "History Major",
    startDate: "September 2013",
    endDate: "September 2017",
    city: "Yogyakarta, Indonesia",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "address") {
      setAddressLength(value.length)
    }
  }

  const handleSaveAsDraft = () => {
    console.log("Saving as draft:", formData)
  }

  const handleSubmit = () => {
    console.log("Submitting form:", formData)
  }

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-[1200px] mx-auto space-y-6">
        <div className="bg-white w-full max-w-[1200px] rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-[#4D44B5] px-6 py-4">
            <h2 className="text-white text-lg font-semibold">Personal Details</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`${style}`}
                  placeholder="Maria"
                />
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`${style}`}
                  placeholder="Historia"
                />
              </div>
            </div>
            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`${style}`}
                  placeholder="Historia@mail.com"
                />
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`${style}`}
                  placeholder="+1234567890"
                />
              </div>
            </div>
            {/* Address & Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Address *</label>
                <div className="relative">
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className={`${style} resize-none`}
                    rows={6}
                    maxLength={200}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">{addressLength}/200</div>
                </div>
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Photo *</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 sm:p-8 text-center hover:border-purple-300 transition-colors cursor-pointer h-full min-h-[200px] flex flex-col justify-center">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm sm:text-[18px] text-[#303972]">Drag and drop or</p>
                  <p className="text-sm sm:text-[18px] text-[#303972] ">click here to select file</p>
                </div>
              </div>
            </div>
            {/* Date of Birth & Place of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Date of Birth *</label>
                <input
                  type="text"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className={`${style}`}
                  placeholder="24 Februari 1997"
                />
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Place of Birth *</label>
                <input
                  type="text"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                  className={`${style}`}
                  placeholder="Jakarta, Indonesia"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full max-w-[1200px] rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-[#4D44B5] px-6 py-4">
            <h2 className="text-white text-lg font-semibold">Education</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">University *</label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  className={`${style}`}
                  placeholder="University Akademi Historia"
                />
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Degree *</label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) => handleInputChange("degree", e.target.value)}
                  className={`${style}`}
                  placeholder="History Major"
                />
              </div>
            </div>
            {/* Start & End Date */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">Start & End Date *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    className={`${style}`}
                    placeholder="September 2013"
                  />
                  <input
                    type="text"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange("endDate", e.target.value)}
                    className={`${style}`}
                    placeholder="September 2017"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[18px] text-[#303972] font-medium mb-2">City *</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className={`${style}`}
                  placeholder="Yogyakarta, Indonesia"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-end w-full max-w-[1200px]">
          <button
            onClick={handleSaveAsDraft}
            className="px-6 sm:px-8 py-3 border border-[#4D44B5] text-[#4D44B5] rounded-lg font-medium hover:bg-[#4D44B5] hover:text-white transition-colors"
          >
            Save as Draft
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 sm:px-8 py-3 bg-[#4D44B5] text-white rounded-[40px] font-medium hover:bg-[#4D44B5] transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
