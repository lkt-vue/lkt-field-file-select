import { Option } from "lkt-field-select/dist/index";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    uploadResource: {
        type: StringConstructor;
        default: string;
    };
    uploadResourceData: {
        type: ObjectConstructor;
        default: () => {};
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    upperDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    choiceDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: {
            (arrayLength: number): Option[];
            (...items: Option[]): Option[];
            new (arrayLength: number): Option[];
            new (...items: Option[]): Option[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => Option[];
    };
    disabledOptions: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    canTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOptionsMessage: {
        type: StringConstructor;
        default: undefined;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    resourceData: {
        type: ObjectConstructor[];
        default: () => {};
    };
    searchStringResourceParam: {
        type: StringConstructor;
        default: string;
    };
    searchPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    useResourceSlot: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplay: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplayEdition: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    uploadResource: {
        type: StringConstructor;
        default: string;
    };
    uploadResourceData: {
        type: ObjectConstructor;
        default: () => {};
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: undefined;
    };
    mandatory: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetMessage: {
        type: StringConstructor;
        default: string;
    };
    mandatoryMessage: {
        type: StringConstructor;
        default: string;
    };
    infoMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    upperDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    choiceDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: {
            (arrayLength: number): Option[];
            (...items: Option[]): Option[];
            new (arrayLength: number): Option[];
            new (...items: Option[]): Option[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => Option[];
    };
    disabledOptions: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    canTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOptionsMessage: {
        type: StringConstructor;
        default: undefined;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    resourceData: {
        type: ObjectConstructor[];
        default: () => {};
    };
    searchStringResourceParam: {
        type: StringConstructor;
        default: string;
    };
    searchPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    useResourceSlot: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplay: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplayEdition: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    label: string;
    reset: boolean;
    disabled: boolean;
    multiple: boolean;
    options: Option[];
    readonly: boolean;
    class: string;
    mandatory: boolean;
    placeholder: string;
    tabindex: number;
    resource: string;
    accept: string;
    modelValue: string | unknown[];
    uploadResource: string;
    uploadResourceData: Record<string, any>;
    palette: string;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    resetMessage: string;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    switchEditionMessage: string;
    valid: boolean;
    closeOnSelect: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    emptyLabel: boolean;
    disabledOptions: unknown[];
    canTag: boolean;
    noOptionsMessage: string;
    resourceData: Record<string, any>;
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
}, {}>;
export default _default;
