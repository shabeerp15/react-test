import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useError = () => {
    const navigate = useNavigate();
  
    const errorHandler = (err) => {
        if (!err?.response) {
            // alert('No Server Response');
            toast.error('No Server Response');
        } else if (err.response?.status === 400) {
            toast.error('Missing Username or Password');
        } else if (err.response?.status === 401) {
            toast.error('Unauthorized');
            navigate('/authentication/sign-up');
        } else {
            toast.error('Login Failed');
        }
    };

    return { errorHandler };
};

export default useError;