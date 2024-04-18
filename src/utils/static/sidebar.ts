export type SidebarMenuEntry = {
    title: string;
    href: string;
    method?: string;
};
export type SidebarMenuSection = {
    title: string;
    menus: SidebarMenuEntry[];
};

export const docMenu: SidebarMenuSection[] = [
    {
        title: "Başlangıç",
        menus: [
            {
                title: "Giriş",
                href: "/docs",
            },
            {
                title: "Kurulum",
                href: "/docs/setup",
            },
        ]
    },
    {
        title: "Bileşenler",
        menus: [
            {
                title: "Button",
                href: "/docs/component/button",
                method: "Yeni",
            },
        ]
    }
]

export const apiMenu: SidebarMenuSection[] = [
    {
        title: "API Referansı",
        menus: [
            {
                title: "Giriş",
                href: "/",
            },
            {
                title: "Oran Sınırları",
                href: "/rate-limits",
            },
            {
                title: "Hatalar",
                href: "/errors",
            }
        ]
    },
    {
        title: "Bağlantılar",
        menus: [
            {
                title: "Yeni Bağlantı Oluştur",
                href: "",
                method: "post",
            },
            {
                title: "Bağlantı Alma",
                method: "get",
                href: "",
            },
            {
                title: "Bağlantıyı Düzenle",
                method: "put",
                href: "",
            },
            {
                title: "Bağlantıyı Sil",
                method: "del",
                href: "",
            },
        ]
    }
]

export function findMenuIndexByHref(menus: SidebarMenuSection[], href: string): { sectionIndex: number, menuIndex: number } | null {
    for (let sectionIndex = 0; sectionIndex < menus.length; sectionIndex++) {
        const section = menus[sectionIndex];
        const menuIndex = section.menus.findIndex(menu => menu.href === href);
        if (menuIndex !== -1) {
            return { sectionIndex, menuIndex };
        }
    }
    return null;
}
