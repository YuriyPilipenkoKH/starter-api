import { Injectable } from '@nestjs/common';
import { Empoyee } from '@prisma/client';


@Injectable()
export class EmployeesService {
  create(empoyee: Empoyee) {
    return 'This action adds a new employee';
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  update(id: string, empoyee: Empoyee) {
    return `This action updates a #${id} employee`;
  }

  remove(id: string) {
    return `This action removes a #${id} employee`;
  }
}
