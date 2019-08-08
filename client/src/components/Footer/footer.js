import React from "react";
import "./footer.css";

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    return (
        <div style={phantom}>
            <div style={style} className="footer-copyright">
                <div className="container" style={{textAlign: 'center'}}>
                    © Copyright
                </div>
            </div>
        </div>
    )
};

export default Footer;