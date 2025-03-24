import { Injectable } from '@nestjs/common';
import {  Employee, Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}

  async create(employee: CreateEmployeeDto): Promise<Employee> {
    return this.databaseService.employee.create({
      data: {
        name: employee.name,   // Required
        email: employee.email, // Required
        role: employee.role ?? "intern", // Default to intern
      },
    });
  }

  async findAll(role?: Role) {
    if (role) return this.databaseService.employee.findMany({
      where: { role }
    })
    return this.databaseService.employee.findMany()
  }

  async findOne(id: string) {
    return this.databaseService.employee.findUnique({
      where: { id }
    })
  }

  async update(id: string, employee: Prisma.EmployeeUpdateInput): Promise<Employee> {
    return this.databaseService.employee.update({
      where: { id },
      data: employee,
    });
  }

  async remove(id: string) {
    return this.databaseService.employee.delete({
      where: { id }
    })
  }
}
