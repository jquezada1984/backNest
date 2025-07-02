import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // Genera el schema automáticamente
      playground: true, // Habilita GraphQL Playground
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {} 