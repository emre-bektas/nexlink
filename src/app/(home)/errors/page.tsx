import ProseComponent from "@/components/ui/prose";
import ArticleHeader from "@/components/ui/article-header";
import CodeTabs from "@/components/ui/code-tabs";
import AnchorTitle from "@/components/ui/anchor-title";
import {errorCodes} from "@/utils/data";

export default function page() {



    return (
       <>
           <ArticleHeader title={"Hatalar"} subtitle={"Genel Hata Yapısı"}/>

           <ProseComponent>
               <p className="lead">
                   {"API'yı"} kullanırken bu hatalarla karşılaşmanız durumunda, verilen bilgiler
                   doğrultusunda sorunu tanımlayabilir ve uygun çözüm adımlarını uygulayabilirsiniz.
               </p>
               <CodeTabs
                   isShowTab={false}
                   tabs={[
                       {
                           key: "base-url",
                           title: "Örnek Hata Mesajı",
                           language: "json",
                           content: `{
  "error": "Hata_tipi_kodu",
  "message": "Hata mesajı detayı.",
  "code": 400 // HTTP durum kodu
}`
                       },
                   ]}
               />
               <AnchorTitle id={"error-codes"}>Hata Kodları</AnchorTitle>

               {
                   errorCodes.map((item , key) => (
                       <div key={key}>
                           <AnchorTitle as={"h3"} className={"pb-2"} isBordered={true} id={item.code}>{item.title}</AnchorTitle>
                           <ul role="list">
                               <li><strong>Durum:</strong> <code>{item.code}</code></li>
                               <li><strong>Durum Kodu:</strong> <code>{item.status}</code></li>
                               <li><strong>Açıklama:</strong> {item.description}</li>
                               <li><strong>Hata:</strong> {item.message}</li>
                               <li><strong>Çözüm:</strong> {item.solution}</li>
                           </ul>
                       </div>

                   ))
               }

           </ProseComponent>
       </>
    );
}
