import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "role": "intern",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "role": "intern",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "role": "intern",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "role": "admin",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "role": "admin",
    }
  ]

  findAll(role?: "admin" | "intern"){
    if(role){
      return this.users.filter((user) => 
        user.role === role
      )
    }
    return this.users
  }


}
