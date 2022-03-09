import React, {FC} from "react";
import parse from "html-react-parser"
import * as xss from 'xss'

interface RendererProps {
    value: string
}

// Update the style whitelist to allow our custom formatting
const whiteList = xss.getDefaultWhiteList();
whiteList.p.push('class');
whiteList.li.push('class');

whiteList.img.push('style');
whiteList.span.push('style');
whiteList.s.push('style');
whiteList.strong.push('style');
const options = {
    whiteList,
    css: {
        whiteList: {
            color: true,
            "background-color": true,
            display: true,
            margin: true,
            float: true,
        },
    },
};


const Renderer: FC<RendererProps> = ({ value }) => {

    return (
        <div className="ql-snow">
            <div className="ql-editor">
                {parse(xss.filterXSS(value, options))}
            </div>
        </div>
    )
}

export default Renderer
