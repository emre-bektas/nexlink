"use client";
import ArticleHeader from "@/components/ui/article-header";
import ProseComponent from "@/components/ui/prose";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {ArrowRight, Code2} from "lucide-react";
import AnchorTitle from "@/components/ui/anchor-title";
import HoverCard from "@/components/ui/hover-card";

export default function page() {
    return (
        <main className="flex-auto">
            <article className="flex h-full flex-col py-10">

                <ArticleHeader title={"👋 Hoş Geldiniz!"} subtitle={"Başlangıç"}/>

                <ProseComponent>
                    <p className="lead">
                        Nexlink UI Kit, web sitenizde kullanabileceğiniz çeşitli butonlar, seçim kutuları ve
                        diğer kullanıcı arayüzü bileşenlerini içeren kapsamlı bir kütüphanedir. İster bir profesyonel,
                        ister bir hobi tasarımcısı olun, bu kit herkesin kolayca anlayıp kullanabileceği şekilde
                        tasarlanmıştır.
                    </p>
                    <div className="not-prose mb-16 mt-6 flex gap-3">
                        <Button color={"secondary"} radius={"full"}
                                variant={"flat"}
                                as={Link}
                                href={"/docs/setup"}
                                className={"font-medium"}
                                endContent={<ArrowRight className={"w-4"}/>}>
                            Kurulum
                        </Button>
                    </div>
                    <AnchorTitle id={"what-offer"} as="h3">Neler Sunuyoruz</AnchorTitle>
                    <p>
                        Nexlink UI Kit, web projelerinizde kullanım için özenle hazırlanmış, modern ve duyarlı
                        kullanıcı arayüzü bileşenleri sunar. Butonlar, seçim kutuları, metin alanları, açılır menüler ve
                        çok daha fazlasını içeren bu kit ile tasarımınızı kolayca özelleştirebilirsiniz.
                    </p>


                    <AnchorTitle id={"resources"}>Başlarken</AnchorTitle>

                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>

                        <HoverCard
                            title={"Kurulum"}
                            description={"Kitinizi nasıl indireceğiniz ve projenize nasıl entegre edeceğinizle ilgili adımlar."}
                            Icon={Code2}
                            href={"/docs/setup"}

                        />
                    </div>
                </ProseComponent>
            </article>
        </main>
    )
}
