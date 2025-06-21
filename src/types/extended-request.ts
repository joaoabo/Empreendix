import { Request } from 'express';

export type ExtendedRequest = Request & { Id_Usu?: number};
