import * as projectMenu from "../../dom/project-menu";

const _deselectCurrentFilter = () => {
    const selectedBtn = document.querySelector(".filters .selected");
    selectedBtn.classList.remove("selected");
};

const _selectFilter = (btn) => {
    btn.classList.add("selected");
    projectMenu.sortUpcomingTasks(btn);
};

const _changeFilter = (btn) => {
    _deselectCurrentFilter();
    _selectFilter(btn);
};

const _emitClickEvents = (e) => {
    if (
        !e.target.closest("button") ||
        e.target.closest("button").classList.contains("selected")
    ) {
        return;
    } else {
        const btn = e.target.closest("button");
        _changeFilter(btn);
    };
};

const _events = {
    click: _emitClickEvents,
};

const emitEvents = (e) => {
    const eventType = e.type;
    for (const event of Object.keys(_events)) {
        if (event === eventType) {
            _events[event](e);
        };
    };
};

export {
    emitEvents,
};