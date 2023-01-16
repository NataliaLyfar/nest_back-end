import { Module } from '@nestjs/common';
import { BidsService } from './bids.service';
import { BidsController } from './bids.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Bid } from './bids.model';
import { FilesModule } from '../files/files.module';

@Module({
  providers: [BidsService],
  controllers: [BidsController],
  imports: [SequelizeModule.forFeature([User, Bid]), FilesModule],
})
export class PostsModule {}
