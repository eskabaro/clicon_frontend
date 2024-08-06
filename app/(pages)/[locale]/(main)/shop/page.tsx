import ProductService from '@/app/_shared/lib/services/product.service'
import type { Metadata } from 'next'
import type { ISearchParams } from '@/app/_shared/lib/types/product'
import { Main } from './_ui/main'

export const metadata: Metadata = {
    title: 'Shop'
}

const getProducts = async (searchParams: ISearchParams) => {
    const data = await ProductService.getAll(searchParams)

    return data
}

export default async function Shop({ searchParams }: { searchParams: ISearchParams }) {
    const data = await getProducts(searchParams)

    return <Main {...data} searchParams={searchParams} />
}
