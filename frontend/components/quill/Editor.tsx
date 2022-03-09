import React, {FC} from "react";
import 'react-quill/dist/quill.bubble.css';
import ReactQuill, {Quill} from "react-quill";

import MagicUrl from 'quill-magic-url'
import BlotFormatter from 'quill-blot-formatter';
import ImageCompress from 'quill-image-compress';
import Emoji from "quill-emoji";
import countWords from "../../core/helpers/countWords";

Quill.register('modules/magicUrl', MagicUrl)
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageCompress', ImageCompress);
Quill.register("modules/emoji", Emoji);

interface EditorProps {
    content: string,
    setContent: (value: string) => void,
    showWords?: boolean
    maxWords?: number
}

const Editor: FC<EditorProps> = ({showWords = false, maxWords, content, setContent}) => {

    const modules = {
        toolbar: [
            [{'header': [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{'list': 'ordered'}, {'list': 'bullet'}, 'image'],

            [{'color': []}, {'background': []}],
            [{'align': []}],
            ['clean'],
        ],
        magicUrl: true,
        blotFormatter: {},
        "emoji-shortname": true,
        imageCompress: {
            quality: 0.5,
            maxWidth: 500,
            maxHeight: 500,
            imageType: 'image/png',
            debug: false,
            suppressErrorLogging: true,
        },
    }

    return (
        <div>
            <div className="rounded border-2 border-dark-light">
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    value={content}
                    onChange={setContent}
                />
            </div>

            {showWords && (
                <div className="flex justify-end mt-1 mr-1 text-gray-500">
                    {countWords(content)}{maxWords && `/${maxWords}`} Words
                </div>
            )}
        </div>
    )
}

export default Editor
