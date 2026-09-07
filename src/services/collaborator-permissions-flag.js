export const isCollaboratorPermissionsEnabled = () =>
  process.env.REACT_APP_COLLABORATOR_PERMISSIONS_ENABLED === 'true';

export const isCollaboratorAccountReportEnabled = () =>
  process.env.REACT_APP_COLLABORATOR_ACCOUNT_REPORT_ENABLED === 'true';
