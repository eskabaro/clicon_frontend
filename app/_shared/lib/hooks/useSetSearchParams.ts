import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ISearchParams } from '../types/product'

export const useSetSearchParams = (paramKey: keyof ISearchParams) => {
    const { push } = useRouter()
    const searchParams = useSearchParams()
    const initialParam = searchParams.getAll(paramKey)
    const [selectedParam, setSelectedParam] = useState<string | string[]>(
        paramKey === 'brand' ? initialParam : initialParam[0] || ''
    )

    const setSearchParam = (value: string) => {
        const params = new URLSearchParams(searchParams)

        if (paramKey === 'brand') {
            const currentValues = searchParams.getAll(paramKey)

            if (currentValues.includes(value)) {
                params.delete(paramKey)
                currentValues.filter((v) => v !== value).forEach((v) => params.append(paramKey, v))

                setSelectedParam(currentValues.filter((v) => v !== value))
            } else {
                params.append(paramKey, value)

                setSelectedParam([...currentValues, value])
            }
        } else {
            params.set(paramKey, value)

            setSelectedParam(value)
        }

        push(`?${params.toString()}`)
    }

    return {
        selectedParam,
        setSearchParam
    }
}
