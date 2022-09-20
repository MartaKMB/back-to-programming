import { Navigate } from 'react-router-dom';
const permission = false;

function PrivateRoute({ children }) {
    return (
        permission ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute;