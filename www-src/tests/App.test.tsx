import { h } from 'preact'
import { render, fireEvent } from '@testing-library/preact'
import { App } from '../App'

describe('App', () => {
  test('renders import button', () => {
    const { getByText } = render(<App />)
    expect(getByText('Import')).toBeTruthy()
  })
})