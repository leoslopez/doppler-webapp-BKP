import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MobileCheckoutAction } from '.';

describe('MobileCheckoutAction', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should only render the sticky action on mobile', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: true,
      removeEventListener: jest.fn(),
    });

    render(
      <MobileCheckoutAction>
        <button type="button">Continue</button>
      </MobileCheckoutAction>,
    );

    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(
      screen.getByRole('button').closest('.dp-checkout-buy-mobile-sticky'),
    ).toBeInTheDocument();
  });

  it('should retain the card action on desktop', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: false,
      removeEventListener: jest.fn(),
    });

    render(
      <MobileCheckoutAction>
        <button type="button">Continue</button>
      </MobileCheckoutAction>,
    );

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });
});
