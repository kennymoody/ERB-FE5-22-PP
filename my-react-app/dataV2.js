// Menu Lists Data + Path
export const menuLists = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Kyoto",
    url: "/kyoto/",
  },
  {
    id: 3,
    title: "Rome",
    url: "/rome/",
  },
  {
    id: 4,
    title: "Cusco",
    url: "/cusco/",
  },
  {
    id: 5,
    title: "Cairo",
    url: "/cairo/",
  },
  {
    id: 6,
    title: "Travel Tips",
    url: "/traveltips/",
  },
];

// Hero Data + Path

export const heroData = [
  {
    id: 1,
    title: "Capturing the Spirit of the World",
    detail:
      "An editorial journey through history and culture, curated for the modern explorer seeking breathtaking heritage.",
    path: "",
  },
  {
    id: 2,
    title: "Japan Kyoto",
    detail: "City of temples and gardens.",
    path: "/kyoto/",
  },
  {
    id: 3,
    title: "Italy Rome",
    detail: "Experience Eternal City's charm",
    path: "/rome/",
  },
  {
    id: 4,
    title: "Peru Cusco",
    detail: "Historic city of ancient Inca",
    path: "/cusco/",
  },
  {
    id: 5,
    title: "Egypt Cairo",
    detail: "Ancient city on Nile River",
    path: "/cairo/",
  },
  {
    id: 6,
    title: "Essential Travel Tips",
    detail: "Travel tips for all travelers",
    path: "/traveltips/",
  },
];

// Side Bar - Electric Plug SVG Image

import plugtypea from "./src/assets/image/plug_type_A.svg";
import plugtypeb from "./src/assets/image/plug_type_B.svg";
import plugtypec from "./src/assets/image/plug_type_C.svg";
import plugtyped from "./src/assets/image/plug_type_D.svg";
import plugtypee from "./src/assets/image/plug_type_E.svg";
import plugtypef from "./src/assets/image/plug_type_F.svg";
import plugtypeg from "./src/assets/image/plug_type_G.svg";
import plugtypeh from "./src/assets/image/plug_type_H.svg";
import plugtypei from "./src/assets/image/plug_type_I.svg";
import plugtypej from "./src/assets/image/plug_type_J.svg";
import plugtypek from "./src/assets/image/plug_type_K.svg";
import plugtypel from "./src/assets/image/plug_type_L.svg";

// Location Page - Locations Info Data + Path

export const locations = [
  {
    id: 1,
    cardtag: "Japan",
    detail:
      "City of temples and shrines, a cultural and historical hub of Japan",
    flag: "JP",
    path: "/kyoto/",
    title: "kyoto",
    imagesrc:
      "https://images.unsplash.com/photo-1505069446780-4ef442b5207f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/3gX-umzVl9s?si=Wq1GZP3pn2nQXeSI",
    videotitle: "Kyoto Travel Video",
    introh1: "A Legacy Through Time",
    introp: `Kyoto served as Japan's imperial capital for over a millennium
        (794–1868). It was spared from much of the destruction of WWII,
        preserving its countless historical treasures. The city was originally
        modeled after the Tang dynasty capital of Chang'an.`,
    animalimage:
      "https://cdn.pixabay.com/photo/2018/03/04/04/31/bird-3197217_960_720.jpg",
    animaltitle: "Local Avian Life: Rose-ringed Parakeet",
    animalinfo: `While not native, these vibrant green parakeets have established a
        significant population in Japan's urban areas, including Kyoto's temple
        gardens. They are often seen nesting in old trees near shrines.`,
    animalwhere:
      "Look up in the large camphor trees near the Heian Shrine or the outskirts of Arashiyama.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417835.64227443415!2d135.71886944999997!3d35.09819619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3cc3f1%3A0xc0961d366bbb1d3d!2sKyoto%2C%20Japan!5e0!3m2!1sen!2shk!4v1773651796827!5m2!1sen!2shk",
    besttime: "Spring (Cherry Blossoms) or Autumn (Fall Colors)",
    voltage: "100V / 50-60Hz",
    plug: "Type A / B",
    plugimgsrc: [plugtypea,plugtypeb],
    avgtemp: "15°C - 22°C",
    currency: "Japanese Yen (JPY)",
    lang: "Japanese",
    gettingaround: "Excellent bus and subway network; very walkable.",
    weathertitle: "Kyoto, JP",
    weatherlat: "35.0116",
    weatherlon: "135.7683",
    currencyto: "JPY",
    currencyfrom: "HKD",
  },
  {
    id: 2,
    cardtag: "Italy",
    detail: "Taste the flavors of history and monumental architecture.",
    flag: "IT",
    path: "/rome/",
    title: "rome",
    imagesrc:
      "https://images.unsplash.com/photo-1491566102020-21838225c3c8?q=80&w=661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/e6ZtmXxStMY?si=SuhLSIaTCQ18-rqT",
    videotitle: "Rome Travel Video",
    introh1: "The Eternal City",
    introp: `Founded in 753 BC, Rome was the center of the Roman Empire, which dominated the Mediterranean for centuries. It later became the heart of the Catholic Church and a major center of the Renaissance.`,
    animalimage:
      "https://cdn.pixabay.com/photo/2018/10/01/12/22/quaker-parrot-3716040_1280.jpg",
    animaltitle: "Local Avian Life: Monk Parakeet",
    animalinfo: `Rome has become home to large colonies of Monk Parakeets (Quakers). These bright green birds build massive communal nests in the city's pine trees and are known for their loud, social nature.`,
    animalwhere:
      "Visit the Villa Borghese gardens or the parks around the Appian Way to see them in action.",
    maplink: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.7643209635!2d12.5359979!3d41.9100711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRome%2C%20Metropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e0!3m2!1sen!2shk!4v1773737458612!5m2!1sen!2shk`,
    besttime: "April to June or September to October",
    voltage: "230V / 50Hz",
    plug: "Type C / F / L",
    plugimgsrc: [plugtypec,plugtypef,plugtypel],
    avgtemp: "18°C - 28°C",
    currency: "Euro (EUR)",
    lang: "Italian",
    gettingaround: "Metro, buses, and trams; best explored on foot.",
    weathertitle: "Rome, IT",
    weatherlat: "41.9099",
    weatherlon: "12.4964",
    currencyto: "EUR",
    currencyfrom: "HKD",
  },
  {
    id: 3,
    cardtag: "Peru",
    detail: "Dance to the rhythm of the Andes and ancient Inca spirits.",
    flag: "PE",
    path: "/cusco/",
    title: "cusco",
    imagesrc:
      "https://images.unsplash.com/photo-1578362646678-a1b282e43ff8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/WtNv2QDZpdw?si=xAqlFOcGv9ZFiF1s",
    videotitle: "Cusco Travel Video",
    introh1: "Capital of the Inca",
    introp: `Cusco was the religious and administrative center of the Inca Empire. After the Spanish conquest, many colonial buildings were built directly on top of Inca stone foundations, creating a unique architectural hybrid.`,
    animalimage:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/99165595/original.png",
    animaltitle: "Local Avian Life: Andean Cock-of-the-rock",
    animalinfo: `The Andean Cock-of-the-rock is a majestic bird with a vibrant plumage. They are native to the Andes and are frequently seen in the trees around the ruins of Ollantaytambo, near Cusco.`,
    animalwhere:
      "They can be found in the Andes mountain range, near the ruins of Ollantaytambo, and in the trees around the Sacred Valley of the Incas near Cusco.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62065.47533544779!2d-71.98044863080358!3d-13.529932480267101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2sCusco%2C%20Peru!5e0!3m2!1sen!2shk!4v1773738914545!5m2!1sen!2shk",
    besttime: "May to September (Dry Season)",
    voltage: "220V / 60Hz",
    plug: "Type A / C",
    plugimgsrc: [plugtypea,plugtypec],
    avgtemp: "10°C - 20°C",
    currency: "Peruvian Sol (PEN)",
    lang: "Spanish, Quechua",
    gettingaround: "Walking in the city; Taxis for longer distances.",
    weathertitle: "Cusco, PE",
    weatherlat: "-13.5317",
    weatherlon: "-71.9667",
    currencyto: "PEN",
    currencyfrom: "HKD",
  },
  {
    id: 4,
    cardtag: "Egypt",
    detail: "Witness the great pyramids and the timeless Nile river.",
    flag: "EG",
    path: "/cairo/",
    title: "cairo",
    imagesrc:
      "https://images.unsplash.com/photo-1559738933-d69ac3ff674b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/oUFN7I67dIU?si=CWDbVNCUxe8w-K31",
    videotitle: "Cairo Travel Video",
    introh1: "Gateway to Antiquity",
    introp: `Cairo has been a major center of Islamic culture for centuries. Nearby Giza is home to the only remaining wonder of the ancient world: the Great Pyramid of Khufu.`,
    animalimage:
      "https://cdn.pixabay.com/photo/2022/01/22/10/35/lapwing-6956818_1280.jpg",
    animaltitle: "Local Avian Life: Spur-winged Lapwing",
    animalinfo: `The Spur-winged Lapwing is a striking bird with a distinctive crest and bold black and white markings. They are often seen in open areas, such as parks and gardens, where they forage for insects and small invertebrates.`,
    animalwhere:
      "Can be found in open areas such as the Al-Azhar Park, the gardens of the Gezira Island, and other green spaces in Cairo, particularly in the early morning when they are most active.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33663491335!2d31.217264820551346!3d30.059556316618387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2shk!4v1773740319301!5m2!1sen!2shk",
    besttime: "Spring (Cherry Blossoms) or Autumn (Fall Colors)",
    voltage: "220V / 50Hz",
    plug: "Type C / F",
    plugimgsrc: [plugtypec,plugtypef],
    avgtemp: "20°C - 35°C",
    currency: "Egyptian Pound (EGP)",
    lang: "Arabic",
    gettingaround: "Metro, taxis, and ride-sharing apps like Uber.",
    weathertitle: "Cairo, EG",
    weatherlat: "30.044419",
    weatherlon: "31.188423",
    currencyto: "EGP",
    currencyfrom: "HKD",
  },
];

// Location Page - Location Attraction Cards Data

export const locationAttractionCards = [
  {
    id: 1,
    path: "/kyoto/",
    title: "KyotFushimi Inari-taishao",
    info: "Famous for its thousands of vermilion torii gates winding up the mountain.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/06/09/13/11/fushimi-inari-shrine-5278323_1280.jpg",
  },
  {
    id: 2,
    path: "/kyoto/",
    title: "Kinkaku-ji",
    info: "The Golden Pavilion, a Zen temple whose top two floors are covered in gold leaf.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2019/02/14/06/08/kinkaku-ji-3995909_1280.jpg",
  },
  {
    id: 3,
    path: "/cusco/",
    title: "Machu Picchu",
    info: "The largest and most famous of the three Incan citadels in Peru.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/03/11/20/20/peru-2135770_1280.jpg",
  },
  {
    id: 4,
    path: "/cusco/",
    title: "Plaza de Armas",
    info: "The Plaza de Armas is a public square in Cusco, Peru, in the center of the city.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2015/06/29/12/52/space-825551_960_720.jpg",
  },
  {
    id: 5,
    path: "/rome/",
    title: "Colosseum",
    info: "The largest ancient amphitheatre ever built, used for gladiatorial contests.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505450_1280.jpg",
  },
  {
    id: 6,
    path: "/rome/",
    title: "Vatican Museums",
    info: "Home to the Sistine Chapel and some of the world's most important art.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/07/24/19/14/italy-2535745_1280.jpg",
  },
  {
    id: 7,
    path: "/cairo/",
    title: "Pyramids of Giza",
    info: "The iconic tombs of the Pharaohs, guarded by the Great Sphinx.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/09/19/14/38/landscape-5584652_1280.jpg",
  },
  {
    id: 8,
    path: "/cairo/",
    title: "Egyptian Museum",
    info: "Houses the world's most extensive collection of Pharaonic antiquities.",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/04/30/09/28/pharaoh-5112078_1280.jpg",
  },
];

// Location Page - Location Gallery Cards Data

export const locationGallery = [
  {
    id: 1,
    path: "/kyoto/",
    name: "Kyoto",
    imagesrc:
      "https://cdn.pixabay.com/photo/2023/07/09/09/13/woman-8115753_1280.jpg",
    title: "Kyoto Gallery",
    info: "Ancient temples and serene shrines beautifully grace this historic city, offering visitors a peaceful glimpse into Japan’s spiritual heart.",
  },
  {
    id: 2,
    path: "/kyoto/",
    name: "Kyoto",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/04/07/01/21/japan-5011710_1280.jpg",
    title: "Kyoto Gallery",
    info: "Towering bamboo groves sway gently in the peaceful forest of Arashiyama, creating one of Kyoto’s most magical scenes.",
  },
  {
    id: 3,
    path: "/kyoto/",
    name: "Kyoto",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/12/12/14/47/kyoto-3014833_1280.jpg",
    title: "Kyoto Gallery",
    info: "Experience the timeless elegance, spiritual depth, and unmatched cultural richness that only Kyoto can beautifully offer.",
  },
  {
    id: 4,
    path: "/kyoto/",
    name: "Kyoto",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/06/16/18/26/buddha-5306810_1280.jpg",
    title: "Kyoto Gallery",
    info: "Numerous World Heritage sites and cultural treasures await curious visitors at every corner of this enchanting city.",
  },
  {
    id: 5,
    path: "/kyoto/",
    name: "Kyoto",
    imagesrc:
      "https://cdn.pixabay.com/photo/2016/06/03/06/18/japan-1432858_1280.jpg",
    title: "Kyoto Gallery",
    info: "The magnificent Golden Pavilion shines brightly against serene Zen gardens and a peaceful pond, captivating every visitor.",
  },
  {
    id: 6,
    path: "/cairo/",
    name: "Cairo",
    imagesrc:
      "https://cdn.pixabay.com/photo/2018/04/16/16/57/egypt-3325170_1280.jpg",
    title: "Cairo Gallery",
    info: "Historic mosques and lively bazaars fill Cairo’s old quarters, creating an unforgettable atmosphere of culture and commerce.",
  },
  {
    id: 7,
    path: "/cairo/",
    name: "Cairo",
    imagesrc:
      "https://cdn.pixabay.com/photo/2018/10/17/11/45/pyramids-3753769_1280.jpg",
    title: "Cairo Gallery",
    info: "World-famous Egyptian Museum houses dazzling treasures from the pharaohs, including the golden mask of Tutankhamun.",
  },
  {
    id: 8,
    path: "/cairo/",
    name: "Cairo",
    imagesrc:
      "https://cdn.pixabay.com/photo/2018/11/09/11/45/pyramid-3804374_1280.jpg",
    title: "Cairo Gallery",
    info: "The majestic Pyramids of Giza rise dramatically on the city's edge, guarding centuries of incredible history and mystery.",
  },
  {
    id: 9,
    path: "/cairo/",
    name: "Cairo",
    imagesrc:
      "https://cdn.pixabay.com/photo/2019/06/12/12/27/egypt-4269151_1280.jpg",
    title: "Cairo Gallery",
    info: "Bustling Khan el-Khalili bazaar offers spices, gold, and handmade crafts in a maze of colorful narrow streets.",
  },
  {
    id: 10,
    path: "/cusco/",
    name: "Cusco",
    imagesrc:
      "https://cdn.pixabay.com/photo/2012/04/26/22/32/house-43356_1280.jpg",
    title: "Cusco Gallery",
    info: "Every corner of Cusco reveals layers of history spanning thousands of years, from sacred temples to lively festivals.",
  },
  {
    id: 11,
    path: "/rome/",
    name: "Rome",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/08/18/06/30/rome-2653939_1280.jpg",
    title: "Rome Gallery",
    info: "Rome masterfully blends ancient imperial glory with Renaissance masterpieces and the warm energy of modern Italian life.",
  },
  {
    id: 12,
    path: "/cusco/",
    name: "Cusco",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/09/22/09/42/peru-2774925_1280.jpg",
    title: "Cusco Gallery",
    info: "Cusco serves as the perfect gateway to the legendary Machu Picchu, one of the New Seven Wonders of the world.",
  },
  {
    id: 13,
    path: "/rome/",
    name: "Rome",
    imagesrc:
      "https://cdn.pixabay.com/photo/2017/07/01/17/24/rome-2462105_1280.jpg",
    title: "Rome Gallery",
    info: "St. Peter’s Basilica and the Vatican City offer breathtaking art and spiritual wonder at the center of Catholicism.",
  },
  {
    id: 14,
    path: "/rome/",
    name: "Rome",
    imagesrc:
      "https://cdn.pixabay.com/photo/2019/10/06/08/57/tiber-river-4529605_1280.jpg",
    title: "Rome Gallery",
    info: "From the Roman Forum to the Spanish Steps, every step in Rome reveals layers of incredible history.",
  },
  {
    id: 15,
    path: "/rome/",
    name: "Rome",
    imagesrc:
      "https://cdn.pixabay.com/photo/2015/10/25/09/52/italy-1005508_1280.jpg",
    title: "Rome Gallery",
    info: "World-famous fountains, including the Trevi Fountain, sparkle with romance and tradition in every corner of the city.",
  },
  {
    id: 16,
    path: "/cusco/",
    name: "Cusco",
    imagesrc:
      "https://cdn.pixabay.com/photo/2020/01/11/01/07/cusco-4756449_1280.jpg",
    title: "Cusco Gallery",
    info: "Cusco stands proudly as the ancient capital of the mighty Inca Empire, nestled high in the Andes Mountains of Peru.",
  },
  {
    id: 17,
    path: "/cairo/",
    name: "Cairo",
    imagesrc:
      "https://cdn.pixabay.com/photo/2022/08/02/14/01/statue-7360424_1280.jpg",
    title: "Cairo Gallery",
    info: "EFrom the Citadel’s hilltop views to Coptic churches, Cairo reveals layers of history spanning over 4,000 years.",
  },
];

// Location Page - Location Insights Cards Data

export const locationInsights = [
  {
    id: 1,
    path: "/kyoto/",
    title: "🍱 Must-Try Dishes",
    info: "Don't miss Kaiseki Ryori, Kyoto's refined multi-course dining. For a quick treat, try Matcha-flavored sweets in Uji or Yudofu (tofu hot pot) near Nanzen-ji temple.sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    path: "/kyoto/",
    title: "🚌 Getting Around",
    info: "Kyoto's bus network is extensive. A one-day bus pass is highly recommended. For a unique perspective, rent a bicycle to navigate the flat city streets and scenic river paths.",
  },
  {
    id: 3,
    path: "/kyoto/",
    title: "🛋️ Accommodation",
    info: "Kyoto's accommodations range from cozy inns to luxurious hotels. There are many options for budget-conscious travelers, including budget-friendly hostels and budget-friendly hotels.",
  },
  {
    id: 4,
    path: "/kyoto/",
    title: "🎉 Events and Festivals",
    info: "Kyoto hosts a variety of festivals and events, including the Kyoto Festival, the Kyoto International Film Festival, and the Kyoto International Music Festival.",
  },
  {
    id: 5,
    path: "/rome/",
    title: "🍝 Must-Try Dishes",
    info: "Indulge in authentic Carbonara or Cacio e Pepe. For a street snack, grab a Supplì (fried rice ball) and finish with artisanal Gelato from a local gelateria.",
  },
  {
    id: 6,
    path: "/rome/",
    title: "🚶 Getting Around",
    info: "The best way to experience Rome is on foot. The historic center is mostly walkable. Use the Metro for longer distances, but be mindful of your belongings in crowded tourist areas.",
  },
  {
    id: 7,
    path: "/cusco/",
    title: "🥘 Must-Try Dishes",
    info: "Try Lomo Saltado (stir-fried beef) or Alpaca steak for a local specialty. To combat altitude sickness, sip on Coca tea, which is readily available in most hotels and cafes.",
  },
  {
    id: 8,
    path: "/cusco/",
    title: "🚐 Getting Around",
    info: "Use colectivos (shared vans) for affordable travel to the Sacred Valley. Within Cusco, the city center is best explored on foot, though be prepared for steep cobblestone streets.",
  },
  {
    id: 9,
    path: "/cairo/",
    title: "🍲 Must-Try Dishes",
    info: "Sample Koshary, Egypt's beloved national dish of lentils, rice, and pasta. For breakfast, try Ta'ameya (Egyptian falafel) and end your meal with Om Ali, a warm bread pudding.",
  },
  {
    id: 10,
    path: "/cairo/",
    title: "🚘 Getting Around",
    info: "Use Uber or Careem for reliable, fixed-price transportation. The Cairo Metro is an efficient way to bypass heavy traffic, though it can be very crowded during peak hours.",
  },
];

// Side Bar - Travel Tips Cards Data

export const traveltipscards = [
  {
    id: 1,
    title: "Pack Light & Smart",
    details:
      "Focus on layers. Choose fabrics like merino wool that resist odors and dry quickly. Remember: you can always do laundry abroad!",
  },
  {
    id: 2,
    title: "Digital Security",
    details:
      "Use a VPN on public Wi-Fi. Keep offline maps (Google Maps) and translations (Google Translate) downloaded for areas with poor signal.",
  },
  {
    id: 3,
    title: "Health & Wellness",
    details:
      "Stay hydrated and adjust to local time zones immediately to beat jet lag. Always carry a basic first-aid kit with essentials.",
  },
  {
    id: 4,
    title: "Cultural Etiquette",
    details: `"Learn basic phrases: "Hello", "Thank you", and "Please". Research local tipping customs and dress codes for religious sites."`,
  },
  {
    id: 5,
    title: "Financial Planning",
    details:
      "Notify your bank of travel plans. Carry at least two different cards and some local emergency cash hidden separately.",
  },
  {
    id: 6,
    title: "Sustainable Travel",
    details:
      "Carry a reusable water bottle and shopping bag. Support local artisans and choose eco-friendly transportation when possible.",
  },
];

// Travel Tips Page - Travel Tips Checklist Data

export const traveltipschecklist = [
  {
    id: 1,
    title: "Passport & Visas",
  },
  {
    id: 2,
    title: "Travel Insurance Docs",
  },
  {
    id: 3,
    title: "Universal Power Adapter",
  },
  {
    id: 4,
    title: "Portable Power Bank",
  },
  {
    id: 5,
    title: "Prescription Medications",
  },
  {
    id: 6,
    title: "Noise-Canceling Headphones",
  },
  {
    id: 7,
    title: "Reusable Water Bottle",
  },
  {
    id: 8,
    title: "Emergency Contact List",
  },
  {
    id: 9,
    title: "Daypack for Sightseeing",
  },
  {
    id: 10,
    title: "Comfortable Walking Shoes",
  },
];
