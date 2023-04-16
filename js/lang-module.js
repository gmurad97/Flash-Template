"use strict"

const allLangs = ["az", "en", "ru"];
let currentLang = allLangs[0];
let langOptions = document.querySelectorAll(".option-lang");
const langChangeElements = document.querySelectorAll("[data-lang]");

const langDictionary = {
    "preloader_loading_text": {
        az: "Yüklənir",
        en: "Loading",
        ru: "Загрузка"
    },
    "navbar_menu_home": {
        az: "Ana səhifə",
        en: "Home",
        ru: "Главная"
    },
    "navbar_menu_aboutus": {
        az: "Haqqımızda",
        en: "About us",
        ru: "О Нас"
    },
    "navbar_menu_service": {
        az: "Xidmətlər",
        en: "Service",
        ru: "Услуги"
    },
    "navbar_menu_gallery": {
        az: "Qalereya",
        en: "Gallery",
        ru: "Галерея"
    },
    "navbar_menu_contact": {
        az: "Əlaqə",
        en: "Contact",
        ru: "Контакты"
    },
    "header_base_text": {
        az: "Biznesiniz üçün ən rahat yolu təklif edirik!",
        en: "We offer the best way for your business",
        ru: "Мы предлагаем лучшие решения для вашего бизнеса"
    },
    "info_block_text_support": {
        az: "Dəstək",
        en: "Support",
        ru: "Поддержка"
    },
    "info_block_text_online": {
        az: "Onlayn 24/7",
        en: "Online 24/7",
        ru: "Онлайн 24/7"
    },
    "info_block_text_available": {
        az: "Hazırda onlayn",
        en: "Currently online",
        ru: "Сейчас в сети"
    },
    "info_block_text_contactus": {
        az: "Əlaqə üçün",
        en: "Contact us",
        ru: "Свяжитесь с нами"
    },
    "info_block_text_tel": {
        az: "+994 70 220-32-37",
        en: "+994 70 220-32-37",
        ru: "+994 70 220-32-37"
    },
    "info_block_text_mail": {
        az: "info@flash.az",
        en: "info@flash.az",
        ru: "info@flash.az"
    },
    "heading_text_aboutus": {
        az: "Haqqımızda",
        en: "About us",
        ru: "О нас"
    },
    "aboutus_info_text": {
        az: "Flash şirkəti Amerikada anbar və yük daşıma xidmətlərinə istənilən biznes üçün etibarlı və sərfəli seçimdir. Delaver ştatında müxtəlif həcmli bağlamaların (e-ticarət) saxlanması üçün “A” klass anbarımız fəaliyyət göstərir. Əlavə olaraq bütün növ yüklərin, o cümlədən iri ölçülü və ağır yüklərin ABŞ daxili daşıması üçün öz avtomobil parkımız mövcuddur. Geniş tərəfdaşlar şəbəkəsi və fərdiləşdirilmiş xidmətlə yükün təhlükəsizliyini və daşınma tələblərinə uyğunluğu təmin edirik. Bağlamaların qəbul zamanı heç bir qarışıqlığın yaranmaması üçün qeydiyyat aparılır, növünə,ölçüsünə (çəkisinə) görə qruplaşdırılır və rəflərə yiğılır. Saxlanılan bağlamalar baş verə biləcək vəziyyətlərə qarşı sığortalanır. Anbarda və ərazidə daimi video müşahidə və nəzarət buraxılış məntəqəsi mövcuddur.",
        en: "Flash company is a reliable and cost-effective choice for any business in need of storageand transportationservices in the United States. Our \"A\" grade warehouse operates in Delaware to store variousvolumes of shipments(including e-commerce). Additionally, we have our own fleet of vehicles to transport all typesof loads, includinglarge and heavy ones, within the USA. We ensure the safety of shipments and compliance withtransportationrequirements through our extensive network of partners and customized services. To avoid anyconfusion during theacceptance of shipments, we register, group, and store them on shelves according to their typeand size (weight).The stored shipments are insured against possible risks. The warehouse and the surrounding areaare under constantvideo surveillance and control.",
        ru: "Flash - надежный и экономически выгодный выбор для любого бизнеса, нуждающегося в услугах хранения и транспортировки грузов в США. Наш склад класса \"А\" расположен в Делавэре и позволяет хранить грузы разного объема, включая грузы из электронной коммерции. Кроме того, мы располагаем собственным автопарком для перевозки грузов любого типа, включая крупногабаритные и тяжеловесные грузы, по всей территории США. Мы гарантируем безопасность грузов и соблюдение требований к их транспортировке через наш обширный партнерский сет и индивидуальный подход к каждому клиенту. Чтобы избежать путаницы при приеме грузов, мы регистрируем, группируем и храним их на полках в соответствии с их типом и размером (весом). Хранимые грузы застрахованы от возможных рисков. Склад и прилегающая территория находятся под постоянным видеонаблюдением и контролем."
    },
    "counter_employees": {
        az: "Əməkdaşlarmızın sayı",
        en: "Employees",
        ru: "Сотрудники"
    },
    "counter_miles": {
        az: "Qat olunmuş yol",
        en: "Total miles",
        ru: "Общее количество миль"
    },
    "counter_avg": {
        az: "Müştərilərin ortalama sayı",
        en: "AVG number customers",
        ru: "Среднее количество клиентов"
    },
    "lending_warehouse": {
        az: "Anbar xidməti",
        en: "Warehouse service",
        ru: "Услуги по складу"
    },
    "lending_warehouse_text": {
        az: "Hər növ bağlama üçün sərfəli anbar xidməti və rəqabətli qiymətlər. Ətraflı məlumat almaq üçün bizimlə əlaqə saxlamağınız xahiş olunur.",
        en: "We offer affordable storage services and competitive prices for all kinds of parcels. For detailed information, please contact us.",
        ru: "Мы предлагаем доступные услуги хранения и конкурентоспособные цены на все виды посылок. Для получения более подробной информации, пожалуйста, свяжитесь с нами."
    },
    "lending_delivery": {
        az: "Daşınma xidməti",
        en: "Delivery service",
        ru: "Услуги по доставке"
    },
    "lending_delivery_text": {
        az: "Amerika-nın hər bir nöqtəsinə təhlükəsiz və sürətli yük çatdırılması. Ətraflı məlumat almaq üçün bizimlə əlaqə saxlamağınız xahis olunur.",
        en: "Safe and fast delivery of goods to every corner of America. For detailed information, please contact us.",
        ru: "Безопасная и быстрая доставка товаров в любой уголок Америки. Для получения более подробной информации, пожалуйста, свяжитесь с нами."
    },
    "heading_text_gallery": {
        az: "Qalereya",
        en: "Gallery",
        ru: "Галерея"
    },
    "gallery_control_all": {
        az: "Ümumi",
        en: "All",
        ru: "Все"
    },
    "gallery_control_warehouse": {
        az: "Anbar",
        en: "Warehouse",
        ru: "Склад"
    },
    "gallery_control_delivery": {
        az: "Daşınma",
        en: "Delivery",
        ru: "Доставка"
    },
    "gallery_control_partners": {
        az: "Partnyorlar",
        en: "Partners",
        ru: "Партнеры"
    },
    "moreinfo_heading": {
        az: "Şirkətin qısa təsviri",
        en: "Company summary",
        ru: "Краткое описание компании"
    },
    "moreinfo_text": {
        az: "Flash şirkəti Amerikada anbar və yük daşıma xidmətlərilə, biznes sahiblərinin güvənli və sərfəli bir şəkildə məhsullarını saxlamaq və daşınmaq üçün ən yaxşı seçimdir.",
        en: "The Flash company is the best choice for business owners in the United States who want to safely and affordably store and transport their products with warehouse and delivery services.",
        ru: "Flash - лучший выбор для бизнес-владельцев в США, которые хотят безопасно и по доступным ценам хранить и транспортировать свои продукты с помощью складских и доставочных услуг."
    },
    "moreinfo_quote": {
        az: "Flash.az",
        en: "Flash.az",
        ru: "Flash.az"
    },
    "social_heading": {
        az: "Bizi izləyin",
        en: "Keep connected",
        ru: "Оставайтесь на связи"
    },
    "contact_heading": {
        az: "Əlaqə məlumatları",
        en: "Contact information",
        ru: "Контактная информация"
    }
};

const langFixedDictionary = {
    "Warehouse": {
        az: "Anbar xidməti",
        en: "Warehouse",
        ru: "Услуги склада"
    },
    "Delivery": {
        az: "Daşınma xidməti",
        en: "Delivery",
        ru: "Услуги доставки"
    }
};

function changeLang(lang) {
    if (allLangs.includes(lang)) {
        langChangeElements.forEach(langElement => {
            langElement.innerHTML = langDictionary[langElement.getAttribute("data-lang")][lang];
        });
        document.querySelector(".selected-lang").innerHTML = `<img src='img/content/lang/lang_${lang}.jpg' alt='${lang}'>`.concat(" ", lang);
        document.querySelector("[data-typing-words]").setAttribute("data-typing-words", `${langFixedDictionary["Warehouse"][lang]}, ${langFixedDictionary["Delivery"][lang]}`);
        return lang;
    }
    else {
        changeLang("en");
        return "en"
    }
}

changeLang(currentLang);

for (const langOption of langOptions) {
    langOption.addEventListener("click", function () {
        changeLang(langOption.dataset.langOpt);
    });
}