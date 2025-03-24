import { Injectable } from '@nestjs/common';
import {  Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}

 async create(employee: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: {
        ...employee,
        role: employee.role ?? Role.intern, // 👈 Default to "intern" if no role provided
      },
    })
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

  async update(id: string, employee: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: { id },
      data: employee,
    })
  }

  async remove(id: string) {
    return this.databaseService.employee.delete({
      where: { id }
    })
  }
}
