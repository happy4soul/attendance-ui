import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import './App.css'
import LoginComponent from "./components/LoginComponent";
// import SubjectComponent from "./components/SubjectComponent";
import Card from "./components/Card";

const App = () => {
  const initialDetails = [
    {
      id: 1,
      name: 'Akshay',
      regno: 11,
      userName: 'Akshay@gmail.com',
      password: 'Akshay@123',
      marked: false
    },
    {
      id: 2,
      name: 'Ayushi',
      regno: 12,
      userName: 'Ayushi@gmail.com',
      password: 'Ayushi@123',
      marked: false
    },
    {
      id: 3,
      name: 'Bhavya',
      regno: 13,
      userName: 'Bhavya@gmail.com',
      password: 'Bhavya@123',
      marked: false
    },
    {
      id: 4,
      name: 'Baibhav',
      regno: 14,
      userName: 'Baibhav@gmail.com',
      password: 'Baibhav@123',
      marked: false
    },
    {
      id: 5,
      name: 'Chaitanya',
      regno: 15,
      userName: 'Chaitanya@gmail.com',
      password: 'Chaitanya@123',
      marked: false
    },
    {
      id: 6,
      name: 'Chinmayi',
      regno: 16,
      userName: 'Chinmayi@gmail.com',
      password: 'Chinmayi@123',
      marked: false
    },
    {
      id: 7,
      name: 'Dhriti',
      regno: 17,
      userName: 'Dhriti@gmail.com',
      password: 'Dhriti@123',
      marked: false
    },
    {
      id: 8,
      name: 'Daksh',
      regno: 18,
      userName: 'Daksh@gmail.com',
      password: 'Daksh@123',
      marked: false
    },
    {
      id: 9,
      name: 'Eshi',
      regno: 19,
      userName: 'Eshi@gmail.com',
      password: 'Eshi@123',
      marked: false
    },
    {
      id: 10,
      name: 'Elom',
      regno: 20,
      userName: 'Elom@gmail.com',
      password: 'Elom@123',
      marked: false
    },
  ];

  const [details, setDetails] = useState(() => {
    const detailsJSON = localStorage.getItem('details');
    return detailsJSON ? JSON.parse(detailsJSON) : initialDetails;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [subjects, setSubjects] = useState([])

  useEffect(() => {
    localStorage.setItem('details', JSON.stringify(details));
  }, [details]);



  const handleCheckboxChange = (index, user) => {
    const updatedDetails = [...details];
    const currentItem = updatedDetails[index];

    if (user.name === currentItem.name) {
      currentItem.marked = !currentItem.marked;
      setDetails(updatedDetails);
      if (currentItem.marked) {
        alert(`Your Attendance has been marked successfully`);
      }
      else {
        alert('Mark your attendance')
      }

    } else {

      alert('you cannot change the attendance of the other user! ')
    }
  };

  const handleLogin = (username, password) => {
    const student = details.find(
      (item) => item.userName === username && item.password === password
    );

    if (student) {
      setIsLoggedIn(true);
      alert('Welcome!')
      setLoggedInUser(student)
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoggedInUser(null)
  }

  // const handleAddSubject = (subject) => {
  //   setSubjects([...subjects, subject]);
  // };

  // const handleDeleteSubject = (index) => {
  //   const updatedSubjects = subjects.filter((_, i) => i !== index);
  //   setSubjects(updatedSubjects);
  // };

  useEffect(() => {
    const storageEventListener = (e) => {
      if (e.key === 'details') {
        const updatedDetails = JSON.parse(e.newValue)
        setDetails(updatedDetails)
      }
    }

    window.addEventListener('storage', storageEventListener)

    return () => {
      window.removeEventListener('storage', storageEventListener)
    }
  }, [])

  return (
    <>
      <div><Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /></div>



      <Card className="main-div">

        <div className="searchbar-container">
          {isLoggedIn ? (
            <SearchBar details={details} />
          ) : (
            <LoginComponent handleLogin={handleLogin} />
          )}

        </div>

        {/* <SubjectComponent onAddSubject={handleAddSubject} /> */}
        {/* {isLoggedIn && <SubjectComponent
        isLoggedIn={isLoggedIn}
        onAddSubject={handleAddSubject}
        subjects={subjects}
        onDeleteSubject={handleDeleteSubject}
      />} */}


        {/*
      <div className="subjects-list">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-item">
            <p>{subject.subjectName}</p>
            <p>Present: {subject.presentClasses}</p>
            <p>Total: {subject.totalClasses}</p>
          </div>
        ))}
      </div> */}
        {isLoggedIn && (
          <center id="My-Attendance" className="content-container">
            <div className="row-container">

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h2>Name</h2>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h2>Regno</h2>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h2>Attendance</h2>
                </div>

              </div>

              {details.map((item, index) => (
                <Content
                  key={index}
                  name={item.name}
                  regno={item.regno}
                  marked={item.marked}
                  onCheckboxChange={() => handleCheckboxChange(index, loggedInUser)}
                />
              ))}
            </div>
          </center>
        )}

      </Card>

    </>
  );
};

export default App;
