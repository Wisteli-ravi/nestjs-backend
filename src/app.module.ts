import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClaimModule } from './claim/claim.module';
import { SseModule } from './sse/sse.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host:  '65.2.23.183',
      username: 'DocInsightApiuser',
      password: 'T%25%5E%26%24%24*9ji9',
      database: 'documentAnalyticsDB',
      synchronize: false,
      authMechanism: 'default',
      authSource: 'admin',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    ClaimModule,
    SseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
