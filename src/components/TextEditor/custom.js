import { Quill } from "react-quill";

class Custom {
    constructor(quill) {
        this.quill = quill;
        this.quill.constructor.prototype.test = this.test;
    }
    test() {
        return "this is test";
    }

    //text-change 또는 submit 또는 어떤 액션 할 때 base64 <-> url

    //이미지 파일 사이즈만 계산해서 return

    // 기타 등등 module 제공
}

class Counter {
    constructor(quill, options) {
        this.quill = quill;
        this.options = options;
        this.container = document.querySelector(options.container);
        // quill.on("text-change", this.update.bind(this));
        // this.update(); // Account for initial contents
    }

    calculate() {
        let text = this.quill.getText();
        if (this.options.unit === "word") {
            text = text.trim();
            // Splitting empty text returns a non-empty array
            return text.length > 0 ? text.split(/\s+/).length : 0;
        } else {
            return text.length;
        }
    }

    update() {
        var length = this.calculate();
        var label = this.options.unit;
        if (length !== 1) {
            label += "s";
        }
        console.log("length: ", length);
        this.container.innerText = length + " " + label;
    }
}

// Quill.register("modules/counter", Counter, true);
Quill.register("modules/custom", Custom, true);

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
    // counter: {
    //     container: "#counter",
    //     unit: "word",
    // },
    custom: {
        //여긴 옵션 (constructor의 두번째 인자)
    },
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
];

export { modules, formats };
