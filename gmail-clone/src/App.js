import {useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux"
import { selectSendMessageIsOpen } from "./features/mailSlice"
import { selectUser } from "./features/userSlice"
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
  const sendMessageisOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
        }))

      } 
    })
  }, [])


  return (
    <Router>

      {!user ? (
        <Login />
      ): (
      <div className="app">
        <Header />

        <div className="app-body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageisOpen && < SendMail />}
          </div>
          )}
    </Router>
  );
}

export default App;
