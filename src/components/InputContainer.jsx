import Input from "./Input";

export default function InputContainer({ fieldData, handleFunction }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          fieldData={fieldData}
          handleChange={handleFunction}
          labelName="initialInvestment"
        />
        <Input
          fieldData={fieldData}
          handleChange={handleFunction}
          labelName="annualInvestment"
        />
        <Input
          fieldData={fieldData}
          handleChange={handleFunction}
          labelName="expectedReturn"
        />
        <Input
          fieldData={fieldData}
          handleChange={handleFunction}
          labelName="duration"
        />
      </div>
    </section>
  );
}
