import Navbar from "./component/Navbar";
import { useState } from "react";
import UserDetails from "./component/UserDetails";

function App() {
  const [Theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Navbar
        title="JavaScript Utils"
        theme={Theme}
        changeTheme={changeTheme}
      ></Navbar>
      <UserDetails />
    </>
  );
}

export default App;
