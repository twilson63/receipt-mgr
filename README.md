title: Ionic Demo
author:
  name: Tom Wilson
  twitter: twilson63
  url: http://www.jackhq.com
output: index.html
controls: true

--

# Ionic Demo

## A look at IonicFramework with AngularJS

--

### IonicFramework

mobile framework for building cordova/phonegap applications using
AngularJS

--

Install Instructions can be found:

http://ionicframework.com

--

Today we are going to build a simple IonicApp

`Receipt Mgr`

--

## Clone

`git clone https://github.com/twilson63/receipt-mgr.git`

--

## Install dependencies

`npm install`

--

## Startup Dev Env

`npm start`

--

## TODO

* Build New Form
* Build List View
* Build Show View

** Controllers are in place we just need to do the ionic **

--

## New Form

`vim app/receipts/new/receipt-new.html`

Create a form that captures the following:

* Photo of Receipt
* Current Location
* Total Amt
* Notes

--

## Show View

`vim app/receipts/show/receipt-show.html`

Create a multi-tab show page that shows
the photo, a map, and the amount and notes of the receipt.

--

## List View

`vim app/receipts/list/receipts-list.html`

Create a view that lists the receipts in descending order

--

## Build App

```
cordova build ios
```

--

## Emulate App

```
cordova emulate ios
```

--

fin
