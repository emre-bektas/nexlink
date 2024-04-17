import ProseComponent from "@/components/ui/prose";
import ArticleHeader from "@/components/ui/article-header";
import CodeTabs from "@/components/ui/code-tabs";
import AnchorTitle from "@/components/ui/anchor-title";

export default function page() {

    return (
        <main className="flex-auto">
            <article className="flex h-full flex-col py-10">

                <ArticleHeader title={"Oran Sınırları"} subtitle={"Api Referans"}/>

                <ProseComponent>
                    <p className="lead">
                        Oran Sınırları, API üzerinden yapılacak istek sayısını belirli bir süre zarfında sınırlayan
                        kurallardır. Bu sınırlamalar, sistem kaynaklarının adil bir şekilde dağıtılmasını sağlamak ve
                        servis kalitesini korumak için uygulanır.
                    </p>

                    <table>
                        <thead>
                        <tr>
                            <th>Başlık</th>
                            <th>Açıklama</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>X-RateLimit-Limit</code></td>
                            <td>Tüketicinin saat başına yapmasına izin verilen maksimum istek sayısı.</td>
                        </tr>
                        <tr>
                            <td><code>X-RateLimit-Remaining</code></td>
                            <td>Geçerli hız sınırı penceresinde kalan istek sayısı.</td>
                        </tr>
                        <tr>
                            <td><code>X-RateLimit-Reset</code></td>
                            <td>Geçerli hız sınırı penceresinin UTC dönem saniyesi cinsinden sıfırlanacağı zaman.</td>
                        </tr>
                        <tr>
                            <td><code>Retry-After</code></td>
                            <td>İsteği yeniden denemeden önce beklenecek saniye sayısı.</td>
                        </tr>
                        </tbody>
                    </table>

                    <AnchorTitle id={"error-message"}>Hata Mesajı</AnchorTitle>
                    <CodeTabs
                        isShowTab={false}
                        tabs={[
                            {
                                key: "base-url",
                                title: "Hata Mesajı",
                                language: "json",
                                content: `{
  "error": "Oran Limiti aşıldı",
  "message": "Bu saat için istek kotanızı aştınız. Lütfen daha sonra tekrar deneyin.",
  "retry_after": "3600"
}`
                            },
                        ]}
                    />



                </ProseComponent>
            </article>
        </main>
    );
}

