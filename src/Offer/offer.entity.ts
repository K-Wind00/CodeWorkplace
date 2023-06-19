import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  offerName: string;

  @Column()
  salary: string;

  @Column()
  technologies: string;

  @Column()
  localization: string;

  @Column({ nullable: true })
  companyPhoto: string;
}
