import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { options } from './config/throttler.config';



 @Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot(),
    DatabaseModule, 
    EmployeesModule,
    ThrottlerModule.forRoot(options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
