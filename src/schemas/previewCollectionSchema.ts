import * as z from 'zod'

export const previewCollectionSchema = z.object({
  bannerImageUrl: z.string().min(0).url().max(255).optional().or(z.literal('')),
  logoImageUrl: z.string().min(0).url().max(255).optional().or(z.literal('')),
})

export type PreviewCollectionSchema = z.infer<typeof previewCollectionSchema>
