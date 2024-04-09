import React, {
    useRef,
    useState,
    forwardRef,
    useEffect,
    useLayoutEffect,
} from "react";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import { set } from "lodash";

const Delta = Quill.import("delta");

const toolbarOptions = [
    [{ header: ["1", "2", "3", false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link"],
    ["clean"],
];

export default function TextBlock({ id, onDataChange }) {
    const [values, setValues] = useState({
        text: "",
    });
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    const quillRef = useRef();

    const handleTextChange = (text) => {
        setValues((prevValues) => ({
            ...prevValues,
            text: text,
        }));

        onDataChange(id, { text: text }); // Pass updated text directly
    };

    return (
        <Editor
            ref={quillRef}
            readOnly={readOnly}
            onSelectionChange={setRange}
            onTextChange={handleTextChange}
        />
    );
}

const Editor = forwardRef(
    ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
        const containerRef = useRef(null);
        const defaultValueRef = useRef(defaultValue);
        const onTextChangeRef = useRef(onTextChange);
        const onSelectionChangeRef = useRef(onSelectionChange);

        useLayoutEffect(() => {
            onTextChangeRef.current = onTextChange;
            onSelectionChangeRef.current = onSelectionChange;
        });

        useEffect(() => {
            const container = containerRef.current;
            const editorContainer = container.appendChild(
                container.ownerDocument.createElement("div")
            );
            const quill = new Quill(editorContainer, {
                theme: "snow",
                modules: {
                    toolbar: toolbarOptions,
                },
            });

            ref.current = quill;

            if (defaultValueRef.current) {
                quill.setContents(defaultValueRef.current);
            }

            quill.on(Quill.events.TEXT_CHANGE, (...args) => {
                onTextChangeRef.current?.(quill.root.innerHTML);
            });

            quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
                onSelectionChangeRef.current?.(...args);
            });

            return () => {
                ref.current = null;
                container.innerHTML = "";
            };
        }, [ref]);

        return <div className="editor-wrapper" ref={containerRef}></div>;
    }
);

Editor.displayName = "Editor";
