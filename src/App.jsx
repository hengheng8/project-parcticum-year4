import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import List from './components/list/List';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import SignUp from './components/signin/Signin';
import Tracker from './components/homepage/Tracker';
import MangeHabits from './components/homepage/MangeHabit'
const HomePage = () => (
  <>
    <Header />
    <Banner />
    <List />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/manage-habits" element={<MangeHabits />} />
      </Routes>
    </Router>
  );
};

export default App;
