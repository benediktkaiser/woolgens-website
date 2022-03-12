import React from "react";
import styles from "../../styles/modules/tooltip.module.css";

interface ToolTipProps {
    position?: "top" | "bottom" | "left" | "right"
    text?: React.ReactNode
    children?: React.ReactNode
}

const Tooltip = ({position = "top", text, children}: ToolTipProps) => {

    let positionStyles = styles.Top

    if (position === "left") {
        positionStyles = styles.Left
    } else if (position === "right") {
        positionStyles = styles.Right
    } else if (position === "bottom") {
        positionStyles = styles.Bottom
    }

    return (
        <div className={`${styles.ToolTip} ${positionStyles}`}>
            <div>
                {children}
            </div>
            <div className={`${styles.ToolTipContent} bg-dark-light text-dark-light`}>
                <span className="text-gray-200">
                    {text}
                </span>
            </div>
        </div>
    );
};

export default Tooltip;
