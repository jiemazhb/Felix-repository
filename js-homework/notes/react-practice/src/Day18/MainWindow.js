import React, { useContext } from "react";
import { BackGroundContext } from "./BackGroundProvider";

function MainWindow() {
    const { theme, toggleTheme } = useContext(BackGroundContext);

    const appStyles = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    };

    return (
        <div style={appStyles}>
            {/* <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1> */}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default MainWindow;
