import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service'
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService ) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'intern' | 'admin' ){
    if (role) {
      return [`Fetching users with role: ${role}`];
    }
    return ['Fetching all users'];
  }
  @Get('intern') // GET /users/intern
  findAllInterns(){
    return ['intern']
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id:string){
    return {id}
  }

  @Post() // POST /users
  create(@Body() user:object) {
    return user
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id:string, @Body() userUpdate: object){
    return {id, ...userUpdate}
  }

  @Delete(':id') // DELETE /users/:id
  del(@Param('id') id:string){
    return {id}
  }


}
