import { createContext, useState, ReactNode, useContext, Context } from 'react'
import { jsx } from '@emotion/core'

type ProviderProps = {
    children: ReactNode
    data: any
}

type ContextValue = {
    get: <T = string>([key]: TemplateStringsArray) => T | null
}

export const DataContext = createContext<ContextValue>({
    get: () => null,
})

export const DataProvider = ({ children, data }: ProviderProps) => {
    const contextValue = {
        get: ([key]: TemplateStringsArray) => {
            const parts = key.split('/')

            let result = data
            for (let part of parts) {
                if (part in result) {
                    result = result[part]
                } else {
                    result = null
                }
            }

            return result
        },
    }

    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}

export const useData = () => {
    return useContext(DataContext)
}
