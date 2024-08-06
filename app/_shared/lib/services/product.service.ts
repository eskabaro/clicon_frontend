import axios from 'axios'
import { notFound } from 'next/navigation'
import { API_URL } from '../enums'
import { getContentType } from '../utils'
import type { IAllProduct, IProductsRes, ISearchParams } from '../types/product'

class ProductService {
    async getAll({ category, brand, min, max }: ISearchParams) {
        try {
            const params = new URLSearchParams({
                ...(category && { category }),
                ...(min && { min }),
                ...(max && { max })
            })

            if (brand) {
                const brands = Array.isArray(brand) ? brand : [brand]
                brands.forEach((b) => params.append('brand', b))
            }

            const queryString = params.toString()

            const { data } = await axios.get<IProductsRes>(
                `${process.env.BASE_API_URL}${API_URL.GET_PRODUCTS}?${queryString || ''}`,
                {
                    headers: {
                        ...getContentType()
                    }
                }
            )

            return data
        } catch (error: any) {
            throw new Error(error.response.data.message || 'An error occurred while fetching products.')
        }
    }

    async getOne(id: string) {
        try {
            const { data } = await axios.get<IAllProduct>(`${process.env.BASE_API_URL}${API_URL.GET_PRODUCT}/${id}`, {
                headers: {
                    ...getContentType()
                }
            })

            return data
        } catch (error) {
            return notFound()
        }
    }
}

export default new ProductService()
