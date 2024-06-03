import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BreedsService {

  constructor(

    @InjectRepository(Breed)
    private readonly breedsRepository: Repository<Breed>

  ) {}
  async create(createBreedDto: CreateBreedDto) {
    return await this.breedsRepository.save(createBreedDto);
  }

  async findAll() {
    return await this.breedsRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  async remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
