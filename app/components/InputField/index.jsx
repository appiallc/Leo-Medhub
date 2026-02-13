"use client";

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  options, // array for dropdown
  rows = 3, // for textarea
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Dropdown */}
      {options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b border-gray-300 py-2 focus:border-red-600 outline-none"
        >
          <option value="">Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          className="w-full border-b border-gray-300 focus:border-red-600 outline-none py-2"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-b border-gray-300 focus:border-red-600 outline-none py-2"
        />
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
