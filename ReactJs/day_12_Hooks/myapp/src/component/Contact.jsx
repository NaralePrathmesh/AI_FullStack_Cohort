
import { useParams,useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <h1>Contact</h1>
            <h2>{id}</h2>
            <h2>{location.pathname}</h2>

            <button onClick={()=>navigate("/")}>Go to Home</button>
        </>
    );
};

export default Contact;
