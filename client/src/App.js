import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar/Navbar';
import SignUp from './components/User/SignUp/SignUp';
// import SignIn from './components/User/SignIn/SignIn';
// import { useSelector } from 'react-redux';

function App() {
  
  // const users = useSelector(state => state.user)

  return (
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<SignUp />} />
    //     <Route exact path='/login' element={<SignIn />} />
    //   </Routes>
    // </Router>
    <div className='App'>
      {/* {
          users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>)
      } */}
      <SignUp />
    </div>
  );
}

export default App;
