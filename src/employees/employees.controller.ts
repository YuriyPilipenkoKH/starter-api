import { Controller, Get, Post, Body, Patch, Param, Delete , Query, BadRequestException} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma, Role } from '@prisma/client';
import { CreateEmployeeDto, createEmployeeSchema } from './dto/create-employee.dto';


@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() employee: CreateEmployeeDto) {
    try {
      // Validate with Zod
      const validatedData = createEmployeeSchema.parse(employee);
      return this.employeesService.create(validatedData);
    } catch (error) {
      throw new BadRequestException(error.errors); // Return validation errors
    }
  }

  @Get()
  findAll(@Query('role') role?: Role) {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() employee: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(id, employee);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
