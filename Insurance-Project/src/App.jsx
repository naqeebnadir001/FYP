import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import PolicyProcessPage from './PolicyProcess';
import Navbar from './navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policy-process" element={<PolicyProcessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
