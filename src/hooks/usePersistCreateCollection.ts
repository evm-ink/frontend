import { useEffect, useState } from 'react'

import { CreateCollectionSchema } from '../schemas/createCollectionSchema'
import { getTokenKey } from '../utils/getTokenKey'

type UsePersistCreateCollectionProps = {
  address: string
  defaultFormValues: CreateCollectionSchema
}

export function usePersistCreateCollection({
  address,
  defaultFormValues,
}: UsePersistCreateCollectionProps) {
  const [formValues, setFormValues] = useState<CreateCollectionSchema>(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        localStorage.getItem(
          `${getTokenKey(address)}-create-collection-form-values`
        ) || String(defaultFormValues)
      )
    } catch (error) {
      currentValue = defaultFormValues
    }

    return currentValue
  })

  useEffect(() => {
    if (address) {
      localStorage.setItem(
        `${getTokenKey(address)}-create-collection-form-values`,
        JSON.stringify(formValues)
      )
      localStorage.setItem(
        `${getTokenKey(address)}-create-collection-last-updated-at`,
        new Date().getTime().toString()
      )
    }
  }, [address, formValues])

  return [formValues, setFormValues]
}
