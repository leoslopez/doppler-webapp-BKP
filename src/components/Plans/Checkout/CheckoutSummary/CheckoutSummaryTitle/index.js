import { useIntl } from 'react-intl';
import { BreadcrumbNew, BreadcrumbNewItem } from '../../../../shared/BreadcrumbNew';
import { useLocation, Link } from 'react-router-dom';
import { NewPlanSelectionStyled } from '../../../../BuyProcess/NewPlanSelection/index.styles';

export const CheckoutSummaryTitle = ({ title, hideBreadcrumb = false }) => {
  const intl = useIntl();
  const _ = (id, values) => intl.formatMessage({ id: id }, values);
  const location = useLocation();

  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-12">
        {!hideBreadcrumb && (
          <BreadcrumbNew>
            <BreadcrumbNewItem
              href={_('buy_process.plan_selection.breadcumb_plan_url')}
              text={_('buy_process.plan_selection.breadcumb_plan_text')}
            />
            <BreadcrumbNewItem
              href={`${location.pathname}${location.search}`}
              text={_(title.smallTitle)}
            />
          </BreadcrumbNew>
        )}
        <h2 className="dp-first-order-title">
          {_('checkoutProcessSuccess.enjoy_doppler_title')}{' '}
          <span className="dpicon iconapp-launch" />
        </h2>
        <NewPlanSelectionStyled>
          <div className="dp-new-plan-selection-back p-t-12">
            <Link to="/dashboard" className="dp-button button-medium ctaTertiary dp-new-plan-selection-back-button">
              <span className="dp-new-plan-selection-back-text">
                {_('checkoutProcessSuccess.go_to_home_link')}
              </span>
            </Link>
          </div>
        </NewPlanSelectionStyled>
      </div>
    </>
  );
};
