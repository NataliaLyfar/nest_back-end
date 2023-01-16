import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateBidDto } from './dto/create-bid.dto';
import { BidsService } from './bids.service';

@ApiTags('Bids')
@Controller('bids')
export class BidsController {
  constructor(private bidService: BidsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() dto: CreateBidDto, @UploadedFile() image) {
    return this.bidService.create(dto, image);
  }
}
