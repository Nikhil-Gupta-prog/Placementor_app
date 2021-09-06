import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import FormPage from "./Pages/FormPage";
import Layout from "./Components/Layout/Layout";

import ProfilePage from "./Pages/ProfilePage";


function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/signin" exact>
          <SignInPage />
        </Route>
        <Route path="/form" exact>
            <FormPage />
        </Route>
       
        <Route path="/profile" exact>
            <ProfilePage />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
