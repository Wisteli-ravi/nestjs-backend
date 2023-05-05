import { ClientService } from './client/client.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import { PartnerModule } from './partner/partner.module';
import { User } from './user/entities/user.entity';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    SharedModule,
    ClientModule,
    PartnerModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]

})
export class UserModule {}
