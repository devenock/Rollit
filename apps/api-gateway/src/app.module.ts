import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {GraphQLModule} from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig} from '@nestjs/apollo';
import {IntrospectAndCompose} from '@apollo/gateway';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        cors: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: 'http://localhost:3001/graphql' },
            { name: 'analytics', url: 'http://localhost:3002/graphql' },
            { name: 'subscription', url: 'http://localhost:3003/graphql' },
            { name: 'task', url: 'http://localhost:3004/graphql' },
          ],
        }),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
