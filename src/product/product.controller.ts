/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteProductDto } from './dto/delete-product.tdo';
import { FindProductDto } from './dto/find-product.dto';
import { SaveProductDto } from './dto/save-product.dto';
import { ProductModel } from './product.model';
import { SuccessResponse } from '../helpers/success.response';

@Controller('product')
export class ProductController {
  @Get('get/:id')
  async get(@Param('id') id: string): Promise<ProductModel> {
    return null;
  }

  @Post('find')
  async getByCategory(@Body() dto: FindProductDto): Promise<ProductModel[]> {
    return null;
  }

  @Post('save')
  async save(@Body() dto: SaveProductDto): Promise<ProductModel> {
    return null;
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteProductDto): Promise<SuccessResponse> {
    return null;
  }
}
