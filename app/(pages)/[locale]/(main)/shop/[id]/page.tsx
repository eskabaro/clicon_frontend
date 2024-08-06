import ProductService from '@/app/_shared/lib/services/product.service'
import type { Metadata } from 'next'
import { Main } from './_ui/main'

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const product = await ProductService.getOne(params.id)

    return {
        title: product.name,
        openGraph: {
            title: product.name,
            images: [...product.images]
        }
    }
}

const getProduct = async (id: string) => {
    const data = await ProductService.getOne(id)

    return data
}

export default async function DetailsPage({ params }: { params: { id: string } }) {
    const data = await getProduct(params.id)

    return <Main {...data} />
}
