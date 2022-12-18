import { Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateOrderDto } from './dto/create.order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) { }


  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(201)
  async createOrder(@Req() req, @Res() res, @Body() dto: CreateOrderDto) {
    const createOrder = await this.orderService.createOrder(dto, req.user);
    console.log("created : ", createOrder);

    res.send({ message: `Order '${createOrder.id}' created.` })
    return createOrder;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/cancel')
  async cancelOrder(@Req() req, @Res() res, @Param() params) {
    const cancelOrder = await this.orderService.cancelOrder(params.id);
    res.send({ message: `Order '${cancelOrder.id}' is cancel.` })
    return cancelOrder;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOrderById(@Req() req, @Param() params) {
    const order = await this.orderService.findOneById(params.id);
    return order;
  }

}
