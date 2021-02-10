import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Parser from 'html-react-parser';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckedditor = () => {
    const [discription, setDiscription] = useState('');
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setDiscription(data);
                }}
                placeHolder='hello'
            />
            <div>
                {
                  Parser(discription)
                }
              
            </div>

        </div>
    );
};

export default Ckedditor;