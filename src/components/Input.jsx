export default function Input({ labelName, fieldData, handleChange }) {
  return (
    <div>
      <label>{labelName}</label>
      <input
        onChange={(e) => handleChange(labelName, e.target.value)}
        value={fieldData[labelName]}
        type="number" required
      />
    </div>
  );
}
