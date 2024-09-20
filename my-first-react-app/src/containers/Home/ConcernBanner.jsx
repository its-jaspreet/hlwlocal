import React from "react";
import "../../styles/Home/concern-banner.css"

function ConcernForm() {
    return (
        <div className="concern-form">
            <form>
                {/* <label for="topic">Select topic:</label> */}
                <select id="topic" name="topic" defaultValue={"placeholder"}>
                    <option value="placeholder" disabled>Select topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                </select>

                <div id="names">
                    <div>
                        {/* <label for="fname" id="fname-label">First Name:</label><br/> */}
                        <input type="text" id="fname" name="fname" placeholder="First name" required/>
                    </div>
                    <div>
                        {/* <label for="lname" id="lname-label">Last Name:</label><br/> */}
                        <input type="text" id="lname" name="lname" placeholder="Last name"/>
                    </div>
                </div>

                {/* <label for="email" id="email-label">Email:</label> */}
                <input type="email" id="email" name="email" placeholder="Enter email" required/>

                {/* <label for="message" id="message-label">Message:</label>   */}
                <textarea rows="4" id="message" name="message" placeholder="Message" required/>

                <div id="checkbox">
                    <input type="checkbox" id="check" name="checkbox" required/>
                    <label htmlFor="check" id="check-label">By submitting this form, I agree that the information entered will be used to contact me.</label>
                </div>

                <button type="submit" value="Send" id="send-button">
                    Send
                    <img src="./src/assets/Home/concernBanner/top-right-arrow.svg"></img>
                </button>
            </form>
        </div>
    );
}

function ConcernBanner() {
    return (
        <div className="concern-banner">
            <div id="col1">
                <div id="row1">
                    <div id="text">
                     <h1>Have concerns?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div id="row2">
                    <div id="email">
                        <div>
                            <img src="./src/assets/Home/concernBanner/email.svg"/>
                        </div>
                        <div>
                            <p id="heading">Email us</p>
                            <p id="info">contact@salonx.com</p>
                        </div>
                    </div>
                    <div id="call">
                        <div>
                            <img src="./src/assets/Home/concernBanner/phone.svg"/>
                        </div>
                        <div>
                            <p id="heading">Call us</p>
                            <p id="info">06 51 22 23 24</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="col2"><ConcernForm/></div>
        </div>
    );
}

export default ConcernBanner;