export interface IUser {
    id?: number,
    email: string,
    nameUser: string,
    apPaterno: string,
    apMaterno?: string,
    userDescription: string,
    contrasena: string,
    salt?: string
};