/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteReviewDto } from './dto/delete-review.dto';
import { SaveReviewDto } from './dto/save-review.dto';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Get('get/:productId')
  async get(@Param('productId') productId: string): Promise<ReviewModel[]> {
    return null;
  }

  @Post('save')
  async save(@Body() dto: SaveReviewDto): Promise<ReviewModel> {
    return null;
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteReviewDto): Promise<SuccessResponse> {
    return null;
  }
}
