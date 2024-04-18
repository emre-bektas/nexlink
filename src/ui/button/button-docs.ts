import {html_beautify} from "js-beautify";


interface ButtonConfig {
    classes: string[];
    label?: string;
}

function generateButtonsHtml(buttonConfigs: ButtonConfig[]): string {
    let buttonsHtml = buttonConfigs.map(config => {
        const classes = config.classes.join(' ').trim();



        return `
<button class="btn_${classes && (" " + classes)}">${config.label ?? "Button"}</button>`;
    }).join('');

    let html = buttonConfigs.length > 1 ? `<div class="flex items-center gap-3">${buttonsHtml}</div>` : buttonsHtml;

    return html_beautify(html, {
        indent_size: 2,
        extra_liners: []
    });
}


export const buttonDocs = [
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
            classes: ["btn_disabled"],
        }]),
    },
    {
        key: "sizes",
        title: "Boyut",
        code: generateButtonsHtml([
            {
                classes: ["btn_sm"],
                label: "Küçük"
            },
            {
                classes: [""],
                label: "Orta"
            },
            {
                classes: ["btn_lg"],
                label: "Büyük"
            }
        ]),
    },
    {
        key: "radius",
        title: "Yarıçap",
        code: generateButtonsHtml([
            { classes: ["btn_rounded_full"], label: "Tam Yarıçap" },
            { classes: ["btn_rounded_lg"], label: "Büyük Yarıçap" },
            { classes: ["btn_rounded_md"], label: "Orta Yarıçap" },
            { classes: ["btn_rounded_sm"], label: "Küçük Yarıçap" },
            { classes: ["btn_rounded_none"], label: "Yarıçapı Olmayan" }
        ]),
    },
    {
        key: "colors",
        title: "Renkler",
        code: generateButtonsHtml([
            { classes: [] },
            { classes: ["btn_primary"] },
            { classes: ["btn_secondary"] },
            { classes: ["btn_success"] },
            { classes: ["btn_warning"] },
            { classes: ["btn_danger"] }
        ]),
    },
    {
        key: "variants",
        title: "Varyantlar",
        code: generateButtonsHtml([
            { classes: ["btn_primary"], label: "Solid" },
            { classes: ["btn_primary btn_bordered"], label: "Bordered" },
            { classes: ["btn_primary btn_light"], label: "Light" },
            { classes: ["btn_primary btn_flat"], label: "Flat" },
            { classes: ["btn_primary btn_ghost"], label: "Ghost" },
            { classes: ["btn_primary btn_shadow"], label: "Shadow" },
        ]),
    },
    {
        key: "icons-text",
        title: "İkon Ve Yazılar",
        code: generateButtonsHtml([
            { classes: ["btn_primary btn_ti"], label: 'Fotoğraf Çek <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>' },
            { classes: ["btn_danger btn_flat btn_ti"], label: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Kullanıcıyı Sil' },
        ]),
    },
    {
        key: "icons",
        title: "İkonlar",
        code: generateButtonsHtml([
            { classes: ["btn_primary btn_icon"], label: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>' },
            { classes: ["btn_danger btn_icon"], label: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>' },
        ]),
    }
]
