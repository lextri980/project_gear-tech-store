import { USER_GENDER, USER_ROLE } from '../constants';

export type TUserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export type TUserGender = (typeof USER_GENDER)[keyof typeof USER_GENDER];
