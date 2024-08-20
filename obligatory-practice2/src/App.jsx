import Table from './components/Table'

const App = () =>{
  const netIncomes = [
    {brand: 'McDonalds', income: 1291283},
    {brand: 'Burger King', income: 1927361},
    {brand: 'KFC', income: 1098463}];

    return (
      <div>
        <h1>Fast Food</h1>
        <Table data={netIncomes} />
      </div>
    );
  }

export default App