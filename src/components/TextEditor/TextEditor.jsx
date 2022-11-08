import { forwardRef } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./custom";
//forwardRef로 해야함
const TextEditor = forwardRef(({ value, onChange, onBlur, ...props }, ref) => {
    return (
        <ReactQuill
            // ref={(element) => {
            //     if (ref && element !== null) {
            //         ref.current = element;
            //     }
            // }}
            ref={ref}
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
        />
    );
});

export default TextEditor;
