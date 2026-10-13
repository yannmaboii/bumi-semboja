export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  badge?: string
  isSignature?: boolean
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'makanan',
    label: 'Makanan',
    items: [
      {
        id: 'rawon-daging',
        name: 'Rawon Daging',
        description:
          'Kuah hitam medok khas Banyuwangi, dimasak 8 jam, kluwek dikirim langsung dari Jawa Timur. Disajikan dengan nasi, tauge, telur asin & sambal.',
        price: 48000,
        badge: 'Resep 1970',
        isSignature: true,
      },
      {
        id: 'rawon-buntut-daging',
        name: 'Rawon Buntut + Daging',
        description:
          'Perpaduan buntut sapi lembut dan daging pilihan dalam kuah kluwek autentik Banyuwangi yang kaya rempah.',
        price: 88000,
        badge: 'Premium',
      },
      {
        id: 'soto-kikil-daging',
        name: 'Soto Kikil + Daging',
        description:
          'Soto kikil sapi gurih yang selalu dinanti keluarga setiap Lebaran. Kini hadir setiap hari untuk Anda.',
        price: 52000,
      },
      {
        id: 'nasi-sei-sapi',
        name: 'Nasi Sei Sapi',
        description:
          'Daging asap khas NTT menggunakan Australian Beef, dipadukan crispy kailan, kuah kaldu sapi dan sambal.',
        price: 48000,
        isSignature: true,
      },
      {
        id: 'bubur-polos',
        name: 'Bubur Polos',
        description: 'Bubur Chinese halus nan lembut sebagai base untuk topping pilihan Anda.',
        price: 10000,
      },
      {
        id: 'bubur-topping-ayam',
        name: 'Bubur Topping Ayam',
        description:
          'Bubur Lintas Negara dengan topping ayam suwir, kailan crispy, cakwe, dan katsuobushi Jepang.',
        price: 33000,
        isSignature: true,
      },
      {
        id: 'bubur-topping-tuna',
        name: 'Bubur Topping Tuna',
        description:
          'Bubur Lintas Negara dengan potongan tuna segar, kailan crispy, cakwe, dan taburan katsuobushi.',
        price: 33000,
      },
      {
        id: 'bubur-topping-udang',
        name: 'Bubur Topping Udang',
        description:
          'Bubur Lintas Negara dengan udang segar, kailan crispy, cakwe, dan katsuobushi khas Jepang.',
        price: 35000,
      },
      {
        id: 'bubur-topping-sei-sapi',
        name: 'Bubur Topping Sei Sapi',
        description:
          'Bubur Lintas Negara dengan sei sapi Australian Beef premium, kailan crispy, cakwe, dan katsuobushi.',
        price: 38000,
        badge: 'Favorit',
      },
      {
        id: 'bubur-topping-tuna-ayam',
        name: 'Bubur Topping Tuna + Ayam',
        description:
          'Bubur Lintas Negara double topping tuna dan ayam suwir berpadu kailan crispy dan katsuobushi.',
        price: 38000,
      },
      {
        id: 'bubur-topping-ayam-udang',
        name: 'Bubur Topping Ayam + Udang',
        description:
          'Bubur Lintas Negara dengan kombinasi ayam suwir dan udang segar di atas kailan crispy dan cakwe.',
        price: 40000,
      },
      {
        id: 'bubur-topping-ayam-sei-sapi',
        name: 'Bubur Topping Ayam + Sei Sapi',
        description:
          'Paduan terbaik ayam suwir dan sei sapi Australian Beef dalam satu mangkuk bubur hangat.',
        price: 43000,
      },
      {
        id: 'bubur-topping-tuna-udang',
        name: 'Bubur Topping Tuna + Udang',
        description:
          'Bubur Lintas Negara double topping seafood — tuna segar dan udang, dilengkapi kailan crispy dan katsuobushi.',
        price: 43000,
      },
      {
        id: 'ayam-kampung-goreng',
        name: 'Ayam Kampung Goreng',
        description:
          'Ayam kampung pilihan, digoreng crispy hingga keemasan dengan bumbu rempah tradisional yang meresap sempurna.',
        price: 33000,
      },
      {
        id: 'ayam-garang-asam',
        name: 'Ayam Garang Asam',
        description:
          'Ayam kampung dalam kuah asam segar berbumbu rempah pilihan, menggugah selera sejak suapan pertama.',
        price: 30000,
      },
      {
        id: 'empal-goreng',
        name: 'Empal Goreng',
        description:
          'Daging tenderloin sapi pilihan, diolah dengan bumbu tradisional Jawa, digoreng hingga sempurna.',
        price: 28000,
      },
      {
        id: 'botok-daging',
        name: 'Botok Daging',
        description:
          'Daging cincang berbumbu yang dikukus dalam bungkusan daun pisang dengan cita rasa rempah otentik.',
        price: 23000,
      },
      {
        id: 'pecel-sayur-gorengan',
        name: 'Pecel Sayur + Gorengan',
        description:
          'Sayuran segar rebus disiram sambal kacang khas rumahan, disajikan dengan gorengan hangat.',
        price: 25000,
      },
      {
        id: 'paket-sundaan',
        name: 'Paket Sundaan',
        description:
          'Paket lengkap ala Sunda: ikan sepat, bakwan jagung, urab sayur segar, kerupuk, dan sambal terasi.',
        price: 54000,
      },
      {
        id: 'telur-crispy-keju',
        name: 'Telur Crispy Keju',
        description:
          'Telur goreng crispy berbalut keju parut, camilan gurih yang sempurna untuk menemani makan.',
        price: 17000,
      },
      {
        id: 'nasi-putih',
        name: 'Nasi Putih',
        description: 'Nasi putih pulen hangat.',
        price: 6000,
      },
      {
        id: 'telur-asin',
        name: 'Telur Asin',
        description: 'Telur asin pilihan sebagai pelengkap rawon atau makan Anda.',
        price: 8000,
      },
    ],
  },
  {
    id: 'minuman',
    label: 'Minuman',
    items: [
      {
        id: 'teh-tawar',
        name: 'Teh Tawar',
        description: 'Teh tawar panas atau dingin, sederhana dan menenangkan.',
        price: 7000,
      },
      {
        id: 'teh-manis',
        name: 'Teh Manis',
        description: 'Teh manis klasik panas atau dingin, minuman rumahan yang selalu pas.',
        price: 9000,
      },
      {
        id: 'java-tea',
        name: 'Java Tea',
        description: 'Perpaduan teh premium Jawa dengan rasa yang khas dan karakter kuat.',
        price: 25000,
      },
      {
        id: 'lemon-tea',
        name: 'Lemon Tea',
        description: 'Teh segar dengan perasan lemon yang menyegarkan, tersedia panas atau dingin.',
        price: 20000,
      },
      {
        id: 'lemongrass-tea',
        name: 'Lemongrass Tea',
        description: 'Teh serai hangat beraroma wangi, menenangkan dan menyegarkan.',
        price: 23000,
      },
      {
        id: 'lychee-tea',
        name: 'Lychee Tea',
        description: 'Teh dingin dengan sirup lychee segar yang manis dan fruity.',
        price: 25000,
      },
      {
        id: 'strawberry-tea',
        name: 'Strawberry Tea',
        description: 'Teh dingin dengan rasa strawberry segar yang cerah dan menyenangkan.',
        price: 25000,
      },
      {
        id: 'bersenja-ria',
        name: 'Bersenja Ria',
        description: 'Minuman teh spesial racikan Bumi Semboja untuk menemani sore yang hangat.',
        price: 28000,
      },
      {
        id: 'korean-berry-milk',
        name: 'Korean Berry Milk',
        description: 'Susu dingin dengan berry mix ala Korean café yang segar dan creamy.',
        price: 33000,
      },
      {
        id: 'choco-berry-latte',
        name: 'Choco Berry Latte',
        description: 'Perpaduan cokelat lembut dan berry yang segar dalam satu gelas dingin.',
        price: 33000,
      },
      {
        id: 'strawberry-matcha-latte',
        name: 'Strawberry Matcha Latte',
        description: 'Matcha premium dipadukan strawberry segar dalam sajian dingin yang instagrammable.',
        price: 39000,
      },
      {
        id: 'summertime-blues-latte',
        name: 'Summertime Blues Latte',
        description: 'Latte biru yang unik dan menyegarkan, signature minuman Bumi Semboja.',
        price: 35000,
        badge: 'Signature',
      },
      {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        description: 'Cold-whisked premium Second Harvest Matcha dipadukan homemade berry jam.',
        price: 35000,
      },
      {
        id: 'chocolate',
        name: 'Chocolate',
        description: 'Minuman cokelat klasik panas atau dingin yang selalu memuaskan.',
        price: 25000,
      },
      {
        id: 'coconut-cloud-strawberry',
        name: 'Coconut Cloud Strawberry',
        description: 'Paduan air kelapa, strawberry cream, dan jelly awan kelapa — seperti minum ice cream!',
        price: 35000,
      },
      {
        id: 'coconut-cloud-chocolate',
        name: 'Coconut Cloud Chocolate',
        description: 'Air kelapa segar berpadu chocolate cream dan jelly awan kelapa yang unik.',
        price: 35000,
      },
      {
        id: 'coconut-cloud-matcha',
        name: 'Coconut Cloud Matcha',
        description: 'Air kelapa dengan matcha cream dan jelly awan kelapa — perpaduan tropis yang menyegarkan.',
        price: 38000,
        badge: 'Favorit',
      },
      {
        id: 'kopi-tubruk',
        name: 'Kopi Tubruk',
        description: 'Kopi tubruk tradisional dari biji kopi petani Gunung Ijen, Bondowoso — Banyuwangi.',
        price: 23000,
      },
      {
        id: 'vietnam-drip',
        name: 'Vietnam Drip',
        description: 'Kopi tetes ala Vietnam menggunakan biji kopi Gunung Ijen pilihan.',
        price: 25000,
      },
      {
        id: 'v60',
        name: 'V60',
        description: 'Pour-over V60 dengan biji kopi Gunung Ijen single origin, tersedia panas atau dingin.',
        price: 25000,
      },
      {
        id: 'kopi-aren-tradisional',
        name: 'Kopi Aren Tradisional',
        description: 'Kopi Gunung Ijen dengan gula aren asli yang menghadirkan rasa karamel alami.',
        price: 25000,
      },
      {
        id: 'kopi-susu-aren',
        name: 'Kopi Susu Aren',
        description: 'Kopi susu dengan gula aren, harmoni sempurna antara kopi Ijen dan manisnya aren.',
        price: 28000,
      },
      {
        id: 'kopi-caramel-latte',
        name: 'Kopi Caramel Latte',
        description: 'Espresso Gunung Ijen dengan sirup karamel dan susu lembut, tersedia panas atau dingin.',
        price: 30000,
      },
      {
        id: 'kopi-butterscotch-latte',
        name: 'Kopi Butterscotch Latte',
        description: 'Kopi Gunung Ijen dengan butterscotch cream yang kaya dan lembut.',
        price: 30000,
      },
      {
        id: 'kopi-vanilla-latte',
        name: 'Kopi Vanilla Latte',
        description: 'Espresso Gunung Ijen dengan vanilla bean dan susu segar, klasik dan selalu nikmat.',
        price: 30000,
      },
      {
        id: 'berry-honeycano',
        name: 'Berry Honeycano',
        description: 'Kopi Gunung Ijen dicampur homemade berry jam dan madu alami yang unik.',
        price: 30000,
      },
      {
        id: 'wedang-uwuh',
        name: 'Wedang Uwuh',
        description: 'Minuman rempah tradisional yang menghangatkan dan menyehatkan.',
        price: 20000,
      },
      {
        id: 'jeruk',
        name: 'Jeruk',
        description: 'Perasan jeruk segar panas atau dingin, vitamin C alami yang menyegarkan.',
        price: 23000,
      },
      {
        id: 'kelapa',
        name: 'Kelapa',
        description: 'Air kelapa segar muda langsung yang menyegarkan dan menyehatkan.',
        price: 23000,
      },
      {
        id: 'kelapa-jeruk',
        name: 'Kelapa Jeruk',
        description: 'Perpaduan air kelapa muda dan perasan jeruk segar yang super menyegarkan.',
        price: 25000,
      },
      {
        id: 'kelapa-gula-aren',
        name: 'Kelapa Gula Aren',
        description: 'Air kelapa muda dengan gula aren alami — segar, manis, dan sehat.',
        price: 25000,
      },
      {
        id: 'air-mineral',
        name: 'Air Mineral',
        description: 'Air mineral segar.',
        price: 10000,
      },
      {
        id: 'stevia-add-on',
        name: 'Stevia Add On',
        description: 'Pemanis Stevia 0 kalori untuk minuman Anda.',
        price: 3000,
      },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert & Camilan',
    items: [
      {
        id: 'ubi-creme-brulee-original',
        name: 'Ubi Creme Brulee Original',
        description:
          'Ubi Cilembu manis dengan creamy custard dan crust karamel yang dibakar langsung di hadapan Anda. Disajikan dengan strawberry segar.',
        price: 35000,
        badge: 'Andalan',
        isSignature: true,
      },
      {
        id: 'ubi-creme-brulee-matcha-berry',
        name: 'Ubi Creme Brulee Matcha Berry',
        description:
          'Ubi Cilembu dengan custard matcha premium dan homemade berry jam, dikaramelisasi langsung di depan Anda.',
        price: 39000,
        badge: 'Favorit',
      },
      {
        id: 'summertime-blues-pudding',
        name: 'Summertime Blues Pudding',
        description:
          'Pudding Bunga Telang berwarna biru cantik dengan homemade berry jam, vla lembut, dan edible flower.',
        price: 24000,
      },
      {
        id: 'yolenak',
        name: 'Yolenak',
        description:
          'Yoghurt segar dipadukan dengan Colenak Pisang dan Tape — perpaduan tradisional dan modern yang unik.',
        price: 30000,
      },
      {
        id: 'brownies-ice-cream-berry-jam',
        name: 'Brownies Ice Cream Berry Jam',
        description:
          'Fudgy brownies lembut dengan ice cream dingin dan homemade berry jam yang asam manis.',
        price: 35000,
      },
      {
        id: 'brownies-ice-cream-matcha-cream',
        name: 'Brownies Ice Cream Matcha Cream',
        description:
          'Fudgy brownies dengan ice cream dan matcha cream premium — kombinasi yang selalu memanjakan.',
        price: 39000,
      },
      {
        id: 'affogato',
        name: 'Affogato',
        description:
          'Espresso Gunung Ijen panas dituangkan di atas ice cream vanilla — klasik dan selalu sempurna.',
        price: 23000,
      },
      {
        id: 'matcha-affogato',
        name: 'Matcha Affogato',
        description:
          'Matcha latte panas dituangkan di atas ice cream vanilla — perpaduan Jepang yang memanjakan.',
        price: 28000,
      },
      {
        id: 'pisang-goreng-coklat-keju',
        name: 'Pisang Goreng Coklat Keju',
        description:
          'Pisang goreng crispy dengan cokelat dan keju parut — comfort food favorit semua orang.',
        price: 28000,
      },
      {
        id: 'tahu-walik',
        name: 'Tahu Walik (isi 6)',
        description:
          'Enam buah tahu walik yang digoreng crispy dengan isi bumbu pedas gurih yang meledak di mulut.',
        price: 23000,
      },
      {
        id: 'bala-bala-bakwan-jagung',
        name: 'Bala-bala / Bakwan Jagung',
        description:
          'Bakwan jagung manis goreng crispy, camilan sederhana yang selalu enak dinikmati kapan saja.',
        price: 7000,
      },
      {
        id: 'lumpia-daging-keju',
        name: 'Lumpia Daging Keju (isi 3)',
        description:
          'Tiga buah lumpia isi daging sapi dan keju mozzarella yang gurih dan krispy.',
        price: 14000,
      },
      {
        id: 'buras-isi-tuna-daging',
        name: 'Buras Isi Tuna/Daging',
        description: 'Buras tradisional dengan isian tuna atau daging, gurih dan mengenyangkan.',
        price: 15000,
      },
      {
        id: 'parmesan-french-fries',
        name: 'Parmesan French Fries',
        description:
          'Kentang goreng crispy dengan taburan parmesan, tersedia varian original dan balado pedas.',
        price: 25000,
      },
    ],
  },
]

export const signatureItems: MenuItem[] = menuCategories
  .flatMap((c) => c.items)
  .filter((item) => item.isSignature)

export const WHATSAPP_NUMBER = '6285215585856'
export const INSTAGRAM_URL = 'https://www.instagram.com/bumisemboja/'
export const GOFOOD_URL = '#demo-gofood'
export const GRABFOOD_URL = '#demo-grabfood'
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.543!2d106.7849026!3d-6.5908706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c538febe8d93%3A0x768334810bb57934!2sBumi%20Semboja%20%7C%20Resto%20Bogor!5e0!3m2!1sid!2sid'
export const MAPS_LINK = 'https://maps.app.goo.gl/BumiSembojaBogor'

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
