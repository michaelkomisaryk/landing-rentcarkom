import type { Block } from 'payload'

import { imageField } from '../fields/image'

export const Fleet: Block = {
  slug: 'fleet',
  labels: { singular: 'Автопарк', plural: 'Автопарк' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', required: true, defaultValue: 'fleet' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок' },
    {
      name: 'items',
      type: 'array',
      label: 'Авто',
      required: true,
      fields: [
        { name: 'brand', type: 'text', label: 'Марка', required: true },
        { name: 'model', type: 'text', label: 'Модель', required: true },
        { name: 'year', type: 'number', label: 'Рік', required: true, min: 1900, max: 2100 },
        {
          name: 'className',
          type: 'select',
          label: 'Клас',
          required: true,
          options: [
            { label: 'Економ', value: 'economy' },
            { label: 'Комфорт', value: 'comfort' },
            { label: 'Преміум', value: 'premium' },
          ],
        },
        {
          name: 'fuel',
          type: 'select',
          label: 'Пальне',
          required: true,
          options: [
            { label: 'Бензин', value: 'gasoline' },
            { label: 'Дизель', value: 'diesel' },
            { label: 'Гібрид', value: 'hybrid' },
            { label: 'Електро', value: 'electric' },
          ],
        },
        {
          name: 'transmission',
          type: 'select',
          label: 'Коробка',
          required: true,
          options: [
            { label: 'Автомат', value: 'automatic' },
            { label: 'Механіка', value: 'manual' },
          ],
        },
        { name: 'seats', type: 'number', label: 'Місця', required: true, min: 1, max: 9 },
        { name: 'plate', type: 'text', label: 'Номер', required: true },
        { name: 'price', type: 'text', label: 'Ціна за добу', required: true },
        imageField(),
      ],
    },
  ],
}
