import { useIsMobile } from '../../../hooks/useIsMobile';
import { GoBackButton } from '../PlanSelection/GoBackButton';

export const AddOnGoBackSection = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <>
      <hr className="dp-separator" />
      <div className="m-t-18 m-b-18">
        <GoBackButton />
      </div>
    </>
  );
};
