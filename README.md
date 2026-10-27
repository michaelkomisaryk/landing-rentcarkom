# RentCarKom Landing

Лендінг прокату авто RentCarKom. Контент зберігається в Payload CMS, публічна сторінка — окремий Vite-фронтенд. Фронтенд не ходить у базу напряму: він читає два JSON-ендпоінти CMS.

Жива CMS: [landing-rentcarkom-tau.vercel.app](https://landing-rentcarkom-tau.vercel.app/)

## Структура

```
cms/        Payload 3 + Next.js, адмінка і API
frontend/   Vite, публічний лендінг
```

У CMS є колекції `users`, `media`, `pages` і глобал `common` (назва сайту, телефон, меню, кнопка, підвал). Сторінка складається з блоків `hero`, `features`, `fleet`, `testimonials`, `contacts`. Якщо колекція сторінок порожня, під час старту CMS один раз записує головну сторінку.

## Вимоги

- Node.js 20.18.1 або новіший
- PostgreSQL. Локально підходить будь-який сервер, на Vercel — Neon

## Локальний запуск

З кореня репозиторію:

```bash
npm run install:all
```

Скопіюйте приклади змінних і заповніть їх:

```bash
cp cms/.env.example cms/.env
cp frontend/.env.example frontend/.env
```

`cms/.env`:

```
DATABASE_URL=postgresql://USER@127.0.0.1:5432/rentcarkom_cms
PAYLOAD_SECRET=довгий-випадковий-рядок
FRONTEND_URL=http://localhost:5174
```

`PAYLOAD_SECRET` можна згенерувати так: `openssl rand -hex 32`.

`frontend/.env`:

```
VITE_API_URL=http://localhost:3000
```

Базу потрібно створити заздалегідь, наприклад `createdb rentcarkom_cms`. У режимі розробки Payload сам створює таблиці.

Запуск обох частин:

```bash
npm run dev
```

- CMS і адмінка: http://localhost:3000/admin
- Лендінг: http://localhost:5174

Перший захід в адмінку просить створити користувача. Поки сторінок немає, головна з’являється сама.

Окремо:

```bash
npm run dev --prefix cms
npm run dev --prefix frontend
```

Збірка фронтенду пише файли в `frontend/dist`:

```bash
npm run build:web
```

## API

Базовий шлях Payload — `/api`.

`GET /api/common` повертає шапку і підвал: `siteName`, `phone`, `menu`, `cta`, `footer`.

`GET /api/page?path=/` повертає сторінку `{ path, title, blocks }`. У блоках поле `blockType` віддається як `type`. Невідомий шлях відповідає `404` і `{ "error": "Сторінку не знайдено" }`.

`FRONTEND_URL` задає дозволені джерела для CORS. Кілька адрес пишуться через кому, без слеша в кінці.

## Деплой

Це два проєкти Vercel з одного репозиторію. База — окремий проєкт Neon, не локальний PostgreSQL.

Перед першим прод-деплоєм таблиці мають уже існувати: у production автоматичне створення схеми вимкнене. Для порожньої бази Neon це робиться одним запуском CMS локально з direct-рядком Neon у `DATABASE_URL` (`npm run dev --prefix cms`). На Vercel у `DATABASE_URL` ставиться pooled-рядок (хост містить `-pooler`).

CMS:

| Поле | Значення |
|---|---|
| Root Directory | `cms` |
| Framework | Next.js |
| `DATABASE_URL` | pooled-рядок Neon |
| `PAYLOAD_SECRET` | секрет, інший ніж локальний |
| `FRONTEND_URL` | адреса фронтенду на Vercel |

Фронтенд:

| Поле | Значення |
|---|---|
| Root Directory | `frontend` |
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| `VITE_API_URL` | адреса CMS, без слеша в кінці |

`VITE_API_URL` підставляється під час збірки. Після зміни змінної фронтенд треба зібрати ще раз. Після появи адреси фронтенду оновіть `FRONTEND_URL` у CMS і зробіть redeploy, інакше браузер заблокує запити.

Файли `.env` у git не потрапляють. У репозиторії лежать лише `.env.example`.
