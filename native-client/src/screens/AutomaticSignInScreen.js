import { useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const AutomaticSignInScreen = () => {
  const { automaticSignIn } = useContext(AuthContext);

  useEffect(() => {
    automaticSignIn();
  }, []);

  return null;
};

export default AutomaticSignInScreen;
