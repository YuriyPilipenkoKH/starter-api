import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: string) {
    return `This action removes a #${id} employee`;
  }
}
