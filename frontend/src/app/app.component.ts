import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jga';

  constructor(apollo: Apollo) {
    apollo
      .query({
        query: gql`
          {
            query {
              getQuiz {getQuiz(gameId: 1) { id  categories { name questions { question }} } }
            }
          }
        `,
      })
      .subscribe( foo => {
        console.log(foo);
      })
  }

  public foo() {
    this.apollo.mutate({
      mutation: submitRepository
    }).subscribe();
  }
}

