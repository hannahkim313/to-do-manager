import * as element from "./html-elements";
import * as image from "./image-elements";
import * as method from "../helper-functions";

const create = () => {
    const elements = [
        image.createAppLogo(),
        element.createHeading("1", "To-Do Manager"),
    ];
    const header = document.createElement("header");
    method.appendChildren(header, elements);
    
    return header;
};

export {
    create,
};