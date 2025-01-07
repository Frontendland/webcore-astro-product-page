import type { BlogCardProps } from '@components/BlogCard/blogCard'
import type { IconListProps } from '@components/IconList/iconList'
import type { LayoutProps } from '@components/Layout/layout'
import type { ButtonProps, CarouselProps, IconProps } from 'webcoreui/astro'

export type ProductPageProps = {
    layout: LayoutProps
    images?: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }[]
    carousel?: Omit<CarouselProps, 'items'>
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    features?: IconListProps['items']
    recommended?: {
        title?: string
        items: BlogCardProps[]
    }
    [key: string]: any
}
