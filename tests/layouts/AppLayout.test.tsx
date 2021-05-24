import { render, screen } from '@testing-library/react'
import { AppLayout } from '@/layouts/AppLayout';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/auth/sign-in',
    push: jest.fn(),
  })
}))

describe('AppLayout', () => {
  it('should render the component', () => {
    render(
      <AppLayout authority={-1}>
        <div>Rendered Children</div>
      </AppLayout>
    )
    const div = screen.getByText('Rendered Children')
    expect(div).toBeInTheDocument()
  })

  it('should show the layout class if passed', () => {
    const layoutClass = 'nickWasHere'
    const { container } = render(
      <AppLayout authority={-1} layoutClass={layoutClass}>
        <div>Rendered Children</div>
      </AppLayout>
    )
    const className = container.querySelector(`.${layoutClass}`)
    expect(className).toBeInTheDocument()
  })
})