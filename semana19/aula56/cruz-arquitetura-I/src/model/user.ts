export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export const toUserRoles = (value: string) => {
   switch (value) {
     case "NORMAL":
       return USER_ROLES.NORMAL;
     case "ADMIN":
       return USER_ROLES.ADMIN;
     default:
       // return USER_ROLES.NORMAL
       throw new Error("Valid user roles are 'NORMAL' and 'ADMIN'");
   }
 };

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id:string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInputDTO = {
   name: string;
   nickname: string;
   email: string;
   password: string;
   role: USER_ROLES;
 };