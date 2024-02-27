<script setup lang="ts">
import {ref, watch} from "vue";
import {generateRandomString} from "lkt-string-tools";
import {Option} from "lkt-field-select/dist/index";
import {HTTPResponse} from "lkt-http-client";

const props = defineProps({
    modelValue: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    label: {type: String, default: ''},
    uploadResource: {type: String, default: ''},
    uploadResourceData: {type: Object, default: () => ({})},
    accept: {type: String, default: '*/*'},
    placeholder: {type: String, default: '',},
    palette: {type: String, default: ''},
    readMode: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    tabindex: {type: Number, default: undefined},
    mandatory: {type: Boolean, default: false},
    reset: {type: Boolean, default: false},
    resetMessage: {type: String, default: ''},
    mandatoryMessage: {type: String, default: ''},
    infoMessage: {type: String, default: ''},
    errorMessage: {type: String, default: ''},
    switchEditionMessage: {type: String, default: ''},

    class: {type: String, default: ''},
    valid: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    searchable: {type: Boolean, default: false},
    upperDropdown: {type: Boolean, default: false},
    choiceDropdown: {type: Boolean, default: false},
    emptyLabel: {type: Boolean, default: false},
    options: {type: Array<Option>, default: (): Option[] => []},
    disabledOptions: {type: Array, default: (): Array<any> => []},
    multiple: {type: Boolean, default: false},
    canTag: {type: Boolean, default: false},
    noOptionsMessage: {type: String, default: undefined},
    resource: {type: String, default: ''},
    resourceData: {type: [Object], default: () => ({})},
    searchStringResourceParam: {type: String, default: 'query'},
    searchPlaceholder: {type: String, default: ''},
    useResourceSlot: {type: String, default: ''},
    multipleDisplay: {type: String, default: 'list'}, // list || inline
    multipleDisplayEdition: {type: String, default: 'inline'}, // list || inline
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue),
    input = ref(null),
    fileInput = ref(null),
    updatedFile = ref('');

watch(value, v => emit('update:modelValue', v));


const onUploading = () => {},
    onUploadSuccess = (r: HTTPResponse) => {
        console.log('uploaded file', 'r: ', r);
        // rawSheets.value = r.data.sheets;
        // sheets.value = r.data.sheets.map((d, i) => ({value: i, label: d.title}));
        // sheet.value = 0;
        // stepProcess.value.goNext();
        //
        // nextTick(() => {
        //     stepProcess.value.stopLoader();
        // })
    };
</script>

<template>
    <div class="lkt-field-file-select">
        <lkt-field-select
            v-model="value"
            ref="input"
            v-bind:label="label"
            v-bind:read-mode="readMode"
            v-bind:disabled="disabled"
            v-bind:readonly="readonly"
            v-bind:resource="resource"
            v-bind:resource-data="resourceData"
            v-bind:options="options"
            v-bind:close-on-select="closeOnSelect"
            v-bind:searchable="searchable"
            v-bind:upper-dropdown="upperDropdown"
            v-bind:choice-dropdown="choiceDropdown"
            v-bind:empty-label="emptyLabel"
            v-bind:multiple="multiple"
            v-bind:search-string-resource-param="searchStringResourceParam"
            v-bind:search-placeholder="searchPlaceholder"
            v-bind:use-resource-slot="useResourceSlot"
            v-bind:multiple-display="multipleDisplay"
            v-bind:multiple-display-edition="multipleDisplayEdition"
        ></lkt-field-select>
        <lkt-field-file
            v-if="!readMode && !readonly && !disabled"
            v-model="updatedFile"
            ref="fileInput"
            v-bind:resource="uploadResource"
            v-bind:resource-data="uploadResourceData"
            v-bind:accept="accept"
            v-bind:palette="palette"
            v-bind:read-mode="readMode"
            v-bind:disabled="disabled"
            v-bind:readonly="readonly"
            v-on:uploading="onUploading"
            v-on:upload-success="onUploadSuccess"
        ></lkt-field-file>
    </div>
</template>