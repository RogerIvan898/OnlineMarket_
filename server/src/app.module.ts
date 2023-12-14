import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
@Module({
  imports: [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname,'..','..','/client/dist')
      }),
      AuthModule,
      ProductsModule,
      CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
