import React, {FC, useState} from "react";
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, {Quill} from "react-quill";

import MagicUrl from 'quill-magic-url'

Quill.register('modules/magicUrl', MagicUrl)

interface EditorProps {
    showWords?: boolean
}

const Editor: FC<EditorProps> = ({showWords = false}) => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', {
                'color': []
            }],
            ['blockquote', 'code-block', 'image'],
            [{
                'align': []
            },{
                list: 'ordered'
            }, {
                list: 'bullet'
            }],
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

            {showWords && (
                <div className="flex justify-end text-gray-500">
                    {value.split(" ").length-1} Words
                </div>
            )}
        </div>
    )
}

export default Editor
