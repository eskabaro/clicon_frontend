import { locales } from '../../const/locales'

export const lockScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.classList.add('scroll-lock')

    const fixedElements = document.querySelectorAll<HTMLElement>('.fixed')

    fixedElements.forEach((el) => {
        el.style.paddingRight = `${scrollbarWidth}px`
    })
}

export const unlockScroll = () => {
    document.body.style.removeProperty('padding-right')
    document.body.classList.remove('scroll-lock')

    const fixedElements = document.querySelectorAll<HTMLElement>('.fixed')

    fixedElements.forEach((el) => {
        el.style.removeProperty('padding-right')
    })
}

export const toTitleCase = (str: string) =>
    str
        .toLowerCase()
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

export const removeLocaleFromPathname = (pathname: string, isArray?: boolean) => {
    const parts = pathname.split('/').filter(Boolean)

    if (Object.values(locales).includes(parts[0] as keyof typeof locales)) parts.shift()

    return !isArray ? parts : '/' + parts.join('/')
}

export const capitalizeFirstLetter = (str: string) => (str ? str[0].toUpperCase() + str.slice(1) : str)

export const getContentType = () => ({
    'Content-Type': 'application/json'
})

export const formatNumber = (num: number) => (num !== 0 ? num.toString().padStart(2, '0') : num)

export const transformParams = (value: string) => {
    const words = value.split(/[- ]/)

    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))

    if (value.includes('-')) {
        return capitalizedWords.join(' & ')
    } else {
        return capitalizedWords.join(' ')
    }
}
