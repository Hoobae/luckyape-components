import React, {useEffect} from "react";

function DocsComponent(){

    useEffect(() => {
        window.location.href = "https://apejumps.gitbook.io/untitled/";
    })

    return(
        <div>
            <h2>
                Redirect
            </h2>
        </div>
    );
}

export default DocsComponent;