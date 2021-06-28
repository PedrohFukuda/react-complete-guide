import UserContext from "./users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserProvider = (props) => {
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UserContext.Provider value={usersContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
