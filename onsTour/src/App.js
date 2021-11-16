import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddToDB from "./Components/AddToDB/AddToDB";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivetRoute/PrivetRoute";
import Details from "./Components/Details/Details";
import About from "./Components/About/About";
import AllPackages from "./Components/AllPackages/AllPackages";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserUpdate from "./Components/UserUpdate/UserUpdate";
import MyBooking from "./Components/MyBooking/MyBooking";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addToDB">
            <AddToDB></AddToDB>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/signIn">
            <Signin></Signin>
          </Route>
          <Route path="/signUp">
            <Signup></Signup>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/users/:id">
            <UserUpdate></UserUpdate>
          </PrivateRoute>
          <PrivateRoute path="/allPackages">
            <AllPackages></AllPackages>
          </PrivateRoute>
          <PrivateRoute path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/users">
            <Users></Users>
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
