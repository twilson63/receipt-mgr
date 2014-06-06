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

![IonicFramework](http://jpg.to/ionicframework)

### IonicFramework

mobile framework for building cordova/phonegap applications using
AngularJS

--

Tour of Docs

http://ionicframework.com

--

Today we are going to build a simple IonicApp

`Receipt Mgr`

--

## Clone

`git clone https://github.com/twilson63/receipt-mgr.git`

--

## Install dependencies

```
npm install atomify -g
npm install bower -g
```

`npm install`

--

## Startup Dev Env

`npm start`

--

## Application Structure

* html
* javascript
* css

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

* Current Location
* Total Amt
* Notes

--

``` html
<ion-view title="New Receipt">
  <ion-content class="has-header">
    <div class="list list-inset">
      <div class="item">
        <h1>New Receipt</h1>
        <p>Document your receipt by taking a photo of the receipt and
          adding the amount to the form.
        </p>
      </div>
      <label class="item item-input">
        <input type="text" placeholder="location" ng-model="receipt.location">
      </label>
      <label class="item item-input">
        <input type="number" placeholder="amount" ng-model="receipt.amount">
      </label>
      <label class="item item-input">
        <textarea placeholder="notes" style="height: 200px;" ng-model="receipt.notes"></textarea>
      </label>
      <button class="item button button-block button-balanced" ng-click="save(receipt)">Save</button>
    </div>
  </ion-content>
</ion-view>
```

--

## List View

`vim app/receipts/list/receipts-list.html`

Create a view that lists the receipts in descending order

--

``` html
<ion-view title="Receipts">
  <ion-content class="has-header">
    <ion-list>
      <ion-item ng-repeat="receipt in receipts" type="item-text-wrap"
        ui-sref="receipts.show({id: receipt._id})">
        {{receipt.location}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
```

--

## Show View

`vim app/receipts/show/receipt-show.html`

Create a multi-tab show page that shows
the photo, a map, and the amount and notes of the receipt.

--

```
<ion-view title="Receipt">
  <ion-content class="has-header">
    <ion-list>
      <ion-item>
        <h1>Receipt</h1>
      </ion-item>
      <ion-item>
        <label>Location</label>
        <div>{{receipt.location}}</div>
      </ion-item>
      <ion-item>
        <label>Amount</label>
        <div>{{receipt.amount | currency}}</div>
      </ion-item>
      <ion-item>
        <label>Notes</label>
        <div>{{receipt.notes}}</div>
      </ion-item>
      <ion-item>
        <a class="button button-block" ui-sref="receipts.list">Ok</a>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
```

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
