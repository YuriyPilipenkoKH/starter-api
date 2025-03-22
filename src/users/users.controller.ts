import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'intern' | 'admin' ){
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
