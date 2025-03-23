import { Injectable } from '@nestjs/common';
import { IUser } from 'src/types/user';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

@Injectable()
export class UsersService {
  private users = [
    {
        "id": "1",
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "role": "intern",
    },
    {
        "id": "2",
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "role": "intern",
    },
    {
        "id": "3",
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "role": "intern",
    },
    {
        "id": "4",
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "role": "admin",
    },
    {
        "id": "5",
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

  findAllInterns(){
    const interns = this.users.filter(user => user.role === 'intern')
    return interns
  }

  findAllAdmins(){
    const admins = this.users.filter(user => user.role === 'admin')
    return admins
  }

  findOne(id: string){
   const user = this.users.find(user => user.id === id);
   return user
  }

  create(user: Omit<IUser, 'id'>) {
    const newUser: IUser = {
      id: uuidv4(), // Generate a new UUID
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, data: IUser) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return { ...user, ...data }
        }
        return user
    })

    return this.findOne(id)
  }

  delete(id: string) {
    const removedUser = this.findOne(id)
    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }
}
