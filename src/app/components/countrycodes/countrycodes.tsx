const CountryCodeSelect = () => {
  const countryCodes = [
    { phoneCode: "+254", name: "Kenya" },
    { phoneCode: "+234", name: "Nigeria" },
    { phoneCode: "+233", name: "Ghana" },
    { phoneCode: "+27", name: "South Africa" },
    { phoneCode: "+251", name: "Ethiopia" },
    { phoneCode: "+20", name: "Egypt" },
    { phoneCode: "+213", name: "Algeria" },
    { phoneCode: "+212", name: "Morocco" },
    { phoneCode: "+256", name: "Uganda" },
    { phoneCode: "+216", name: "Tunisia" },
  ];

  return (
    <select
      name="countryCode"
      id="countryCode"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    >
      <option value="">Select country code</option>
      {countryCodes.map((country) => (
        <option key={country.phoneCode} value={country.phoneCode}>
          {country.name} ({country.phoneCode})
        </option>
      ))}
    </select>
  );
};

export default CountryCodeSelect;