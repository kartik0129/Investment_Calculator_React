import { formatter } from "../utils/investment";

export default function Table({ result }) {
  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {result.map((res, index) => {
            return (
              <tr key={index}>
                <td>{res.year}</td>
                <td>{formatter.format(res.valueEndOfYear)}</td>
                <td>{formatter.format(res.interest)}</td>
                <td>{formatter.format(res.valueEndOfYear - res.interest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
