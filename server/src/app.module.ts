import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PoolModule } from './pool/pool.module';
import { VoteModule } from './vote/vote.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        UserModule,
        AuthModule,
        PrismaModule,
        PoolModule,
        VoteModule,
    ],
})
export class AppModule {}
