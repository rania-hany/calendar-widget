<h1 align="center">
📅 Calendar Widget 📅
</h1>

## 🧐 What's Inside

Responsive design Calendar widget, designed to be imported in any application, supports being displayed on both 📱 mobile and 🖥️ desktop 

_You can check it live at [this link](https://calendar-widget-display.netlify.app)._

### **Features**
1. Shows one month at a time
2. Allows the user to navigate to another month in any year
3. Allows the user to add an “event” to any date that will then be highlighted in colorful way
4. Option available to save events only in browser session, or to be reflected in firebase API.  
5. Animation exists for nice user experience
6. Responsive design

### **Technologies and Languages**
1. Angular
2. JavaScript
3. Sass
4. Unit Test: Jasmine/Karma


## 🚀 Deploy

This app is deployed & CI/CD by Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/737dd7e4-ebfd-402f-930e-5baa7287d910/deploy-status)](https://app.netlify.com/sites/calendar-widget-display/deploys)


_Check it from the below link_

[![Check on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://calendar-widget-display.netlify.app/)


## 🕶 Deep Look

_GIF Screenshot attached below to demonstrate the descriped details._

- First Look of the widget, You will see the current month by default, with **today** selected with a nice purple border.

- By clicking on the month name at the top of the widget, you will find a left side bar expanded, to enable the user to navigate between years and months, which will automatically reflect on the the main calendar section

- Events are demonstrated with colorful circles beneath each day. every color represents a type of event (Work, Event, Todo, Meeting)

- Selecting a day, expands a right section which is representing the day details, along with a timeline for the already reserved events.

- An Add New Event button, generates a small form that is responsible for adding new event to the selected date

- Two approaches implemented to save event data:

  - Default approach is to save the added events in browser session
  - Firebase Saving approach is used when you add a query param ?save=true in the url.
    example: `https://calendar-widget-display.netlify.app/?save=true`


![calendar-first-view](https://user-images.githubusercontent.com/27772894/158213185-352c1132-0092-404e-a5dd-280264d070d7.gif)

## 📜 Available Scripts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
