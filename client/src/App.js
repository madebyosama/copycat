import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/copycat' element={<Home />} />
          <Route exact path='/copycat/form' element={<Form />} />
          <Route exact path='/copycat/thankyou' element={<ThankYou />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}
