import type { Payload } from 'payload'

const homePage = {
  path: '/',
  title: 'Головна',
  blocks: [
    {
      blockType: 'hero',
      anchor: 'hero',
      badge: 'Прокат авто в Києві',
      title: 'Вільне авто на потрібні доби',
      subtitle:
        'RentCarKom показує парк, ціну за добу і одну активну оренду на машину. Поки бронь відкрита, це авто іншому клієнту не віддають.',
      image: {
        src: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80',
        alt: 'Темний седан у профіль, готовий до поїздки',
      },
      buttons: [
        { text: 'Обрати авто', link: '#fleet', variant: 'primary' },
        { text: 'Чому ми', link: '#features', variant: 'secondary' },
      ],
      stats: [
        { value: '40', label: 'авто в парку' },
        { value: 'від 913 грн', label: 'за добу' },
        { value: '1 бронь', label: 'на машину' },
      ],
    },
    {
      blockType: 'features',
      anchor: 'features',
      title: 'Чому обирають RentCarKom',
      items: [
        {
          icon: '🔑',
          title: 'Без подвійної броні',
          text: 'Вільність авто рахується з активної оренди. Другу відкриту бронь на ту саму машину система не приймає.',
        },
        {
          icon: '₴',
          title: 'Сума одразу',
          text: 'Ціна за добу множиться на кількість діб. Оренда триває щонайменше добу, кінець — о 23:59 останнього дня.',
        },
        {
          icon: '⛽',
          title: 'Парк на вибір',
          text: 'Економ, комфорт і преміум: бензин, дизель, гібрид та електро. У картці є фото, місця, коробка і номер.',
        },
      ],
    },
    {
      blockType: 'features',
      anchor: 'how',
      title: 'Як взяти авто',
      items: [
        {
          icon: '01',
          title: 'Подивіться каталог',
          text: 'Гість бачить вільні машини і картку з галереєю. Фільтр лишає бензин, дизель, гібрид або електро.',
        },
        {
          icon: '02',
          title: 'Забронюйте після входу',
          text: 'Клієнт вказує ім’я і кількість діб. У броні зберігаються марка, номер і ціна на момент оформлення.',
        },
        {
          icon: '03',
          title: 'Поверніть машину',
          text: 'Менеджер завершує або скасовує оренду. Після цього авто знову з’являється у вільних.',
        },
      ],
    },
    {
      blockType: 'fleet',
      anchor: 'fleet',
      title: 'Авто з парку',
      subtitle: 'Ціни в гривнях за добу, як у каталозі RentCarKom. Номери — з облікового парку.',
      items: [
        {
          brand: 'Skoda',
          model: 'Fabia',
          year: 2022,
          className: 'economy',
          fuel: 'gasoline',
          transmission: 'manual',
          seats: 5,
          plate: 'KA 2405 IK',
          price: '913 грн',
          image: { src: '/cars/skoda-fabia.webp', alt: 'Сіра Skoda Fabia спереду' },
        },
        {
          brand: 'Toyota',
          model: 'Corolla',
          year: 2024,
          className: 'comfort',
          fuel: 'hybrid',
          transmission: 'automatic',
          seats: 5,
          plate: 'KA 2410 IK',
          price: '1 909 грн',
          image: { src: '/cars/toyota-corolla.webp', alt: 'Блакитна Toyota Corolla' },
        },
        {
          brand: 'Hyundai',
          model: 'Tucson',
          year: 2023,
          className: 'comfort',
          fuel: 'hybrid',
          transmission: 'automatic',
          seats: 5,
          plate: 'FF 1122 KK',
          price: '2 573 грн',
          image: { src: '/cars/hyundai-tucson.webp', alt: 'Білий Hyundai Tucson' },
        },
        {
          brand: 'Toyota',
          model: 'RAV4',
          year: 2023,
          className: 'comfort',
          fuel: 'hybrid',
          transmission: 'automatic',
          seats: 5,
          plate: 'KA 2423 IK',
          price: '2 822 грн',
          image: { src: '/cars/toyota-rav4.webp', alt: 'Біла Toyota RAV4' },
        },
        {
          brand: 'Tesla',
          model: 'Model 3',
          year: 2023,
          className: 'comfort',
          fuel: 'electric',
          transmission: 'automatic',
          seats: 5,
          plate: 'KA 2431 IK',
          price: '3 403 грн',
          image: { src: '/cars/tesla-model-3.webp', alt: 'Tesla Model 3' },
        },
        {
          brand: 'BMW',
          model: '3 Series',
          year: 2023,
          className: 'premium',
          fuel: 'gasoline',
          transmission: 'automatic',
          seats: 5,
          plate: 'BB 5678 KK',
          price: '3 237 грн',
          image: { src: '/cars/bmw-3-series.webp', alt: 'Білий седан BMW 3 Series' },
        },
      ],
    },
    {
      blockType: 'testimonials',
      anchor: 'testimonials',
      title: 'Відгуки клієнтів',
      items: [
        {
          name: 'Олена Коваль',
          text: 'Брала Tucson на дев’ять діб. Сума порахувалась одразу, а в каталозі машина не висіла як вільна, поки я не повернула ключі.',
          rating: '5',
        },
        {
          name: 'Андрій Савчук',
          text: 'Model 3 на вихідні по Києву. Картка з фото і номером, без дзвінка «а це авто точно вільне?».',
          rating: '5',
        },
        {
          name: 'Марина Лисенко',
          text: 'Fabia для поїздок містом. Невелика ціна за добу і зрозуміло, до котрої години треба повернути авто.',
          rating: '5',
        },
      ],
    },
    {
      blockType: 'contacts',
      anchor: 'contacts',
      title: 'Зв’яжіться з нами',
      text: 'Напишіть, яке авто і на скільки діб потрібно. Бронь у системі відкривається після входу клієнта.',
      phone: '+380 44 390 18 20',
      email: 'info@rentcarkom.com',
      address: 'м. Київ, пункт видачі · щодня 08:00–20:00',
    },
  ],
}

export async function seedHome(payload: Payload) {
  const existing = await payload.find({ collection: 'pages', limit: 1, depth: 0 })
  if (existing.totalDocs > 0) return

  await payload.updateGlobal({
    slug: 'common',
    data: {
      siteName: 'RentCarKom',
      phone: '+380 44 390 18 20',
      menu: [
        { label: 'Автопарк', link: '#fleet' },
        { label: 'Чому ми', link: '#features' },
        { label: 'Відгуки', link: '#testimonials' },
        { label: 'Контакти', link: '#contacts' },
      ],
      cta: { label: 'Забронювати', link: '#contacts' },
      footer: {
        text: 'Орендуйте авто і поверніть його. Бронювання, автопарк і стійка оренди в одному місці.',
        credits:
          'Світлини авто з каталогу RentCarKom. Джерело — Wikimedia Commons, ліцензії CC BY та CC BY-SA.',
      },
    },
  })

  await payload.create({ collection: 'pages', data: homePage })
  payload.logger.info('Seeded RentCarKom home page')
}
