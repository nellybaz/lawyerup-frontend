import "./App.css";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ForgotPasswordPage from "./pages/forgotpassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
      </Switch>
    </Router>
  );
}

export default App;
