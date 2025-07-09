"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  dob: string;
  idtype: string;
  idNumber: string;
  idFront: File | null;
  idBack: File | null;
  portrait: File | null;
}

export const metadata = {
  title: "Profile Creation",
};

export default function ProfileCreation() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    dob: "",
    idtype: "",
    idNumber: "",
    idFront: null,
    idBack: null,
    portrait: null,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as any;
    if (files) {
      setFormData({ ...formData, [name]: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.idtype) newErrors.idtype = "ID type is required";
    if (!formData.idNumber) newErrors.idNumber = "ID number is required";
    if (!formData.idFront) newErrors.idFront = "ID front image is required";
    if (!formData.idBack) newErrors.idBack = "ID back image is required";
    if (!formData.portrait) newErrors.portrait = "Portrait image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Submitting profile:", formData);
        router.push("/dashboard");
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Profile Creation
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Completing your profile will unlock all the features of the platform
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="date-of-birth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="date-of-birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                aria-describedby={errors.dob ? "dob-error" : undefined}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              />
              {errors.dob && (
                <p id="dob-error" className="mt-1 text-sm text-red-600">
                  {errors.dob}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="idtype"
                className="block text-sm font-medium text-gray-700"
              >
                ID Type
              </label>
              <select
                id="idtype"
                name="idtype"
                value={formData.idtype}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              >
                <option value="">Select ID Type</option>
                <option value="nationalid">National ID</option>
                <option value="passport">Passport</option>
              </select>
              {errors.idtype && (
                <p id="idtype-error" className="mt-1 text-sm text-red-600">
                  {errors.idtype}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="id-number"
                className="block text-sm font-medium text-gray-700"
              >
                ID Number
              </label>
              <input
                id="id-number"
                name="idNumber"
                type="text"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder="Enter ID number"
                aria-describedby={errors.idNumber ? "idnumber-error" : undefined}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              />
              {errors.idNumber && (
                <p id="idnumber-error" className="mt-1 text-sm text-red-600">
                  {errors.idNumber}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="id-front"
                className="block text-sm font-medium text-gray-700"
              >
                ID Front Image
              </label>
              <input
                id="id-front"
                name="idFront"
                type="file"
                accept="image/*"
                onChange={handleChange}
                aria-describedby={errors.idFront ? "idfront-error" : undefined}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              />
              {errors.idFront && (
                <p id="idfront-error" className="mt-1 text-sm text-red-600">
                  {errors.idFront}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="id-back"
                className="block text-sm font-medium text-gray-700"
              >
                ID Back Image
              </label>
              <input
                id="id-back"
                name="idBack"
                type="file"
                accept="image/*"
                onChange={handleChange}
                aria-describedby={errors.idBack ? "idback-error" : undefined}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              />
              {errors.idBack && (
                <p id="idback-error" className="mt-1 text-sm text-red-600">
                  {errors.idBack}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="portrait"
                className="block text-sm font-medium text-gray-700"
              >
                Portrait Image
              </label>
              <input
                id="portrait"
                name="portrait"
                type="file"
                accept="image/*"
                onChange={handleChange}
                aria-describedby={errors.portrait ? "portrait-error" : undefined}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded"
              />
              {errors.portrait && (
                <p id="portrait-error" className="mt-1 text-sm text-red-600">
                  {errors.portrait}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}