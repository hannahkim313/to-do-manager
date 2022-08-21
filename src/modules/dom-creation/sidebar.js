import { appendChildren, setAttributesOf } from "./helper-functions";
import { createImg, createPara, createButton } from "./elements";
import plusLightImg from "../../img/plus-light.svg";
import homeImg from "../../img/home.svg";
import todayImg from "../../img/today.svg";
import upcomingImg from "../../img/upcoming.svg";
import projectsImg from "../../img/folder.svg";
import chevronDownImg from "../../img/chevron-down.svg";

const _createSection = (sectionName, data) => {
    const createSectionBtn = () => {
        const attributes = data.expandable ? { type: "button", class: "expandable" } : { type: "button" };
        const sectionBtn = createButton(attributes);
        const elements = [
            createImg({ src: data.src, alt: data.alt }),
            createPara(data.text)
        ];
        if (data.expandable) elements.push(createImg({ src: chevronDownImg, alt: "Click to expand" }));
        appendChildren(sectionBtn, elements);

        return sectionBtn;
    };

    const section = document.createElement("li");
    setAttributesOf(section, { class: sectionName });
    const elements = [createSectionBtn()];
    appendChildren(section, elements);

    return section;
};

const _createSections = (sectionsData) => {
    const sections = [];
    for (const [sectionName, data] of Object.entries(sectionsData)) {
        sections.push(_createSection(sectionName, data));
    };
    
    return sections;
};

const _createMenu = (sections) => {
    const menu = document.createElement("menu");
    const attributes = { class: "sidebar-sections" };
    setAttributesOf(menu, attributes);
    appendChildren(menu, sections);

    return menu;
};

const _createAddProjectBtn = () => {
    const attributes = { type: "button" };
    const btn = createButton(attributes);
    const elements = [
        createImg({ src: plusLightImg, alt: "Plus icon" }),
        createPara("Add project"),
    ];
    appendChildren(btn, elements);

    return btn;
};

const createSidebar = () => {
    const sidebar = document.createElement("nav");
    const attributes = { class: "sidebar" };
    setAttributesOf(sidebar, attributes);
    const sectionsData = {
        home: {
            src: homeImg,
            alt: "Home icon",
            text: "Home"
        },
        today: {
            src: todayImg,
            alt: "Single day calendar icon",
            text: "Today"
        },
        upcoming: {
            src: upcomingImg,
            alt: "Multiple days calendar icon",
            text: "Upcoming"
        },
        projects: {
            src: projectsImg,
            alt: "Folder icon",
            text: "Projects",
            expandable: true
        }
    };
    const elements = [
        _createMenu(_createSections(sectionsData)),
        _createAddProjectBtn(),
    ];
    appendChildren(sidebar, elements);

    return sidebar;
};

export {
    createSidebar,
};