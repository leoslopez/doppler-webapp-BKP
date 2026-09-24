import { GoBackButton } from '../NewPlanSelection/GoBackButton';

export const AddOnGoBackSection = () => {
  return (
    <div className="dp-new-plan-selection-back">
      <GoBackButton goBackUrl="/my-plan" />
    </div>
  );
};
