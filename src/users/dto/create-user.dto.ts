import { IsEmail, IsNotEmpty, IsString ,IsEnum } from "class-validator";

export  enum UserRole {
  INTERN = "intern",
  ADMIN = "admin",
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(UserRole, {
    message: "Valid role required",
  })
  role: UserRole;
}