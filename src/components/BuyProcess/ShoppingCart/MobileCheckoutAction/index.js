import PropTypes from 'prop-types';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { StickyFooterAction } from '../../StickyFooterAction';

export const MobileCheckoutAction = ({ children }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <StickyFooterAction className="dp-checkout-buy-mobile-sticky">{children}</StickyFooterAction>
  ) : (
    children
  );
};

MobileCheckoutAction.propTypes = {
  children: PropTypes.node.isRequired,
};
