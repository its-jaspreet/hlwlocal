import React from "react";
import "../../styles/footer.css";
import { footerAbout, footerContactText, footerLink } from "../../assets/arraysOfObjects";


import Column, {fillInColumnLinks} from "../../components/Footer/Column";
import Copyright from "../../components/Footer/Copyright";

function Footer() {
    return (
        <div className="footer">
            <div className="columns">
                <div className="column0">
                    <span>
                        <img src="./src/assets/Footer/brand-logo.png"/>
                        <h1>SALON-X</h1>
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque suscipit rem quia. 
                    </p>
                </div>
                <Column
                    key={1}
                    class="column1"
                    heading="Links"
                    text={footerLink.map(fillInColumnLinks)}
                />
                <Column
                    key={2}
                    class="column2"
                    heading="About"
                    text={footerAbout.map(fillInColumnLinks)}
                />
                <Column
                    key={3}
                    class="column3"
                    heading="Contact"
                    text={footerContactText}
                />
            </div>
            <hr/>
            <Copyright/>
        </div>
    );
    
}

export default Footer;