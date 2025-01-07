import type { FooterProps, MenuProps } from 'webcoreui/astro'

import type { SEOProps } from '@components/SEO/SEO.ts'

export type LayoutProps = {
    seo: SEOProps
    menu?: MenuProps
    footer?: FooterProps
    className?: string
    [key: string]: any
}
