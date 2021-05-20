import { RouteHandler } from '@/middleware/RouteHandler';
import { render, screen } from '@testing-library/react';
import AuthLayout from '../../src/layouts/AuthLayout';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/auth/sign-in',
    push: jest.fn(),
  })
}));

const useRouter = jest.spyOn(require('next/router'), 'useRouter');


describe('AuthLayouts', () => {
  it('should render the children', () => {
    render(
      <AuthLayout authUser={0}>
        <div>Rendered Children</div>
      </AuthLayout>
    );
    const div = screen.getByText('Rendered Children');
    expect(div).toBeInTheDocument();
  });

  it('should reroute to home page', () => {
    // const router = useRouter.mockImplementation(() => ({
    //   route: '/auth/sign-in',
    //   push: jest.fn(),
    // }));

    // const { debug } = render(
    //   <AuthLayout authUser={1} />
    // );
    // console.log("here: ", router.push());
    // debug();
  });
});