const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const port = process.env.PORT || 4000;
const cors= require("cors")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cinema = [
    {
        id:1,
        name:"GOLD CLASS",
        img:"https://media.cinemaximum.com.tr/1110//Files/goldclass/1920x420px_goldclass_new.jpg",
        description:"Ev rahatlığında sinema keyfi!"
    },
    {
        id:2,
        name:"SKYBOX",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/1920x420px_skybox.jpg",
        description:"Skybox"
    },    
    {
        id:3,
        name:"SKY AUDITORIUM",
        img:"https://media.cinemaximum.com.tr/1110//files/Teknolojiler/1920x420px_skyAuditorium.jpg",
        description:"Cinemaximum’dan Sky Auditorium!"
    },
    {
        id:4,
        name:"PREMIUM CINEMA",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/1920x420px_premium.jpg",
        description:"Sinemaseverlere deri koltuklarda konforlu ve rahat bir sinema deneyimi sunan Premium Cinema, Cinemaximum'da seyircilerle buluşuyor!"
    },
    {
        id:5,
        name:"IMAX",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/_MAX.jpg",
        description:"Bugüne Dek Yaratılmış “Gerçeğe En Yakın” Sinema Teknolojisi!"
    },
    {
        id:6,
        name:"4DX",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/4DX.jpg",
        description:"4DX ile Filmi Yaşamaya Hazır Mısın?"
    },
    {
        id:7,
        name:"STARIUM",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/starium_yenigorsel.jpg",
        description:"‘Starium’ Türkiye’de sadece Cinemaximum'da!"
    },
    {
        id:8,
        name:"SCREENX",
        img:"https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/ScreenX.jpg",
        description:"ScreenX ile Dünyanı Genişlet!"
    },
]

const news = [

{
    id:1,
    title:"Will Smith, David Leitch’in Yeni Filminde Başrolde!",
    img: "http://tr.web.img3.acsta.net/r_640_360/newsv7/21/02/07/13/37/1585252.jpg",
    date: "22.07.17",
    content: "Hollywood'un önemli aktörlerinden biri haline gelen, Oscar adaylıkları bulunan Will Smith, son dönemin parlayan sinemacılarından olan ve setin her kademesinde görev almak gibi bir tecrübeye sahip David Leitch, yeni projelerinde bir araya geliyor. Hali hazırda birkaç yeni projesi daha bulunan Leitch, yıllarca emek vererek ulaştığı yönetmenlik kariyerinde çok ara vermek istemiyor gibi gözüküyor. Will Smith, David Leitch'in yöneteceği yeni gerilim filmi “Fast & Loose”un başrolünde oynayacak. Film, Tijuana'da uyanan ve oraya nasıl geldiğini hatırlamayan John Riley (Smith) adında bir adamın hikayesini anlatıyor. İpuçlarını ortaya çıkardıktan sonra, daha önce iki hayat yaşadığını anlar. Birinde, parayla, kızlarla ve güçle “Scarface” yaşam tarzını sürdürdüğü büyük bir suç örgütünün zengin lideriydi. Diğer hayatında ise, ailesi ve başka pek bir şeyi olmayan gizli bir CIA ajanı olarak yaşıyordu. Riley, hangisinin gerçek hayatı olduğunu ve hangisini yaşamaya devam etmek istediğini bulmak durumundadır. Will Smith, David Leitch'in yöneteceği yeni gerilim filmi “Fast & Loose”un başrolünde oynayacak. Film, Tijuana'da uyanan ve oraya nasıl geldiğini hatırlamayan John Riley (Smith) adında bir adamın hikayesini anlatıyor. İpuçlarını ortaya çıkardıktan sonra, daha önce iki hayat yaşadığını anlar. Birinde, parayla, kızlarla ve güçle “Scarface” yaşam tarzını sürdürdüğü büyük bir suç örgütünün zengin lideriydi. Diğer hayatında ise, ailesi ve başka pek bir şeyi olmayan gizli bir CIA ajanı olarak yaşıyordu. Riley, hangisinin gerçek hayatı olduğunu ve hangisini yaşamaya devam etmek istediğini bulmak durumundadır. "


},

{
    id:2,
    title:"Tom Holland, Gelecek Spider-Man Filmi Hakkında Konuştu",
    img: "http://tr.web.img4.acsta.net/r_640_360/newsv7/21/02/05/10/31/0959477.jpg",
    date: "22.07.17",
    content: "Jon Watts'ın yönetmen koltuğuna oturduğu Spider-Man 3 filmi ile ilgili Tom Holland'dan yeni bir açıklama geldi. Variety'ye konuşan Holland, şimdilerde filmin çekimlerinde bulunuyor. Holland'ın açıklamaları, Spider-Man 3 hakkındaki beklentilerin artmasına neden olacak gibi görünüyor. (Spoiler içerir.) Holland, Variety'ye şu sözleri sarf etti: Şunu söyleyebilirim ki film, bugüne kadar yapılmış solo süper kahraman filmleri arasında en tutkulu olanı. Oturup senaryoyu okursanız, ne yapmaya çalıştıklarını görürsünüz. Başarılı oluyorlar. Bu gerçekten etkileyici. Daha önce hiç buna benzer bir solo süper kahraman filmi görmemiştim. Biliyorsunuz ki ben o Spider-Man'e dönüşen küçük şanslı pisliğim. Film için önümüzde çok fazla çekim var. Noelden önce başlamıştık ve 7 hafta boyunca çekim yaptık. Noel için ara verdik ve sonra yeniden başladık. Bırakın bir parçası olmayı, filmi izlemek için bile geri kalan herkes kadar heyecanlıyım. Dedikodulara göre üç Spider-Man evreni Spider-Man 3'te birleştirilecek. Yani Tobey Maguire, Andrew Garfield, Tom Holland, Kirsten Dunst, Emma Stone ve Zendaya aynı evrende buluşacak. Ayrıca Sam Raimi imzalı Spider-Man filmlerinin Octopus'u Alfred Molina, Amazing Spider-Man'in Electro'su Jamie Foxx ve Marvel'ın Netflix dizilerinde izlediğimiz Daredevil'ın kahramanı Charlie Cox, Spider-Man 3'te yer alacak. Alfred Molina haberi dışında geri kalan isimler hakkında resmi açıklama henüz gelmedi."


},

{
    id:3,
    title:"Yeni Resident Evil Filminin Gösterim Tarihi Açıklandı",
    img: "http://tr.web.img4.acsta.net/r_640_360/newsv7/21/02/05/10/03/3808519.jpg",
    date: "22.07.17",
    content: "Resident Evil oyunlarının yeniden uyarlanacağı geçtiğimiz yıl duyurulmuştu. Şimdi ise  Kaya Scodelario ve Hannah John-Kamen başrollü filmin vizyon tarihi açıklandı. Söylenenlere göre film 3 Eylül 2021 tarihinde gösterimini yapacak. Resident Evil filmi için oyunlarda yer alan orijin hikaye kullanılacak. Umbrella Corporation'ın yaydığı bir virüs nedeniyle ansızın mahvolan dünyayı anlatan Resident Evil oyunları, yeniden uyarlanıyor. Filmin 3 Eylül 2021'de vizyona gireceği resmi olarak açıklandı. Robert Kulzer'ın yapımcılığını üstleneceği Resident Evil filminde Hannah John-Kamen, oyunların meşhur başkarakteri Jill Valentine'a hayat verecek. Kaya Scodelairo, Claire Redfield'ı; Robbie Amell ise Chris Redfield'ı canlandıracak. Tom Hopper, Albert Weskel ile; Neal McDonough, William Birkin ile ve Avan Jogia, Leon karakteri ile Resident Evil'daki yerini alacak. Donal Logue'u ise Brian Irons olarak izleyeceğiz. Karakter, 1998 yılına kadar Raccoon Polis Merkezi'nin komiseri olarak biliniyor. Resident Evil'ın yeniden hayata geçirileceği, 2018 yılında açıklanmıştı. Ancak James Wan'in projeden ayrılması, olayları zora sokmuştu. Şimdi ise yeniden harekete geçiliyor. Sony Pictures ve Constantin Films, Resident Evil için iş birliğine gidiyor. Oyunlar daha önce Milla Jovovich'in başrolünde beyaz perdeyle buluşmuştu. Filmlerin yönetmenliğini Paul W.S. Anderson üstleniyordu. Aksiyon ve korkuyu birleştiren serinin çok beğenildiği söylenemez. Ancak yine de eğlenceli bir seyirlik imkanı sunuyordu."


},

{
    id:4,
    title:"Marvel, 'Blade' Filmi İçin Senaristini Buldu",
    img: "http://tr.web.img2.acsta.net/r_640_360/newsv7/21/02/07/20/16/2767954.jpg",
    date: "22.07.17",
    content: "Green Book ve Moonlight performanslarıyla kısa sürede iki kez Oscar kazanan Mahershala Ali, korku kahramanı olarak yeni Blade filminin başrolünde yer alıyor. Ali'nin kadroya katılımı ve Marvel'ın 2000'li yılların başlarından itibaren devam eden seriye yeni bir versiyon tasarladığı gerçeği, Marvel'ın 2019'daki San Diego Comic-Con duyuruları arasında ortaya çıktı. Marvel, son altı ay, Ali'nin doğrudan dahil olduğu titiz bir çalışmayla birçok yazar görüşmesi gerçekleştirdi ve sonunda bu isim netlik kazandı. Marvel'ın çeşitliliğe odaklanmasının ve temsili, anahtar bir faktör haline getirmesinin bir yansıması olarak yalnızca siyahi yazarlar ciddi bir şekilde değerlendirildi. David Goyer, 1998-2004 yılları arasında vizyona giren ve Wesley Snipes'ın oynadığı üç orijinal Blade filmini yazmıştı ve şimdi siyahi bir kadın yazar işin başına geçti. Bu isim olan Stacy Osei-Kuffour'un işe alınması, bir Marvel filmi yazan ilk siyahi kadın yazar olduğu için oldukça önemli bir adım. Bu arada, Captain Marvel 2'de çalışan Nia DaCosta, Marvel'ın ilk siyahi kadın yönetmeniydi. Marv Wolfman ve Gene Colan tarafından destekleyici bir karakter olarak yaratılan Blade, ilk olarak 1973'te Tomb of Dracula #10'da göründü ve bir kült favori haline geldi. Annesinin doğum sırasında bir kan emici tarafından ısırılıp öldürülmesi sayesinde bir insan-vampir melezi. Marvel, bir sonraki adımda Osei-Kuffour ile çalışacak bir yönetmeni işe alacak. Osei-Kuffour, Pen15'te çalışan ve komedi dizilerinde olağanüstü yazarlık dalında Emmy adaylığı kazanan ve kariyer hızla yükselen bir senarist. Daha geniş kitlelerce farkına varılmasını sağlayan iş ise HBO’nun Alan Moore - Dave Gibbons çizgi romanından uyarlanan Watchmen’deki yazı ekibinin bir parçası olması ve en iyi dizi dalında WGA Ödülü kazanmasıydı. Kuffour, 1970'lerin Amerika'sında Al Pacino ve Logan Lerman'ı Nazi Avcıları olarak gösteren Amazon’un kana bulanmış mini dizisi Hunters’ta da hikaye editörü olarak görev yaptı. Osei-Kuffour, Domnhall Gleeson'ın rol aldığı HBO suç gerilim filmi Run'da da çalıştı. Osei-Kuffour çalışan bir yazar olmak için mücadele ederken, New York'ta yıllarca oyunlar ve şiirler yazdı."


}
]


app.get("/api", (req,res)=>{
    res.json(news)
})
app.get("/api/cinema", (req,res)=>{
    res.json(cinema)
})

app.get("/api/news", (req, res) => {
    res.json(news)
})

app.get("/api/news/:id", (req, res) => {
const newsid = news.find(newsid => newsid.id === parseInt(req.params.id))
res.json(newsid)
})


app.listen(4000)