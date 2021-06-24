(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title size=\"large\">CleverTap Ionic App</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Events</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"recordEventWithName()\">\n        recordEventWithName</ion-item>\n    <ion-item (click)=\"recordEventWithNameAndProps()\">\n        recordEventWithNameAndProps</ion-item>\n    <ion-item (click)=\"recordChargedEventWithDetailsAndItems()\">\n        recordChargedEventWithDetailsAndItems</ion-item>\n    <ion-item (click)=\"eventGetFirstTime()\">\n        eventGetFirstTime</ion-item>\n    <ion-item (click)=\"eventGetLastTime()\">\n        eventGetLastTime</ion-item>\n    <ion-item (click)=\"eventGetOccurrences()\">\n        eventGetOccurrences</ion-item>\n    <ion-item (click)=\"eventGetDetails()\">\n        eventGetDetails</ion-item>\n    <ion-item (click)=\"getEventHistory()\">\n        getEventHistory</ion-item>\n    <ion-item (click)=\"recordScreenView()\">\n        recordScreenView</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Profile</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"getLocation()\">\n        getLocation</ion-item>\n    <ion-item (click)=\"setLocation()\">\n        setLocation</ion-item>\n    <ion-item (click)=\"onUserLogin()\">\n        onUserLogin</ion-item>\n    <ion-item (click)=\"profileSet()\">\n        profileSet</ion-item>\n    <ion-item (click)=\"profileSetGraphUser()\">\n        profileSetGraphUser</ion-item>\n    <ion-item (click)=\"profileGooglePlusUser()\">\n        profileGooglePlusUser</ion-item>\n    <ion-item (click)=\"profileGetProperty()\">\n        profileGetProperty</ion-item>\n    <ion-item (click)=\"profileGetCleverTapAttributionIdentifier()\">\n        profileGetCleverTapAttributionIdentifier</ion-item>\n    <ion-item (click)=\"profileGetCleverTapID()\">\n        profileGetCleverTapID</ion-item>\n    <ion-item (click)=\"profileRemoveValueForKey()\">\n        profileRemoveValueForKey</ion-item>\n    <ion-item (click)=\"profileSetMultiValues()\">\n        profileSetMultiValues</ion-item>\n    <ion-item (click)=\"profileAddMultiValue()\">\n        profileAddMultiValue</ion-item>\n    <ion-item (click)=\"profileAddMultiValues()\">\n        profileAddMultiValues</ion-item>\n    <ion-item (click)=\"profileRemoveMultiValue()\">\n        profileRemoveMultiValue</ion-item>\n    <ion-item (click)=\"profileRemoveMultiValues()\">\n        profileRemoveMultiValues</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Personalization</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"enablePersonalization()\">\n        enablePersonalization</ion-item>\n    <ion-item (click)=\"disablePersonalization()\">\n        disablePersonalization</ion-item>\n    <ion-item (click)=\"setOptOut()\">\n        setOptOut</ion-item>\n    <ion-item (click)=\"setOffline()\">\n        setOffline</ion-item>\n    <ion-item (click)=\"enableDeviceNetworkInfoReporting()\">\n        enableDeviceNetworkInfoReporting</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Push</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"registerPush()\">\n        registerPush</ion-item>\n    <ion-item (click)=\"setPushToken()\">\n        setPushToken</ion-item>\n    <ion-item (click)=\"setPushXiaomiToken()\">\n        setPushXiaomiToken</ion-item>\n    <ion-item (click)=\"setPushBaiduToken()\">\n        setPushBaiduToken</ion-item>\n    <ion-item (click)=\"setPushHuaweiToken()\">\n        setPushHuaweiToken</ion-item>\n    <ion-item (click)=\"createNotification()\">\n        createNotification</ion-item>\n    <ion-item (click)=\"createNotificationChannel()\">\n        createNotificationChannel</ion-item>\n    <ion-item (click)=\"createNotificationChannelWithSound()\">\n        createNotificationChannelWithSound</ion-item>\n    <ion-item (click)=\"createNotificationChannelWithGroupId()\">\n        createNotificationChannelWithGroupId</ion-item>\n    <ion-item (click)=\"createNotificationChannelWithGroupIdAndSound()\">\n        createNotificationChannelWithGroupIdAndSound</ion-item>\n    <ion-item (click)=\"createNotificationChannelGroup()\">\n        createNotificationChannelGroup</ion-item>\n    <ion-item (click)=\"deleteNotificationChannel()\">\n        deleteNotificationChannel</ion-item>\n    <ion-item (click)=\"deleteNotificationChannelGroup()\">\n        deleteNotificationChannelGroup</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Session</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"sessionGetTimeElapsed()\">\n        sessionGetTimeElapsed</ion-item>\n    <ion-item (click)=\"sessionGetTotalVisits()\">\n        sessionGetTotalVisits</ion-item>\n    <ion-item (click)=\"sessionGetScreenCount()\">\n        sessionGetScreenCount</ion-item>\n    <ion-item (click)=\"sessionGetPreviousVisitTime()\">\n        sessionGetPreviousVisitTime</ion-item>\n    <ion-item (click)=\"sessionGetUTMDetails()\">\n        sessionGetUTMDetails</ion-item>\n    <ion-item (click)=\"pushInstallReferrer()\">\n        pushInstallReferrer</ion-item>\n    \n    <ion-list-header>\n      <ion-label>In-App Inbox</ion-label>\n      <ion-button (click)=\"infoInbox()\">Info</ion-button>\n    </ion-list-header>\n    <ion-item (click)=\"initializeInbox()\">\n        initializeInbox</ion-item>\n    <ion-item (click)=\"getInboxMessageUnreadCount()\">\n        getInboxMessageUnreadCount</ion-item>\n    <ion-item (click)=\"getInboxMessageCount()\">\n        getInboxMessageCount</ion-item>\n    <ion-item (click)=\"showInbox()\">\n        showInbox</ion-item>\n    <ion-item (click)=\"getAllInboxMessages()\">\n        getAllInboxMessages</ion-item>\n    <ion-item (click)=\"getUnreadInboxMessages()\">\n        getUnreadInboxMessages</ion-item>\n    <ion-item (click)=\"getInboxMessageForId()\">\n        getInboxMessageForId</ion-item>\n    <ion-item (click)=\"deleteInboxMessageForId()\">\n        deleteInboxMessageForId</ion-item>\n    <ion-item (click)=\"markReadInboxMessageForId()\">\n        markReadInboxMessageForId</ion-item>\n    <ion-item (click)=\"pushInboxNotificationViewedEventForId()\">\n        pushInboxNotificationViewedEventForId</ion-item>\n    <ion-item (click)=\"pushInboxNotificationClickedEventForId()\">\n        pushInboxNotificationClickedEventForId</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Native Display</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"getAllDisplayUnits()\">\n        getAllDisplayUnits</ion-item>\n    <ion-item (click)=\"getDisplayUnitForId()\">\n        getDisplayUnitForId</ion-item>\n    <ion-item (click)=\"pushDisplayUnitViewedEventForID()\">\n        pushDisplayUnitViewedEventForID</ion-item>\n    <ion-item (click)=\"pushDisplayUnitClickedEventForID()\">\n        pushDisplayUnitClickedEventForID</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Feature Flag</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"getFeatureFlag()\">\n        getFeatureFlag</ion-item>\n    <ion-item (click)=\"setDefaultsMap()\">\n        setDefaultsMap</ion-item>\n    <ion-list-header>\n      <ion-label>ProductConfig</ion-label>\n      <ion-button (click)=\"infoProductConfig()\">Info</ion-button>\n    </ion-list-header>\n    <ion-item (click)=\"fetch()\">\n        fetch</ion-item>\n    <ion-item (click)=\"fetchWithMinimumFetchIntervalInSeconds()\">\n        fetchWithMinimumFetchIntervalInSeconds</ion-item>\n    <ion-item (click)=\"activate()\">\n        activate</ion-item>\n    <ion-item (click)=\"fetchAndActivate()\">\n        fetchAndActivate</ion-item>\n    <ion-item (click)=\"setMinimumFetchIntervalInSeconds()\">\n        setMinimumFetchIntervalInSeconds</ion-item>\n    <ion-item (click)=\"getLastFetchTimeStampInMillis()\">\n        getLastFetchTimeStampInMillis</ion-item>\n    <ion-item (click)=\"getString()\">\n        getString</ion-item>\n    <ion-item (click)=\"getBoolean()\">\n        getBoolean</ion-item>\n    <ion-item (click)=\"getLong()\">\n        getLong</ion-item>\n    <ion-item (click)=\"getDouble()\">\n        getDouble</ion-item>\n    <ion-item (click)=\"reset()\">\n        reset</ion-item>\n    \n    <ion-list-header>\n      <ion-label>Developer Options</ion-label>\n    </ion-list-header>\n    <ion-item (click)=\"notifyDeviceReady()\">\n        notifyDeviceReady</ion-item>\n    <ion-item (click)=\"setDebugLevel()\">\n        setDebugLevel</ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".InboxModalClass {\n  --background: #93b3ff;\n}\n\nbody {\n  background-color: #0a4966;\n}\n\nion-list-header {\n  --background: #ffffff;\n  font-family: arial;\n  color: #000000;\n  font-size: 24px;\n}\n\nion-item {\n  --background: #ffffff;\n  font-family: arial;\n  color: #000000;\n  font-size: 18px;\n}\n\nion-button {\n  solid-color: #8c8c8c;\n  color: #0d0d0d;\n  font-family: arial;\n  font-size: 18px;\n}\n\nion-toolbar {\n  --background: #dc2626;\n  color: #f1e6e6;\n  font-family: arial;\n}\n\nion-label {\n  font-family: arial;\n  color: #dc2626;\n  font-size: 25px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JbmJveE1vZGFsQ2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICM5M2IzZmY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE0OTY2O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDsgXG4gIGNvbG9yOiAjMDAwMDAwOyBcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsOyBcbiAgY29sb3I6ICMwMDAwMDA7IFxuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1idXR0b24ge1x0XHQgXG4gIHNvbGlkLWNvbG9yOiAjOGM4YzhjO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgZm9udC1mYW1pbHk6IGFyaWFsOyBcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2RjMjYyNjtcbiAgY29sb3I6ICNmMWU2ZTY7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBjb2xvcjogI2RjMjYyNjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_clevertap_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/clevertap/ngx */
      "S2p3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // import { ModalController} from '@ionic/angular';


      var HomePage = /*#__PURE__*/function () {
        function HomePage(clevertap, toastController) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.clevertap = clevertap;
          this.toastController = toastController;
          clevertap.onUserLogin({
            Identity: 'android098768',
            custom: 122211
          }).then(function () {
            return _this.presentToast('User Login');
          });
        }

        _createClass(HomePage, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast, _yield$toast$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                      _context.next = 7;
                      return toast.onDidDismiss();

                    case 7:
                      _yield$toast$onDidDis = _context.sent;
                      role = _yield$toast$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "clickAlert",
          value: function clickAlert() {
            var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Alert';
            var subHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'An Alert you Made';
            var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'This is an alert message.';
            var alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = header;
            alert.subHeader = subHeader;
            alert.message = message;
            alert.buttons = [{
              text: 'Okay',
              handler: function handler() {//                    console.log('Alert OK response');
              }
            }];
            document.body.appendChild(alert);
            return alert.present();
          }
        }, {
          key: "recordEventWithName",
          value: function recordEventWithName() {
            console.log('recordEventWithName');
            this.clevertap.recordEventWithName('Test Event');
            this.presentToast('recordEventWithName \"Test Event\"');
          }
        }, {
          key: "recordEventWithNameAndProps",
          value: function recordEventWithNameAndProps() {
            console.log('recordEventWithNameAndProps');
            this.clevertap.recordEventWithNameAndProps('Test Event with Properties', {
              'Property 1': 'First Prop',
              'Color of Text': 'Green'
            });
            this.presentToast('recordEventWithNameAndProps \"Test Event with Properties\"');
          }
        }, {
          key: "recordChargedEventWithDetailsAndItems",
          value: function recordChargedEventWithDetailsAndItems() {
            // implemented above too
            console.log('recordChargedEventWithDetailsAndItems');
            this.clevertap.recordChargedEventWithDetailsAndItems({
              amount: 200,
              'Charged ID': 5678
            }, [{
              Category: 'Food',
              Quantity: 2,
              Title: 'Eggs (Dozen)'
            }]);
            this.presentToast('recordChargedEventWithDetailsAndItems');
          }
        }, {
          key: "eventGetFirstTime",
          value: function eventGetFirstTime() {
            var _this2 = this;

            console.log('eventGetFirstTime');
            this.clevertap.eventGetFirstTime('Test Event').then(function (r) {
              _this2.presentToast('Test Event first pushed at ' + r);
            });
          }
        }, {
          key: "eventGetLastTime",
          value: function eventGetLastTime() {
            var _this3 = this;

            console.log('eventGetLastTime');
            this.clevertap.eventGetLastTime('Test Event').then(function (r) {
              _this3.presentToast('Test Event last pushed at ' + r);
            });
          }
        }, {
          key: "eventGetOccurrences",
          value: function eventGetOccurrences() {
            var _this4 = this;

            console.log('eventGetOccurrences');
            this.clevertap.eventGetOccurrences('Test Event').then(function (r) {
              _this4.presentToast('Test Event total number of occurrences ' + r);
            });
          }
        }, {
          key: "eventGetDetails",
          value: function eventGetDetails() {
            var _this5 = this;

            console.log('eventGetDetails');
            this.clevertap.eventGetDetails('Test Event with Properties').then(function (r) {
              _this5.clickAlert('eventGetDetails', 'Details for \"Test Event with Properties\"', JSON.stringify(r));
            });
          }
        }, {
          key: "getEventHistory",
          value: function getEventHistory() {
            var _this6 = this;

            console.log('getEventHistory');
            this.clevertap.getEventHistory().then(function (r) {
              _this6.clickAlert('getEventHistory', 'Event History is as follows', JSON.stringify(r));
            });
          }
        }, {
          key: "recordScreenView",
          value: function recordScreenView() {
            console.log('recordScreenView');
            this.clevertap.recordScreenView('Default Screen');
            this.presentToast('recordScreenView');
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this7 = this;

            console.log('getLocation');
            this.clevertap.getLocation().then(function (r) {
              _this7.clickAlert('getLocation', 'Location coordinates', r);
            });
          }
        }, {
          key: "setLocation",
          value: function setLocation() {
            console.log('setLocation');
            this.clevertap.setLocation(38.89, -77.04);
            this.presentToast('setLocation to (38.89, -77.04)');
          }
        }, {
          key: "onUserLogin",
          value: function onUserLogin() {
            console.log('onUserLogin'); // this.clevertap.onUserLogin(profile:any);

            this.clickAlert('OnUserLogin', '(not called)', 'Creates a new profile, and used to switch between two profiles.' + ' Switching between identified users is a costly operation ');
          }
        }, {
          key: "profileSet",
          value: function profileSet() {
            console.log('profileSet');
            this.clevertap.profileSet({
              Preference: 'Medium'
            });
            this.presentToast('profileSet: Added new attribute [Preference: Medium]');
          }
        }, {
          key: "profileSetGraphUser",
          value: function profileSetGraphUser() {
            var _this8 = this;

            console.log('profileSetGraphUser');
            this.clevertap.profileSetGraphUser({
              Frequency: 'Rare'
            }).then(function () {
              _this8.presentToast('profileSetGraphUser: Added new attribute from Facebook User  [Frequency: Rare]');
            });
          }
        }, {
          key: "profileGooglePlusUser",
          value: function profileGooglePlusUser() {
            var _this9 = this;

            console.log('profileGooglePlusUser');
            this.clevertap.profileGooglePlusUser({
              Surface: 'Smooth'
            }).then(function () {
              _this9.presentToast('profileGooglePlusUser: Added new attribute from Google User  [Surface: Smooth]');
            });
          }
        }, {
          key: "profileGetProperty",
          value: function profileGetProperty() {
            var _this10 = this;

            console.log('profileGetProperty');
            this.clevertap.profileGetProperty('Preference').then(function (r) {
              _this10.clickAlert('profileGetProperty', 'Get value of Property: Preference', r);
            });
          }
        }, {
          key: "profileGetCleverTapAttributionIdentifier",
          value: function profileGetCleverTapAttributionIdentifier() {
            var _this11 = this;

            console.log('profileGetCleverTapAttributionIdentifier');
            this.clevertap.profileGetCleverTapAttributionIdentifier().then(function (r) {
              _this11.presentToast('profileGetCleverTapAttributionIdentifier' + r);
            });
          }
        }, {
          key: "profileGetCleverTapID",
          value: function profileGetCleverTapID() {
            var _this12 = this;

            console.log('profileGetCleverTapID');
            this.clevertap.profileGetCleverTapID().then(function (r) {
              _this12.presentToast('profileGetCleverTapID' + r);
            });
          }
        }, {
          key: "profileRemoveValueForKey",
          value: function profileRemoveValueForKey() {
            console.log('profileRemoveValueForKey');
            this.clevertap.profileRemoveValueForKey('colors');
            this.presentToast('profileRemoveValueForKey: removing key \'colors\' from profile');
          }
        }, {
          key: "profileSetMultiValues",
          value: function profileSetMultiValues() {
            console.log('profileSetMultiValues');
            this.clevertap.profileSetMultiValues('colors', ['red', 'blue']);
            this.presentToast('profileSetMultiValues: setting values \'[red, blue]\' for key \'colors\'');
          }
        }, {
          key: "profileAddMultiValue",
          value: function profileAddMultiValue() {
            console.log('profileAddMultiValue');
            this.clevertap.profileAddMultiValue('colors', 'green');
            this.presentToast('profileAddMultiValue: setting value \'[green]\' for key \'colors\'');
          }
        }, {
          key: "profileAddMultiValues",
          value: function profileAddMultiValues() {
            console.log('profileAddMultiValues');
            this.clevertap.profileAddMultiValues('colors', ['purple', 'pink']);
            this.presentToast('profileAddMultiValues: setting values \'[purple, pink]\' for key \'colors\'');
          }
        }, {
          key: "profileRemoveMultiValue",
          value: function profileRemoveMultiValue() {
            console.log('profileRemoveMultiValue');
            this.clevertap.profileRemoveMultiValue('colors', 'green');
            this.presentToast('profileRemoveMultiValue: removing value \'[green]\' for key \'colors\'');
          }
        }, {
          key: "profileRemoveMultiValues",
          value: function profileRemoveMultiValues() {
            console.log('profileRemoveMultiValues');
            this.clevertap.profileRemoveMultiValues('colors', ['purple', 'pink']);
            this.presentToast('profileRemoveMultiValues: removing value \'[purple, pink]\' for key \'colors\'');
          }
        }, {
          key: "enablePersonalization",
          value: function enablePersonalization() {
            console.log('enablePersonalization');
            this.clevertap.enablePersonalization();
            this.presentToast('enablePersonalization');
          }
        }, {
          key: "disablePersonalization",
          value: function disablePersonalization() {
            console.log('disablePersonalization');
            this.clevertap.disablePersonalization();
            this.presentToast('disablePersonalization');
          }
        }, {
          key: "setOptOut",
          value: function setOptOut() {
            console.log('setOptOut');
            this.clevertap.setOptOut(true);
            this.presentToast('setOptOut to true');
          }
        }, {
          key: "setOffline",
          value: function setOffline() {
            console.log('setOffline');
            this.clevertap.setOffline(false);
            this.presentToast('setOffline false');
          }
        }, {
          key: "enableDeviceNetworkInfoReporting",
          value: function enableDeviceNetworkInfoReporting() {
            console.log('enableDeviceNetworkInfoReporting');
            this.clevertap.enableDeviceNetworkInfoReporting(false);
            this.presentToast('enableDeviceNetworkInfoReporting false');
          }
        }, {
          key: "registerPush",
          value: function registerPush() {
            console.log('registerPush');
            this.clevertap.registerPush();
            this.presentToast('registerPush');
          }
        }, {
          key: "setPushToken",
          value: function setPushToken() {
            console.log('setPushToken');
            this.clevertap.setPushToken('push_token');
            this.presentToast('setPushToken');
          }
        }, {
          key: "setPushXiaomiToken",
          value: function setPushXiaomiToken() {
            console.log('setPushXiaomiToken');
            this.clevertap.setPushXiaomiToken('push_token_X');
            this.presentToast('setPushXiaomiToken');
          }
        }, {
          key: "setPushBaiduToken",
          value: function setPushBaiduToken() {
            console.log('setPushBaiduToken');
            this.clevertap.setPushBaiduToken('push_token_B');
            this.presentToast('setPushBaiduToken');
          }
        }, {
          key: "setPushHuaweiToken",
          value: function setPushHuaweiToken() {
            console.log('setPushHuaweiToken');
            this.clevertap.setPushHuaweiToken('push_token_H');
            this.presentToast('setPushHuaweiToken');
          }
        }, {
          key: "createNotification",
          value: function createNotification() {
            console.log('createNotification');
            this.clevertap.createNotification({
              name: 'Notification!',
              day: 'Monday'
            });
            this.presentToast('createNotification Creates Notification Channel');
          }
        }, {
          key: "createNotificationChannel",
          value: function createNotificationChannel() {
            console.log('createNotificationChannel');
            this.clevertap.createNotificationChannel('channelID_1234', 'Notification Channel', 'channelDescription', 1, true);
            this.presentToast('createNotificationChannel Creates Notification Channel');
          }
        }, {
          key: "createNotificationChannelWithSound",
          value: function createNotificationChannelWithSound() {
            console.log('createNotificationChannelWithSound');
            this.clevertap.createNotificationChannelWithSound('channelID_1234', 'Notification Channel', 'channelDescription', 1, true, 'sound_effect.mp3');
            this.presentToast('createNotificationChannelWithSound Creates Notification Channel');
          }
        }, {
          key: "createNotificationChannelWithGroupId",
          value: function createNotificationChannelWithGroupId() {
            console.log('createNotificationChannelWithGroupId');
            this.clevertap.createNotificationChannelWithGroupId('channelID_1234', 'Notification Channel', 'channelDescription', 1, 'GroupID', true);
            this.presentToast('createNotificationChannelWithGroupId Creates Notification Channel');
          }
        }, {
          key: "createNotificationChannelWithGroupIdAndSound",
          value: function createNotificationChannelWithGroupIdAndSound() {
            console.log('createNotificationChannelWithGroupIdAndSound');
            this.clevertap.createNotificationChannelWithGroupIdAndSound('channelID_1234', 'Notification Channel', 'channelDescription', 1, 'groupID_5678', true, 'group_sound.mp3');
            this.presentToast('createNotificationChannelWithGroupIdAndSound Creates Notification Channel');
          }
        }, {
          key: "createNotificationChannelGroup",
          value: function createNotificationChannelGroup() {
            console.log('createNotificationChannelGroup');
            this.clevertap.createNotificationChannelGroup('groupID_5678', 'Channel Group Name');
            this.presentToast('createNotificationChannelGroup Creates Notification Channel Group');
          }
        }, {
          key: "deleteNotificationChannel",
          value: function deleteNotificationChannel() {
            console.log('deleteNotificationChannel');
            this.clevertap.deleteNotificationChannel('channelID_1234');
            this.presentToast('deleteNotificationChannel Deletes Notification Channel');
          }
        }, {
          key: "deleteNotificationChannelGroup",
          value: function deleteNotificationChannelGroup() {
            console.log('deleteNotificationChannelGroup');
            this.clevertap.deleteNotificationChannelGroup('groupID_5678');
            this.presentToast('deleteNotificationChannelGroup Deletes Notification Channel Group');
          }
        }, {
          key: "sessionGetTimeElapsed",
          value: function sessionGetTimeElapsed() {
            var _this13 = this;

            console.log('sessionGetTimeElapsed');
            this.clevertap.sessionGetTimeElapsed().then(function (r) {
              _this13.presentToast('sessionGetTimeElapsed ' + r);
            });
          }
        }, {
          key: "sessionGetTotalVisits",
          value: function sessionGetTotalVisits() {
            var _this14 = this;

            console.log('sessionGetTotalVisits');
            this.clevertap.sessionGetTotalVisits().then(function (r) {
              _this14.presentToast('sessionGetTotalVisits ' + r);
            });
          }
        }, {
          key: "sessionGetScreenCount",
          value: function sessionGetScreenCount() {
            var _this15 = this;

            console.log('sessionGetScreenCount');
            this.clevertap.sessionGetScreenCount().then(function (r) {
              _this15.presentToast('sessionGetScreenCount ' + r);
            });
          }
        }, {
          key: "sessionGetPreviousVisitTime",
          value: function sessionGetPreviousVisitTime() {
            var _this16 = this;

            console.log('sessionGetPreviousVisitTime');
            this.clevertap.sessionGetPreviousVisitTime().then(function (r) {
              _this16.presentToast('sessionGetPreviousVisitTime ' + r);
            });
          }
        }, {
          key: "sessionGetUTMDetails",
          value: function sessionGetUTMDetails() {
            var _this17 = this;

            console.log('sessionGetUTMDetails');
            this.clevertap.sessionGetUTMDetails().then(function (r) {
              _this17.clickAlert('sessionGetUTMDetails ', '', JSON.stringify(r));
            });
          }
        }, {
          key: "pushInstallReferrer",
          value: function pushInstallReferrer() {
            console.log('pushInstallReferrer');
            this.clevertap.pushInstallReferrer('Source Name', 'Medium Name', 'Campaign Name');
            this.presentToast('pushInstallReferrer');
          }
        }, {
          key: "infoInbox",
          value: function infoInbox() {
            this.clickAlert('In-App Inbox', '', 'These functions provide the capability to create App Inbox notifications for your users.' + 'You can use the App Inbox provided by CleverTap or create your own.' + 'You can design App Inbox notifications right from the dashboard.');
          }
        }, {
          key: "initializeInbox",
          value: function initializeInbox() {
            console.log('initializeInbox');
            this.clevertap.initializeInbox();
            this.presentToast('initializeInbox');
          }
        }, {
          key: "getInboxMessageUnreadCount",
          value: function getInboxMessageUnreadCount() {
            var _this18 = this;

            console.log('getInboxMessageUnreadCount');
            this.clevertap.getInboxMessageUnreadCount().then(function (r) {
              _this18.presentToast('getInboxMessageUnreadCount: ' + r);
            });
          }
        }, {
          key: "getInboxMessageCount",
          value: function getInboxMessageCount() {
            var _this19 = this;

            console.log('getInboxMessageCount');
            this.clevertap.getInboxMessageCount().then(function (r) {
              _this19.presentToast('getInboxMessageCount: ' + r);
            });
          }
        }, {
          key: "showInbox",
          value: function showInbox() {
            console.log('showInbox');
            this.clevertap.showInbox({});
            this.presentToast('showInbox');
          }
        }, {
          key: "getAllInboxMessages",
          value: function getAllInboxMessages() {
            var _this20 = this;

            console.log('getAllInboxMessages');
            this.clevertap.getAllInboxMessages().then(function (r) {
              _this20.clickAlert('getAllInboxMessages', '', JSON.stringify(r));
            });
          }
        }, {
          key: "getUnreadInboxMessages",
          value: function getUnreadInboxMessages() {
            var _this21 = this;

            console.log('getUnreadInboxMessages');
            this.clevertap.getUnreadInboxMessages().then(function (r) {
              _this21.clickAlert('getUnreadInboxMessages', '', JSON.stringify(r));
            });
          }
        }, {
          key: "getInboxMessageForId",
          value: function getInboxMessageForId() {
            console.log('getInboxMessageForId');
            this.clevertap.getInboxMessageForId('Insert message id');
          }
        }, {
          key: "deleteInboxMessageForId",
          value: function deleteInboxMessageForId() {
            console.log('deleteInboxMessageForId');
            this.clevertap.deleteInboxMessageForId('Insert message id');
          }
        }, {
          key: "markReadInboxMessageForId",
          value: function markReadInboxMessageForId() {
            console.log('markReadInboxMessageForId');
            this.clevertap.markReadInboxMessageForId('Insert message id');
          }
        }, {
          key: "pushInboxNotificationViewedEventForId",
          value: function pushInboxNotificationViewedEventForId() {
            console.log('pushInboxNotificationViewedEventForId');
            this.clevertap.pushInboxNotificationViewedEventForId('Insert message id');
          }
        }, {
          key: "pushInboxNotificationClickedEventForId",
          value: function pushInboxNotificationClickedEventForId() {
            console.log('pushInboxNotificationClickedEventForId');
            this.clevertap.pushInboxNotificationClickedEventForId('Insert message id');
          }
        }, {
          key: "getAllDisplayUnits",
          value: function getAllDisplayUnits() {
            console.log('getAllDisplayUnits');
            this.clevertap.getAllDisplayUnits();
            this.presentToast('getAllDisplayUnits');
          }
        }, {
          key: "getDisplayUnitForId",
          value: function getDisplayUnitForId() {
            console.log('getDisplayUnitForId');
            this.clevertap.getDisplayUnitForId('Test Display Unit');
            this.presentToast('getDisplayUnitForId');
          }
        }, {
          key: "pushDisplayUnitViewedEventForID",
          value: function pushDisplayUnitViewedEventForID() {
            console.log('pushDisplayUnitViewedEventForID');
            this.clevertap.pushDisplayUnitViewedEventForID('Test Display Unit');
            this.presentToast('pushDisplayUnitViewedEventForID');
          }
        }, {
          key: "pushDisplayUnitClickedEventForID",
          value: function pushDisplayUnitClickedEventForID() {
            console.log('pushDisplayUnitClickedEventForID');
            this.clevertap.pushDisplayUnitClickedEventForID('Test Display Unit');
            this.presentToast('pushDisplayUnitClickedEventForID');
          }
        }, {
          key: "getFeatureFlag",
          value: function getFeatureFlag() {
            var _this22 = this;

            console.log('getFeatureFlag');
            this.clevertap.getFeatureFlag('key_string', 'defaultString').then(function (r) {
              _this22.clickAlert('getFeatureFlag', 'Get value of key_string or default value', r);
            });
          }
        }, {
          key: "setDefaultsMap",
          value: function setDefaultsMap() {
            console.log('setDefaultsMap');
            this.clevertap.setDefaultsMap({
              key_long: 123,
              key_double: 3.14,
              key_string: 'sensible',
              key_bool: true
            });
            this.presentToast('setDefaultsMap');
          }
        }, {
          key: "infoProductConfig",
          value: function infoProductConfig() {
            this.clickAlert('Product Config', 'Category info', 'The CleverTap Product Experiences includes Product Config: ' + 'Change the behavior and appearance of your app remotely without an update. ' + 'This helps you to deliver in-app personalization experience to your app users ' + 'and test their response.');
          }
        }, {
          key: "fetch",
          value: function fetch() {
            console.log('fetch');
            this.clevertap.fetch();
            this.clickAlert('fetch', '', 'Values set on the dashboard are fetched and stored in the Product Config object.');
          }
        }, {
          key: "fetchWithMinimumFetchIntervalInSeconds",
          value: function fetchWithMinimumFetchIntervalInSeconds() {
            console.log('fetchWithMinimumFetchIntervalInSeconds');
            this.clevertap.fetchWithMinimumFetchIntervalInSeconds(4);
            this.presentToast('fetchWithMinimumFetchIntervalInSeconds 4 seconds');
          }
        }, {
          key: "activate",
          value: function activate() {
            console.log('activate');
            this.clevertap.activate();
            this.clickAlert('activate', '', 'Called to make fetched parameter values available to app.');
          }
        }, {
          key: "fetchAndActivate",
          value: function fetchAndActivate() {
            console.log('fetchAndActivate');
            this.clevertap.fetchAndActivate();
            this.presentToast('fetchAndActivate');
          }
        }, {
          key: "setMinimumFetchIntervalInSeconds",
          value: function setMinimumFetchIntervalInSeconds() {
            console.log('setMinimumFetchIntervalInSeconds');
            this.clevertap.setMinimumFetchIntervalInSeconds(60 * 10);
            this.presentToast('setMinimumFetchIntervalInSeconds 60*10 seconds');
          }
        }, {
          key: "getLastFetchTimeStampInMillis",
          value: function getLastFetchTimeStampInMillis() {
            var _this23 = this;

            console.log('getLastFetchTimeStampInMillis');
            this.clevertap.getLastFetchTimeStampInMillis().then(function (r) {
              _this23.presentToast('getLastFetchTimeStampInMillis: Last Fetch Timestamp' + r);
            });
          }
        }, {
          key: "getString",
          value: function getString() {
            var _this24 = this;

            console.log('getString');
            this.clevertap.getString().then(function (r) {
              _this24.presentToast('getString: String value found' + r);
            });
          }
        }, {
          key: "getBoolean",
          value: function getBoolean() {
            var _this25 = this;

            console.log('getBoolean');
            this.clevertap.getBoolean().then(function (r) {
              _this25.presentToast('getBoolean: Boolean value found' + r);
            });
          }
        }, {
          key: "getLong",
          value: function getLong() {
            var _this26 = this;

            console.log('getLong');
            this.clevertap.getLong().then(function (r) {
              _this26.presentToast('getLong: Long value found' + r);
            });
          }
        }, {
          key: "getDouble",
          value: function getDouble() {
            var _this27 = this;

            console.log('getDouble');
            this.clevertap.getDouble().then(function (r) {
              _this27.presentToast('getDouble: Double value found' + r);
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            console.log('reset'); // this.clevertap.reset();

            this.clickAlert('reset', 'not called', 'Resets ProductConfig');
          }
        }, {
          key: "notifyDeviceReady",
          value: function notifyDeviceReady() {
            console.log('notifyDeviceReady');
            this.clevertap.notifyDeviceReady();
            this.presentToast('notifyDeviceReady');
          }
        }, {
          key: "setDebugLevel",
          value: function setDebugLevel() {
            console.log('setDebugLevel');
            this.clevertap.setDebugLevel(1);
            this.clickAlert('setDebugLevel', '0 is off, 1 is info, 2 is debug, default is 1', 'Level set to 1');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_clevertap_ngx__WEBPACK_IMPORTED_MODULE_4__["CleverTap"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map