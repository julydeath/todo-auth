import { Navigate } from "react-router-dom";
import { useUserAuth } from "./components/auth/UserAuth";

const Protected = ({ children }) => {
  //let { user } = useUserAuth();
  let auth = false;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default Protected;
