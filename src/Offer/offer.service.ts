import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

  async findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  async createOffer(offerData: Offer): Promise<Offer> {
    const offer = new Offer();
    offer.companyName = offerData.companyName;
    offer.offerName = offerData.offerName;
    offer.technologies = offerData.technologies;
    offer.salary = offerData.salary;
    offer.localization = offerData.localization;
    offer.companyPhoto = offerData.companyPhoto;

    return this.offerRepository.save(offer);
  }
}
