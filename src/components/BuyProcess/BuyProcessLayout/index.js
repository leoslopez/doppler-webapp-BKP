import {
  BUY_ECO_IA_PLAN,
  BUY_CHAT_PLAN,
  BUY_LANDING_PACK,
  BUY_MARKETING_PLAN,
  BUY_ONSITE_PLAN,
  BUY_PUSH_NOTIFICATION_PLAN,
} from '../../../doppler-types';
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { InjectAppServices } from '../../../services/pure-di';
import { Stepper } from '../Stepper';

export const getSteps = (buyType, user, pathname) => {
  const currentPathname = pathname.includes('/new-plan-selection')
    ? '/new-plan-selection'
    : '/plan-selection/premium';
  const steps = [
    {
      id: 1,
      label: 'buy_process.stepper.email_marketing_plan_step',
      icon: 'dpicon iconapp-email-alert',
      pathname: currentPathname,
      visible: buyType === BUY_MARKETING_PLAN.toString(),
    },
    {
      id: 2,
      label: 'buy_process.stepper.conversation_plan_step',
      icon: 'dpicon iconapp-chatting',
      pathname: '/buy-conversation',
      visible: buyType === BUY_CHAT_PLAN.toString(),
    },
    {
      id: 3,
      label: 'buy_process.stepper.landings_plan_step',
      icon: 'dpicon iconapp-chatting',
      pathname: '/landing-packages',
      visible: buyType === BUY_LANDING_PACK.toString(),
    },
    {
      id: 4,
      label: 'buy_process.stepper.onsite_plan_step',
      icon: 'dpicon iconapp-chatting',
      pathname: '/buy-onsite-plans',
      visible: buyType === BUY_ONSITE_PLAN.toString(),
    },
    {
      id: 5,
      label: 'buy_process.stepper.push_notification_plan_step',
      icon: 'dpicon iconapp-chatting',
      pathname: '/buy-push-notification-plans',
      visible: buyType === BUY_PUSH_NOTIFICATION_PLAN.toString(),
    },
    {
      id: 6,
      label: 'buy_process.stepper.eco_ai_plan_step',
      icon: 'dpicon iconapp-chatting',
      pathname: '/buy-ecoia-plan',
      visible: buyType === BUY_ECO_IA_PLAN.toString(),
    },
    {
      id: 5,
      label: 'buy_process.stepper.finalize_purchase_step',
      icon: 'dpicon iconapp-fast-money',
      pathname: '/checkout/premium',
      visible: true,
    },
    {
      id: 6,
      label: 'buy_process.stepper.enjoy_doppler_step',
      icon: 'dpicon iconapp-launch',
      pathname: '/checkout-summary',
      visible: true,
    },
  ];

  return steps;
};

const NEW_PLAN_SELECTION_FLOW_STORAGE_KEY = 'isNewPlanSelectionFlow';

export const BuyProcessLayout = InjectAppServices(
  ({ children, dependencies: { appSessionRef } }) => {
    const { pathname } = useLocation();
    const query = useQueryParams();
    const buyType = query.get('buyType') ?? '1';
    let steps = getSteps(buyType, appSessionRef.current.userData.user, pathname).filter(
      (s) => s.visible === true,
    );
    const isNewPlanSelection = pathname === '/new-plan-selection';

    if (isNewPlanSelection) {
      sessionStorage.setItem(NEW_PLAN_SELECTION_FLOW_STORAGE_KEY, 'true');
    } else if (pathname === '/plan-selection/premium') {
      sessionStorage.removeItem(NEW_PLAN_SELECTION_FLOW_STORAGE_KEY);
    }

    const isPartOfNewPlanSelectionFlow =
      isNewPlanSelection ||
      ((pathname.startsWith('/checkout/') || pathname === '/checkout-summary') &&
        sessionStorage.getItem(NEW_PLAN_SELECTION_FLOW_STORAGE_KEY) === 'true');

    useLayoutEffect(() => {
      // The mfe's own hide mechanism (window.displayDopplerNavBar) only takes effect once its
      // script has loaded, which can happen after this component has already painted, causing
      // the menu to flash before it is hidden. Hiding the mount element via CSS here runs
      // synchronously before the browser paints, so the menu never becomes visible in the first place.
      const menuElement = document.getElementById('doppler-menu-mfe');
      if (menuElement) {
        menuElement.style.display = isPartOfNewPlanSelectionFlow ? 'none' : '';
      }

      const setNavBarVisibility = (visible) => {
        if (typeof window.displayDopplerNavBar === 'function') {
          window.displayDopplerNavBar(visible);
          return true;
        }
        return false;
      };

      let intervalId;
      if (!setNavBarVisibility(!isPartOfNewPlanSelectionFlow)) {
        intervalId = setInterval(() => {
          if (setNavBarVisibility(!isPartOfNewPlanSelectionFlow)) {
            clearInterval(intervalId);
          }
        }, 200);
      }

      return () => {
        clearInterval(intervalId);
        if (menuElement) {
          menuElement.style.display = '';
        }
        setNavBarVisibility(true);
      };
    }, [isPartOfNewPlanSelectionFlow]);

    useEffect(() => {
      if (pathname === '/checkout-summary') {
        return () => {
          sessionStorage.removeItem(NEW_PLAN_SELECTION_FLOW_STORAGE_KEY);
        };
      }
    }, [pathname]);

    if (isNewPlanSelection) {
      return (
        <>
          <div className="dp-container">
            <Stepper steps={steps} />
            <hr />
          </div>
          {children}
        </>
      );
    }

    return (
      <div className="dp-container">
        <Stepper steps={steps} />
        <hr />
        {children}
      </div>
    );
  },
);
