import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get() // GET /users
  findAll(){
    return[]
  }
  @Get('intern') // GET /users/intern
  findAllInterns(){
    return ['intern']
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id:string){
    return {id}
  }


}
