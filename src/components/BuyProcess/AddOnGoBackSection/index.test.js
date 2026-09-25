import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';
import { AddOnGoBackSection } from '.';

const renderComponent = () =>
  render(
    <IntlProvider>
      <AddOnGoBackSection />
    </IntlProvider>,
  );

describe('AddOnGoBackSection', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should show the back link on mobile', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: true,
      removeEventListener: jest.fn(),
    });

    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the back link on desktop', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: false,
      removeEventListener: jest.fn(),
    });

    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
