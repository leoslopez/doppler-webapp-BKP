import { useIntl } from 'react-intl';
import * as S from './styles';

export const AdditionalServicesHeader = () => {
  const intl = useIntl();
  const _ = (id, values) => intl.formatMessage({ id: id }, values);

  return (
    <S.Header className="hero-banner">
      <div className="dp-container">
        <div className="dp-rowflex">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h2 className="dp-first-order-title">{_('my_plan.addtional_services.title')}</h2>
          </div>
          <div className="col-sm-7 additional-services-header-description">
            <p>{_('my_plan.addtional_services.description')}</p>
          </div>
        </div>
        <span className="arrow"></span>
      </div>
    </S.Header>
  );
};
