import { Route } from "react-router";

const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
