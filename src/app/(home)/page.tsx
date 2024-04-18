"use client";
import ProseComponent from "@/components/ui/prose";
import {Button} from "@nextui-org/react";
import {ArrowRight, BookOpenText, HeartHandshake, MessageCircleQuestion} from "lucide-react";
import AnchorTitle from "@/components/ui/anchor-title";
import HoverCard from "@/components/ui/hover-card";
import ArticleHeader from "@/components/ui/article-header";
import {featuresText} from "@/utils/data";
import Link from "next/link";
import CodeTabs from "@/components/ui/code-tabs";

export default function page() {

    return (
        <main className="flex-auto">
            <article className="flex h-full flex-col py-10">

                <ArticleHeader title={"👋 Hoş Geldiniz!"} subtitle={"Giriş"}/>

                <ProseComponent>
                    <p className="lead">
                        NexLink, web sayfalarından hiperlinkleri çıkarmak ve bu linklerin meta verilerini analiz etmek
                        için güçlü bir araçtır. Geliştiricilere ve içerik üreticilerine, web sayfalarındaki link
                        yapılarını anlamaları ve optimizasyonlarını yapmaları için detaylı veriler sunar.
                    </p>

                    <div className="not-prose mb-16 mt-6 flex gap-3">
                        <Button size={"sm"} color={"secondary"} radius={"full"}
                                variant={"flat"}
                                as={Link}
                                href={"/rate-limits"}
                                className={"font-medium"}
                                endContent={<ArrowRight className={"w-4"}/>}>
                            Oran Sınırları
                        </Button>
                        <Button size={"sm"} radius={"full"}
                                as={Link}
                                href={"/errors"}
                                variant={"flat"}
                                className={"font-medium"}
                        >
                            {"Hatalar"}
                        </Button>
                    </div>
                    <CodeTabs
                        tabs={[
                            {
                                key: "base-url",
                                title: "Temel URL",
                                language: "http",
                                content: "https://localhost:3000/api/"
                            },
                        ]}
                    />

                    <div className="my-16 xl:max-w-none">
                        <AnchorTitle id={"features"}>Özellikler</AnchorTitle>

                        <div
                            className="not-prose mt-4 grid grid-cols-1 gap-8  sm:grid-cols-2 xl:grid-cols-3">
                            {
                                featuresText.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                                        <div className="mt-4">
                                            <Button variant={"flat"}
                                                    size={"sm"}
                                                    as={Link}
                                                    href={item.href}
                                                    radius={"full"}
                                                    endContent={<ArrowRight className={"w-4"}/>}
                                                    color={"secondary"}>Daha fazla bilgi edinin.</Button>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <AnchorTitle id={"resources"}>Kaynaklar</AnchorTitle>

                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>

                        <HoverCard
                            title={"Dökümantasyon"}
                            description={"Detaylı API dökümantasyonuna buradan ulaşabilirsiniz."}
                            Icon={BookOpenText}
                            href={"/docs"}

                        />
                        <HoverCard
                            title={"SSS"}
                            description={"Sıkça sorulan sorular sayfamızı ziyaret edin."}
                            Icon={MessageCircleQuestion}

                        />
                        <HoverCard
                            title={"Destek"}
                            description={"Destek ekibimizle iletişime geçmek için burayı tıklayın."}
                            Icon={HeartHandshake}

                        />
                    </div>
                </ProseComponent>
            </article>
        </main>
    );
}

