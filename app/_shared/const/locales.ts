export const locales = {
    en: 'en',
    ua: 'ua',
    ru: 'ru'
} as const

export type LocaleType = (typeof locales)[keyof typeof locales]

export const defaultLocale: LocaleType = 'en'
