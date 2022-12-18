import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProduct(req: any): Promise<import("./product.entity").Product[]>;
    getByProduct(req: any, params: any): Promise<import("./product.entity").Product>;
}
