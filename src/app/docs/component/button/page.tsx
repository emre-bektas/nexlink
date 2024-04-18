import "@/ui/button/button.css"
import ArticleHeader from "@/components/ui/article-header";
import ProseComponent from "@/components/ui/prose";
import CodeTabs from "@/components/ui/code-tabs";
import {buttonDocs} from "@/ui/button/button-docs";
import AnchorTitle from "@/components/ui/anchor-title";

export default function page() {


    return (
        <>
            <ArticleHeader title={"Button"} subtitle={"Bileşen"}/>
            <ProseComponent>
                <p className={"lead"}>
                    Buton bileşeni, kullanıcıların tıklama yoluyla işlemleri tetiklemesini sağlar. Tasarım ve
                    kullanılabilirlik açısından esnek yapıda olan bu bileşen, çeşitli boyut, renk ve
                    işlevselliklerle gelmektedir.
                </p>
                <div className={"space-y-4"}>
                    <AnchorTitle id={"usage"}>Kullanımı</AnchorTitle>
                    {
                        buttonDocs.map((item, i) => (
                            <div key={i}>
                                {
                                    item.title && (
                                        <AnchorTitle id={item.key} as={"h3"}>{item.title}</AnchorTitle>
                                    )
                                }
                                <CodeTabs
                                    tabs={[
                                        {
                                            key: "preview-button",
                                            title: "Önizleme",
                                            html: true,
                                            content: item.code,
                                        },
                                        {
                                            key: "preview-code",
                                            title: "HTML Kodu",
                                            language: "htmlbars",
                                            content: item.code,
                                        },
                                    ]}
                                />
                            </div>
                        ))
                    }

                </div>

            </ProseComponent>
        </>

    )
}
