import InputContainer from "./components/InputContainer";
import { useState } from "react";
import { calculateInvestmentResults } from "./utils/investment";
import Table from "./components/Table";
import Header from "./components/Header";

const initialData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [data, setData] = useState(initialData);
  const [investmentData, setInvestmentData] = useState([]);

  const isInputValid = data.duration >= 1;
  function handleChange(field, value) {
    setData((prevData) => {
      let updatedData = { ...prevData };
      updatedData[field] = parseInt(value);
      setInvestmentData(() => {
        let newData = calculateInvestmentResults(updatedData);
        return newData;
      });
      return updatedData;
    });
  }

  return (
    <body className="center">
      <Header />
      <InputContainer fieldData={data} handleFunction={handleChange} />
      {!isInputValid && <p className="center">Please enter a duration greater than 0</p>}
      {isInputValid && <Table result={investmentData} />}
    </body>
  );
}

export default App;
