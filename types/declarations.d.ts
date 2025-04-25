/**
 * Type declarations for third-party modules using proper TypeScript module augmentation
 */

// Augment tailwind-merge module
declare module 'tailwind-merge' {
    export function twMerge(...inputs: (string | undefined | null)[]): string
    export function twJoin(...inputs: (string | undefined | null)[]): string
}

// Augment class-variance-authority module
declare module 'class-variance-authority' {
    interface VariantOptions {
        [variant: string]: {
            [option: string]: string
        }
    }

    interface CompoundVariant {
        [key: string]: string | boolean
        class?: string
        className?: string
    }

    interface CVAOptions {
        variants?: {
            [variant: string]: {
                [option: string]: string
            }
        }
        defaultVariants?: {
            [variant: string]: string
        }
        compoundVariants?: CompoundVariant[]
    }

    export function cva(
        base: string | string[],
        config?: CVAOptions
    ): (options?: Record<string, any>) => string

    export type VariantProps<Component extends (props?: any) => string> = {
        [Key in keyof Parameters<Component>[0]]?: Parameters<Component>[0][Key]
    }
}

// Augment @radix-ui/react-slot module
declare module '@radix-ui/react-slot' {
    import * as React from 'react'

    export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
        children?: React.ReactNode
    }

    export const Slot: React.ForwardRefExoticComponent<
        SlotProps & React.RefAttributes<HTMLElement>
    >
}
