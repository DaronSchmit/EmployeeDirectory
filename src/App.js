import './App.css';
import employees from './employees.json';
import EmployeeCard from './components/EmployeeCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <EmployeeCard
            name={employees[0].name}
            title={employees[0].title}
            startDate={employees[0].startDate}
          />
      </header>
    </div>
  );
}

export default App;
