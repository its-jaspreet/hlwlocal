import React from "react";

function Copyright() {
    const currentYear = new Date().getFullYear();

    return(
        <div className="copyright">
            © {currentYear} Salon X. All rights reserved.
        </div>
    );
}

export default Copyright;