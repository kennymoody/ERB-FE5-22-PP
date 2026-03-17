export const services = [
  {
    id: 1,
    icon: "fa-solid fa-wallet",
    info: "Saving Money",
    text: "Lorem ipsum dolor, sit amet consectetur",
  },
  {
    id: 2,
    icon: "fa-solid fa-tree",
    info: "Endless Hiking",
    text: "Lorem ipsum dolor, sit amet consectetur",
  },
  {
    id: 3,
    icon: "fa-solid fa-socks",
    info: "Amazing Comfort",
    text: "Lorem ipsum dolor, sit amet consectetur",
  },
];

import tour1 from "./src/assets/IMG/tibet.jpg";
import tour2 from "./src/assets/IMG/southkorea.jpg";
import tour3 from "./src/assets/IMG/london.jpg";
import tour4 from "./src/assets/IMG/newyork.webp";
import tour5 from "./src/assets/IMG/paris.jpg";

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "Sep 21st, 2026",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.",
    location: "China",
    days: "6 days",
    price: "from $4000",
  },
  {
    id: 2,
    image: tour2,
    date: "Aug 21st, 2026",
    title: "Seoul Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.",
    location: "South Korea",
    days: "7 days",
    price: "from $8000",
  },
  {
    id: 3,
    image: tour3,
    date: "Dec 21st, 2026",
    title: "London Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.",
    location: "UK",
    days: "10 days",
    price: "from $12000",
  },
  {
    id: 4,
    image: tour4,
    date: "Dec 21st, 2026",
    title: "New York Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.",
    location: "USA",
    days: "10 days",
    price: "from $18000",
  },
  {
    id: 5,
    image: tour5,
    date: "Dec 21st, 2026",
    title: "Paris Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.",
    location: "France",
    days: "3 weeks",
    price: "from $30K",
  },
];

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
    title: "Japan - Kyoto",
    detail: "Explore Japan",
    path: "/kyoto/",
  },
  {
    id: 3,
    title: "Italy - Rome",
    detail: "Visit Rome",
    path: "/rome/",
  },
  {
    id: 4,
    title: "Peru - Cusco",
    detail: "Discover Cusco",
    path: "/cusco/",
  },
  {
    id: 5,
    title: "Egypt - Cairo",
    detail: "Visit Cairo",
    path: "/cairo/",
  },
  {
    id: 6,
    title: "Essential Travel Tips",
    detail: "maybe useful",
    path: "/traveltips/",
  },
];

import plugtypea from "./src/assets/image/plug-type-a.svg";
import plugtypeb from "./src/assets/image/plug-type-b.svg";
import plugtypec from "./src/assets/image/plug-type-c.svg";
import plugtyped from "./src/assets/image/plug-type-d.svg";
import plugtypee from "./src/assets/image/plug-type-e.svg";
import plugtypef from "./src/assets/image/plug-type-f.svg";
import plugtypeg from "./src/assets/image/plug-type-g.svg";
import plugtypeh from "./src/assets/image/plug-type-h.svg";
import plugtypei from "./src/assets/image/plug-type-i.svg";
import plugtypej from "./src/assets/image/plug-type-j.svg";
import plugtypek from "./src/assets/image/plug-type-k.svg";
import plugtypel from "./src/assets/image/plug-type-l.svg";

export const locations = [
  {
    id: 1,
    cardtag: "Japan",
    detail: "lorem ipsum dolor sit amet consectetur",
    flag: "JP",
    path: "/kyoto/",
    title: "kyoto",
    imagesrc: "https://picsum.photos/seed/kyoto/800/1200",
    video: "https://www.youtube.com/embed/3gX-umzVl9s?si=Wq1GZP3pn2nQXeSI",
    videotitle: "Kyoto Travel Video",
    introh1: "A Legacy Through Time",
    introp: `Kyoto served as Japan's imperial capital for over a millennium
        (794–1868). It was spared from much of the destruction of WWII,
        preserving its countless historical treasures. The city was originally
        modeled after the Tang dynasty capital of Chang'an.`,
    animalimage: "https://picsum.photos/seed/parrot-japan/600/600",
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
    plugimgsrc: plugtypea,
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
    imagesrc: "https://picsum.photos/seed/rome/800/1200",
    video: "https://www.youtube.com/embed/2nd_v997E-M",
    videotitle: "Kyoto Travel Video",
    introh1: "A Legacy Through Time",
    introp: `Kyoto served as Japan's imperial capital for over a millennium
        (794–1868). It was spared from much of the destruction of WWII,
        preserving its countless historical treasures. The city was originally
        modeled after the Tang dynasty capital of Chang'an.`,
    animalimage: "https://picsum.photos/seed/parrot-japan/600/600",
    animaltitle: "Local Avian Life: Rose-ringed Parakeet",
    animalinfo: `While not native, these vibrant green parakeets have established a
        significant population in Japan's urban areas, including Kyoto's temple
        gardens. They are often seen nesting in old trees near shrines.`,
    animalwhere:
      "Look up in the large camphor trees near the Heian Shrine or the outskirts of Arashiyama.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d104597.38794833215!2d135.68361044702148!3d35.011636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3d3f01%3A0x108aa92723bc5677!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sus!4v1700000000000",
    besttime: "Spring (Cherry Blossoms) or Autumn (Fall Colors)",
    voltage: "100V / 50-60Hz",
    plug: "Type A / B",
    plugimgsrc: plugtypea,
    avgtemp: "15°C - 22°C",
    currency: "Japanese Yen (JPY)",
    lang: "Japanese",
    gettingaround: "Excellent bus and subway network; very walkable.",
    weathertitle: "Rome, IT",
    weatherlat: "41.9099",
    weatherlon: "12.4964",
  },
  {
    id: 3,
    cardtag: "Peru",
    detail: "Dance to the rhythm of the Andes and ancient Inca spirits.",
    flag: "PE",
    path: "/cusco/",
    title: "cusco",
    imagesrc: "https://picsum.photos/seed/cusco/800/1200",
    video: "https://www.youtube.com/embed/2nd_v997E-M",
    videotitle: "Kyoto Travel Video",
    introh1: "A Legacy Through Time",
    introp: `Kyoto served as Japan's imperial capital for over a millennium
        (794–1868). It was spared from much of the destruction of WWII,
        preserving its countless historical treasures. The city was originally
        modeled after the Tang dynasty capital of Chang'an.`,
    animalimage: "https://picsum.photos/seed/parrot-japan/600/600",
    animaltitle: "Local Avian Life: Rose-ringed Parakeet",
    animalinfo: `While not native, these vibrant green parakeets have established a
        significant population in Japan's urban areas, including Kyoto's temple
        gardens. They are often seen nesting in old trees near shrines.`,
    animalwhere:
      "Look up in the large camphor trees near the Heian Shrine or the outskirts of Arashiyama.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d104597.38794833215!2d135.68361044702148!3d35.011636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3d3f01%3A0x108aa92723bc5677!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sus!4v1700000000000",
    besttime: "Spring (Cherry Blossoms) or Autumn (Fall Colors)",
    voltage: "100V / 50-60Hz",
    plug: "Type A / B",
    plugimgsrc: plugtypea,
    avgtemp: "15°C - 22°C",
    currency: "Japanese Yen (JPY)",
    lang: "Japanese",
    gettingaround: "Excellent bus and subway network; very walkable.",
    weathertitle: "Cusco, PE",
    weatherlat: "-13.5317",
    weatherlon: "-71.9667",
  },
  {
    id: 4,
    cardtag: "Egypt",
    detail: "Witness the great pyramids and the timeless Nile river.",
    flag: "EG",
    path: "/cairo/",
    title: "cairo",
    imagesrc: "https://picsum.photos/seed/cairo/800/1200",
    video: "https://www.youtube.com/embed/2nd_v997E-M",
    videotitle: "Kyoto Travel Video",
    introh1: "A Legacy Through Time",
    introp: `Kyoto served as Japan's imperial capital for over a millennium
        (794–1868). It was spared from much of the destruction of WWII,
        preserving its countless historical treasures. The city was originally
        modeled after the Tang dynasty capital of Chang'an.`,
    animalimage: "https://picsum.photos/seed/parrot-japan/600/600",
    animaltitle: "Local Avian Life: Rose-ringed Parakeet",
    animalinfo: `While not native, these vibrant green parakeets have established a
        significant population in Japan's urban areas, including Kyoto's temple
        gardens. They are often seen nesting in old trees near shrines.`,
    animalwhere:
      "Look up in the large camphor trees near the Heian Shrine or the outskirts of Arashiyama.",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d104597.38794833215!2d135.68361044702148!3d35.011636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a8d6cd3d3f01%3A0x108aa92723bc5677!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sus!4v1700000000000",
    besttime: "Spring (Cherry Blossoms) or Autumn (Fall Colors)",
    voltage: "100V / 50-60Hz",
    plug: "Type A / B",
    plugimgsrc: plugtypea,
    avgtemp: "15°C - 22°C",
    currency: "Japanese Yen (JPY)",
    lang: "Japanese",
    gettingaround: "Excellent bus and subway network; very walkable.",
    weathertitle: "Cairo, EG",
    weatherlat: "30.044419",
    weatherlon: "31.188423",
  },
];

export const locationAttractionCards = [
  {
    id: 1,
    path: "/kyoto/",
    title: "KyotFushimi Inari-taishao",
    info: "Famous for its thousands of vermilion torii gates winding up the mountain.",
    imagesrc: "https://picsum.photos/seed/inari/600/400",
  },
  {
    id: 2,
    path: "/kyoto/",
    title: "Kinkaku-ji",
    info: "The Golden Pavilion, a Zen temple whose top two floors are covered in gold leaf.",
    imagesrc: "https://picsum.photos/seed/gold/600/400",
  },
  {
    id: 3,
    path: "/cusco/",
    title: "Machu Picchu",
    info: "The largest and most famous of the three Incan citadels in Peru.",
    imagesrc: "https://picsum.photos/seed/machu/600/400",
  },
  {
    id: 4,
    path: "/cusco/",
    title: "Plaza de Armas",
    info: "The Plaza de Armas is a public square in Cusco, Peru, in the center of the city.",
    imagesrc: "https://picsum.photos/seed/plaza/600/400",
  },
];

export const locationGallery = [
  {
    id: 1,
    path: "/kyoto/",
    imagesrc: "https://picsum.photos/seed/kyoto1/600/600",
    title: "Kyoto Gallery",
  },
  {
    id: 2,
    path: "/kyoto/",
    imagesrc: "https://picsum.photos/seed/kyoto2/600/600",
    title: "Kyoto Gallery",
  },
  {
    id: 3,
    path: "/kyoto/",
    imagesrc: "https://picsum.photos/seed/kyoto3/600/600",
    title: "Kyoto Gallery",
  },
  {
    id: 4,
    path: "/kyoto/",
    imagesrc: "https://picsum.photos/seed/kyoto4/600/600",
    title: "Kyoto Gallery",
  },
  {
    id: 5,
    path: "/kyoto/",
    imagesrc: "https://picsum.photos/seed/kyoto5/600/600",
    title: "Kyoto Gallery",
  },
  {
    id: 6,
    path: "/cairo/",
    imagesrc: "https://picsum.photos/seed/cairo1/600/600",
    title: "Cairo Gallery",
  },
  {
    id: 7,
    path: "/cairo/",
    imagesrc: "https://picsum.photos/seed/cairo2/600/600",
    title: "Cairo Gallery",
  },
  {
    id: 8,
    path: "/cairo/",
    imagesrc: "https://picsum.photos/seed/cairo3/600/600",
    title: "Cairo Gallery",
  },
  {
    id: 9,
    path: "/cairo/",
    imagesrc: "https://picsum.photos/seed/cairo4/600/600",
    title: "Cairo Gallery",
  },
  {
    id: 10,
    path: "/cusco/",
    imagesrc: "https://picsum.photos/seed/cusco5/600/600",
    title: "Cusco Gallery",
  },
  {
    id: 11,
    path: "/rome/",
    imagesrc: "https://picsum.photos/seed/rome1/600/600",
    title: "Rome Gallery",
  },
  {
    id: 12,
    path: "/cusco/",
    imagesrc: "https://picsum.photos/seed/cusco2/600/600",
    title: "Cusco Gallery",
  },
];

export const locationLocalTips = [
  {
    id: 1,
    path: "/kyoto/",
    title: "🍱 Must-Try Dishes",
    info: "Don't miss <strong>Kaiseki Ryori</strong>, Kyoto's refined multi-course dining. For a quick treat, try <strong>Matcha-flavored sweets</strong> in Uji or <strong>Yudofu</strong> (tofu hot pot) near Nanzen-ji temple.sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    path: "/kyoto/",
    title: "🚌 Getting Around",
    info: "Kyoto's bus network is extensive. A <strong>one-day bus pass</strong> is highly recommended. For a unique perspective, <strong>rent a bicycle</strong> to navigate the flat city streets and scenic river paths.",
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
];

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
