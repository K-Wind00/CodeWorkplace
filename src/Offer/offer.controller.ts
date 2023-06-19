import { Body, Controller, Get, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { Offer } from './offer.entity';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('create')
  async createOffer(@Body() offerData: Offer): Promise<Offer> {
    return this.offerService.createOffer(offerData);
  }

  @Get('all')
  async getAllOffers(): Promise<Offer[]> {
    return this.offerService.findAll();
  }
}
