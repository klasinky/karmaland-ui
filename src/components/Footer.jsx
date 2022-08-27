import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-copyright">
                Copyright © {year}{" "}
                <a
                    href="https://zclut.github.io/portfolio/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    zClut
                </a>
                {" "}& {" "}
                <a
                    href="https://www.klasinky.com/"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    Klasinky
                </a>
            </div>
        </div>
    );
};

export default Footer;
