/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteTopPageDto } from './dto/delete-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { FindTopPageResponse } from './dto/find-top-page.response';
import { SaveTopPageModelDto } from './dto/save-top-page.dto';
import { TopPageModel } from './top-page.model';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {
    this.configService.get('TEST');
    return null;
  }

  @Post('find')
  async getByCategory(
    @Body() dto: FindTopPageDto,
  ): Promise<FindTopPageResponse[]> {
    return null;
  }

  @Post('save')
  async save(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {
    return null;
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {
    return null;
  }
}
