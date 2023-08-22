
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPageForm from './FirstPageForm';
import SecondPage from './SecondPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPageForm />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;