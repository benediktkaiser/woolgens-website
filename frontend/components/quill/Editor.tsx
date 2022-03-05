import React, {useState} from "react";
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, {Quill} from "react-quill";
import parse from "html-react-parser"

import MagicUrl from 'quill-magic-url'
Quill.register('modules/magicUrl', MagicUrl)

const Editor = () => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ],
        magicUrl: true,
    }

    return (
        <div>
            <div className="rounded border-2 border-dark-light">
                <ReactQuill
                    theme="bubble"
                    modules={modules}
                    value={value}
                    onChange={setValue}
                />
            </div>

            Words: {value.split(" ").length-1}

            <div className="prose prose-invert">
                {parse(value)}
            </div>
        </div>
    )
}

export default Editor
