import { Injectable } from '@nestjs/common';
import { Employee, Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}

 async create(createEmployee: Prisma.EmployeeCreateInput): Promise<Employee> {
    return this.databaseService.employee.create({
      data: createEmployee
    })
  }

  async findAll(role?: Role) {
    if (role) return this.databaseService.employee.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.employee.findMany()
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
