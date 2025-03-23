import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}

 async create(createEmployee: Prisma.EmployeeCreateInput) {
    return 'This action adds a new employee';
  }

  async findAll() {
    return `This action returns all employees`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  async update(id: string, updateEmployee: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: string) {
    return `This action removes a #${id} employee`;
  }
}
