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

Let's create html file that would hold layout for auth when we would call `/auth`. For this we can create a component which would act as root component in auth directory.

```bash
ng generate component auth/auth --flat
```

The structure would look something like:
- auth
	- login/
	- signup/
	- change-password/
	- auth.component.html
	- auth.component.css
	- auth.component.ts
	- auth.module.ts

In this, we need to load auth component as default component when no other component is selected. First thing we need to include this auth module to root module to use it from root module path. So we need to we need to mention it as import array.


### Root app module components
```bash
ng generate component about-us
ng generate component how-it-works
```

### User module components
```bash
ng generate component user/add-book
ng generate component user/delete-book
ng generate component user/user --flat #for default routing layout
```

Similarly we can add routing module:
```bash
ng generate module user/app-routing --flat #for user's routing
```
The shortcut for routing module and angular module would be:
```bash
ng generate module user --routing --module=app
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
Preference `--flat` is used for not creating directory

> Note: routing module doesn't house components and therefore doesn't need commonModule and declaration array.

The App routing module will declare all components it will use for routing which you can remove from main root module. To use this routing module in other places, you need to export this module i.e. declare in export array.

### Refactoring Routing for application

When we create angular application, we get one module and one routing file. When application growns, thereby number of modules and routes in the application. Managing multiple routes in root routing module file will not be easy. The newly generated and configured routing module file will automatically will be combined when module is imported in root module file. Therefore it is important to create routing module along with default feature module.

To create routing module, we need to specify preference in the command:

```bash
ng generate module auth --routing --module=app
```

here `--module` preference in the command is to kow the parent module of this new module.

Now we need to define all the routes in this new routing file as `forChild` as `forRoot` can be used once in the application for root module or root routing. This new routing module then needs to imported in module file this routing module belongs to.

## Router Link

Instead of using href in anchor, we can use `RouterLink` of router which allows pages to be not refreshed and thereby not loading to many resources.

```html
<a routerLink='public/home'>Simple link and concatenate with `+`</a>
<a [routerLink]='["public/home", "123123"]'>Pass Parameter from controller</a>
```

To pass query string, we need to bind an angular attribute `[queryParams]` to an key/value object.

```html
<a routerLink='public/home' [queryParams]="{name:'hello', last:'world!'}">using queryParams</a>
<a [routerLink]='["public/home", "123123"]'>Pass Parameter from controller</a>
```

To access value of parameter, we use `activatedRoute`.

```ts
constructor(private route:activatedRoute){
	console.log(this.route.params)
}
```
Now note that if a component's url is built via child route, we need to access route parameters in this child component using `parent` as:
```ts
constructor(private route:activatedRoute){
	console.log(this.route.parent?.params)
}
```
Similarly to get parameter of child route in parent, we need to use `firstChild` instead of `parent`.

> Note: 
- Case 1: to access parameter in a component which is activated/ instantiated by current route
	- Use `this.route.params`
- Case 2: to access parameter in a child component whose parent component is activated/ instantiated by current route
	- Use `this.route.firstChild?.params`
- Case 3: to access parameter in a parent component whose child component is activated/ instantiated by current route
	- Use `this.route.parent?.params`

The query string parameters can be obtained directly using `this.route.queryParams` without need to consider parent or child component.

### navigating from component to component
When we want to navigate from a component to another component or it's view, we use `Router` class. The Router class provides method `navigate` to navigate between components.

For example, below code will navigate to public component from code written in a component.


```ts
constructor(private router: Router){}
this.router.navigate(['public/2/book-detail/3']);
this.router.navigate(['public', 2, 'book-detail', 3]);
this.router.navigate(['public/2/book-detail/3'], {queryParams:{name:'Hello',last:'world'}});
```

### Page Not Found
When path of route is set to `**`, corresponding component get instantiated when no matching routes are found. This route should be placed last in the order. This route then can be used for displaying 404 page.

But when 404 occurs, none of the links work. We get 404 page for all the router links. In such case first remedy is to put routing module to end of all module imported. This should fix the links not working.

Research more: find correct way to fix

### redirectTo
This redirects to string url and not component. It requires us to mention `pathMatch`. In following example, path is blank, which means if there are no path specified with domain name, angular should redirect to `public/home`.

```json
{ path: '', redirectTo: 'public/home', pathMatch:'full' }
```
If this route is placed to child routes and if no child route is found, we can redirect to parent route in that module.

### Lazy Loading
There are two ways the modules are loaded in Angular: eagerly and Lazy. When we import all modules in root module, angular will load all the modules when application starts even it is not required to load them all. This is eagerly loaded. Now to load module based on route we visit, remove those module from import in root module and then load when route is activated as below.

```json
{ 
	path: 'auth',
	component: AuthComponent,
	loadChildren:() => import('./auth/auth.module').then(x=>x.AuthModule)
}
```

> Note: the component we specified here will load the component when module is loaded. But if don't specify, Angular will load default component of the application which AppComponent.

Now we need to change below:
```ts
const routes: Route[] = [
	{ path: 'auth', component: AuthComponent, children:[
		{ path: 'login', component: LoginComponent },
		{ path: 'signup', component: SignupComponent },
		{ path: 'change-password', component: ChangePasswordComponent },
  	] }
];
```
To below where we are just loading children and parent component is loaded by module.
```ts
const routes: Route[] = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'change-password', component: ChangePasswordComponent }
];
```
Start: 51