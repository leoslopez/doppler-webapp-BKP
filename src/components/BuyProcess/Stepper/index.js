import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { StepperContainer } from './Stepper.styles';

export const Stepper = ({ steps, mobileVariant = false, firstStepBackUrl }) => {
  const intl = useIntl();
  const _ = (id, values) => intl.formatMessage({ id: id }, values);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const activeStepIndex = steps.findIndex((st) => pathname.includes(st.pathname));
  const currentStepIndex = activeStepIndex >= 0 ? activeStepIndex : 0;
  const currentStep = steps[currentStepIndex];
  const nextStep = steps[currentStepIndex + 1];
  const previousStep = steps[currentStepIndex - 1];
  const isMobileViewport = useIsMobile();

  const goToPreviousStep = () => {
    if (previousStep) {
      navigate({ pathname: previousStep.pathname, search });
      return;
    }

    navigate(firstStepBackUrl ?? -1);
  };
  return (
    <StepperContainer
      className={`dp-container-steper hero-banner${mobileVariant ? ' dp-new-plan-selection-stepper' : ''}`}
    >
      {mobileVariant && (
        <div className="dp-new-plan-selection-stepper-summary">
          <button
            type="button"
            className="dp-new-plan-selection-stepper-back"
            onClick={goToPreviousStep}
            aria-label={_('buy_process.stepper.go_to_previous_step')}
          />
          <div className="dp-new-plan-selection-stepper-copy">
            <span className="dp-new-plan-selection-stepper-current">
              {currentStepIndex + 1}. {_(currentStep.label)}
            </span>
            {nextStep && (
              <span className="dp-new-plan-selection-stepper-next">
                {_('buy_process.stepper.next_step', {
                  step: currentStepIndex + 2,
                  label: _(nextStep.label),
                })}
              </span>
            )}
          </div>
          <span
            className="dp-new-plan-selection-stepper-progress"
            style={{ '--stepper-progress': `${((currentStepIndex + 1) / steps.length) * 360}deg` }}
          >
            <span>
              {_('buy_process.stepper.counter', {
                current: currentStepIndex + 1,
                total: steps.length,
              })}
            </span>
          </span>
        </div>
      )}
      {!isMobileViewport && (
        <ul className="dp-steper">
          {steps.map((step, index) => (
            <li key={`step-${index}`} className={`${index <= activeStepIndex ? 'active' : ''}`}>
              {pathname.includes(step.pathname) && <span className="step-active" />}
              <span>
                <span className={step.icon} />
                {_(step.label)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </StepperContainer>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  firstStepBackUrl: PropTypes.string,
  mobileVariant: PropTypes.bool,
};
