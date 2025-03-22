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

  findOne(id: number){
    const user = this.users.find((user) => 
      user.id === id
    )
    return user
  }

  create(user: {
    name: string,
    email: string,
    role: "admin" | "intern"
  }){
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
        id: usersByHighestId[0].id + 1,
        ...user
    }
    this.users.push(newUser)
    return newUser
  }

  update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    this.users = this.users.map(user => {
        if (user.id === id) {
            return { ...user, ...updatedUser }
        }
        return user
    })

    return this.findOne(id)
}
}
