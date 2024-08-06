import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales, type LocaleType } from '@/app/_shared/const/locales'

export default getRequestConfig(async ({ locale }) => {
    if (!locales[locale as LocaleType]) notFound()

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    }
})
