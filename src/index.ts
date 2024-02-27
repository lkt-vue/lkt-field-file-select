import "./../lkt-field-file-select.scss"

import {App, Plugin} from "vue";
import {default as fieldFileSelect} from "./lib-components/LktFieldFileSelect.vue";
import LktFieldSelect from "lkt-field-select";
import LktFieldFile from "lkt-field-file";

const LktFieldFileSelect: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-field-file-select') === undefined) app.component('lkt-field-file-select', fieldFileSelect);
        if (app.component('lkt-field-select') === undefined) app.use(LktFieldSelect)
        if (app.component('lkt-field-file') === undefined) app.use(LktFieldFile)
    },
};

export default LktFieldFileSelect;