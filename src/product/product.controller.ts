import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAllProduct(@Req() req) {
    const products = await this.productService.find();
    return products;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getByProduct(@Req() req, @Param() params) {
    const product = await this.productService.findOneById(params.id);
    return product;
  }
}
