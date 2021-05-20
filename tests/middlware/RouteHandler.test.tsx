import { render, screen } from '@testing-library/react';
import { RouteHandler } from '../../src/middleware/RouteHandler';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    route: '/login',
    push: jest.fn(),
  }))
}));

describe('RouteHandler', () => {
  it('children when user is authorized', () => {
    const authority = -1;
    render(
      <RouteHandler authority={authority}>
        <div>Rendering Children</div>
      </RouteHandler>
    );
    const div = screen.getByText('Rendering Children');
    expect(div).toBeInTheDocument();
  });

  it('children when user is authorized', () => {
    const authority = 0;
    render(
      <RouteHandler authority={authority}>
        <div>Rendering Children</div>
      </RouteHandler>
    );
    const div = screen.queryByText('Rendering Children');
    expect(div).not.toBeInTheDocument();
  });
});
