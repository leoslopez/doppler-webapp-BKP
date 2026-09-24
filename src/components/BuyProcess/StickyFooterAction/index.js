import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { StickyFooterActionContainer } from './index.styles';

export const StickyFooterAction = ({ children, className, portal = false, ...rest }) => {
  const [footerHeight, setFooterHeight] = useState(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      const footer = document.querySelector('.dp-footer');
      setFooterHeight(footer ? Math.ceil(footer.getBoundingClientRect().height) : null);
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);

    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  const stickyFooterAction = (
    <StickyFooterActionContainer
      {...rest}
      className={className}
      style={footerHeight ? { '--dp-buy-process-footer-height': `${footerHeight}px` } : undefined}
    >
      {children}
    </StickyFooterActionContainer>
  );

  return portal ? createPortal(stickyFooterAction, document.body) : stickyFooterAction;
};

StickyFooterAction.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  portal: PropTypes.bool,
};
