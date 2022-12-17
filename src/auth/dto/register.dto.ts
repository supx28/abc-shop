import { ProfileDto } from "./profile.dto";

export class RegisterDto {

  username: string;
  password: string;
  confirmPassword: string;
  profile: ProfileDto[];

}
