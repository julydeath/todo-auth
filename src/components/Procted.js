import { useNavigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    const navigate = useNavigate()
    if (isLoggedIn === false) {
        return navigate('/login');
    }
    return children;
};
export default Protected;