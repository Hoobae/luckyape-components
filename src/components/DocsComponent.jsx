import React, {useEffect} from "react";

function DocsComponent(){

    useEffect(() => {
        window.location.href = "https://apejumps.gitbook.io/untitled/";
    })

    return(
        <div>
            <h2>
                Redirecting to documentation...
            </h2>
        </div>
    );
}

export default DocsComponent;
