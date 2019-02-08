# YoutubeApp

Note:

- You might want to add aN API KEY in environment.ts

Assumptions:

 - Assuming a big, scalable app, each significant router location is treated as a potential big feature, Hence:
 
  - the lazy loaded features that might    look extra for now
  - Material design icons has been installed entirely, assuming that a wide range of icons will be used accross the app 
  
 - Although the search page is the current initial route, it's also lazy loaded in case a landing page is introduced later

 - Just to satisfy the provided requirements, the user is immediately redirected to the search page, which fires a search function on init and populates the videos list

 - The project is continuously being updated and refactored. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
