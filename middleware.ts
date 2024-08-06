import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './app/_shared/const/locales'
import { TOKEN } from './app/_shared/lib/enums'

const handleI18nRouting = createMiddleware({
    locales: Object.values(locales),
    defaultLocale: defaultLocale
})

export const middleware = (request: NextRequest) => {
    const [, locale, ...segments] = request.nextUrl.pathname.split('/')

    if (locale != null && segments.includes('account')) {
        const accessToken = request.cookies.get(TOKEN.ACCESS)?.value

        if (!accessToken) {
            request.nextUrl.pathname = `/${locale}/login`
            return NextResponse.redirect(request.nextUrl)
        }
    }

    return handleI18nRouting(request)
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
