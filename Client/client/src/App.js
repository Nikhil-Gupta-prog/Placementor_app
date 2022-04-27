import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import FormPage from "./Pages/FormPage";
import Layout from "./Components/Layout/Layout";
import NotFoundPage from "./Pages/NotFoundPage";

import ProfilePage from "./Pages/ProfilePage";
import { isAutheticated } from "./Components/Authentication/helper/AuthRoutes";

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
          {isAutheticated() && (
            <Route path="/form" exact>
              <FormPage />
            </Route>
          )}
          {isAutheticated() && (
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
          )}
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
