import { USER_ROLE } from '../constants';

export type TUserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];
