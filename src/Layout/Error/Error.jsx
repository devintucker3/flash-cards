import React from "react";
import {Link} from "react-router-dom";

function Error({setError}) {
    setError(undefined);
    return (
        <div className="alert alert-danger">
            <h4 className="alert-heading">Error occurred</h4>
            <Link to="/">
                <h5 className="text-danger">Return to home page</h5>
            </Link>
        </div>
    )
}

export default Error;