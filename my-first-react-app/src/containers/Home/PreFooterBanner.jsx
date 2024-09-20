import React from "react";
import PreFooterText from "../../components/Home/PreFooterText";
import "../../styles/Home/pre-footer-banner.css"

function PreFooterBanner() {
    return (
        <div className="pre-footer-banner">
            <div id="content">
                <div id="network">
                    <PreFooterText
                        heading="Social Network"
                        text="Follow us on our network"
                    />
                    <span>
                        <img src="./src/assets/Home/PreFooterBanner/facebook-icon.svg"/>
                        <img src="./src/assets/Home/PreFooterBanner/instagram-icon.svg"/>
                        <img src="./src/assets/Home/PreFooterBanner/threads-icon.svg"/>
                        <img src="./src/assets/Home/PreFooterBanner/twitter-icon.svg"/>
                        <img src="./src/assets/Home/PreFooterBanner/youtube-icon.svg"/>
                    </span>
                </div>
                <hr/>
                <div id="newsletter">
                    <PreFooterText
                        heading="Newsletter"
                        text="Be the first to know"
                    />
                    <span>
                        <input type="text" placeholder="Enter your email"/>
                        <button>Subscribe</button>
                    </span>
                </div>
            </div>
            <div id="maps"> </div>
        </div>
    );
}

export default PreFooterBanner;