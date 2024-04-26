import {html_beautify} from "js-beautify";


interface ElementConfig {
    classes: string[];
    label?: string;
    props?: {
        readonly?: boolean,
        type?: string;
        value?: string;
    };
}

function generateButtonsHtml(elConfig: ElementConfig[]): string {
    let elHtml = elConfig.map(config => {
        const classes = config.classes.join(' ').trim();
        const props = config.props ? Object.entries(config.props).map(([key, value]) => `${key}="${value}"`).join(' ') : "";

        return `
<input class="input_${classes && (" " + classes)}" placeholder="${config.label ?? "Yazı alanı"}" ${props}>`;
    }).join('');

    let html = elConfig.length > 1 ? `<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem;align-items: center; ">${elHtml}</div>` : elHtml;

    return html_beautify(html, {
        indent_size: 2,
        extra_liners: []
    });
}


export const inputDocs = [
    {
        key: "default",
        title: "",
        code: generateButtonsHtml([{
            classes: [""],
        }])
    },
    {
        key: "disabled",
        title: "Devre Dışı Bırakma",
        code: generateButtonsHtml([{
            classes: ["input_disabled"],
        }]),
    },
    {
        key: "read-only",
        title: "Sadece Oku",
        code: generateButtonsHtml([{
            classes: [""],
            props: {
                readonly: true,
                value : "x@nextlink.com"
            }
        }])
    },
    {
        key: "sizes",
        title: "Boyut",
        code: generateButtonsHtml([
            {
                classes: ["input_sm"],
                label: "Küçük"
            },
            {
                classes: [""],
                label: "Orta"
            },
            {
                classes: ["input_lg"],
                label: "Büyük"
            }
        ]),
    },
    {
        key: "radius",
        title: "Yarıçap",
        code: generateButtonsHtml([
            {classes: ["input_rounded_full"], label: "Tam Yarıçap"},
            {classes: ["input_rounded_lg"], label: "Büyük Yarıçap"},
            {classes: ["input_rounded_md"], label: "Orta Yarıçap"},
            {classes: ["input_rounded_sm"], label: "Küçük Yarıçap"},
            {classes: ["input_rounded_none"], label: "Yarıçapı Olmayan"}
        ]),
    },
    {
        key: "colors",
        title: "Renkler",
        code: generateButtonsHtml([
            {classes: []},
            {classes: ["input_primary"]},
            {classes: ["input_secondary"]},
            {classes: ["input_success"]},
            {classes: ["input_warning"]},
            {classes: ["input_danger"]}
        ]),
    },
    {
        key: "variants",
        title: "Varyantlar",
        code: generateButtonsHtml([
            {classes: [""], label: "Flat"},
            {classes: ["input_bordered"], label: "Bordered"},
            {classes: ["input_underlined"], label: "Underlined"},
            {classes: ["input_faded"], label: "Faded"},
        ]),
    },
]
