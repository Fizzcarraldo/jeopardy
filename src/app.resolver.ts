import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Cat')
export class AppResolver {
  cats = [{
    id: 1,
    name: 'Mjau',
    age: 17
  }, 
  {
    id: 2,
    name: 'Michi',
    age: 17
  }]

  @Query()
  getCats() {
    console.log('getCats');
    return this.cats;
  }

  @Query()
  getDogs() {
    console.log('getCats');
    return this.cats;
  }

  @Query('cat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<any> {
    return this.cats.find(c => c.id === id);
  }


  @Mutation()
  createCat(
    @Args('cat')
    cat: any
  ): Promise<string> {
    this.cats = [...this.cats, {...cat, id: this.cats.length + 1}];
    console.log(this.cats);
    return Promise.resolve('cat created');
  }

  @Mutation()
  updateCat(
    @Args('cat')
    cat: any
  ): Promise<string> {
    this.cats = this.cats.map(c => {
      if(c.id === cat.id) {
        return {...cat}
      }
      return c;
    });
    return Promise.resolve('cat updated');
  }

  @Mutation()
  deleteCat(
    @Args('id', ParseIntPipe)
    id: number
  ): Promise<any> {
    this.cats = this.cats.filter(c => c.id !== id);
    return Promise.resolve('cat removed');
  }
}

