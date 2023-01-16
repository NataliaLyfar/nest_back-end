import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateBidDto } from './dto/create-bid.dto';
import { Bid } from './bids.model';

@Injectable()
export class BidsService {
  constructor(@InjectModel(Bid) private bidRepository: typeof Bid,
  private fileService: FilesService) {}

  async create(dto: CreateBidDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const bid = await this.bidRepository.create({ ...dto, image: fileName });
    return bid;
  }
}
