import { defineComponent as b, ref as a, watch as h, resolveComponent as n, openBlock as r, createElementBlock as k, createVNode as B, createBlock as v, createCommentVNode as w } from "vue";
import { generateRandomString as D } from "lkt-string-tools";
import V from "lkt-field-select";
import M from "lkt-field-file";
const R = { class: "lkt-field-file-select" }, F = /* @__PURE__ */ b({
  __name: "LktFieldFileSelect",
  props: {
    modelValue: { type: String, default: "" },
    name: { type: String, default: D(16) },
    label: { type: String, default: "" },
    uploadResource: { type: String, default: "" },
    uploadResourceData: { type: Object, default: () => ({}) },
    accept: { type: String, default: "*/*" },
    placeholder: { type: String, default: "" },
    palette: { type: String, default: "" },
    readMode: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" },
    class: { type: String, default: "" },
    valid: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    upperDropdown: { type: Boolean, default: !1 },
    choiceDropdown: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: void 0 },
    resource: { type: String, default: "" },
    resourceData: { type: [Object], default: () => ({}) },
    searchStringResourceParam: { type: String, default: "query" },
    searchPlaceholder: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" },
    multipleDisplay: { type: String, default: "list" },
    // list || inline
    multipleDisplayEdition: { type: String, default: "inline" }
    // list || inline
  },
  emits: ["update:modelValue"],
  setup(e, { emit: u }) {
    const s = e, c = u, o = a(s.modelValue), f = a(null), p = a(null), i = a("");
    h(o, (l) => c("update:modelValue", l));
    const y = () => {
    }, m = (l) => {
      console.log("uploaded file", "r: ", l);
    };
    return (l, t) => {
      const g = n("lkt-field-select"), S = n("lkt-field-file");
      return r(), k("div", R, [
        B(g, {
          modelValue: o.value,
          "onUpdate:modelValue": t[0] || (t[0] = (d) => o.value = d),
          ref_key: "input",
          ref: f,
          label: e.label,
          "read-mode": e.readMode,
          disabled: e.disabled,
          readonly: e.readonly,
          resource: e.resource,
          "resource-data": e.resourceData,
          options: e.options,
          "close-on-select": e.closeOnSelect,
          searchable: e.searchable,
          "upper-dropdown": e.upperDropdown,
          "choice-dropdown": e.choiceDropdown,
          "empty-label": e.emptyLabel,
          multiple: e.multiple,
          "search-string-resource-param": e.searchStringResourceParam,
          "search-placeholder": e.searchPlaceholder,
          "use-resource-slot": e.useResourceSlot,
          "multiple-display": e.multipleDisplay,
          "multiple-display-edition": e.multipleDisplayEdition
        }, null, 8, ["modelValue", "label", "read-mode", "disabled", "readonly", "resource", "resource-data", "options", "close-on-select", "searchable", "upper-dropdown", "choice-dropdown", "empty-label", "multiple", "search-string-resource-param", "search-placeholder", "use-resource-slot", "multiple-display", "multiple-display-edition"]),
        !e.readMode && !e.readonly && !e.disabled ? (r(), v(S, {
          key: 0,
          modelValue: i.value,
          "onUpdate:modelValue": t[1] || (t[1] = (d) => i.value = d),
          ref_key: "fileInput",
          ref: p,
          resource: e.uploadResource,
          "resource-data": e.uploadResourceData,
          accept: e.accept,
          palette: e.palette,
          "read-mode": e.readMode,
          disabled: e.disabled,
          readonly: e.readonly,
          onUploading: y,
          onUploadSuccess: m
        }, null, 8, ["modelValue", "resource", "resource-data", "accept", "palette", "read-mode", "disabled", "readonly"])) : w("", !0)
      ]);
    };
  }
}), U = {
  install: (e) => {
    e.component("lkt-field-file-select") === void 0 && e.component("lkt-field-file-select", F), e.component("lkt-field-select") === void 0 && e.use(V), e.component("lkt-field-file") === void 0 && e.use(M);
  }
};
export {
  U as default
};
