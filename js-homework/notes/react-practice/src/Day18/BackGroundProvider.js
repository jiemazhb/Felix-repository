import React, { createContext, useReducer } from "react";

// 创建 Context
const BackGroundContext = createContext();

// 初始状态
const initialState = { theme: "light" };

// Reducer 函数
function themeReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { theme: state.theme === "light" ? "dark" : "light" };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

// 创建 Provider
export default function BackGroundProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    return (
        <BackGroundContext.Provider value={{ theme: state.theme, toggleTheme }}>
            {children}
        </BackGroundContext.Provider>
    );
}

export { BackGroundContext };
 
