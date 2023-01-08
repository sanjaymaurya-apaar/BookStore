import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({providedIn: 'root'})
export class BookService {

  allBooks:Book[] = [
    {
        "id": 1,
        "title": "Hamiltons, The",
        "totalPages": 306,
        "author": "Cris Aleksich",
        "price": {
            "currency": "TZS",
            "value": 55.92
        }
    },
    {
        "id": 2,
        "title": "Red Baron, The (Der rote Baron)",
        "totalPages": 489,
        "author": "Bobbe Jebb",
        "price": {
            "currency": "CNY",
            "value": 73.06
        }
    },
    {
        "id": 3,
        "title": "Tale of Sweeney Todd, The",
        "totalPages": 99,
        "author": "Phylis Teasell",
        "price": {
            "currency": "PHP",
            "value": 34.75
        }
    },
    {
        "id": 4,
        "title": "Escape from the Planet of the Apes",
        "totalPages": 376,
        "author": "Babs Huckleby",
        "price": {
            "currency": "IDR",
            "value": 38.95
        }
    },
    {
        "id": 5,
        "title": "Felix the Cat: The Movie",
        "totalPages": 41,
        "author": "Ximenes Scotchmore",
        "price": {
            "currency": "BRL",
            "value": 29.53
        }
    },
    {
        "id": 6,
        "title": "Godzilla Against MechaGodzilla (Gojira tai Mekagojira)",
        "totalPages": 381,
        "author": "Colan Mallya",
        "price": {
            "currency": "JPY",
            "value": 36.49
        }
    },
    {
        "id": 7,
        "title": "Best Man, The",
        "totalPages": 345,
        "author": "Had Esley",
        "price": {
            "currency": "PKR",
            "value": 16.21
        }
    },
    {
        "id": 8,
        "title": "Over the Brooklyn Bridge",
        "totalPages": 286,
        "author": "Bennie Elles",
        "price": {
            "currency": "EUR",
            "value": 28.56
        }
    },
    {
        "id": 9,
        "title": "World of Kanako, The (Kawaki.)",
        "totalPages": 326,
        "author": "Leia Grizard",
        "price": {
            "currency": "IDR",
            "value": 65.93
        }
    }];

  constructor() { }

  getBooks(): Book[]{
    return this.allBooks;
  }
}
