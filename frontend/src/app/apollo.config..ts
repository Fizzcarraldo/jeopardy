import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { DefaultOptions } from 'apollo-client';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {

    const http = httpLink.create({
      uri: 'http://localhost:3000/graphql'
    });

    const ws = new WebSocketLink({
      uri: 'ws://localhost:3000/graphql',
      options: {
        reconnect: true
      }
    });

    const link = split(
      ({ query }) => {
        const { kind } = getMainDefinition(query);
        return kind === 'OperationDefinition';
      },
      ws,
      http,
    );

    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }

    apollo.create({
      link,
      cache: new InMemoryCache(),
      defaultOptions: defaultOptions as DefaultOptions,
    });
  }
}
