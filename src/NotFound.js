import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops Page Not Found</h2>
            <p>Click <Link to=" / "> here </Link> to get redirected</p>
        </div>
    );
}
 
export default NotFound;