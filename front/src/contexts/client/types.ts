import { JwtPayload } from "jwt-decode";

export interface iClient {
    id: string
	created_at: Date
	name: string
	email: string
	phone: string
}

export interface TokenData extends JwtPayload {
	type: string;
	email: string;
	iat: number;
	exp: number;
	sub: string;
}