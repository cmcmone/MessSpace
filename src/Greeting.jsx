function UserGreeting(props) {
  return <h2>Welcome back!</h2>;
}

function GuestGreeting(props) {
  return <h2>Please sign up.</h2>;
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
