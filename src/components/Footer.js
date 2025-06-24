import React from "react";

export default function Footer(props) {
  const footerStyle = {
    backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
    color: props.mode === "dark" ? "#ffffffcc" : "#042743",
    borderTop: props.mode === "dark" ? "1px solid #444" : "1px solid #ddd",
    padding: "15px 0",
    textAlign: "center",
    fontSize: "0.9rem",
    position: "relative",
    bottom: "0",
    width: "100%",
    marginTop: "auto",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <span>© {new Date().getFullYear()} <strong>Neel</strong>. All rights reserved.</span><br />
        <span>Made with ❤️ by Neel</span>
      </div>
    </footer>
  );
}
