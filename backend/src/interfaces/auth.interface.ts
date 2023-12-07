export interface LoginInterface {
   email: string,
   password: string
}
export interface AuthInterface extends LoginInterface {
   name?: string,
}
export interface TokenizeAuth extends AuthInterface {
   token: string
}