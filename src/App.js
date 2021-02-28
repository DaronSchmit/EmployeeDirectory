import './App.css';
import employees from './employees.json';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {employees.map(employee => (
          <EmployeeCard
            name={employee.image}
            title={employee.occupation}
            startDate={employee.startDate}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
