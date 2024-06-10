// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'XS',
      value: 'xs',
    },
    {
      label: 'S',
      value: 's',
    },
    {
      label: 'M',
      value: 'm',
    },
    {
      label: 'L',
      value: 'l',
    },
    {
      label: 'XL',
      value: 'xl',
    },
    {
      label: 'XXL',
      value: 'xxl',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Classic Cotton',
      value: 'classiccotton',
      description: undefined,
      price: PRODUCT_PRICES.material.classiccotton,
    },
    {
      label: 'Polyester Blend',
      value: 'polyesterblend',
      description: 'Perfect balance between comfort and practicality',
      price: PRODUCT_PRICES.material.polyesterblend,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Standard Quality',
      value: 'standardquality',
      description: undefined,
      price: PRODUCT_PRICES.finish.standardquality,
    },
    {
      label: 'Vinyl Printing',
      value: 'vinylprinting',
      description: 'High-quality design from the galaxy far far away!',
      price: PRODUCT_PRICES.finish.vinylprinting,
    },
  ],
} as const
