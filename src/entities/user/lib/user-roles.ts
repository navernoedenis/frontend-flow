import type { UserRole } from '../model/types';

export function isAdminRole(roles: UserRole[]) {
  return roles.includes('admin');
}

export function isUserRole(roles: UserRole[]) {
  return roles.includes('user');
}
