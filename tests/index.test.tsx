import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'


jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    route: '/',
    push: jest.fn()
  }))
}))

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    const h1 = screen.getByText('Starting Patient Portal')
    expect(h1).toBeDefined()
  })
})
