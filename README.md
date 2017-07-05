# AngularPhoneApp - Backend / Frontend integration

In this App example, you will be able to:

1. Have a fullstack application running.
2. Optimize it for deploy.

## Development server

Run `nodemon start` for a dev server. Navigate to `http://localhost:3000/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
The command ng build --prod --aot concatenate and minify the source code (html + js + css) into few small files and fix all the links. The result of this step will be placed in the /dist folder of the project.

The `aot` flag set the Ahead-of-time compilation which basically transform the source into vm-friendly code. The resulting code is ready-to-run in the browser so the whole client process will be faster.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
