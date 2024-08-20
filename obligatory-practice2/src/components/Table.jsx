const Table = ({ data }) => {
    const TotalSum = data.reduce((accumulator, item) => {
        return accumulator + item.income;
      }, 0);
      const average = TotalSum / data.length;
    return ( 
        <div>
            <table>
                <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.brand}</td>
                    <td>{item.income}</td>
                    </tr>
                ))}
                </tbody>
            </table>
           <p>El promedio es: {average.toFixed(2)}</p>
      </div>
    );
  }
  
  export default Table;