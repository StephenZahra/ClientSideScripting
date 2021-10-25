import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  isBreaking: Boolean = true;

  article: any[] = [
    {
      "articleId": "123",
      "articleTitle":"Some Title",
      "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "isBreaking": false
    },
    {
      "articleId": "456",
      "articleTitle":"Some Title",
      "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "isBreaking": true
    },
    {
      "articleId": "789",
      "articleTitle": "Some Title",
      "articleText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "isBreaking": false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  } 

}
