import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useIsMobile } from '.';

const MobileState = () => <span>{useIsMobile() ? 'mobile' : 'desktop'}</span>;

describe('useIsMobile', () => {
  it('should return true when the mobile breakpoint matches', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn().mockReturnValue({
      addEventListener: jest.fn(),
      matches: true,
      removeEventListener: jest.fn(),
    });

    const { getByText } = render(<MobileState />);

    expect(getByText('mobile')).toBeInTheDocument();

    window.matchMedia = originalMatchMedia;
  });
});
