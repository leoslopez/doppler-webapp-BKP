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

  it('should hide the separator and back button on mobile', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: true,
      removeEventListener: jest.fn(),
    });

    const { container } = renderComponent();

    expect(container.querySelector('.dp-separator')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should show the separator and back button on desktop', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: false,
      removeEventListener: jest.fn(),
    });

    const { container } = renderComponent();

    expect(container.querySelector('.dp-separator')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
