import { IconsType } from '@/app/_shared/const/icons'
import { ROUTE } from '@/app/_shared/lib/enums'

interface IMenuTab {
    key: string
    icon: IconsType
    href: ROUTE
}

export const menuTabs: IMenuTab[] = [
    {
        key: 'dashboard',
        icon: 'cube',
        href: ROUTE.ACCOUNT
    },
    {
        key: 'order-history',
        icon: 'shop',
        href: ROUTE.ORDER_HISTORY
    },
    {
        key: 'track-order',
        icon: 'point',
        href: ROUTE.TRACK_ORDER
    },
    {
        key: 'shopping-cart',
        icon: 'mini-cart',
        href: ROUTE.SHOPPING_CART
    },
    {
        key: 'wishlist',
        icon: 'wishlist',
        href: ROUTE.WISHLIST
    },
    {
        key: 'compare',
        icon: 'compare',
        href: ROUTE.COMPARE
    },
    {
        key: 'browsing-history',
        icon: 'history',
        href: ROUTE.BROWSING_HISTORY
    },
    {
        key: 'setting',
        icon: 'settings',
        href: ROUTE.SETTINGS
    }
]
