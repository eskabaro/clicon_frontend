export enum TOKEN {
    ACCESS = 'access-token',
    REFRESH = 'refresh-token'
}

export enum API_URL {
    LOGIN = '/auth/login',
    REGISTER = '/auth/register',
    GET_NEW_TOKENS = '/auth/update-tokens',
    USER = '/user',
    GET_PRODUCTS = '/product/get-all',
    GET_PRODUCT = '/product'
}

export enum ROUTE {
    HOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    CHECKOUT = '/checkout',
    SHOP = '/shop',
    ACCOUNT = '/account',
    ORDER_HISTORY = '/account/order-history',
    TRACK_ORDER = '/account/track-order',
    SHOPPING_CART = '/account/shopping-cart',
    WISHLIST = '/account/wishlist',
    COMPARE = '/account/compare',
    BROWSING_HISTORY = '/account/browsing-history',
    SETTINGS = '/account/setting'
}
