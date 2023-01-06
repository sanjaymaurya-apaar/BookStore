# BookStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Application Introduction

Book store Application
----------------------
	- Multiple Modules
	- Security
	- Different Layouts
	- Bootstrap & Angular Material
	- Popup/ Model
	- Form, Directive, Service, Pipe, routing

Structure of Application
------------------------
- General (PUblic Section)
	- Home Page
	- All Books
	- Book details
- User (for logged in users)
	- Add Book
	- Edit their own Book
- Admin
	- See all users
	- Other features
- Authentication
	- Signup
	- Login
- Shared Model: header/footer

## Generate Modules

```bash
ng generate module public
ng generate module auth
ng generate module user
ng generate module shared
```

## Generating components

### Public Module Components

```bash
ng generate component public/components/home
ng generate component public/components/all-books
ng generate component public/components/book-detail
```

### Auth Module Components

```bash
ng generate component auth/components/login
ng generate component auth/components/signup
ng generate component auth/components/change-password
```

### Root app module components
```bash
ng generate component about-us
ng generate component how-it-works
```

## Adding Routes for root module

In root app module, add `routerModule` (with `forRoot`) in import with route path for about-us and how-it-works pages.
- Add router-outlet tag to root component's html

### Creating Routing module

When we create angular application, angular application asks us whether we want to create routing in the application. If we opt for routing, additional module called `app-routing-module.ts` with no other file is created. This module will house all the routes or paths in our application irrespective of location of other modules or components.

If we didn't opt for routing feature, we need to create this module using below command and add as import in root app module with `forRoot` settings

```bash
ng generate module app-routing --flat=true
```

> Note: routing module doesn't house components and therefore doesn't need commonModule and declaration array.