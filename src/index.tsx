import { jsx } from '@emotion/core'
import { render } from 'react-dom'

import { App } from './App'
import { DataProvider } from 'hooks/useData'

import { data } from './data'

render(
    <DataProvider data={data}>
        <App />
    </DataProvider>,
    document.querySelector('#app'),
)
