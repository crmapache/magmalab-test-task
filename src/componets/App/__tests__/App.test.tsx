import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { App } from '../index'
import { theme } from '../../../styles/theme'
import { nodes } from '../data'

describe('App', () => {
  it('should render title', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    )

    const title = screen.getByText('Nodes')
    expect(title).toBeInTheDocument()
  })

  it('should render correct numbers of nodes', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    )

    const elements = screen.getAllByTestId('node')
    expect(elements).toHaveLength(nodes.length)
  })
})
