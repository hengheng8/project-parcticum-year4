import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import List from './components/list/List';
import Footer from './components/footer/Footer';
import Signin from './components/login/Signin';
import SignUp from './components/signin/Signup';
import Tracker from './components/homepage/Tracker';
import MangeHabits from './components/homepage/MangeHabit'
import VitalTask from './components/homepage/VitalTask'
import MyTask from './components/homepage/MyTask'
import TaskCategories from './components/homepage/TaskCategories'
import Settings from './components/homepage/Setting'
import Help from './components/homepage/Help'
import GoBack from './components/homepage/GoBack'
import addtask from './components/homepage/AddTask'
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
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/manage-habits" element={<MangeHabits />} />
        
          <Route path="/vital-task" element={<VitalTask />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/task-categories" element={<TaskCategories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/desired-path" element={<GoBack />} />
          <Route path="/add-task" element={<addtask />} />
      </Routes>
    </Router>
  );
};

export default App;
