import axios from "axios";
import { UserType } from "../../types/user";

interface ISignUpAPIBody {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthday: string;
}

export const signupAPI = (body: ISignUpAPIBody) =>
    axios.post<UserType>("/api/auth/signup", body);
