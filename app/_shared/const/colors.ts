export const colors = {
    gray900: 'gray-900',
    gray800: 'gray-800',
    gray700: 'gray-700',
    gray600: 'gray-600',
    gray500: 'gray-500',
    gray400: 'gray-400',
    gray300: 'gray-300',
    gray200: 'gray-200',
    gray100: 'gray-100',
    gray50: 'gray-50',
    gray00: 'gray-00',

    primary900: 'primary-900',
    primary800: 'primary-800',
    primary700: 'primary-700',
    primary600: 'primary-600',
    primary500: 'primary-500',
    primary400: 'primary-400',
    primary300: 'primary-300',
    primary200: 'primary-200',
    primary100: 'primary-100',
    primary50: 'primary-50',

    secondary900: 'secondary-900',
    secondary800: 'secondary-800',
    secondary700: 'secondary-700',
    secondary600: 'secondary-600',
    secondary500: 'secondary-500',
    secondary400: 'secondary-400',
    secondary300: 'secondary-300',
    secondary200: 'secondary-200',
    secondary100: 'secondary-100',
    secondary50: 'secondary-50',

    success900: 'success-900',
    success800: 'success-800',
    success700: 'success-700',
    success600: 'success-600',
    success500: 'success-500',
    success400: 'success-400',
    success300: 'success-300',
    success200: 'success-200',
    success100: 'success-100',
    success50: 'success-50',

    warning900: 'warning-900',
    warning800: 'warning-800',
    warning700: 'warning-700',
    warning600: 'warning-600',
    warning500: 'warning-500',
    warning400: 'warning-400',
    warning300: 'warning-300',
    warning200: 'warning-200',
    warning100: 'warning-100',
    warning50: 'warning-50',

    danger900: 'danger-900',
    danger800: 'danger-800',
    danger700: 'danger-700',
    danger600: 'danger-600',
    danger500: 'danger-500',
    danger400: 'danger-400',
    danger300: 'danger-300',
    danger200: 'danger-200',
    danger100: 'danger-100',
    danger50: 'danger-50'
} as const

export type ColorsType = (typeof colors)[keyof typeof colors]
