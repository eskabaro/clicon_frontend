export const cn = (...classes: Array<string | number | boolean | undefined | null>) => classes.filter(Boolean).join(' ') || undefined
