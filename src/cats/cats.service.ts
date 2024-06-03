import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {

  constructor(

  @InjectRepository(Cat)
  private readonly catsRepository: Repository<Cat>,

  @InjectRepository(Breed)
  private readonly breedsRepository: Repository<Breed>
) { }


  async create(createCatDto: CreateCatDto) {

    const breed = await this.breedsRepository.findOneBy({name : createCatDto.breed});

    if (!breed) {
      throw new BadRequestException('breed not found')
    };


    return await this.catsRepository.save({
      ...createCatDto,
      breed,
    });
  
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOneBy({id})
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return;
  }

  async remove(id: number) {
    return await this.catsRepository.softDelete({id}); // Se le pasa el id
    /**return await this.catsRepository.softRemove({id}) Se le pasa la instancia*/
  }
}
