import { SetMetadata } from '@nestjs/common';
import { Roles } from './auth.roles'; 

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);


export const ROLES_KEY = 'roles';
export const UseRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);