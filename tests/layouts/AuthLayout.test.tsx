// import { RouteHandler } from '@/middleware/RouteHandler'
import { render, screen } from '@testing-library/react'
import { Router } from 'next/router'
import AuthLayout from '../../src/layouts/AuthLayout'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/auth/sign-in',
    push: jest.fn(),
  })
}))

describe('AuthLayouts', () => {
  it('should render the children', () => {
    render(
      <AuthLayout authUser={0}>
        <div>Rendered Children</div>
      </AuthLayout>
    )
    const div = screen.getByText('Rendered Children')
    expect(div).toBeInTheDocument()
  })

  it('should reroute to home page', () => {
    render(
      <AuthLayout authUser={1}>
        <div>Rendered Children</div>
      </AuthLayout>
    );
  })
})