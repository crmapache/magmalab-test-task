import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Node } from '../index'
import { theme } from '../../../styles/theme'
import { nodes } from '../../App/data'

describe('App', () => {
  it('should have correct content state', () => {
    render(
      <ThemeProvider theme={theme}>
        <Node {...nodes[0]} />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('node-content')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('node-header-button'))

    expect(screen.getByTestId('node-content')).toBeInTheDocument()
  })

  it('should have correct online status', () => {
    render(
      <ThemeProvider theme={theme}>
        <Node {...nodes[0]} status={false} />
      </ThemeProvider>,
    )

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })

  it('should have correct block number in content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Node {...nodes[0]} />
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByTestId('node-header-button'))

    expect(screen.getAllByTestId('node-content-block-number')[0]).toHaveTextContent('001')
  })
})
