export interface IProductsRes {
    brands: string[]
    categories: string[]
    length: number
    price: IPrice
    products: IProduct[]
}

export interface IPrice {
    min: number
    max: number
}

export interface ISearchParams {
    category?: string
    brand?: string | string[]
    min?: string
    max?: string
    order?: 'asc' | 'desc'
}

// product
export interface IProduct {
    id: string
    createdAt: string
    updatedAt: string
    name: string
    rating: number
    images: string[]
    price: number
    sale: number
    availability: string
}

interface IFeature {
    icon: string
    label: string
}

interface IBlockInfo {
    label: string
    value: string
}

interface IDescription {
    feature: IFeature[]
    description: string
    shippingInformation: IBlockInfo[]
}

interface IAdditionalInfo {
    overview: IBlockInfo[]
    dimensions: string
    operatingSystem: string
    productWarranty: string
}

interface ISpecification {
    [key: string]: IBlockInfo[]
}

export interface IAllProduct extends IProduct {
    category: string
    sku: string
    brand: string
    description: IDescription
    additionalInfo: IAdditionalInfo
    specification: ISpecification
}
