(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <app-menu></app-menu>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.scss":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  min-height: calc(100vh - 84px);\n  position: relative;\n  overflow: hidden; }\n\n.footer-wrapper {\n  width: 100%; }\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sidebar = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./ClientApp/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./ClientApp/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_image_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/image/image.component */ "./ClientApp/app/pages/image/image.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./ClientApp/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _single_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-components/search/search.component */ "./ClientApp/app/single-components/search/search.component.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _pages_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/add-photo/add-photo.component */ "./ClientApp/app/pages/add-photo/add-photo.component.ts");
/* harmony import */ var _constant_elements_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constant-elements/menu/menu.component */ "./ClientApp/app/constant-elements/menu/menu.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./ClientApp/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/index/index.component */ "./ClientApp/app/pages/index/index.component.ts");
/* harmony import */ var _constant_elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constant-elements/footer/footer.component */ "./ClientApp/app/constant-elements/footer/footer.component.ts");
/* harmony import */ var _propmts_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./propmts/confirmation-message/confirmation-message.component */ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.ts");
/* harmony import */ var _propmts_agree_label_agree_label_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./propmts/agree-label/agree-label.component */ "./ClientApp/app/propmts/agree-label/agree-label.component.ts");
/* harmony import */ var _images_all_images_images_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images-all/images/images.component */ "./ClientApp/app/images-all/images/images.component.ts");
/* harmony import */ var _single_components_follow_button_follow_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./single-components/follow-button/follow-button.component */ "./ClientApp/app/single-components/follow-button/follow-button.component.ts");
/* harmony import */ var _propmts_information_label_information_label_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./propmts/information-label/information-label.component */ "./ClientApp/app/propmts/information-label/information-label.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./ClientApp/app/pages/settings/settings.component.ts");
/* harmony import */ var _forms_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forms/input-file/input-file.component */ "./ClientApp/app/forms/input-file/input-file.component.ts");
/* harmony import */ var _forms_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./forms/input-text/input-text.component */ "./ClientApp/app/forms/input-text/input-text.component.ts");
/* harmony import */ var _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./forms/textarea/textarea.component */ "./ClientApp/app/forms/textarea/textarea.component.ts");
/* harmony import */ var _forms_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forms/submit-button/submit-button.component */ "./ClientApp/app/forms/submit-button/submit-button.component.ts");
/* harmony import */ var _forms_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms/confirm-password/confirm-password.component */ "./ClientApp/app/forms/confirm-password/confirm-password.component.ts");
/* harmony import */ var _forms_input_email_input_email_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forms/input-email/input-email.component */ "./ClientApp/app/forms/input-email/input-email.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _forms_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./forms/input-password/input-password.component */ "./ClientApp/app/forms/input-password/input-password.component.ts");
/* harmony import */ var _forms_input_option_input_option_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./forms/input-option/input-option.component */ "./ClientApp/app/forms/input-option/input-option.component.ts");
/* harmony import */ var _images_all_image_element_image_element_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images-all/image-element/image-element.component */ "./ClientApp/app/images-all/image-element/image-element.component.ts");
/* harmony import */ var _pages_tags_tags_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/tags/tags.component */ "./ClientApp/app/pages/tags/tags.component.ts");
/* harmony import */ var _images_all_images_common_images_common_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images-all/images-common/images-common.component */ "./ClientApp/app/images-all/images-common/images-common.component.ts");
/* harmony import */ var _pages_settings_informations_informations_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/settings/informations/informations.component */ "./ClientApp/app/pages/settings/informations/informations.component.ts");
/* harmony import */ var _pages_settings_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/settings/credentials/credentials.component */ "./ClientApp/app/pages/settings/credentials/credentials.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/user.service */ "./ClientApp/app/services/user.service.ts");
/* harmony import */ var _forms_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./forms/input-checkbox/input-checkbox.component */ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var _single_components_editable_field_editable_field_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./single-components/editable-field/editable-field.component */ "./ClientApp/app/single-components/editable-field/editable-field.component.ts");
/* harmony import */ var _comments_comment_wrapper_comment_wrapper_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./comments/comment-wrapper/comment-wrapper.component */ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.ts");
/* harmony import */ var _comments_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./comments/add-comment/add-comment.component */ "./ClientApp/app/comments/add-comment/add-comment.component.ts");
/* harmony import */ var _comments_comments_logic_comments_logic_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./comments/comments-logic/comments-logic.component */ "./ClientApp/app/comments/comments-logic/comments-logic.component.ts");
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./likes/likes.component */ "./ClientApp/app/likes/likes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { FileDropModule } from "ngx-file-drop";



























var appRoutes = [
    {
        path: "",
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"]
    },
    {
        path: "trending",
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"]
    },
    {
        path: "recent",
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"]
    },
    {
        path: "image/:id",
        component: _pages_image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"]
    },
    {
        path: "settings",
        component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
        children: [
            {
                path: "",
                component: _pages_settings_informations_informations_component__WEBPACK_IMPORTED_MODULE_40__["InformationsComponent"]
            },
            {
                path: "credentials",
                component: _pages_settings_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_41__["CredentialsComponent"]
            }
        ]
    },
    {
        path: "user/:id",
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
        children: [
            {
                path: "",
                component: _images_all_images_images_component__WEBPACK_IMPORTED_MODULE_24__["ImagesComponent"]
            },
            {
                path: "recent",
                component: _images_all_images_images_component__WEBPACK_IMPORTED_MODULE_24__["ImagesComponent"]
            }
        ]
    },
    {
        path: "upload-image",
        component: _pages_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_17__["AddPhotoComponent"]
    },
    {
        path: "homepage",
        component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"]
    },
    {
        path: "homepage",
        component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"]
    },
    {
        path: "tags/:id",
        component: _pages_tags_tags_component__WEBPACK_IMPORTED_MODULE_38__["TagsComponent"]
    },
    // {
    //   path: "homepage",
    //   component: IndexComponent,
    //   children: [
    //     {
    //       path: "sign-in",
    //       component: SignInComponent
    //     }
    //   ]
    // },
    {
        path: "**",
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _pages_image_image_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _single_components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _pages_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_17__["AddPhotoComponent"],
                _constant_elements_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
                _constant_elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _propmts_confirmation_message_confirmation_message_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationMessageComponent"],
                _propmts_agree_label_agree_label_component__WEBPACK_IMPORTED_MODULE_23__["AgreeLabelComponent"],
                _images_all_images_images_component__WEBPACK_IMPORTED_MODULE_24__["ImagesComponent"],
                _single_components_follow_button_follow_button_component__WEBPACK_IMPORTED_MODULE_25__["FollowButtonComponent"],
                _propmts_information_label_information_label_component__WEBPACK_IMPORTED_MODULE_26__["InformationLabelComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
                _forms_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_28__["InputFileComponent"],
                _forms_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_29__["InputTextComponent"],
                _forms_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_30__["TextareaComponent"],
                _forms_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_31__["SubmitButtonComponent"],
                _forms_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmPasswordComponent"],
                _forms_input_email_input_email_component__WEBPACK_IMPORTED_MODULE_33__["InputEmailComponent"],
                _forms_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_35__["InputPasswordComponent"],
                _forms_input_option_input_option_component__WEBPACK_IMPORTED_MODULE_36__["InputOptionComponent"],
                _images_all_image_element_image_element_component__WEBPACK_IMPORTED_MODULE_37__["ImageElementComponent"],
                _pages_tags_tags_component__WEBPACK_IMPORTED_MODULE_38__["TagsComponent"],
                _images_all_images_common_images_common_component__WEBPACK_IMPORTED_MODULE_39__["ImagesCommonComponent"],
                _pages_settings_informations_informations_component__WEBPACK_IMPORTED_MODULE_40__["InformationsComponent"],
                _pages_settings_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_41__["CredentialsComponent"],
                _forms_input_checkbox_input_checkbox_component__WEBPACK_IMPORTED_MODULE_43__["InputCheckboxComponent"],
                _single_components_editable_field_editable_field_component__WEBPACK_IMPORTED_MODULE_44__["EditableFieldComponent"],
                _comments_comment_wrapper_comment_wrapper_component__WEBPACK_IMPORTED_MODULE_45__["CommentWrapperComponent"],
                _comments_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_46__["AddCommentComponent"],
                _comments_comments_logic_comments_logic_component__WEBPACK_IMPORTED_MODULE_47__["CommentsLogicComponent"],
                _likes_likes_component__WEBPACK_IMPORTED_MODULE_48__["LikesComponent"]
                // InputEmailComponent
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                // FileDropModule,
                angular_web_storage__WEBPACK_IMPORTED_MODULE_8__["AngularWebStorageModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_10__["RecaptchaFormsModule"]
            ],
            providers: [_services_image_service__WEBPACK_IMPORTED_MODULE_16__["ImageService"], _services_account_service__WEBPACK_IMPORTED_MODULE_34__["AccountService"], _services_user_service__WEBPACK_IMPORTED_MODULE_42__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/comments/add-comment/add-comment.component.html":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/comments/add-comment/add-comment.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-comment\">\n  <form [formGroup]=\"uploadForm\" (ngSubmit)=\"onUpload(uploadForm)\">\n    <input-textarea\n      [data]=\"{\n        label: '',\n        validation: 'required'\n      }\"\n      formControlName=\"title\"\n    ></input-textarea>\n    <span>{{ message }}</span>\n    <button area-label=\"upload file\" class=\"button-colored\" type=\"submit\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/comments/add-comment/add-comment.component.scss":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/comments/add-comment/add-comment.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-colored {\n  margin: 0; }\n"

/***/ }),

/***/ "./ClientApp/app/comments/add-comment/add-comment.component.ts":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/comments/add-comment/add-comment.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCommentComponent = /** @class */ (function () {
    function AddCommentComponent(fb) {
        this.fb = fb;
        this._message = "";
        this.formValid = true;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadForm = this.fb.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__["requiredTextareaValidator"]]]
        });
    }
    AddCommentComponent.prototype.ngOnInit = function () { };
    AddCommentComponent.prototype.onUpload = function (form) {
        if (form.status === "INVALID") {
            this._message = "Data is invalid.";
        }
        else {
            this.emitter.emit(form.value.text);
            this.formValid = true;
            form.resetForm();
        }
    };
    Object.defineProperty(AddCommentComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddCommentComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddCommentComponent.prototype, "emitter", void 0);
    AddCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-comment",
            template: __webpack_require__(/*! ./add-comment.component.html */ "./ClientApp/app/comments/add-comment/add-comment.component.html"),
            styles: [__webpack_require__(/*! ./add-comment.component.scss */ "./ClientApp/app/comments/add-comment/add-comment.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.html":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"comment-title\">Comments ({{ data.comments.length }})</p>\n\n<div class=\"comments-group\">\n  <!-- <ng-container *ngIf=\"data-comments\"> -->\n  <div *ngFor=\"let comment of data.comments\" class=\"comment\">\n    <div class=\"image-author\">\n      <div class=\"avatar-container\">\n        <a class=\"avatar-link\" routerLink=\"/user/{{ comment.userId }}\">\n          <img\n            src=\"{{\n              comment.userOwnerImgLink === null ||\n              comment.userOwnerImgLink === ''\n                ? '../../assets/img/avatar.png'\n                : comment.userOwnerImgLink\n            }}\"\n          />\n        </a>\n      </div>\n    </div>\n    <div class=\"comment-content\">\n      <!-- comment edit field -->\n      <!-- additional: commentValue(comment) -->\n      <!-- <span class=\"likes header-info\">\n        <span class=\"link\" (click)=\"commentShowLiked(comment.id)\">\n          {{ comment.likeCount }}\n          {{ comment.likeCount === 1 ? \"like\" : \"likes\" }}\n        </span>\n      </span>\n      <span\n        class=\"like\"\n        [ngClass]=\"comment.liked === true ? 'liked' : null\"\n        *ngIf=\"loggedIn\"\n      >\n        <span (click)=\"commentLike(comment)\" *ngIf=\"!comment.liked\">\n          Like\n        </span>\n        <span (click)=\"commentUnlike(comment)\" *ngIf=\"comment.liked\"\n          >Liked!</span\n        >\n      </span> -->\n      <app-likes\n        [data]=\"{ comment: comment, loggedIn: data.loggedIn }\"\n        (emitter)=\"likeManager($event)\"\n      ></app-likes>\n      <app-editable-field\n        [data]=\"{\n          value: comment.content,\n          name: 'comment',\n          inputType: 'textarea',\n          userCanEdit: comment.userId === data.loggedId,\n          id: comment.id,\n          additional: commentValue(comment)\n        }\"\n        (emitter)=\"changeComment($event)\"\n      >\n      </app-editable-field>\n    </div>\n  </div>\n  <!-- </ng-container> -->\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.scss":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment {\n  display: flex;\n  padding: 18px 0;\n  border-bottom: 1px solid #dadada; }\n  .comment:last-of-type {\n    border-bottom: 0; }\n  .avatar-container a {\n  width: 40px;\n  height: 40px; }\n  .image-author {\n  margin-right: 15px; }\n  .comment-content {\n  flex-grow: 1;\n  position: relative; }\n  app-likes {\n  position: absolute;\n  right: 0; }\n"

/***/ }),

/***/ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.ts":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CommentWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentWrapperComponent", function() { return CommentWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentWrapperComponent = /** @class */ (function () {
    function CommentWrapperComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // emitter for comments
        this.emitter2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // emitter for likes
    }
    CommentWrapperComponent.prototype.ngOnInit = function () { };
    CommentWrapperComponent.prototype.likeManager = function (data) {
        this.emitter2.emit(data);
    };
    CommentWrapperComponent.prototype.changeComment = function (data) {
        this.emitter.emit(data);
    };
    CommentWrapperComponent.prototype.updateCommentAfterServerConnection = function (data) {
        console.log("updating", data);
        this.data.comments.find(function (comment) {
            return comment.id === data.id;
        }).content = data.value.comment;
    };
    CommentWrapperComponent.prototype.commentValue = function (comment) {
        var data = "<h4 class=\"author\">\n                <a href=\"/user/" + comment.userId + "\">\n                  " + comment.userName + "</a>\n                </h4>\n                <span class=\"content-secondary header-info\">\n                  " + comment.creationDate + "\n                </span>";
        if (comment.edited) {
            data += '<span class="header-info">(edited)</span>';
        }
        return data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentWrapperComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentWrapperComponent.prototype, "emitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentWrapperComponent.prototype, "emitter2", void 0);
    CommentWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-comment-wrapper",
            template: __webpack_require__(/*! ./comment-wrapper.component.html */ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./comment-wrapper.component.scss */ "./ClientApp/app/comments/comment-wrapper/comment-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentWrapperComponent);
    return CommentWrapperComponent;
}());



/***/ }),

/***/ "./ClientApp/app/comments/comments-logic/comments-logic.component.html":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/comments/comments-logic/comments-logic.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-comment (emitter)=\"onCommentUpload($event)\"></app-add-comment>\n<app-comment-wrapper\n  #commentWrapper\n  *ngIf=\"comments\"\n  [data]=\"{\n    comments: comments,\n    loggedId: loggedId,\n    loggedIn: loggedIn\n  }\"\n  (emitter)=\"changeComment($event)\"\n  (emitter2)=\"likeManager($event)\"\n></app-comment-wrapper>\n<app-confirmation-message #msg></app-confirmation-message>\n<app-agree-label\n  #confirmLabel\n  (emitter)=\"confirm()\"\n  [message]=\"'You are going to delete this comment. Are you sure?'\"\n></app-agree-label>\n<app-information-label #label></app-information-label>\n"

/***/ }),

/***/ "./ClientApp/app/comments/comments-logic/comments-logic.component.scss":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/comments/comments-logic/comments-logic.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-comment-wrapper {\n  margin-top: 20px;\n  display: block; }\n"

/***/ }),

/***/ "./ClientApp/app/comments/comments-logic/comments-logic.component.ts":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/comments/comments-logic/comments-logic.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentsLogicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsLogicComponent", function() { return CommentsLogicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsLogicComponent = /** @class */ (function (_super) {
    __extends(CommentsLogicComponent, _super);
    function CommentsLogicComponent(service, route) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this._comments = [];
        _this.commentIdToRemove = 0;
        _this._loading = false;
        return _this;
    }
    CommentsLogicComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.getCommentsData();
    };
    CommentsLogicComponent.prototype.getCommentsData = function () {
        var _this = this;
        this.service
            .CommentsByImgPath(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            res.forEach(function (comm) {
                comm.userOwnerImgLink = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_3__["GlobalVariables"].parseImageLink(40, 40, comm.userOwnerImgLink);
                comm.isEditing = false;
                comm.editValid = true;
            });
            _this._comments = res;
        });
    };
    CommentsLogicComponent.prototype.changeComment = function (data) {
        var _this = this;
        if (data.action === "delete") {
            this.removeComment(data.value);
        }
        else {
            this.service
                .editComment({
                id: data.id,
                content: data.value.comment
            }, this._loggedId, this._loggedToken)
                .subscribe(function (res) {
                _this.Message.show("Comment edited succesfully.", res);
                _this.commentWrapper.updateCommentAfterServerConnection(data);
            });
        }
    };
    CommentsLogicComponent.prototype.removeComment = function (id) {
        this.commentIdToRemove = id;
        this.confirmLabel.show();
    };
    CommentsLogicComponent.prototype.onCommentUpload = function (value) {
        var _this = this;
        this._loading = true;
        var comment = {
            PostId: this.route.snapshot.params.id,
            UserId: this._loggedId,
            Content: value,
            LikeCount: 0
        };
        console.log(comment);
        // send message
        this.service
            .uploadComment(comment, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this.Message.show("Comment uploaded succesfully.");
            _this._loading = false;
            _this.getCommentsData();
        });
    };
    CommentsLogicComponent.prototype.isCommentValid = function (text) {
        if (text === null) {
            return false;
        }
        if (typeof text === undefined) {
            return false;
        }
        if (text === "") {
            return false;
        }
        if (typeof text.length === undefined || text.length < 2) {
            return false;
        }
        return true;
    };
    CommentsLogicComponent.prototype.confirm = function () {
        var _this = this;
        this.service
            .removeComment(this.commentIdToRemove, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this.getCommentsData();
            _this.Message.show("Comment deleted succesfully.");
        });
    };
    CommentsLogicComponent.prototype.likeManager = function (e) {
        if (e.like) {
            this.commentLike(e.comment);
        }
        else if (e.unlike) {
            this.commentUnlike(e.comment);
        }
        else if (e.show) {
            this.commentShowLiked(e.comment.id);
        }
    };
    CommentsLogicComponent.prototype.commentShowLiked = function (id) {
        var _this = this;
        var informationToSend;
        this.service
            .getCommentLikes(this._loggedId.toString(), id.toString())
            .subscribe(function (res) {
            informationToSend = res;
            _this.label.show(informationToSend, "Liked this comment");
        });
    };
    CommentsLogicComponent.prototype.commentLike = function (comment) {
        comment.liked = true;
        comment.likeCount += 1;
        this.service
            .likeComment({
            userId: this._loggedId,
            commentId: comment.id
        }, this._loggedId, this._loggedToken)
            .subscribe(function (res) { });
    };
    CommentsLogicComponent.prototype.commentUnlike = function (comment) {
        comment.liked = false;
        comment.likeCount -= 1;
        this.service
            .unlikeComment(this._loggedId, comment.id, this._loggedToken)
            .subscribe(function (res) { });
    };
    Object.defineProperty(CommentsLogicComponent.prototype, "comments", {
        get: function () {
            return this._comments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsLogicComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("commentWrapper"),
        __metadata("design:type", Object)
    ], CommentsLogicComponent.prototype, "commentWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], CommentsLogicComponent.prototype, "Message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmLabel"),
        __metadata("design:type", Object)
    ], CommentsLogicComponent.prototype, "confirmLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("label"),
        __metadata("design:type", Object)
    ], CommentsLogicComponent.prototype, "label", void 0);
    CommentsLogicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-comments-logic",
            template: __webpack_require__(/*! ./comments-logic.component.html */ "./ClientApp/app/comments/comments-logic/comments-logic.component.html"),
            styles: [__webpack_require__(/*! ./comments-logic.component.scss */ "./ClientApp/app/comments/comments-logic/comments-logic.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CommentsLogicComponent);
    return CommentsLogicComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/constant-elements/footer/footer.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/constant-elements/footer/footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\r\n  <div class=\"footer-centered\">\r\n    <p class=\"logo\">PAINTSTORE</p>\r\n    <p>\r\n      A place created for traditional artists, where they can gain feedback,\r\n      inspiration and advice and meet people with similar interests.\r\n    </p>\r\n    <p>\r\n      The site is in production. This is the demo version of the application.\r\n      See the code:\r\n    </p>\r\n    <p>\r\n      <i class=\"icon-github-circled\"></i\r\n      ><a href=\"https://github.com/wojtek-rak/PaintStore\"\r\n        >github.com/wojtek-rak/PaintStore</a\r\n      >\r\n    </p>\r\n    <p class=\"rights\">© 2019 PaintStore. All rights reserved.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/constant-elements/footer/footer.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/constant-elements/footer/footer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  padding: 15px 0;\n  font-size: 13px;\n  line-height: 1.3;\n  color: #565656;\n  background: #e3e3e3; }\n  .footer-container p {\n    margin: 10px 0; }\n  .footer-container .logo {\n    font-weight: 500;\n    color: #242424; }\n  .footer-container a {\n    color: #2196f3;\n    margin-left: 5px; }\n  .footer-container .rights {\n    text-align: center;\n    color: #8b8b8b;\n    margin: 20px 0 5px; }\n  .footer-centered {\n  width: calc(100% - 160px);\n  margin: 0 auto;\n  max-width: 1290px; }\n  @media only screen and (max-width: 1120px) {\n  .footer-centered {\n    padding: 0 40px;\n    width: 100%;\n    box-sizing: border-box; } }\n  @media only screen and (max-width: 700px) {\n  .footer-centered {\n    padding: 0 30px; } }\n"

/***/ }),

/***/ "./ClientApp/app/constant-elements/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/constant-elements/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./ClientApp/app/constant-elements/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./ClientApp/app/constant-elements/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/constant-elements/menu/menu.component.html":
/*!******************************************************************!*\
  !*** ./ClientApp/app/constant-elements/menu/menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu #menu>\r\n  <div class=\"container-menu\">\r\n    <ul class=\"hamburger\">\r\n      <li class=\"logo\">\r\n        <a routerLink=\"\"\r\n          ><img\r\n            src=\"../../assets/img/logo.png\"\r\n            height=\"80px\"\r\n            style=\"opacity: 0.5\"\r\n        /></a>\r\n      </li>\r\n      <li class=\"hamburger-icon\" (click)=\"toggleClass()\">\r\n        <i class=\"icon-menu\"></i>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"container-menu-ul hidden\" #menuUl>\r\n      <li class=\"menu-logo\">\r\n        <a routerLink=\"\"\r\n          ><img\r\n            src=\"../../assets/img/logo.png\"\r\n            height=\"80px\"\r\n            style=\"opacity: 0.5\"\r\n        /></a>\r\n      </li>\r\n      <li>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"onLogin(form)\">\r\n          <div class=\"label-wrapper\">\r\n            <input\r\n              placeholder=\"E-mail\"\r\n              type=\"text\"\r\n              id=\"email\"\r\n              name=\"email\"\r\n              ngModel\r\n              #input\r\n              (keyup)=\"onKeyup()\"\r\n            />\r\n          </div>\r\n          <div class=\"label-wrapper\">\r\n            <input\r\n              placeholder=\"Password\"\r\n              type=\"password\"\r\n              id=\"password\"\r\n              name=\"password\"\r\n              ngModel\r\n              #input2\r\n              (keyup)=\"onKeyup()\"\r\n            />\r\n          </div>\r\n          <div class=\"login-buttons-wrapper\">\r\n            <button class=\"button-colored\" type=\"submit\">LOGIN</button>\r\n            <span class=\"register\"><a routerLink=\"/homepage\">Register</a></span>\r\n          </div>\r\n        </form>\r\n      </li>\r\n      <li class=\"search\">\r\n        <app-search></app-search>\r\n      </li>\r\n      <li class=\"menu-user\">\r\n        <a routerLink=\"/user/{{ loggedId }}\" class=\"logged-user-icon\"\r\n          ><img\r\n            src=\"{{\r\n              imgLink === null || imgLink === ''\r\n                ? '../../assets/img/avatar.png'\r\n                : imgLink\r\n            }}\"\r\n            width=\"40px\"\r\n        /></a>\r\n        <button class=\"menu-toggle-down\" (click)=\"toggleMenu()\" #button>\r\n          <i class=\"icon-down-open\"></i>\r\n        </button>\r\n        <div class=\"menu-toggled\" #menuToggled>\r\n          <ul>\r\n            <li>\r\n              <a routerLink=\"/user/{{ loggedId }}\"\r\n                ><i class=\"icon-user-1\"></i>Your profile</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/settings\"><i class=\"icon-cog\"></i>Edit profile</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/upload-image\"\r\n                ><i class=\"icon-plus\"></i>Add image</a\r\n              >\r\n            </li>\r\n            <li>\r\n              <button class=\"logout\" (click)=\"logout()\">\r\n                <i class=\"icon-off\"></i>Logout\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</menu>\r\n<div class=\"scrollmagic-toggle\"></div>\r\n"

/***/ }),

/***/ "./ClientApp/app/constant-elements/menu/menu.component.scss":
/*!******************************************************************!*\
  !*** ./ClientApp/app/constant-elements/menu/menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "menu {\n  background-color: #fff;\n  border-bottom: 1px solid #dedede;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  transition-duration: 0.3s; }\n\n.register {\n  margin-left: 10px;\n  display: inline-block; }\n\n.information {\n  padding: 5px 10px;\n  font-size: 13px;\n  background: #c2c2c2;\n  color: #555555;\n  text-align: center; }\n\nmenu.static {\n  position: relative;\n  box-shadow: none;\n  border-bottom: 0; }\n\n.hamburger {\n  width: 100%;\n  background: #fff;\n  height: 70px;\n  align-items: center;\n  display: none;\n  transition-duration: 0.2s; }\n\n.hamburger .hamburger-icon {\n    flex-grow: 1;\n    text-align: right;\n    cursor: pointer;\n    transition: 0.2s;\n    margin-left: 20px;\n    padding: 5px;\n    color: #8a8a8a;\n    font-size: 20px; }\n\n.container-menu-ul li.search {\n  display: flex; }\n\nmenu.logged-out form {\n  display: flex; }\n\nmenu.logged-out .container-menu li.menu-user {\n  display: none; }\n\nmenu.logged-out .container-menu .container-menu-ul li.search {\n  display: none; }\n\nmenu.logged-out .join-us-button {\n  display: block; }\n\nform {\n  display: none;\n  flex-shrink: 0;\n  flex-grow: 0;\n  justify-content: space-between;\n  align-items: center; }\n\nform input {\n    width: 145px;\n    font-size: 12px;\n    margin-bottom: 0; }\n\nform .label-wrapper:nth-of-type(2) {\n    margin: 0 15px; }\n\nform button {\n    font-size: 14px;\n    padding: 9px 20px; }\n\n.container-menu-ul .join-us-button {\n  display: none; }\n\nmenu.visible {\n  background: #fff; }\n\n.container-menu {\n  width: calc(100% - 160px);\n  margin: 0 auto;\n  max-width: 1290px; }\n\n.container-menu-ul {\n  display: flex;\n  height: 70px;\n  transition: 0.2s; }\n\n.container-menu-ul a {\n    color: #727272; }\n\n.container-menu-ul .button-colored {\n    color: white;\n    margin-top: 0; }\n\n.container-menu-ul .icon-mail-alt {\n    color: #919191; }\n\n.container-menu-ul li {\n    padding: 0px 15px;\n    display: flex;\n    align-items: center; }\n\n.container-menu-ul .bordered {\n    border-left: 1px solid #efefef;\n    border-right: 1px solid #efefef; }\n\n.container-menu-ul .menu-logo {\n    flex-grow: 1;\n    padding-left: 0; }\n\n.container-menu-ul .menu-logo a {\n      display: inline-block; }\n\n.container-menu-ul .menu-logo img {\n      display: block; }\n\n.container-menu-ul .menu-user {\n    position: relative;\n    padding-right: 0;\n    padding-left: 0; }\n\n.container-menu-ul .menu-user a {\n      color: #111; }\n\n.container-menu-ul .menu-user img {\n      border-radius: 15px;\n      margin-right: 10px;\n      display: block; }\n\n.container-menu-ul .menu-user .logged-user-icon {\n      display: block;\n      border-radius: 15px;\n      width: 30px;\n      height: 30px;\n      overflow: hidden;\n      margin-right: 8px; }\n\n.container-menu-ul .menu-user .logged-user-icon img {\n        display: block;\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n\n.container-menu-ul .menu-user span {\n      margin-right: 8px; }\n\n.container-menu-ul .menu-user button {\n      color: #c2c2c2;\n      padding: 0;\n      margin: 0;\n      border: 0;\n      background: none;\n      cursor: pointer;\n      height: 50%;\n      width: 30px;\n      margin-left: -8px;\n      font-size: 15px; }\n\n.menu-toggled.visible {\n  display: block; }\n\n.menu-toggled {\n  display: none;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  font-size: 15px;\n  width: 235px;\n  z-index: 9;\n  border-radius: 0 0 5px 5px;\n  overflow: hidden;\n  transition: height ease 0.2s; }\n\n.menu-toggled a {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 12px 15px; }\n\n.menu-toggled i {\n    margin-right: 8px;\n    color: #5a5a5a; }\n\n.menu-toggled li {\n    background: #fff;\n    padding: 0;\n    border-top: 1px solid #e9e9e9;\n    border-left: 1px solid #e9e9e9;\n    border-right: 1px solid #e9e9e9;\n    transition-duration: 0.2s; }\n\n.menu-toggled li:last-of-type {\n    border-bottom: 1px solid #e9e9e9; }\n\n.menu-toggled li:last-of-type a,\n    .menu-toggled li:last-of-type button {\n      padding-bottom: 20px;\n      padding-top: 20px; }\n\n.menu-toggled li:hover {\n    background: #f2f2f2; }\n\n.menu-toggled a {\n    color: #333;\n    transition: color ease 0.7s; }\n\n.scrolled .container-menu-ul {\n  height: 45px; }\n\n.container-menu-ul .menu-user .logout {\n  color: #111;\n  transition: color ease 0.7s;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 20px 15px;\n  text-align: left;\n  background: none;\n  border: none;\n  margin: auto;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  height: auto;\n  width: 100%;\n  margin-left: auto;\n  font-size: 15px;\n  text-align: left; }\n\n@media only screen and (max-width: 1120px) {\n  .container-menu {\n    padding: 0 40px;\n    width: 100%;\n    box-sizing: border-box; } }\n\n@media only screen and (max-width: 700px) {\n  .container-menu {\n    padding: 0 30px; }\n  app-search {\n    width: 100%; }\n  :host ::ng-deep app-search .search {\n    width: 100%;\n    margin-bottom: 8px; }\n  :host ::ng-deep app-search .search-result {\n    z-index: 999;\n    width: calc(100% - 90px); }\n  .logged-out .container-menu-ul {\n    height: 122px; }\n  .hamburger {\n    display: flex; }\n  .hidden {\n    display: none; }\n  .scrolled .container-menu-ul {\n    height: 180px; }\n  .scrolled .hamburger {\n    height: 44px; }\n  .container-menu-ul {\n    flex-direction: column;\n    height: 180px; }\n    .container-menu-ul .menu-user button {\n      display: none; }\n    .container-menu-ul .menu-user .logged-user-icon {\n      display: none; }\n    .container-menu-ul .menu-user .logout {\n      padding: 8px 10px; }\n    .container-menu-ul .menu-logo {\n      display: none; }\n    .container-menu-ul form {\n      flex-direction: column;\n      width: 100%; }\n      .container-menu-ul form .label-wrapper {\n        width: 100%; }\n      .container-menu-ul form input {\n        width: 100%;\n        margin-bottom: 10px; }\n  .menu-logo {\n    display: none; }\n  .menu-toggled {\n    display: block;\n    position: static;\n    width: 100%; }\n    .menu-toggled a {\n      padding: 8px 10px; }\n    .menu-toggled li {\n      border: none; }\n    .menu-toggled li:last-of-type {\n      border-bottom: 0; } }\n"

/***/ }),

/***/ "./ClientApp/app/constant-elements/menu/menu.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/constant-elements/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/classes/login-manager */ "./ClientApp/app/logic/classes/login-manager.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(router, _accountService, service) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this._accountService = _accountService;
        _this.service = service;
        _this.host = "http://localhost:4200/";
        _this.loginPage = "http://localhost:4200/homepage";
        _this._imgLink = "";
        return _this;
    }
    MenuComponent.prototype.addClassIfHomepage = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            if (window.location.pathname === "/homepage" &&
                !_this.menu.nativeElement.classList.contains("static")) {
                _this.menu.nativeElement.classList.add("static");
            }
            else if (window.location.pathname !== "/homepage") {
                _this.menu.nativeElement.classList.remove("static");
            }
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // menu if user is logged out
        if (this._loggedIn === false) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("menu").addClass("logged-out");
        }
        // menu on homepage looks differently
        this.addClassIfHomepage();
        // hide toggled menu when clicked somewhere on page
        document.addEventListener("click", function (e) {
            if (e.target !== _this.menuToggled.nativeElement &&
                !_this.menuToggled.nativeElement.contains(e.target) &&
                (e.target !== _this.button.nativeElement &&
                    !_this.button.nativeElement.contains(e.target))) {
                _this.menuToggled.nativeElement.classList.remove("visible");
            }
        });
        // scroll menu
        for (var i = 1; i <= 6; i++) {
            var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2__["Controller"]();
            var scene = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2__["Scene"]({
                triggerElement: ".scrollmagic-toggle",
                triggerHook: 0,
                offset: 40
            })
                .setClassToggle(".container-menu", "scrolled")
                .addTo(controller);
        }
        if (this._loggedIn === true)
            this.getProfileImage();
    };
    MenuComponent.prototype.getProfileImage = function () {
        var _this = this;
        this.service
            .selectUserById(this._loggedId.toString(), this._loggedId.toString())
            .subscribe(function (res) {
            _this._imgLink = res.avatarImgLink;
        });
    };
    MenuComponent.prototype.toggleMenu = function () {
        this.menuToggled.nativeElement.classList.toggle("visible");
    };
    MenuComponent.prototype.toggleClass = function () {
        this.menuUl.nativeElement.classList.toggle("hidden");
    };
    MenuComponent.prototype.onLogin = function (form) {
        var _this = this;
        this._accountService
            .getUserToken({
            email: form.form.value.email,
            password: form.form.value.password
        })
            .subscribe(function (res) {
            _logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_4__["LoginManager"].loginUser(res);
            if (location.href.replace(/.*\/\/[^\/]*/, "") === "/homepage")
                window.location.replace("");
            else
                document.location.reload();
        }, function (err) {
            _this.input.nativeElement.classList.add("invalid");
            _this.input2.nativeElement.classList.add("invalid");
        });
    };
    MenuComponent.prototype.onKeyup = function () {
        this.input.nativeElement.classList.remove("invalid");
        this.input2.nativeElement.classList.remove("invalid");
    };
    MenuComponent.prototype.logout = function () {
        this._accountService
            .logoutUser({ id: this.loggedId }, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_4__["LoginManager"].logoutUser();
            window.location.replace("homepage");
        });
    };
    Object.defineProperty(MenuComponent.prototype, "imgLink", {
        get: function () {
            return this._imgLink;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("menu"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("menuToggled"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "menuToggled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("menuUl"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "menuUl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("button"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "button", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input2"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuComponent.prototype, "input2", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./ClientApp/app/constant-elements/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./ClientApp/app/constant-elements/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]])
    ], MenuComponent);
    return MenuComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/forms/confirm-password/confirm-password.component.html":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/forms/confirm-password/confirm-password.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === false\"\r\n    class=\"edit-info\"\r\n    (click)=\"startEditing()\"\r\n    >Click to edit password</span\r\n  >\r\n\r\n  <label\r\n    [ngClass]=\"editing === true || data.editable !== true ? '' : 'hidden'\"\r\n    class=\"input-description\"\r\n    >{{ data.label }}</label\r\n  >\r\n  <input\r\n    placeholder=\"{{ data.placeholder }}\"\r\n    [ngClass]=\"{\r\n      hidden: editing !== true && data.editable === true,\r\n      'inputs-highlighted': data.editable === true\r\n    }\"\r\n    type=\"password\"\r\n    #input\r\n    (keyup)=\"\r\n      change({\r\n        new: this.input.value,\r\n        confirm: this.passwordConfirm.value\r\n      })\r\n    \"\r\n  />\r\n  <!-- password confirmation -->\r\n  <label\r\n    [ngClass]=\"editing === true || data.editable !== true ? '' : 'hidden'\"\r\n    class=\"input-description\"\r\n    >Confirm password</label\r\n  >\r\n  <input\r\n    [ngClass]=\"{\r\n      hidden: editing !== true && data.editable === true,\r\n      'inputs-highlighted': data.editable === true\r\n    }\"\r\n    type=\"password\"\r\n    #passwordConfirm\r\n    (keyup)=\"\r\n      change({\r\n        new: this.input.value,\r\n        confirm: this.passwordConfirm.value\r\n      })\r\n    \"\r\n  />\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === true\"\r\n    class=\"reject\"\r\n    (click)=\"stopEditing()\"\r\n    >X Cancel</span\r\n  >\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/confirm-password/confirm-password.component.scss":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/forms/confirm-password/confirm-password.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-info {\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #707070;\n  cursor: pointer;\n  font-weight: bold;\n  display: block; }\n\n.inputs-highlighted {\n  background: #ebebeb;\n  border: 1px solid gainsboro; }\n\n.reject {\n  margin-top: -10px;\n  margin-bottom: 18px;\n  font-size: 13px;\n  color: #707070;\n  cursor: pointer;\n  font-weight: bold;\n  display: block; }\n"

/***/ }),

/***/ "./ClientApp/app/forms/confirm-password/confirm-password.component.ts":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/forms/confirm-password/confirm-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordComponent", function() { return ConfirmPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/passwords-validator */ "./ClientApp/app/logic/validators/passwords-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmPasswordComponent = /** @class */ (function (_super) {
    __extends(ConfirmPasswordComponent, _super);
    function ConfirmPasswordComponent() {
        return _super.call(this) || this;
    }
    ConfirmPasswordComponent_1 = ConfirmPasswordComponent;
    ConfirmPasswordComponent.prototype.stopEditing = function () {
        this.confirm.nativeElement.value = "";
        _super.prototype.stopEditing.call(this);
    };
    ConfirmPasswordComponent.prototype.validate = function (c) {
        var checkUndefinded = this.data;
        if (checkUndefinded === undefined) {
            return;
        }
        var validator = Object(_logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_3__["passwordsValidator"])(c, checkUndefinded.label);
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var ConfirmPasswordComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordConfirm"),
        __metadata("design:type", Object)
    ], ConfirmPasswordComponent.prototype, "confirm", void 0);
    ConfirmPasswordComponent = ConfirmPasswordComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "confirm-password",
            template: __webpack_require__(/*! ./confirm-password.component.html */ "./ClientApp/app/forms/confirm-password/confirm-password.component.html"),
            styles: [__webpack_require__(/*! ./confirm-password.component.scss */ "./ClientApp/app/forms/confirm-password/confirm-password.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ConfirmPasswordComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ConfirmPasswordComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmPasswordComponent);
    return ConfirmPasswordComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_2__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.html":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/forms/input-checkbox/input-checkbox.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <input\r\n    type=\"checkbox\"\r\n    id=\"cbx\"\r\n    style=\"display: none;\"\r\n    #input\r\n    (change)=\"change(this.Input.nativeElement.checked)\"\r\n  />\r\n  <label for=\"cbx\" class=\"check\" tabindex=\"0\">\r\n    <svg width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\">\r\n      <path\r\n        d=\"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z\"\r\n      ></path>\r\n      <polyline points=\"1 9 7 14 15 4\"></polyline>\r\n    </svg>\r\n    <span class=\"input-description\">{{ data.label }}</span>\r\n  </label>\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.scss":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/forms/input-checkbox/input-checkbox.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".check {\n  margin-bottom: 18px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .check svg {\n    width: 30px;\n    position: relative;\n    z-index: 1;\n    fill: none;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke: #c8ccd4;\n    stroke-width: 1.5;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    transition: all 0.2s ease; }\n  .check path {\n    stroke-dasharray: 60;\n    stroke-dashoffset: 0; }\n  .check polyline {\n    stroke-dasharray: 22;\n    stroke-dashoffset: 66; }\n  .check:hover svg {\n    stroke: #4285f4; }\n  #cbx:checked + .check svg {\n  stroke: #4285f4; }\n  #cbx:checked + .check svg path {\n    stroke-dashoffset: 60;\n    transition: all 0.3s linear; }\n  #cbx:checked + .check svg polyline {\n    stroke-dashoffset: 42;\n    transition: all 0.2s linear;\n    transition-delay: 0.15s; }\n  .input-description {\n  margin-left: 10px;\n  color: #383838; }\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.ts":
/*!************************************************************************!*\
  !*** ./ClientApp/app/forms/input-checkbox/input-checkbox.component.ts ***!
  \************************************************************************/
/*! exports provided: InputCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckboxComponent", function() { return InputCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputCheckboxComponent = /** @class */ (function (_super) {
    __extends(InputCheckboxComponent, _super);
    function InputCheckboxComponent() {
        return _super.call(this) || this;
    }
    InputCheckboxComponent_1 = InputCheckboxComponent;
    InputCheckboxComponent.prototype.validate = function (c) {
        var validator = Object(ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["checkboxValidator"])(c, "Field");
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var InputCheckboxComponent_1;
    InputCheckboxComponent = InputCheckboxComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-checkbox",
            template: __webpack_require__(/*! ./input-checkbox.component.html */ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./input-checkbox.component.scss */ "./ClientApp/app/forms/input-checkbox/input-checkbox.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputCheckboxComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputCheckboxComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputCheckboxComponent);
    return InputCheckboxComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_1__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-email/input-email.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/forms/input-email/input-email.component.ts ***!
  \******************************************************************/
/*! exports provided: InputEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEmailComponent", function() { return InputEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/email-validator */ "./ClientApp/app/logic/validators/email-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputEmailComponent = /** @class */ (function (_super) {
    __extends(InputEmailComponent, _super);
    function InputEmailComponent() {
        return _super.call(this) || this;
    }
    InputEmailComponent_1 = InputEmailComponent;
    InputEmailComponent.prototype.validate = function (c) {
        var checkUndefinded = this.data;
        if (checkUndefinded === undefined) {
            return;
        }
        var validator = Object(_logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_3__["emailValidator"])(c, checkUndefinded.label);
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var InputEmailComponent_1;
    InputEmailComponent = InputEmailComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-email",
            template: __webpack_require__(/*! ../input-text.component.html */ "./ClientApp/app/forms/input-text.component.html"),
            styles: [__webpack_require__(/*! ../input-text.component.scss */ "./ClientApp/app/forms/input-text.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputEmailComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputEmailComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputEmailComponent);
    return InputEmailComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_2__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-field.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/forms/input-field.ts ***!
  \********************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputField = /** @class */ (function () {
    function InputField() {
        this.editing = false;
        // Control Value Accessor Implementation
        this.propagateChange = function (_) { };
        this._validateMessage = "";
    }
    InputField.prototype.setMessage = function (validator) {
        // if there is an error
        if (validator !== null) {
            this._validateMessage = validator.error;
        }
        else {
            this._validateMessage = "";
        }
    };
    // allow to choose if edit fields are visible
    InputField.prototype.startEditing = function () {
        this.editing = true;
    };
    InputField.prototype.stopEditing = function () {
        var checkUndefinded = this.Input;
        if (checkUndefinded === undefined)
            return;
        checkUndefinded.nativeElement.value = "";
        this.propagateChange("");
        this.editing = false;
    };
    // to not show error when first validate empty field
    InputField.prototype.ngOnChanges = function () {
        var checkUndefinded = this.Input;
        if (checkUndefinded === undefined) {
            return;
        }
        this.propagateChange(checkUndefinded.nativeElement.value);
    };
    InputField.prototype.writeValue = function (value) {
        if (value !== undefined) {
            var checkUndefinded = this.Input;
            if (checkUndefinded === undefined)
                return;
            checkUndefinded.nativeElement.value = value;
        }
    };
    InputField.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    InputField.prototype.registerOnTouched = function () { };
    InputField.prototype.change = function (value) {
        this.propagateChange(value);
    };
    Object.defineProperty(InputField.prototype, "validateMessage", {
        // getters
        get: function () {
            return this._validateMessage;
        },
        // setters
        set: function (msg) {
            this._validateMessage = msg;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputField.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InputField.prototype, "Input", void 0);
    return InputField;
}());



/***/ }),

/***/ "./ClientApp/app/forms/input-file/input-file.component.html":
/*!******************************************************************!*\
  !*** ./ClientApp/app/forms/input-file/input-file.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-file\">\r\n  <span class=\"input-description\">{{ data.label }}</span>\r\n  <input id=\"image\" class=\"file-input\" type=\"file\" #input />\r\n  <label tabindex=\"0\" class=\"file-label\" for=\"image\">\r\n    <span tabindex=\"-1\" class=\"outline\">\r\n      <span class=\"label-wrapper\"\r\n        ><span class=\"label-content\">\r\n          <span class=\"svg-wrapper\">\r\n            <svg\r\n              class=\"svg-icon svg-upload start-animation\"\r\n              version=\"1.1\"\r\n              id=\"Layer_1\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              x=\"0px\"\r\n              y=\"0px\"\r\n              width=\"99.5px\"\r\n              height=\"56.5px\"\r\n              viewBox=\"0 0 99.5 56.5\"\r\n              enable-background=\"new 0 0 99.5 56.5\"\r\n              xml:space=\"preserve\"\r\n            >\r\n              <path\r\n                fill=\"none\"\r\n                stroke-width=\"3\"\r\n                stroke-miterlimit=\"10\"\r\n                d=\"M82.568,51.822c-28.455,0-60.006,0-69.031,0\r\n           c-12.44,0-13.038-20.527,0.366-23.088C13.22,19.562,24.319,9.659,36.304,14.528C46.738-1.88,74.178,1.719,77.848,23.319\r\n           C102.094,25.026,98.594,51.822,82.568,51.822z\"\r\n              />\r\n              <line\r\n                fill=\"none\"\r\n                stroke-width=\"4\"\r\n                stroke-miterlimit=\"10\"\r\n                x1=\"49.671\"\r\n                y1=\"45.26\"\r\n                x2=\"49.671\"\r\n                y2=\"25.602\"\r\n              />\r\n              <polyline\r\n                fill=\"none\"\r\n                stroke-width=\"4\"\r\n                stroke-miterlimit=\"10\"\r\n                points=\"40.073,33.774 49.671,24.176\r\n           59.269,33.774 \"\r\n              />\r\n            </svg>\r\n            <svg\r\n              class=\"svg-icon svg-success hidden\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              x=\"0px\"\r\n              y=\"0px\"\r\n              width=\"99.5px\"\r\n              height=\"61.75px\"\r\n              viewBox=\"0 -5.25 99.5 61.75\"\r\n              enable-background=\"new 0 -5.25 99.5 61.75\"\r\n              xml:space=\"preserve\"\r\n            >\r\n              <line\r\n                class=\"line1\"\r\n                fill=\"none\"\r\n                stroke=\"#E2E2E2\"\r\n                stroke-width=\"6\"\r\n                stroke-miterlimit=\"10\"\r\n                x2=\"19.043\"\r\n                y2=\"26.232\"\r\n                x1=\"43.552\"\r\n                y1=\"50.741\"\r\n              />\r\n              <line\r\n                class=\"line2\"\r\n                fill=\"none\"\r\n                stroke=\"#E2E2E2\"\r\n                stroke-width=\"6\"\r\n                stroke-miterlimit=\"10\"\r\n                x1=\"81.883\"\r\n                y1=\"8.178\"\r\n                x2=\"39.598\"\r\n                y2=\"50.465\"\r\n              />\r\n            </svg>\r\n            <svg\r\n              class=\"svg-icon svg-fail hidden\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              x=\"0px\"\r\n              y=\"0px\"\r\n              width=\"99.5px\"\r\n              height=\"61.75px\"\r\n              viewBox=\"0 -5.25 99.5 61.75\"\r\n              enable-background=\"new 0 -5.25 99.5 61.75\"\r\n              xml:space=\"preserve\"\r\n            >\r\n              <line\r\n                class=\"line1\"\r\n                fill=\"none\"\r\n                stroke=\"#E2E2E2\"\r\n                stroke-width=\"6\"\r\n                stroke-miterlimit=\"10\"\r\n                x1=\"26.9\"\r\n                y1=\"6.794\"\r\n                x2=\"71.35\"\r\n                y2=\"51.243\"\r\n              />\r\n              <line\r\n                class=\"line2\"\r\n                fill=\"none\"\r\n                stroke=\"#E2E2E2\"\r\n                stroke-width=\"6\"\r\n                stroke-miterlimit=\"10\"\r\n                x1=\"71.35\"\r\n                y1=\"6.75\"\r\n                x2=\"26.9\"\r\n                y2=\"51.199\"\r\n              />\r\n            </svg>\r\n          </span>\r\n          <span class=\"name label-element\">{{ information }}</span>\r\n        </span>\r\n      </span>\r\n    </span>\r\n\r\n    <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n      {{ this.validateMessage }}\r\n    </div>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-file/input-file.component.scss":
/*!******************************************************************!*\
  !*** ./ClientApp/app/forms/input-file/input-file.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forms/input-file/input-file.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/forms/input-file/input-file.component.ts ***!
  \****************************************************************/
/*! exports provided: InputFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileComponent", function() { return InputFileComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/validators/file-validator */ "./ClientApp/app/logic/validators/file-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { textValidator } from "src/app/validators/text-validator";

var InputFileComponent = /** @class */ (function (_super) {
    __extends(InputFileComponent, _super);
    function InputFileComponent() {
        var _this = _super.call(this) || this;
        _this._information = "Drop a file here";
        _this.elements = [];
        _this.iconsToAnimate = ["svg-upload", "svg-success", "svg-fail"];
        _this.first = true;
        return _this;
    }
    InputFileComponent_1 = InputFileComponent;
    InputFileComponent.prototype.validate = function (c) {
        var validator = Object(_logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_4__["fileValidator"])(c, this.data.label);
        if (c.value === "" || c.value === null || c.value.file === null) {
            // if file is empty, animate upload icon
            this.animateIcon("svg-upload");
        }
        else if (validator === null) {
            // if there is no errors, animate succes icon
            // if (!this.first) {
            this.animateIcon("svg-success");
            // } else this.first = false;
        }
        else if (validator.error !== "") {
            // if there is an error, animate error icon
            this.animateIcon("svg-fail");
        }
        _super.prototype.setMessage.call(this, validator);
        if (c.value === "" || c.value === null || c.value.file === null) {
            this._information = "Drop a file here";
        }
        return validator;
    };
    InputFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // for animating svg icons
        this.iconsToAnimate.forEach(function (icon) {
            _this.elements.push(document.getElementsByClassName(icon)[0]);
        });
        // add listeners to label
        var $fileLabel = jquery__WEBPACK_IMPORTED_MODULE_0__(".file-label");
        $fileLabel
            .on("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
            e.preventDefault();
        })
            .on("dragover dragenter", function () {
            $fileLabel.addClass("is-dragover");
        })
            .on("dragleave dragend drop", function () {
            $fileLabel.removeClass("is-dragover");
        })
            .on("drop", function (e) {
            _this.Input.nativeElement.files = e.originalEvent.dataTransfer.files;
            _this.dropped();
        });
        // if label is clicked
        var $fileInput = jquery__WEBPACK_IMPORTED_MODULE_0__(".file-input");
        $fileInput.on("change", function () {
            _this.dropped();
        });
        $fileLabel.on("keyup", function (e) {
            if (e.keyCode === 13) {
                $fileInput.trigger("click");
            }
        });
    };
    Object.defineProperty(InputFileComponent.prototype, "information", {
        get: function () {
            return this._information;
        },
        enumerable: true,
        configurable: true
    });
    InputFileComponent.prototype.animateIcon = function (icon) {
        this.elements.forEach(function (element) {
            if (element.classList.contains("start-animation")) {
                // if (element.classList.contains(icon)) return;
                element.classList.remove("start-animation");
                element.classList.add("end-animation");
            }
        });
        setTimeout(function () {
            var el = document.getElementsByClassName(icon)[0];
            el.classList.remove("end-animation", "hidden");
            el.classList.add("start-animation");
        }, 300);
    };
    InputFileComponent.prototype.dropped = function () {
        this._information = this.Input.nativeElement.files[0].name;
        _super.prototype.change.call(this, this.Input.nativeElement.files[0]);
    };
    InputFileComponent.prototype.clear = function () {
        this._information = "Drop a file here";
        this.Input.nativeElement.value = "";
        this._validateMessage = "";
        _super.prototype.change.call(this, null);
    };
    InputFileComponent.prototype.getFile = function () {
        return this.Input.nativeElement.files[0];
    };
    var InputFileComponent_1;
    InputFileComponent = InputFileComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "input-file",
            template: __webpack_require__(/*! ./input-file.component.html */ "./ClientApp/app/forms/input-file/input-file.component.html"),
            styles: [__webpack_require__(/*! ./input-file.component.scss */ "./ClientApp/app/forms/input-file/input-file.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputFileComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputFileComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputFileComponent);
    return InputFileComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_3__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-option/input-option.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/forms/input-option/input-option.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <label class=\"input-description\">{{ data.label }}</label>\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === false\"\r\n    (click)=\"startEditing()\"\r\n    >Edit</span\r\n  >\r\n  <select\r\n    id=\"category\"\r\n    name=\"category\"\r\n    [ngClass]=\"validateMessage !== '' ? 'invalid' : null\"\r\n    [ngClass]=\"editing === true || data.editable !== true ? null : 'hidden'\"\r\n    type=\"text\"\r\n    #input\r\n    (change)=\"change(this.Input.nativeElement.value)\"\r\n  >\r\n    <option value=\"cat1\">Cat 1</option>\r\n    <option value=\"Cat 2\">Cat 2</option>\r\n    <option value=\"Cat 3\">Cat 3</option>\r\n    <option value=\"Cat 4\">Cat 4</option>\r\n  </select>\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === true\"\r\n    class=\"reject\"\r\n    (click)=\"stopEditing()\"\r\n    >X</span\r\n  >\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-option/input-option.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/forms/input-option/input-option.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forms/input-option/input-option.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/forms/input-option/input-option.component.ts ***!
  \********************************************************************/
/*! exports provided: InputOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOptionComponent", function() { return InputOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputOptionComponent = /** @class */ (function (_super) {
    __extends(InputOptionComponent, _super);
    function InputOptionComponent() {
        return _super.call(this) || this;
    }
    InputOptionComponent_1 = InputOptionComponent;
    InputOptionComponent.prototype.validate = function (c) {
        var checkUndefinded = this.data;
        if (checkUndefinded === undefined)
            return;
        var validator = Object(_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["requiredTextValidator"])(c, checkUndefinded.label);
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var InputOptionComponent_1;
    InputOptionComponent = InputOptionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-option",
            template: __webpack_require__(/*! ./input-option.component.html */ "./ClientApp/app/forms/input-option/input-option.component.html"),
            styles: [__webpack_require__(/*! ./input-option.component.scss */ "./ClientApp/app/forms/input-option/input-option.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputOptionComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputOptionComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputOptionComponent);
    return InputOptionComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_1__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-password/input-password.component.html":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/forms/input-password/input-password.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <label class=\"input-description\">{{ data.label }}</label>\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === false\"\r\n    (click)=\"startEditing()\"\r\n    >Edit</span\r\n  >\r\n  <input\r\n    [ngClass]=\"validateMessage !== '' ? 'invalid' : null\"\r\n    [ngClass]=\"editing === true || data.editable !== true ? null : 'hidden'\"\r\n    type=\"password\"\r\n    #input\r\n    (keyup)=\"change(this.Input.nativeElement.value)\"\r\n  />\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === true\"\r\n    class=\"reject\"\r\n    (click)=\"stopEditing()\"\r\n    >X</span\r\n  >\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-password/input-password.component.ts":
/*!************************************************************************!*\
  !*** ./ClientApp/app/forms/input-password/input-password.component.ts ***!
  \************************************************************************/
/*! exports provided: InputPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordComponent", function() { return InputPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputPasswordComponent = /** @class */ (function (_super) {
    __extends(InputPasswordComponent, _super);
    function InputPasswordComponent() {
        return _super.call(this) || this;
    }
    InputPasswordComponent_1 = InputPasswordComponent;
    InputPasswordComponent.prototype.validate = function (c) {
        var validator;
        var checkUndefinded = this.data;
        if (checkUndefinded === undefined)
            return;
        validator = Object(_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["passwordValidator"])(c, checkUndefinded.label);
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var InputPasswordComponent_1;
    InputPasswordComponent = InputPasswordComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-password",
            template: __webpack_require__(/*! ./input-password.component.html */ "./ClientApp/app/forms/input-password/input-password.component.html"),
            styles: [__webpack_require__(/*! ../input-text.component.scss */ "./ClientApp/app/forms/input-text.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputPasswordComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputPasswordComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputPasswordComponent);
    return InputPasswordComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_2__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/input-text.component.html":
/*!*******************************************************!*\
  !*** ./ClientApp/app/forms/input-text.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <label\r\n    *ngIf=\"data.label.length !== 0\"\r\n    class=\"input-description\"\r\n    for=\"title\"\r\n    >{{ data.label }}</label\r\n  >\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === false\"\r\n    (click)=\"startEditing()\"\r\n    >Edit</span\r\n  >\r\n  <input\r\n    [ngClass]=\"validateMessage !== '' ? 'invalid' : null\"\r\n    [ngClass]=\"editing === true || data.editable !== true ? null : 'hidden'\"\r\n    type=\"text\"\r\n    #input\r\n    (keyup)=\"change(this.Input.nativeElement.value)\"\r\n  />\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === true\"\r\n    class=\"reject\"\r\n    (click)=\"stopEditing()\"\r\n    >X</span\r\n  >\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/input-text.component.scss":
/*!*******************************************************!*\
  !*** ./ClientApp/app/forms/input-text.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forms/input-text/input-text.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/forms/input-text/input-text.component.ts ***!
  \****************************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputTextComponent = /** @class */ (function (_super) {
    __extends(InputTextComponent, _super);
    function InputTextComponent() {
        return _super.call(this) || this;
    }
    InputTextComponent_1 = InputTextComponent;
    InputTextComponent.prototype.validate = function (c) {
        var validator;
        var checkUndefinded = this.data;
        if (checkUndefinded === undefined)
            return;
        if (checkUndefinded.validation === "short") {
            validator = Object(_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["shortTextValidator"])(c, checkUndefinded.label);
        }
        else {
            validator = Object(_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["requiredTextValidator"])(c, checkUndefinded.label);
        }
        _super.prototype.setMessage.call(this, validator);
        return validator;
    };
    var InputTextComponent_1;
    InputTextComponent = InputTextComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-text",
            template: __webpack_require__(/*! ../input-text.component.html */ "./ClientApp/app/forms/input-text.component.html"),
            styles: [__webpack_require__(/*! ../input-text.component.scss */ "./ClientApp/app/forms/input-text.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputTextComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputTextComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputTextComponent);
    return InputTextComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_2__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/forms/submit-button/submit-button.component.html":
/*!************************************************************************!*\
  !*** ./ClientApp/app/forms/submit-button/submit-button.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button area-label=\"upload file\" class=\"button-colored\" type=\"submit\">\r\n  Submit\r\n</button>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/submit-button/submit-button.component.scss":
/*!************************************************************************!*\
  !*** ./ClientApp/app/forms/submit-button/submit-button.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forms/submit-button/submit-button.component.ts":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/forms/submit-button/submit-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: SubmitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function() { return SubmitButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitButtonComponent = /** @class */ (function () {
    function SubmitButtonComponent() {
    }
    SubmitButtonComponent.prototype.ngOnInit = function () { };
    SubmitButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-submit-button",
            template: __webpack_require__(/*! ./submit-button.component.html */ "./ClientApp/app/forms/submit-button/submit-button.component.html"),
            styles: [__webpack_require__(/*! ./submit-button.component.scss */ "./ClientApp/app/forms/submit-button/submit-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitButtonComponent);
    return SubmitButtonComponent;
}());



/***/ }),

/***/ "./ClientApp/app/forms/textarea/textarea.component.html":
/*!**************************************************************!*\
  !*** ./ClientApp/app/forms/textarea/textarea.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-wrapper\">\r\n  <label class=\"input-description\" for=\"title\">{{ data.label }}</label>\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === false\"\r\n    (click)=\"startEditing()\"\r\n    >Edit</span\r\n  >\r\n  <textarea\r\n    [ngClass]=\"editing === true || data.editable !== true ? '' : 'hidden'\"\r\n    type=\"text\"\r\n    #input\r\n    (keyup)=\"change(this.Input.nativeElement.value)\"\r\n  >\r\n  {{ data.value }}\r\n</textarea\r\n  >\r\n  <span\r\n    *ngIf=\"data.editable === true && editing === true\"\r\n    class=\"reject\"\r\n    (click)=\"stopEditing()\"\r\n    >X</span\r\n  >\r\n\r\n  <div class=\"warning\" *ngIf=\"this.validateMessage !== ''\">\r\n    {{ validateMessage }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/forms/textarea/textarea.component.scss":
/*!**************************************************************!*\
  !*** ./ClientApp/app/forms/textarea/textarea.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/forms/textarea/textarea.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/forms/textarea/textarea.component.ts ***!
  \************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-field */ "./ClientApp/app/forms/input-field.ts");
/* harmony import */ var ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { textValidator } from "../../validators/text-validator";
var TextareaComponent = /** @class */ (function (_super) {
    __extends(TextareaComponent, _super);
    function TextareaComponent() {
        return _super.call(this) || this;
    }
    TextareaComponent_1 = TextareaComponent;
    TextareaComponent.prototype.validate = function (c) {
        console.log(this.data);
        if (this.data.validation) {
            // let validator = textValidator(c, this.data.label);
            // super.setMessage(validator);
            var validator = Object(ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["requiredTextareaValidator"])(c, this.data.label);
            _super.prototype.setMessage.call(this, validator);
            return validator;
        }
        return null;
    };
    var TextareaComponent_1;
    TextareaComponent = TextareaComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "input-textarea",
            template: __webpack_require__(/*! ./textarea.component.html */ "./ClientApp/app/forms/textarea/textarea.component.html"),
            styles: [__webpack_require__(/*! ./textarea.component.scss */ "./ClientApp/app/forms/textarea/textarea.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TextareaComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return TextareaComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TextareaComponent);
    return TextareaComponent;
}(_input_field__WEBPACK_IMPORTED_MODULE_2__["InputField"]));



/***/ }),

/***/ "./ClientApp/app/images-all/image-element/image-element.component.html":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/images-all/image-element/image-element.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-element-wrapper\" #container>\r\n  <span\r\n    class=\"edit-delete-icon\"\r\n    (click)=\"deleteImg()\"\r\n    *ngIf=\"loggedId === image.userId\"\r\n    ><i class=\"icon-trash\"></i\r\n  ></span>\r\n  <div class=\"image-cropped\">\r\n    <a routerLink=\"/image/{{ image.id }}\">\r\n      <img src=\"{{ image.imgLink }}\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"image-info\">\r\n    <h3 class=\"image-title\">\r\n      <a routerLink=\"/image/{{ image.id }}\">{{ image.title }}</a>\r\n      <span>{{ image.likeCount }} <i class=\"icon-heart-1\"></i></span>\r\n      <span>{{ image.commentsCount }} <i class=\"icon-comment\"></i></span>\r\n    </h3>\r\n    <div class=\"image-author\">\r\n      <div class=\"avatar-container\">\r\n        <a class=\"avatar-link\" routerLink=\"/user/{{ image.userId }}\">\r\n          <img\r\n            src=\"{{\r\n              image.userOwnerImgLink === null || image.userOwnerImgLink === ''\r\n                ? '../../assets/img/avatar.png'\r\n                : image.userOwnerImgLink\r\n            }}\"\r\n          />\r\n        </a>\r\n      </div>\r\n      <div class=\"image-author-name\">\r\n        <a routerLink=\"/user/{{ image.userId }}\">{{ image.userOwnerName }}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-agree-label\r\n  #confirmLabel\r\n  (emitter)=\"confirm()\"\r\n  [message]=\"'You are going to delete this image. Are you sure?'\"\r\n></app-agree-label>\r\n"

/***/ }),

/***/ "./ClientApp/app/images-all/image-element/image-element.component.scss":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/images-all/image-element/image-element.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-element-wrapper {\n  position: relative; }\n\n.edit-delete-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #000000f2;\n  background: #1c1c1c4f;\n  height: 30px;\n  width: 30px;\n  border-radius: 15px; }\n\n.edit-delete-icon:hover {\n  background: #0707070f; }\n"

/***/ }),

/***/ "./ClientApp/app/images-all/image-element/image-element.component.ts":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/images-all/image-element/image-element.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImageElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageElementComponent", function() { return ImageElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageElementComponent = /** @class */ (function (_super) {
    __extends(ImageElementComponent, _super);
    function ImageElementComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ImageElementComponent.prototype.confirm = function () {
        var _this = this;
        this.service
            .deleteImage(this.image.id, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this.emitter.emit(_this.image.id);
        });
    };
    ImageElementComponent.prototype.deleteImg = function () {
        this.confirmLabel.show();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Image)
    ], ImageElementComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmLabel"),
        __metadata("design:type", Object)
    ], ImageElementComponent.prototype, "confirmLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("container"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageElementComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImageElementComponent.prototype, "emitter", void 0);
    ImageElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-element",
            template: __webpack_require__(/*! ./image-element.component.html */ "./ClientApp/app/images-all/image-element/image-element.component.html"),
            styles: [__webpack_require__(/*! ./image-element.component.scss */ "./ClientApp/app/images-all/image-element/image-element.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ImageElementComponent);
    return ImageElementComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/images-all/images-common/images-common.component.html":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/images-all/images-common/images-common.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"images\">\r\n  <span\r\n    class=\"centered-description\"\r\n    *ngIf=\"images.length === 0 && !loading && !fail\"\r\n    >There is no images yet.</span\r\n  ></ng-container\r\n>\r\n<div class=\"loading\" *ngIf=\"loading === true\" class=\"centered-description\">\r\n  <span>Loading <i class=\"icon-spin4 animate-spin\"></i></span>\r\n</div>\r\n\r\n<div class=\"fail\" *ngIf=\"fail === true\">\r\n  An error occured. Try again later.\r\n</div>\r\n\r\n<div class=\"image-wrapper {{ classes }}\" *ngIf=\"resizeReady\">\r\n  <div\r\n    *ngFor=\"let image of (images | slice: 0:howMany); let i = index\"\r\n    class=\"image-element\"\r\n  >\r\n    <app-image-element\r\n      [image]=\"image\"\r\n      (emitter)=\"delete($event)\"\r\n    ></app-image-element>\r\n  </div>\r\n\r\n  <button\r\n    class=\"load-more button-colored\"\r\n    (click)=\"loadMore()\"\r\n    *ngIf=\"images.length > howMany\"\r\n  >\r\n    load more\r\n  </button>\r\n</div>\r\n\r\n<app-confirmation-message #msg></app-confirmation-message>\r\n"

/***/ }),

/***/ "./ClientApp/app/images-all/images-common/images-common.component.scss":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/images-all/images-common/images-common.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-description {\n  width: 100%;\n  display: inline-block;\n  text-align: center; }\n\nbutton {\n  width: 150px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./ClientApp/app/images-all/images-common/images-common.component.ts":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/images-all/images-common/images-common.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImagesCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCommonComponent", function() { return ImagesCommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Image } from "../classes/image";
var ImagesCommonComponent = /** @class */ (function () {
    function ImagesCommonComponent(route) {
        this.route = route;
        // @Input("images") Images: Image[] = [];
        this.classes = "";
        this._loading = false;
        this._fail = false;
        this._howMany = 0;
        this._resizeReady = false;
        this._images = [];
        this.valueToAdd = 24;
    }
    ImagesCommonComponent.prototype.ngOnInit = function () {
        this._howMany = this.valueToAdd;
    };
    // show loading icon
    ImagesCommonComponent.prototype.showLoadingMsg = function () {
        this._loading = true;
    };
    // error occured
    ImagesCommonComponent.prototype.showErrorMsg = function () {
        this._loading = false;
        this._fail = true;
    };
    ImagesCommonComponent.prototype.delete = function ($event) {
        var elToRemove = this._images.find(function (x) { return x.id === $event; });
        this._images.splice(this._images.indexOf(elToRemove), 1);
        this.msg.show("Image deleted successfully.");
    };
    ImagesCommonComponent.prototype.loadMore = function () {
        this._howMany += this.valueToAdd;
    };
    // stop loading icon
    // there is no images or there are images
    ImagesCommonComponent.prototype.hideLoadingMsg = function () {
        this._loading = false;
    };
    ImagesCommonComponent.prototype.resizeLinks = function (w, h) {
        var insertAfter = "http://res.cloudinary.com/dvjarj3xz/image/upload/";
        var toInsert;
        this._images.forEach(function (el) {
            toInsert = "w_300,h_250,c_fill/q_auto:low/";
            el.imgLink = [
                el.imgLink.slice(0, insertAfter.length),
                toInsert,
                el.imgLink.slice(insertAfter.length)
            ].join("");
            if (el.userOwnerImgLink !== null && el.userOwnerImgLink !== "") {
                toInsert = "w_22,h_22,c_fill/q_auto:low/";
                el.userOwnerImgLink = [
                    el.userOwnerImgLink.slice(0, insertAfter.length),
                    toInsert,
                    el.userOwnerImgLink.slice(insertAfter.length)
                ].join("");
            }
        });
    };
    Object.defineProperty(ImagesCommonComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        set: function (images) {
            this._resizeReady = false;
            this._images = images;
            this.resizeLinks(300, 250);
            this._resizeReady = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagesCommonComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagesCommonComponent.prototype, "fail", {
        get: function () {
            return this._fail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagesCommonComponent.prototype, "howMany", {
        get: function () {
            return this._howMany;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagesCommonComponent.prototype, "resizeReady", {
        get: function () {
            return this._resizeReady;
        },
        enumerable: true,
        configurable: true
    });
    ImagesCommonComponent.prototype.getUrl = function () {
        return this.route.snapshot.params.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("classes"),
        __metadata("design:type", Object)
    ], ImagesCommonComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], ImagesCommonComponent.prototype, "msg", void 0);
    ImagesCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-images-common",
            template: __webpack_require__(/*! ./images-common.component.html */ "./ClientApp/app/images-all/images-common/images-common.component.html"),
            styles: [__webpack_require__(/*! ./images-common.component.scss */ "./ClientApp/app/images-all/images-common/images-common.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ImagesCommonComponent);
    return ImagesCommonComponent;
}());



/***/ }),

/***/ "./ClientApp/app/images-all/images/images.component.html":
/*!***************************************************************!*\
  !*** ./ClientApp/app/images-all/images/images.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-images-common [classes]=\"'smaller'\" #imagesComponent></app-images-common>\r\n"

/***/ }),

/***/ "./ClientApp/app/images-all/images/images.component.scss":
/*!***************************************************************!*\
  !*** ./ClientApp/app/images-all/images/images.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/images-all/images/images.component.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/images-all/images/images.component.ts ***!
  \*************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(imageService, route) {
        this.imageService = imageService;
        this.route = route;
        this.selectedRoutes = {
            recent: "recent",
            trending: ""
        };
        this._images = [];
        this.wasAlreadyChanged = false; // says if route was changed and getData called
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () {
            _this.getData();
        });
    };
    ImagesComponent.prototype.getData = function () {
        var _this = this;
        if (this.route.snapshot.routeConfig === null) {
            return;
        }
        if (this.route.parent === null) {
            return;
        }
        var path = this.route.snapshot.routeConfig.path;
        var id = this.route.parent.snapshot.paramMap.get("id");
        if (id === null) {
            return;
        }
        var el = document.getElementsByClassName("firstLink")[0];
        if (path === this.selectedRoutes.trending &&
            !el.classList.contains("activeLi")) {
            el.classList.add("activeLi");
        }
        else if (path !== this.selectedRoutes.trending &&
            el.classList.contains("activeLi")) {
            el.classList.remove("activeLi");
        }
        this.imgComp.showLoadingMsg();
        if (path === this.selectedRoutes.recent) {
            this.imageService.selectUserTrendingImages(id).subscribe(function (res) {
                _this._images = res;
                _this.imgComp.hideLoadingMsg();
                _this.imgComp.images = _this._images;
            }, function (err) {
                _this.imgComp.showErrorMsg();
            });
        }
        else {
            this.imageService.selectUserRecentImages(id).subscribe(function (res) {
                _this._images = res;
                _this.imgComp.hideLoadingMsg();
                _this.imgComp.images = _this._images;
            }, function (err) {
                _this.imgComp.showErrorMsg();
            });
        }
    };
    Object.defineProperty(ImagesComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    ImagesComponent.prototype.getUrl = function () {
        return this.route.snapshot.params.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imagesComponent"),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "imgComp", void 0);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-images",
            template: __webpack_require__(/*! ./images.component.html */ "./ClientApp/app/images-all/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./ClientApp/app/images-all/images/images.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/likes/likes.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/likes/likes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"like-container\">\n  <div class=\"likes header-info\">\n    <span class=\"link\" (click)=\"commentShowLiked()\">\n      {{ data.comment.likeCount }}\n      {{ data.comment.likeCount === 1 ? \"like\" : \"likes\" }}\n    </span>\n  </div>\n  <div\n    class=\"like\"\n    [ngClass]=\"data.comment.liked === true ? 'liked' : null\"\n    *ngIf=\"data.loggedIn\"\n  >\n    <span (click)=\"commentLike()\" class=\"like-unliked\">\n      Like\n    </span>\n    <span (click)=\"commentUnlike()\" class=\"like-liked\">Liked!</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./ClientApp/app/likes/likes.component.scss":
/*!**************************************************!*\
  !*** ./ClientApp/app/likes/likes.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".like-container {\n  display: flex;\n  align-items: center; }\n\n.likes {\n  color: #787878; }\n\n.like span {\n  width: 77px;\n  padding: 12px 15px;\n  text-align: center;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer; }\n\n.like .like-unliked {\n  display: block;\n  border: 1px solid #dbdbdb;\n  width: 73px; }\n\n.like .like-liked {\n  display: none;\n  border: 1px solid #bcbcbc;\n  background: #cecece; }\n\n.like.liked .like-unliked {\n  display: none; }\n\n.like.liked .like-liked {\n  display: block; }\n\n.header-info {\n  margin-right: 20px;\n  color: #a0a0a0;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./ClientApp/app/likes/likes.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/likes/likes.component.ts ***!
  \************************************************/
/*! exports provided: LikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikesComponent = /** @class */ (function () {
    function LikesComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LikesComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    LikesComponent.prototype.commentLike = function () {
        this.emitter.emit({
            type: "comment",
            like: true,
            unlike: false,
            show: false,
            comment: this.data.comment
        });
    };
    LikesComponent.prototype.commentUnlike = function () {
        this.emitter.emit({
            type: "comment",
            like: false,
            unlike: true,
            show: false,
            comment: this.data.comment
        });
    };
    LikesComponent.prototype.commentShowLiked = function () {
        this.emitter.emit({
            type: "comment",
            like: false,
            unlike: false,
            show: true,
            comment: this.data.comment
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LikesComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LikesComponent.prototype, "emitter", void 0);
    LikesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-likes",
            template: __webpack_require__(/*! ./likes.component.html */ "./ClientApp/app/likes/likes.component.html"),
            styles: [__webpack_require__(/*! ./likes.component.scss */ "./ClientApp/app/likes/likes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LikesComponent);
    return LikesComponent;
}());



/***/ }),

/***/ "./ClientApp/app/logic/classes/global-variables.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/logic/classes/global-variables.ts ***!
  \*********************************************************/
/*! exports provided: GlobalVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariables", function() { return GlobalVariables; });
var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
    }
    Object.defineProperty(GlobalVariables, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalVariables, "host", {
        get: function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    GlobalVariables.parseTags = function (tags) {
        var newTags = [];
        if (tags !== [] && tags !== "" && tags !== null) {
            tags.forEach(function (el) {
                newTags.push(el.value);
            });
        }
        return newTags;
    };
    GlobalVariables.parseImageLink = function (w, h, link, mode, quality) {
        if (mode === void 0) { mode = "c_fill"; }
        if (quality === void 0) { quality = "eco"; }
        if (link === "" || link === null) {
            return null;
        }
        var insertAfter = "http://res.cloudinary.com/dvjarj3xz/image/upload/";
        var toInsert;
        var newLink = null;
        toInsert = "w_" + w + ",h_" + h + "," + mode + "/q_auto:" + quality + "/";
        newLink = [
            link.slice(0, insertAfter.length),
            toInsert,
            link.slice(insertAfter.length)
        ].join("");
        return newLink;
    };
    GlobalVariables._key = "id";
    GlobalVariables._host = "http://paint-store.azurewebsites.net/";
    return GlobalVariables;
}());



/***/ }),

/***/ "./ClientApp/app/logic/classes/logged-in.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/logic/classes/logged-in.ts ***!
  \**************************************************/
/*! exports provided: LoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedIn", function() { return LoggedIn; });
/* harmony import */ var _login_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-manager */ "./ClientApp/app/logic/classes/login-manager.ts");

var LoggedIn = /** @class */ (function () {
    function LoggedIn() {
        this._loggedIn = false;
        this._loggedId = 0;
        this._loggedToken = "";
    }
    LoggedIn.prototype.ngOnInit = function () {
        this._loggedIn = _login_manager__WEBPACK_IMPORTED_MODULE_0__["LoginManager"].userLoggedIn();
        this._loggedId = _login_manager__WEBPACK_IMPORTED_MODULE_0__["LoginManager"].userId();
        this._loggedToken = _login_manager__WEBPACK_IMPORTED_MODULE_0__["LoginManager"].userToken();
    };
    Object.defineProperty(LoggedIn.prototype, "loggedIn", {
        get: function () {
            return this._loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggedIn.prototype, "loggedId", {
        get: function () {
            return this._loggedId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggedIn.prototype, "loggedToken", {
        get: function () {
            return this._loggedToken;
        },
        enumerable: true,
        configurable: true
    });
    return LoggedIn;
}());



/***/ }),

/***/ "./ClientApp/app/logic/classes/login-manager.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/logic/classes/login-manager.ts ***!
  \******************************************************/
/*! exports provided: LoginManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginManager", function() { return LoginManager; });
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");


var LoginManager = /** @class */ (function () {
    function LoginManager() {
    }
    LoginManager.checkAuth = function () {
        if (this._userId === -1 &&
            this._userLoggedIn === false &&
            this._userToken === "") {
            var data = this.local.get(_global_variables__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].key);
            if (data === null) {
                this._userLoggedIn = false;
                this._userId = -1;
                this._userToken = "";
            }
            else {
                this._userId = data.userId;
                this._userToken = data.token;
                this._userLoggedIn = true;
            }
        }
    };
    LoginManager.loginUser = function (data) {
        this.local.set(_global_variables__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].key, data);
    };
    LoginManager.logoutUser = function () {
        this.local.remove(_global_variables__WEBPACK_IMPORTED_MODULE_1__["GlobalVariables"].key);
    };
    LoginManager.userId = function () {
        this.checkAuth();
        return this._userId;
    };
    LoginManager.userLoggedIn = function () {
        this.checkAuth();
        return this._userLoggedIn;
    };
    LoginManager.userToken = function () {
        this.checkAuth();
        return this._userToken;
    };
    LoginManager.imgLink = function () {
        return this._imgLink;
    };
    LoginManager._userId = -1;
    LoginManager._userLoggedIn = false;
    LoginManager._userToken = "";
    LoginManager._imgLink = "";
    LoginManager.local = new angular_web_storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]();
    return LoginManager;
}());



/***/ }),

/***/ "./ClientApp/app/logic/classes/user.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/logic/classes/user.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this._about = "";
        this._accountId = 0;
        this._avatarImgLink = "";
        this._backgroundImgLink = "";
        this._followedCount = 0;
        this._followingCount = 0;
        this._id = 0;
        this._link = "";
        this._mostUsedCategoryToolName = "";
        this._name = "";
        this._postsCount = 0;
    }
    Object.defineProperty(User.prototype, "about", {
        get: function () {
            return this._about;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "accountId", {
        get: function () {
            return this._accountId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "avatarImgLink", {
        get: function () {
            return this._avatarImgLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "backgroundImgLink", {
        get: function () {
            return this._backgroundImgLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "followedCount", {
        get: function () {
            return this._followedCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "followingCount", {
        get: function () {
            return this._followingCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "link", {
        get: function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "postsCount", {
        get: function () {
            return this._postsCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "mostUsedCategoryToolName", {
        get: function () {
            return this._mostUsedCategoryToolName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./ClientApp/app/logic/validators/email-validator.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/logic/validators/email-validator.ts ***!
  \***********************************************************/
/*! exports provided: emailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
function emailValidator(c, fieldName) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!c.dirty) {
        return null;
    }
    if (!pattern.test(c.value) || c.value.length === 0) {
        return { error: fieldName + " is wrong." };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "./ClientApp/app/logic/validators/file-validator.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/logic/validators/file-validator.ts ***!
  \**********************************************************/
/*! exports provided: fileValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileValidator", function() { return fileValidator; });
function fileValidator(c, fieldName) {
    var droppedFile = c.value;
    // if file not required
    if (droppedFile === "" ||
        droppedFile === null ||
        typeof droppedFile === "undefined" ||
        typeof droppedFile.type === "undefined") {
        return null;
    }
    // else
    var allowedTypes = ["image/png", "image/jpeg"];
    var allowedExtensions = ["png", "jpg"];
    //TODO
    if (!allowedTypes.includes(droppedFile.type) ||
        (droppedFile.type === "" &&
            !allowedExtensions.includes(droppedFile.name.split(".").pop())) ||
        droppedFile.size === 0) {
        return {
            error: "File type is wrong.",
            isNull: false
        };
    }
    if (droppedFile.size / 1024 / 1024 > 4) {
        // 2 MB size
        return {
            error: "File size is too big.",
            isNull: false
        };
    }
    return null;
}


/***/ }),

/***/ "./ClientApp/app/logic/validators/passwords-validator.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/logic/validators/passwords-validator.ts ***!
  \***************************************************************/
/*! exports provided: passwordsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordsValidator", function() { return passwordsValidator; });
function passwordsValidator(c, fieldName) {
    // field is optional
    if (!c.dirty) {
        return null;
    }
    if (c.value === "" || typeof c.value === undefined)
        return null;
    if (c.value.new === "" && c.value.confirm === "")
        return null;
    if (c.value === "" || typeof c.value === undefined)
        return {
            error: fieldName + "'s length must be at least 8 characters long."
        };
    if (c.value.new.length < 8)
        return {
            error: fieldName + "'s length must be at least 8 characters long."
        };
    if (c.value.confirm !== c.value.new)
        return { error: fieldName + "s cannot be different." };
    return null;
}


/***/ }),

/***/ "./ClientApp/app/logic/validators/text-validator.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/logic/validators/text-validator.ts ***!
  \**********************************************************/
/*! exports provided: checkboxValidator, shortTextValidator, requiredTextValidator, requiredTextareaValidator, passwordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxValidator", function() { return checkboxValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortTextValidator", function() { return shortTextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredTextValidator", function() { return requiredTextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredTextareaValidator", function() { return requiredTextareaValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
function checkboxValidator(c, fieldName) {
    // do not show error if the form was not touched
    if (!c.dirty) {
        return null;
    }
    return c.value === false ? { error: fieldName + " must be selected." } : null;
}
function shortTextValidator(c, fieldName) {
    if (!c.dirty) {
        return null;
    }
    return c.value.length > 90
        ? { error: fieldName + " cannot be more than 90 characters long." }
        : null;
}
function requiredTextValidator(c, fieldName) {
    if (!c.dirty) {
        return null;
    }
    return c.value.length < 4
        ? { error: fieldName + " must be at least 4 characters long." }
        : null;
}
function requiredTextareaValidator(c, fieldName) {
    if (!c.dirty) {
        return null;
    }
    // console.log("tutaj c", c);
    return c.value.length < 1
        ? { error: (fieldName === "" ? "Field" : fieldName) + " must be filled." }
        : null;
}
function passwordValidator(c, fieldName) {
    if (!c.dirty) {
        return null;
    }
    return c.value.length < 8
        ? { error: fieldName + " must be at least 8 characters long." }
        : null;
}


/***/ }),

/***/ "./ClientApp/app/pages/add-photo/add-photo.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/pages/add-photo/add-photo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered centered-block\">\r\n  <div class=\"upload-centered\">\r\n    <h2>Upload a file</h2>\r\n\r\n    <form [formGroup]=\"uploadForm\" (ngSubmit)=\"onUpload(uploadForm)\">\r\n      <input-text\r\n        [data]=\"{\r\n          label: 'Title'\r\n        }\"\r\n        formControlName=\"title\"\r\n      ></input-text>\r\n      <input-textarea\r\n        [data]=\"{ label: 'Description' }\"\r\n        formControlName=\"description\"\r\n      ></input-textarea>\r\n      <label class=\"input-description\">Tags</label>\r\n      <tag-input\r\n        [maxItems]=\"'10'\"\r\n        [addOnPaste]=\"'true'\"\r\n        [animationDuration]=\"{ enter: '0ms', leave: '0ms' }\"\r\n        [placeholder]=\"'Press Enter to add item'\"\r\n        [separatorKeyCodes]=\"'[32, 13]'\"\r\n        formControlName=\"tags\"\r\n      ></tag-input>\r\n      <input-file\r\n        [data]=\"{\r\n          label: 'File'\r\n        }\"\r\n        formControlName=\"file\"\r\n      >\r\n      </input-file>\r\n      <div class=\"warning summary-warning\" *ngIf=\"uploadWarning !== ''\">\r\n        {{ uploadWarning }}\r\n      </div>\r\n      <button area-label=\"upload file\" class=\"button-colored\" type=\"submit\">\r\n        Submit\r\n      </button>\r\n      <span *ngIf=\"loading\" class=\"loading\"\r\n        ><i class=\"icon-spin4 animate-spin\"></i\r\n      ></span>\r\n    </form>\r\n  </div>\r\n</div>\r\n<app-confirmation-message #message></app-confirmation-message>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/add-photo/add-photo.component.scss":
/*!****************************************************************!*\
  !*** ./ClientApp/app/pages/add-photo/add-photo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep tag-input input {\n  margin-bottom: 0; }\n\n:host ::ng-deep input-file .file-label {\n  height: 120px; }\n\n.upload-centered {\n  max-width: 600px; }\n\n@media only screen and (max-width: 800px) {\n  .flex-wrapper {\n    flex-direction: column; }\n  .upload-centered {\n    box-shadow: none;\n    margin: 0 auto; }\n  .image-description {\n    width: 100%; }\n  .centered {\n    background: #fff; }\n  h2 {\n    padding: 20px 0px; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/add-photo/add-photo.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/add-photo/add-photo.component.ts ***!
  \**************************************************************/
/*! exports provided: AddPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoComponent", function() { return AddPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
/* harmony import */ var _logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/validators/file-validator */ "./ClientApp/app/logic/validators/file-validator.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddPhotoComponent = /** @class */ (function (_super) {
    __extends(AddPhotoComponent, _super);
    function AddPhotoComponent(fb, service, router) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.service = service;
        _this.router = router;
        _this._uploadWarning = "";
        _this._loading = false;
        _this.uploadForm = _this.fb.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_3__["requiredTextValidator"]]],
            description: "",
            tags: "",
            category: "",
            file: ["", [_logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_4__["fileValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        return _this;
    }
    AddPhotoComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this._loggedIn === false) {
            this.router.navigateByUrl("/not-found");
        }
    };
    AddPhotoComponent.prototype.showErrorMsg = function () {
        this._uploadWarning = "There was an error, please try again.";
    };
    AddPhotoComponent.prototype.sendMoreInfo = function (data, tags, form) {
        var _this = this;
        this.service
            .addAdditionalImageInfo(data, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            var response = res;
            var id = response.id;
            // after image, send tags
            _this.service
                .addTagsToImage({
                tagsList: tags,
                postId: id
            }, _this._loggedId, _this._loggedToken)
                .subscribe(function () {
                _this.Message.show("File uploaded successfully!");
                form.reset();
                _this._loading = false;
            }, function () {
                _this.showErrorMsg();
            });
        }, function (err) {
            _this.showErrorMsg();
        });
    };
    AddPhotoComponent.prototype.onUpload = function (form) {
        var _this = this;
        if (form.status === "INVALID") {
            this._uploadWarning = "Title and file must be added.";
        }
        else {
            this._loading = true;
            var linkToImg_1 = "";
            this.service
                .uploadImage(form.value.file, this._loggedId, this._loggedToken)
                .subscribe(function (res) {
                linkToImg_1 = res[0].url;
                _this.sendMoreInfo({
                    userId: _this._loggedId,
                    title: form.value.title,
                    description: form.value.description,
                    imgLink: linkToImg_1,
                    userOwnerName: ""
                }, _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_6__["GlobalVariables"].parseTags(form.value.tags), form);
            }, function (err) {
                _this.showErrorMsg();
            });
            this._uploadWarning = "";
        }
    };
    Object.defineProperty(AddPhotoComponent.prototype, "uploadWarning", {
        get: function () {
            return this._uploadWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddPhotoComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("message"),
        __metadata("design:type", Object)
    ], AddPhotoComponent.prototype, "Message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInput"),
        __metadata("design:type", Object)
    ], AddPhotoComponent.prototype, "fileInput", void 0);
    AddPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-photo",
            template: __webpack_require__(/*! ./add-photo.component.html */ "./ClientApp/app/pages/add-photo/add-photo.component.html"),
            styles: [__webpack_require__(/*! ./add-photo.component.scss */ "./ClientApp/app/pages/add-photo/add-photo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddPhotoComponent);
    return AddPhotoComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/homepage/homepage.component.html":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/homepage/homepage.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"centered\">\r\n    <ul class=\"menu-list\">\r\n      <li>\r\n        <a\r\n          routerLinkActive=\"active\"\r\n          routerLink=\"/\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          ><span *ngIf=\"loggedIn\">Followed</span>\r\n          <span *ngIf=\"!loggedIn\">Trending</span></a\r\n        >\r\n      </li>\r\n      <li *ngIf=\"loggedIn\">\r\n        <a routerLinkActive=\"active\" routerLink=\"/trending\">Trending</a>\r\n      </li>\r\n      <li><a routerLinkActive=\"active\" routerLink=\"/recent\">Recent</a></li>\r\n    </ul>\r\n    <app-images-common #imagesComponent></app-images-common>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/homepage/homepage.component.scss":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/homepage/homepage.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animation-container {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  transition: 0.6s ease height;\n  -moz-transition: 0.6s ease height;\n  -webkit-transition: 0.6s ease height;\n  border-bottom: 1px solid grey; }\n\n.animation-content {\n  transition: 0.4s ease opacity;\n  -moz-transition: 0.4s ease opacity;\n  -webkit-transition: 0.4s ease opacity;\n  background: url(\"https://www.designyourway.net/diverse/drawtuts/drawing-the-human-eye.jpg\") -25px -50px;\n  background-repeat: no-repeat;\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n  background-size: calc(100% + 50px); }\n\n.completed {\n  height: 200px; }\n\n.completed .animation-content {\n    height: 100%; }\n\n.hidden {\n  opacity: 0; }\n\n.container {\n  margin-bottom: 70px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/homepage/homepage.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/pages/homepage/homepage.component.ts ***!
  \************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function (_super) {
    __extends(HomepageComponent, _super);
    function HomepageComponent(imgService, activatedRoute, router) {
        var _this = _super.call(this) || this;
        _this.imgService = imgService;
        _this.activatedRoute = activatedRoute;
        _this.router = router;
        _this._images = [];
        return _this;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        console.log("change");
        _super.prototype.ngOnInit.call(this);
        if (this._loggedIn) {
            if (this.router.url === "/") {
                this.followedImages();
            }
            else if (this.router.url === "/trending") {
                this.popularImages();
            }
            else {
                this.recentImages();
            }
        }
        else {
            if (this.router.url === "/") {
                this.popularImages();
            }
            else {
                this.recentImages();
            }
        }
    };
    HomepageComponent.prototype.recentImages = function () {
        var _this = this;
        this.imgComp.showLoadingMsg();
        this.imgService.selectRecentImages().subscribe(function (res) {
            _this.imgComp.hideLoadingMsg();
            _this._images = res;
            _this.imgComp.images = _this._images;
        }, function (err) {
            _this.imgComp.showErrorMsg();
        });
    };
    HomepageComponent.prototype.popularImages = function () {
        var _this = this;
        this.imgComp.showLoadingMsg();
        this.imgService.selectPopularImages().subscribe(function (res) {
            _this.imgComp.hideLoadingMsg();
            _this._images = res;
            _this.imgComp.images = _this._images;
        }, function (err) {
            _this.imgComp.showErrorMsg();
        });
    };
    HomepageComponent.prototype.followedImages = function () {
        var _this = this;
        this.imgComp.showLoadingMsg();
        this.imgService.selectFollowedImages(this._loggedId).subscribe(function (res) {
            _this.imgComp.hideLoadingMsg();
            _this._images = res;
            _this.imgComp.images = _this._images;
        }, function (err) {
            _this.imgComp.showErrorMsg();
        });
    };
    Object.defineProperty(HomepageComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imagesComponent"),
        __metadata("design:type", Object)
    ], HomepageComponent.prototype, "imgComp", void 0);
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-homepage",
            template: __webpack_require__(/*! ./homepage.component.html */ "./ClientApp/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./ClientApp/app/pages/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_3__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/image/image.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/pages/image/image.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-header\">\r\n  <div class=\"author-avatar\">\r\n    <a routerLink=\"/user/{{ image.userId }}\">\r\n      <img\r\n        src=\"{{\r\n          image.userOwnerImgLink === null || image.userOwnerImgLink === ''\r\n            ? '../../assets/img/avatar.png'\r\n            : image.userOwnerImgLink\r\n        }}\"\r\n      />\r\n    </a>\r\n  </div>\r\n  <div class=\"basic-info\">\r\n    <h3>\r\n      <app-editable-field\r\n        *ngIf=\"image.title\"\r\n        [data]=\"{\r\n          value: image.title,\r\n          name: 'title',\r\n          userCanEdit: image.userId === loggedId,\r\n          id: 0,\r\n          inputType: 'textarea',\r\n          disableRemove: true\r\n        }\"\r\n        (emitter)=\"changeTitle($event)\"\r\n      ></app-editable-field>\r\n    </h3>\r\n    <span\r\n      >Added {{ image.creationDate }} by\r\n      <a class=\"author-link\" routerLink=\"/user/{{ image.userId }}\">{{\r\n        image.userOwnerName\r\n      }}</a></span\r\n    >\r\n  </div>\r\n  <div class=\"likes\">\r\n    <span (click)=\"showLiking()\" class=\"like-description\"\r\n      >{{ image.likeCount }} likes\r\n    </span>\r\n    <span\r\n      class=\"like\"\r\n      [ngClass]=\"image.liked === true ? 'liked' : null\"\r\n      *ngIf=\"loggedIn\"\r\n    >\r\n      <span *ngIf=\"!image.liked\" (click)=\"photoLike()\">\r\n        Like\r\n      </span>\r\n\r\n      <span (click)=\"photoUnlike()\" *ngIf=\"image.liked\">Liked!</span>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"centered\">\r\n  <div class=\"hero-img\"><img src=\"{{ image.imgLink }}\" /></div>\r\n</div>\r\n\r\n<div class=\"photo centered\">\r\n  <div class=\"photo-content\">\r\n    <div class=\"comments-wrapper\">\r\n      <div class=\"all-comments\">\r\n        <!-- <div class=\"add-comment\" *ngIf=\"loggedIn\">\r\n          <form\r\n            #commentUpload=\"ngForm\"\r\n            (ngSubmit)=\"onCommentUpload(commentUpload)\"\r\n          >\r\n            <div class=\"flex-wrapper\">\r\n              <div class=\"image-author\">\r\n                <div class=\"avatar-container\">\r\n                  <a class=\"avatar-link\" routerLink=\"\">\r\n                    <img\r\n                      src=\"{{\r\n                        imgLink === null || imgLink === ''\r\n                          ? '../../assets/img/avatar.png'\r\n                          : imgLink\r\n                      }}\"\r\n                    />\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <textarea id=\"text\" name=\"text\" ngModel></textarea>\r\n            </div>\r\n            <div class=\"warning\" *ngIf=\"this.formValid === false\">\r\n              Comment must contains at least 2 letters.\r\n            </div>\r\n            <div class=\"button-wrapper\">\r\n              <span *ngIf=\"loading\" class=\"loading\"\r\n                ><i class=\"icon-spin4 animate-spin\"></i\r\n              ></span>\r\n              <button [disabled]=\"loading\" type=\"submit\" class=\"button-colored\">\r\n                Send\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div> -->\r\n        <!-- \r\n        <app-comment-wrapper\r\n          #commentWrapper\r\n          *ngIf=\"comments\"\r\n          [data]=\"{\r\n            comments: comments,\r\n            loggedId: loggedId\r\n          }\"\r\n          (emitter)=\"changeComment($event)\"\r\n        ></app-comment-wrapper> -->\r\n        <app-comments-logic></app-comments-logic>\r\n      </div>\r\n      <div class=\"description\">\r\n        <app-editable-field\r\n          *ngIf=\"image.title\"\r\n          [data]=\"{\r\n            value: image.description,\r\n            name: 'description',\r\n            userCanEdit: image.userId === loggedId,\r\n            id: 0,\r\n            additional: getDescriptionHTML(),\r\n            inputType: 'textarea',\r\n            disableRemove: true,\r\n            allowedEmpty: true\r\n          }\"\r\n          (emitter)=\"changeDescription($event)\"\r\n        >\r\n        </app-editable-field>\r\n        <p class=\"desc-title\">\r\n          Tags\r\n          <span\r\n            class=\"edit-delete-icon\"\r\n            (click)=\"editTags()\"\r\n            *ngIf=\"image.userId === loggedId\"\r\n            ><i class=\"icon-pencil\"></i\r\n          ></span>\r\n        </p>\r\n        <ng-container *ngIf=\"tagsEditing && image.userId === loggedId\">\r\n          <form [formGroup]=\"tagsForm\" (ngSubmit)=\"approveTags(tagsForm)\">\r\n            <tag-input\r\n              [maxItems]=\"'10'\"\r\n              [addOnPaste]=\"'true'\"\r\n              [animationDuration]=\"{ enter: '0ms', leave: '0ms' }\"\r\n              [placeholder]=\"'Press Enter to add item'\"\r\n              [separatorKeyCodes]=\"'[32, 13]'\"\r\n              formControlName=\"tags\"\r\n            ></tag-input>\r\n            <div class=\"edit-elements\">\r\n              <button class=\"discard\" type=\"button\" (click)=\"discardTags()\">\r\n                Discard\r\n              </button>\r\n              <button class=\"submit\" type=\"submit\">Submit</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!tagsEditing\">\r\n          <span *ngFor=\"let tag of image.tagsList\" class=\"tag\">{{ tag }} </span>\r\n          <i *ngIf=\"image.tagsList.length === 0\">This image has no tags yet.</i>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-confirmation-message #msg></app-confirmation-message>\r\n<app-agree-label\r\n  #confirmLabel\r\n  (emitter)=\"confirm()\"\r\n  [message]=\"'You are going to delete this comment. Are you sure?'\"\r\n></app-agree-label>\r\n<app-information-label #label></app-information-label>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/image/image.component.scss":
/*!********************************************************!*\
  !*** ./ClientApp/app/pages/image/image.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  margin-bottom: 70px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n  padding-top: 0;\n  margin: 0 auto;\n  display: block;\n  background: #fff; }\n\n.button-colored {\n  margin-top: 0; }\n\n.image-author {\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 12px; }\n\n.avatar-container {\n  width: 40px;\n  height: 40px; }\n\n.hero-img {\n  background: #fff; }\n\n.hero-img img {\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    max-height: 700px; }\n\n.photo-centered {\n  margin: 0 auto;\n  margin: 20px auto;\n  padding: 20px; }\n\n.button-wrapper {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end; }\n\na {\n  color: #bb8866;\n  text-decoration: none; }\n\n.author-link {\n  font-weight: 600; }\n\na:hover {\n  color: #a57a5e; }\n\n.photo-header {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  margin-top: 70px;\n  padding: 30px 20px; }\n\n.photo-header .likes {\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center; }\n\n.photo-header .like-description {\n    margin-right: 20px;\n    color: #a0a0a0;\n    cursor: pointer; }\n\n.photo-header .like {\n    border: 1px solid #dbdbdb;\n    width: 73px; }\n\n.photo-header .like span {\n      padding: 12px 15px; }\n\n.photo-header .liked {\n    border: 1px solid #bcbcbc;\n    background: #cecece; }\n\n.author-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 15px;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.author-avatar a {\n    width: 100%;\n    height: 100%;\n    display: block; }\n\n.author-avatar img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.basic-info {\n  line-height: 1.5;\n  flex-grow: 1; }\n\n.basic-info h3 {\n    font-size: 25px;\n    display: flex;\n    align-items: center; }\n\n.basic-info h3 .edit-delete-icon {\n      margin: 0 0 0 8px;\n      color: #a0a0a0;\n      font-size: 18px; }\n\n.basic-info h3 .edit-delete-icon:hover {\n      background: #d6d6d6; }\n\n.basic-info span {\n    font-size: 14px;\n    color: #9a9a9a; }\n\n.description-content {\n  margin-bottom: 10px;\n  display: inline-block; }\n\n.desc-title {\n  display: flex;\n  font-weight: bold; }\n\n.desc-title .edit-delete-icon {\n    margin: -1px 0 0 5px;\n    font-weight: 400; }\n\n.comments-wrapper {\n  display: flex;\n  font-size: 16px; }\n\n.comments-wrapper .all-comments {\n    flex-grow: 1; }\n\n.comments-wrapper .all-comments .button-colored {\n      font-size: 14px;\n      padding: 10px 20px; }\n\n.comments-wrapper .description {\n    flex-grow: 0;\n    flex-shrink: 0;\n    width: 260px;\n    margin-left: 40px;\n    color: #5a5a5a;\n    font-size: 14px;\n    line-height: 1.5; }\n\n.comments-wrapper .description .tag {\n      display: inline-block;\n      margin-right: 10px; }\n\n.likes {\n  color: #787878; }\n\n.photo-title {\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: space-between; }\n\n.photo-title h2,\n  .photo-title p,\n  .photo-title span {\n    margin-top: 0; }\n\n.photo {\n  padding-top: 30px;\n  margin-bottom: 70px;\n  color: #333;\n  overflow: hidden;\n  min-height: auto;\n  margin-top: 0;\n  box-shadow: none;\n  background: none; }\n\n.photo .photo-content {\n    padding: 10px 20px;\n    text-align: justify; }\n\n.photo .photo-content .add-comment {\n      margin: 5px 0; }\n\n.photo .photo-content .add-comment .avatar {\n        display: inline-block;\n        width: 40px;\n        height: 40px;\n        border-radius: 20px;\n        -moz-border-radius: 20px;\n        -webkit-border-radius: 20px;\n        margin-right: 15px;\n        margin-bottom: 20px;\n        background-color: grey; }\n\n.photo .photo-content .add-comment textarea {\n        border: 1px solid #dadada;\n        width: calc(100% - 55px);\n        height: 60px;\n        resize: none;\n        border-radius: 3px;\n        -moz-border-radius: 3px;\n        -webkit-border-radius: 3px;\n        background: none; }\n\n.photo .photo-content .add-comment textarea:focus {\n        border-bottom: 2px solid #2196f3; }\n\n.photo img {\n    width: 100%; }\n\n.add-comment .warning {\n  margin-left: 50px; }\n\n.header {\n  display: flex;\n  align-items: baseline; }\n\n.header > * {\n    flex-grow: 0;\n    flex-shrink: 0; }\n\n.header .header-info.likes {\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 10px; }\n\n.header .like {\n    font-size: 14px;\n    width: 57px; }\n\n.header .like span {\n      padding: 5px 10px; }\n\n.header .liked {\n    background: #cecece;\n    border-color: #bcbcbc; }\n\n.header .header-info.content-secondary {\n    margin: 0 12px; }\n\n.header .link {\n    cursor: pointer; }\n\n.header .header-info {\n    color: #8b8b8b;\n    display: inline-block;\n    font-size: 14px;\n    margin: 0 5px 0 0; }\n\n.header .header-info.edit-delete-icon {\n    display: flex;\n    margin: 0;\n    color: #cccccc; }\n\n.header .header-info.edit-delete-icon:hover {\n      background: #f0f0f0; }\n\n.like {\n  background: #fff;\n  border: 1px solid #dbdbdb;\n  border-radius: 5px;\n  color: #787878;\n  cursor: pointer;\n  transition: 0.1s ease;\n  text-align: center; }\n\n.like span {\n    display: block; }\n\n.edit-elements {\n  margin-top: -10px; }\n\n.edit-elements button {\n    color: #787878;\n    cursor: pointer; }\n\n.edit-elements .submit {\n    background: #f1f1f1;\n    border: 1px solid #e6e6e6;\n    margin-left: 10px;\n    border-radius: 2px;\n    padding: 4px 12px; }\n\n.edit-elements .discard {\n    padding: 0 5px 0 0;\n    background: none;\n    border: 0;\n    font-size: 14px; }\n\n@media screen and (max-width: 1500px) {\n  .centered {\n    box-shadow: none;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 100px 50px 100px;\n    background: #fff;\n    box-sizing: border-box;\n    margin: 0; }\n  .comment {\n    border-color: #ececec; } }\n\n@media only screen and (max-width: 1120px) {\n  .centered {\n    padding: 0 40px 50px; } }\n\n@media only screen and (max-width: 950px) {\n  .comments-wrapper {\n    flex-direction: column-reverse; }\n    .comments-wrapper .description {\n      margin: 0 0 30px;\n      width: 100%; }\n  .photo .photo-content {\n    padding: 10px 0; } }\n\n@media only screen and (max-width: 700px) {\n  .centered {\n    padding: 0 30px 50px; } }\n\n@media only screen and (max-width: 460px) {\n  .centered {\n    padding: 0 10px 50px; }\n  .photo-header {\n    padding: 20px 10px;\n    display: block; }\n    .photo-header .likes {\n      margin-left: 75px;\n      margin-top: 10px; }\n  .author-avatar,\n  .basic-info {\n    display: inline-block; }\n  .header {\n    display: block; }\n    .header span,\n    .header .header-info.edit-delete-icon,\n    .header .header-info.likes {\n      display: inline-block; }\n  .comment p {\n    margin-top: 10px; } }\n\n:host ::ng-deep tag-input input {\n  margin-bottom: 0; }\n\n:host ::ng-deep input-text input {\n  margin-bottom: 6px;\n  background: none;\n  border: 2px solid #e1e1e1;\n  font-weight: 500;\n  font-size: 25px;\n  color: black;\n  margin-top: -4px;\n  margin-left: -4px; }\n\n:host ::ng-deep input-text input:focus {\n  border-bottom: 2px solid #2196f3; }\n\n.basic-info .submit {\n  background: #f9f9f9;\n  border: 1px solid #e1e1e1; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/image/image.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/pages/image/image.component.ts ***!
  \******************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(service, route, fb) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.fb = fb;
        _this._image = {
            commentsCount: 0,
            creationDate: "",
            description: "",
            id: 0,
            imgLink: "",
            likeCount: 0,
            tagsList: [],
            title: "",
            userId: 0,
            userOwnerImgLink: "",
            userOwnerName: "",
            liked: false
        };
        _this._titleEditing = false;
        _this._descriptionEditing = false;
        _this._tagsEditing = false;
        _this.formValid = true;
        _this._loading = false;
        _this._imgLink = "";
        return _this;
    }
    ImageComponent.prototype.getProfileImage = function () {
        var _this = this;
        if (this._loggedIn === true) {
            this.service
                .selectUserById(this._loggedId.toString(), this._loggedId.toString())
                .subscribe(function (res) {
                _this._imgLink = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__["GlobalVariables"].parseImageLink(40, 40, res.avatarImgLink);
            });
        }
    };
    ImageComponent.prototype.changeTitle = function (data) {
        if (data.action === "change") {
            this.editRequest({
                id: this._image.id,
                title: data.value.title,
                description: this.image.description
            }, "Title edited successfully.");
        }
    };
    ImageComponent.prototype.changeDescription = function (data) {
        if (data.action === "change") {
            this.editRequest({
                id: this._image.id,
                title: this._image.title,
                description: data.value.description
            }, "Description updated successfully.");
        }
    };
    ImageComponent.prototype.changeTags = function (data) {
        console.log("tags");
    };
    // initializeForms() {
    //   // this.titleForm = this.fb.group({
    //   //   title: [this._image.title, [Validators.required, requiredTextValidator]]
    //   // });
    //   this.descriptionForm = this.fb.group({
    //     description: this._image.description
    //   });
    //   this.tagsForm = this.fb.group({
    //     tags: this._image.tagsList
    //   });
    // }
    ImageComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // this.getCommentsData();
        this.getImageData();
        this.getProfileImage();
    };
    ImageComponent.prototype.getImageData = function () {
        var _this = this;
        this.service
            .ImageByPath(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            res.imgLink = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__["GlobalVariables"].parseImageLink(1290, 700, res.imgLink, "c_fit", "good");
            _this._image = res;
            // this.initializeForms();
        });
    };
    // getCommentsData() {
    //   this.service
    //     .CommentsByImgPath(
    //       this._loggedId.toString(),
    //       this.route.snapshot.params.id
    //     )
    //     .subscribe((res: any) => {
    //       res.forEach(comm => {
    //         comm.userOwnerImgLink = GlobalVariables.parseImageLink(
    //           40,
    //           40,
    //           comm.userOwnerImgLink
    //         );
    //         comm.isEditing = false;
    //         comm.editValid = true;
    //       });
    //       this._comments = <Comment[]>res;
    //     });
    // }
    // isCommentValid(text: string): boolean {
    //   if (text === null) {
    //     return false;
    //   }
    //   if (typeof text === undefined) {
    //     return false;
    //   }
    //   if (text === "") {
    //     return false;
    //   }
    //   if (typeof text.length === undefined || text.length < 2) {
    //     return false;
    //   }
    //   return true;
    // }
    // onCommentUpload(form: NgForm) {
    //   if (!this.isCommentValid(form.value.text)) {
    //     // if comment is null
    //     this.formValid = false;
    //   } else {
    //     this._loading = true;
    //     const comment = {
    //       PostId: this.route.snapshot.params.id,
    //       UserId: this._loggedId,
    //       Content: form.value.text,
    //       LikeCount: 0
    //     };
    //     // send message
    //     this.service
    //       .uploadComment(comment, this._loggedId, this._loggedToken)
    //       .subscribe(res => {
    //         this.Message.show("Comment uploaded succesfully.");
    //         this.formValid = true;
    //         this._loading = false;
    //         this.getCommentsData();
    //       });
    //     form.resetForm();
    //   }
    // }
    // confirm() {
    //   this.service
    //     .removeComment(this.commentIdToRemove, this._loggedId, this._loggedToken)
    //     .subscribe((res: any) => {
    //       this.getCommentsData();
    //       this.Message.show("Comment deleted succesfully.");
    //     });
    // }
    ImageComponent.prototype.photoLike = function () {
        this._image.likeCount += 1;
        this._image.liked = true;
        this.service
            .likePost({
            userId: this._loggedId,
            postId: this.route.snapshot.params.id
        }, this._loggedId, this._loggedToken)
            .subscribe(function (res) { });
    };
    ImageComponent.prototype.photoUnlike = function () {
        this._image.likeCount -= 1;
        this._image.liked = false;
        this.service
            .unlikePost(this._loggedId.toString(), this.route.snapshot.params.id, this._loggedId, this._loggedToken)
            .subscribe(function (res) { });
    };
    ImageComponent.prototype.showLiking = function () {
        var _this = this;
        var informationToSend;
        this.service
            .getPostLikes(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            informationToSend = res;
            _this.label.show(informationToSend, "Liked this image");
        });
    };
    ImageComponent.prototype.commentShowLiked = function (id) {
        var _this = this;
        var informationToSend;
        this.service
            .getCommentLikes(this._loggedId.toString(), id.toString())
            .subscribe(function (res) {
            informationToSend = res;
            _this.label.show(informationToSend, "Liked this comment");
        });
    };
    ImageComponent.prototype.commentLike = function (comment) {
        comment.liked = true;
        comment.likeCount += 1;
        this.service
            .likeComment({
            userId: this._loggedId,
            commentId: comment.id
        }, this._loggedId, this._loggedToken)
            .subscribe(function (res) { });
    };
    ImageComponent.prototype.commentUnlike = function (comment) {
        comment.liked = false;
        comment.likeCount -= 1;
        this.service
            .unlikeComment(this._loggedId, comment.id, this._loggedToken)
            .subscribe(function (res) { });
    };
    // removeComment(id: number) {
    //   this.commentIdToRemove = id;
    //   this.confirmLabel.show();
    // }
    // editComment(comment: any) {
    //   comment.isEditing = true;
    // }
    // sendEditComment(form: NgForm, comment: Comment) {
    //   const text = form.form.value.value;
    //   if (this.isCommentValid(text)) {
    //     comment.editValid = true;
    //     const data = {
    //       id: comment.id,
    //       content: text
    //     };
    //     this.service
    //       .editComment(data, this._loggedId, this._loggedToken)
    //       .subscribe(res => {
    //         this.Message.show("Comment edited succesfully.", res);
    //         comment.isEditing = false;
    //         comment.edited = true;
    //         comment.content = text;
    //       });
    //   } else {
    //     comment.editValid = false;
    //   }
    // }
    // discard(comment: any) {
    //   comment.isEditing = false;
    //   comment.editValid = true;
    // }
    // editTitle() {
    //   this._titleEditing = true;
    // }
    // discardTitle() {
    //   this._titleEditing = false;
    // }
    // approveTitle(form: NgForm) {
    //   this.editRequest(
    //     {
    //       id: this._image.id,
    //       title: form.value.title,
    //       description: this.image.description
    //     },
    //     "Title edited successfully."
    //   );
    // }
    // editDescription() {
    //   this._descriptionEditing = true;
    // }
    // discardDescription() {
    //   this._descriptionEditing = false;
    // }
    // sends requests when editing both the thescription and the title
    ImageComponent.prototype.editRequest = function (data, successMessage) {
        var _this = this;
        this.service
            .editImage(data, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this._descriptionEditing = false;
            _this._titleEditing = false;
            _this.Message.show(successMessage);
            _this._image.title = data.title;
            _this._image.description = data.description;
        });
    };
    // approveDescription(form: NgForm) {
    //   this.editRequest(
    //     {
    //       id: this._image.id,
    //       title: this._image.title,
    //       description: form.value.description
    //     },
    //     "Description updated successfully."
    //   );
    // }
    ImageComponent.prototype.editTags = function () {
        this._tagsEditing = true;
    };
    ImageComponent.prototype.discardTags = function () {
        this._tagsEditing = false;
    };
    ImageComponent.prototype.approveTags = function (form) {
        var _this = this;
        var parsedTags = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__["GlobalVariables"].parseTags(form.value.tags);
        this._tagsEditing = false;
        this.service
            .addTagsToImage({
            tagsList: parsedTags,
            postId: this._image.id
        }, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this._image.tagsList = parsedTags;
            _this.Message.show("Tags updated successfully.");
        });
    };
    // tagsValue(): string {
    //   let tags = '<span class="tags">';
    //   this.image.tagsList.forEach(tag => {
    //     tags += `<span class="tag">${tag}</span>`;
    //   });
    //   tags += "</span>";
    //   return tags;
    // }
    ImageComponent.prototype.getDescriptionHTML = function () {
        return "<p>Description</p>";
    };
    Object.defineProperty(ImageComponent.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "titleEditing", {
        get: function () {
            return this._titleEditing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "descriptionEditing", {
        get: function () {
            return this._descriptionEditing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "tagsEditing", {
        get: function () {
            return this._tagsEditing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageComponent.prototype, "imgLink", {
        get: function () {
            return this._imgLink;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "Message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msgDelete"),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "msgDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmLabel"),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "confirmLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("label"),
        __metadata("design:type", Object)
    ], ImageComponent.prototype, "label", void 0);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image",
            template: __webpack_require__(/*! ./image.component.html */ "./ClientApp/app/pages/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./ClientApp/app/pages/image/image.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ImageComponent);
    return ImageComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_4__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/index/index.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/pages/index/index.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"white-background\">\r\n\t<div class=\"homepage-container common-wrapper\">\r\n\t\t<div class=\"main-view\">\r\n\t\t\t<div class=\"text\">\r\n\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t<span>Paint Store</span>\r\n\t\t\t\t\t<h3>Paint Store</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p>A place created for traditional artists, where they can gain feedback, inspiration and advice and meet people\r\n\t\t\t\t\twith similar interests.</p>\r\n\t\t\t\t<button class=\"button-colored\" (click)=\"scrollDown()\" *ngIf=\"loggedIn === false\">JOIN US</button>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"hands-wrapper\">\r\n\t\t\t\t<svg version=\"1.1\" style=\"height: 80%; margin-top: 10%\" class=\"hands\" opacity=\"0.4\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\t\t\t x=\"0px\" y=\"0px\" viewBox=\"0 0 578 686\" enable-background=\"new 0 0 578 686\" xml:space=\"preserve\">\r\n\t\t\t\t\t<g class=\"right-hand\">\r\n\t\t\t\t\t\t<g class=\"finger4\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M349.875,222.75c0,0,10.375,11.25-11.625,23.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M328.25,253\r\n\t\t\t\tc13.494-7,19.084-14.499,19.084-14.499\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M348.5,222.75c0,0,6.359,6.246-0.391,13.246\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M322.75,244.25c0,0-3.249,3.969,5.5,8.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M346.25,222.75c0,0-16.684,11.25-23.592,19.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M343,227.25c0,0,18.039-14,33.77-20.125\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M341.744,229.75\r\n\t\t\t\tc0,0,16.506-14.234,27.256-17.117\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M376,210.545c0,0-5.333,15.705,8.456,27.634\r\n\t\t\t\tc2.631,2.276,4.5-4.625,4.92-9.5c0.435-5.043-2.816-20.36-5.118-21.68\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M379.789,232.5c0,0-8.75-26.75-3.02-27.5\r\n\t\t\t\ts10.053,13.243,10.361,17.75c0.537,4.5,1.437,10.959-1.943,13.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M378.789,206c0,0,56.914-4.543,69.688,0\r\n\t\t\t\tc0,0,8.523,6.125,10.273,11.188s39,51.063,43.5,61.063\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M379.789,205c0,0,29.313-4.25,41.129-2.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M507.02,280.5\r\n\t\t\t\tc-0.52-1-12.553-20.053-34.096-46.125\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M445.274,206.093\r\n\t\t\t\tc-4.63,0-16.274,4.282-9.831,16.157c4.057,6,21.057,6.25,21.557-4.5S445.274,206.093,445.274,206.093z\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M439.531,209.25c0,0-14.122,7.805-1.402,17.134\r\n\t\t\t\tc5.877,4.311,19.375-1.121,18.886-3.134\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M442.5,207.633c0,0,6.577-4.697,11,0\r\n\t\t\t\tc2.511,2.667,3.632,9.885,1,13.367c-1.592,2.106-9.221,5.142-15.375,2.813\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M383.25,234.375c0,0,9.25,11.625,34.258,12.5\r\n\t\t\t\tc7.992-0.875,15.742-2.625,21.617-12.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M383.25,234.375c0,0,4.406,12.5,35.043,13.844\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M425.5,244.25\r\n\t\t\t\tc1-0.25,16.959,36.328,21.979,40.164\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M426.812,244.249\r\n\t\t\t\tc9.895,26.247,9.758,26.467,15.688,34.001\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M429,250c0,0,13.209,24.75,18.479,30.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M330.25,254.486c0,0,28.875,8.725,54.938-13.256\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M326.5,254.486\r\n\t\t\t\tc-0.231,1.244,11.625,4.888,26.393,2.952\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M385.188,239\r\n\t\t\t\tc-4.046,5.387-18.542,18.438-42.188,18.438\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M382.049,227.25\r\n\t\t\t\tc-0.549,1-9.053,24.5-45.676,25.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M412.836,178.39c0,0-19.76,14.682-33.798,16.021\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M467.75,189.5c1-1-2.174,9.625,0,29.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M442.5,282.25c0,0-22.25,26.25,0,48.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M437.556,284.414c0,0-12.944,17.336,0,31.586\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M463.026,271.75c0,0-35.553,2.959-13.026,19.25\r\n\t\t\t\tc14.519,10.5,53,2.328,56-6.586\" />\r\n\t\t\t\t\t\t\t<path opacity=\"0.7\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M447.479,285.945\r\n\t\t\t\tc0,0,8.528,15.555,27.087,12.805c17.459-2.587,23.934-9.164,27.684-11.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M468,272.75c0,0,44.5,10.5,36.75,21.25\r\n\t\t\t\ts-46.229-1.414-51.75-5.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M507.02,282.25\r\n\t\t\t\tc0.48,1.5,18.986,21.75,11.608,36.25s-14.378,6.75-16.378,4.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M506,287.25c0,0,16.256,12.684,12.628,26.967\r\n\t\t\t\tc-3.483,7.43-9.878,6.283-10.128,6.283\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M512.578,297.25c0,0-27.078,20-10.328,32.25\r\n\t\t\t\tc7.625,5.25,18-7.5,18.625-13.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M500.25,314.217\r\n\t\t\t\tc-0.368-1.522-6.962,22.124,5.406,20.033c24.344-6,14.707-37,15.219-30.343\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M513.578,332c0,0-64.719,62.5-78.898,77.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M502.25,345.25\r\n\t\t\t\tC501.5,346.25,423,444.5,394.5,466\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M481.5,371.25c0,0-48,54.25-60,65.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M447.479,415.5\r\n\t\t\t\tc-22.479,25.75-34.729,39.25-50.229,52\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M407.25,461.25c0,0-15.5,60.75-38.25,85.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M401.25,454.75c0,0-11.25,61-28.5,82.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M309.5,429.5c0,0,24.25,30.75,44.5,36.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M324,451c0.75,0,9.881,9.25,16.315,12.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M433.545,235.991\r\n\t\t\t\tc-2.083,3.174-12.001,9.572-26.795,7.259c-18.046-2.82-20.908-10.57-23.5-11.866\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M361.5,257.438c0,0-26,32.877-33.25,47.22\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M355.372,262.208\r\n\t\t\t\tc-0.622-0.458-23.306,29.292-32.714,44.292\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M420.918,181.543c0,0-9.168,8.118-14.168,18.162\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M420.918,184.403\r\n\t\t\t\tc-1.772-1.092-11.418,12.347-15.793,21.597\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M385.188,329.5c0,0-27.469,65,25.399,78.25\r\n\t\t\t\tc16.225,3.916,18.413-7.25,17.419-11.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M394.5,328c0,0-14,17.75-6.375,48.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M380.25,350.5c0,0-2.762,36.108,12.25,46.25\" />\r\n\t\t\t\t\t\t\t<path opacity=\"0.3\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M360.5,259.374\r\n\t\t\t\tc0,0-12.75,41.626,24.125,65.876\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M381.239,250.844\r\n\t\t\t\tc0,0-4.489,42.514,11.261,67.835\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M432.611,246.875\r\n\t\t\t\tc0,0,16.672,34.597,28.857,41.792\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M436.656,244.25L436.656,244.25\r\n\t\t\t\tc0,0,10.384,23.521,27.213,34\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M447.566,292.511c0,0-10.919,6.49-11.076,26.823\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M450,295.511\r\n\t\t\t\tc-1,1.156-9.266,8.516-11.875,26.349\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M431.803,320.679\r\n\t\t\t\tc0,0-48.011,35.821-58.24,49.571\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M493,332c0,0-26.029,33.319-77.667,64.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M496.782,336.199\r\n\t\t\t\tc0,0-21.216,28.176-57.657,52.209\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M299.334,425.694\r\n\t\t\t\tc0,0-27.772,41.945-41.387,77.126\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M299.997,433.125\r\n\t\t\t\tc0,0-21.608,43.736-27.271,60.515\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M383.25,248.713c0,0-3.25,25.677,0,37.232\" />\r\n\t\t\t\t\t\t\t<path opacity=\"0.3\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M343,373.25\r\n\t\t\t\tc0,0-26.25,37-28.25,51.5\" />\r\n\t\t\t\t\t\t\t<path opacity=\"0.3\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M340.315,377.124\r\n\t\t\t\tc0,0-21.065,31.376-23.315,47.626\" />\r\n\t\t\t\t\t\t\t<path opacity=\"0.3\" fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M372.75,350.5\r\n\t\t\t\tc0,0-24.5,17.25-26.5,19.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M429,312c0,0-39.25,23.75-53,36.75\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger3\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M497.75,149.5c0,0-10.853-0.077-10.25,8.75\r\n\t\t\t\tc0.703,10.302,5.082,19,11.082,20s11.668-3.5,12.168-9s-0.5-13.75-4.625-15.5s-5.961-2-7.543-2\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M470.75,147.322c0,0,35.25,0.178,37.75,19.928\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M478.25,147.322c0,0,24,0.15,30.25,16.623\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M510.868,167.25c0,0,10.132,70,5.632,107.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M489.625,161.5c0,0,3.644,14.889,10.875,15\r\n\t\t\t\tc3.5,0.054,8.295-1.596,8-6.096\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M508.5,176.501c0,0,10.424,31.749,11.337,57.499\r\n\t\t\t\ts1.913,38.25,3.663,49s0,14-1.75,18.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M509.883,174.016\r\n\t\t\t\tC509.532,174.464,520.42,205,521.71,220s1.29,26.25,1.29,31.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M516.135,255.75c0,0,6.57-2.534,11.865,1.5\r\n\t\t\t\tc5.25,4,6,9.45,6.25,12.2\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M458.75,188.5c0,0-0.75,21,10.25,44\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M463.037,187c0,0-0.356,23.858,2.975,38\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M494.25,169c0,0-4.213,10.047-10.332,14.487\r\n\t\t\t\tc-11.249,8.412-33.52,21.147-28.239,2.337\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M455.799,189.75c0,0-1.301,11.277,18.451-1.25\r\n\t\t\t\ts15.412-21.997,15.412-16.497\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M410.25,183.214\r\n\t\t\t\tc2.5-0.964,35.584,7.779,51.25,6.536c0,0,0.5,29.75,6.5,42.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M414.25,182.407c0,0-6.25,5.517-18.25,9.18\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#575756\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M394.875,191.587\r\n\t\t\t\tc0,0-11.688,9.413-23.375,10.491\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M389.006,195.643\r\n\t\t\t\tc-13.099,6.249-26.506,6.857-26.506,6.857c-13,0-18.25-8.089-18.25-8.089c-5.25-1.089-9.75-9.911-9.75-9.911\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M341.744,194.411c0,0,2.506,9.56,28.256,8.127\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M418.293,172.5c0,0-9.793-32.568-13.168-26.784\r\n\t\t\t\tc-3.625,3.784-6.625,11.07-1.474,23.285c5.612,10.75,8.24,18.747,14.642,16.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M412.836,179.75c0,0-13.586-20.5-7.711-31.5\r\n\t\t\t\tc4.575-9.25,9.125,3.25,10.625,7\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M373.75,161.5c0,0,8.576,2.75,5.288,10\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M377.899,169c0,0-13.649,18-29.899,24\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M376.77,171.5c0,0-8.525,12.174-21.397,20.087\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M336,184.5c0,0,3.25,8.25,10.25,8.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M375.5,161.5c0,0-28,12.18-39.5,23\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M376.77,161.5c0,0,10.98-10.25,29.98-17.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M408.25,143.75c0,0,22.5-3.818,40.75,1.966\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M421.887,143.75c0,0,18.363,1,27.113,3.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M444.923,144.808c0,0,15.144,1.692,25.827,2.514\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M361.5,169c0,0-15.75,8-23.25,15.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M373.75,159.5c0,0,10.148-7.75,25.75-14\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M483,174.016c0,0-41.833,6.4-68.75,2.859\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M478.25,179.75\r\n\t\t\t\tc-0.583-0.083-22.567,5.583-60.742,1.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M486.802,184.5c0,0-8.628,32.413-8.552,51.496\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M478.25,190.625c0,0-5.909,23.096-5.326,40.759\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger2\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M487.5,117.747c0,0-2.75-6.997,3.5-9.997\r\n\t\t\t\tc2.75-1.75,11.014,1.885,13.65,5.5c3.1,4.25,3.499,13.25-0.65,14.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M504,127.5c-7.029,2.25-14.338-5.285-16.5-9.753\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M493.25,108.5\r\n\t\t\t\tc-2.25-0.75-8.956,3.129-5.456,12.051C491,127.5,498.75,127.76,504,125.13c3.499-2.302,2.079-5.405,0-9.13\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M499.75,122.828\r\n\t\t\t\tc0,0-35.438,33.922-36.701,19.172c-0.524-6.982,16.102-14.74,18.526-16.87\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M499.582,124.5c0,0-19.809,19.894-33.57,21.822\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M417.75,85.375\r\n\t\t\t\tc-1.43-3.148-6.485,0.375-6,13.625c0.248,6.769,1.591,14.25,3.825,18.54c4.244,8.147,6.312-5.29,6.175-10.243\r\n\t\t\t\tC421.75,107.297,423.03,97,417.75,85.375z\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M415.75,85.375c0,0-6.558,17.698,0,33.125\r\n\t\t\t\tc4,9.41,7.418-2.5,6.168-7.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M344.25,102.201\r\n\t\t\t\tc-2.75-5.799-2.5-11.382-2.5-11.382s32.91-4.796,37.288-4.132\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M377,85.375c0,0,6.5,3.125,4.75,8.125\r\n\t\t\t\ts-29.75,10.049-35.5,10.149\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M375.5,85.375c0,0,7.975,3.125,3.362,10.625\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M377.899,85.886c0,0,19.601-4.04,36.351-1.588\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M380.298,86.623c0,0,17.485-3.669,27.702-1.926\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M415.75,83.508c0,0,43.324,14.492,73.912,21.242\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M418.293,87.623\r\n\t\t\t\tc0,0,47.311,18.377,68.509,23.127\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M420.599,85.886\r\n\t\t\t\tc0,0,52.312,18.005,70.401,20.114\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M414.25,119.104c0,0-35,7.566-50.101,3.725\r\n\t\t\t\tc-15.63-3.977-19.899-18.078-19.899-18.078c21.25-2.5,36.5-8.24,36.5-8.24\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M341.744,101.5\r\n\t\t\t\tc-0.619-2.313,2.506,17,22.405,23.63\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M369,125.13c0,0,29.934,1.776,42.717-2.302\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M414.25,121.828c0,0,10.25,11.922,38,20.422\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M412.836,122.828c0,0,8.855,7.626,18.164,12.399\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M411.717,112.5c0,0,23.533,19.454,41.783,22.727\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M508.5,121.924c0,0,21.5,117.576,24.75,139.326\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M507.02,131c0,0,7.728,34.295,9.343,43.016\r\n\t\t\t\tc2.266,12.234,6.269,29.924,8.888,48.734\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M518.628,257.25c0,0,6.423-5.047,10.372-1.5\r\n\t\t\t\ts4.25,15.5,3.25,18.75c-1.252,4.069-4.25,12.75-10.887,7.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M373.75,85.886c0,0-26.5,1.864-32.625,3.614\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger1\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M452.25,90.5c-40.5-47.5-20.5-62.75-20.5-62.75\r\n\t\t\t\ts7.75,14.25,19,22.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M426.812,30c0,0-9.827,16.97,18.931,52.485\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M435.467,23.5C428.25,25,423.25,31.25,429,53\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M460.25,44.5c0,0-2.75,5.577-8,7.717\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M438.25,22c0,0,15,15.75,20.5,22.75c0,0-2,6-8,7\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M432.25,30c0.996-1.468-0.5-3.75,6-8\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M432.25,30c0,0,6,13.75,21.25,23\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M461.524,48.764\r\n\t\t\t\tc-0.809-0.416,7.351,5.866,14.226,16\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M480.25,69c-6.5-12-22.75-24.5-22.75-24.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M468.609,70.25c0,0,17.891-6.25,11.641,5\r\n\t\t\t\ts-33.202,18-33.202,8.91c0-4.16,9.202-9,13.202-9.41\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M471.951,71.012c0,0,22.299-1.262-0.451,15.988\r\n\t\t\t\tc-22.563,14.047-23.871-5.515-19.25-7.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M453.5,77.456\r\n\t\t\t\tc1.523-0.838,17.871-7.216,24.121-4.966c3.226,1.477,1.879,5.26-1.871,9.76s-26.069,13.5-27.25,5.143\r\n\t\t\t\tC448.184,80.463,451.066,80.463,453.5,77.456z\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M518,117.5c0,0-27.75-37.284-35-45.01\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M483,70.75c0,0,27.5,39,29.5,42.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M452.25,90.5c0,0,1.75,6,6.5,11\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M480.575,77.25c0,0,11.675,6.245,17.175,16.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M507.75,117.5c0,0-2.5,10,1.75,15.5\r\n\t\t\t\tc2.14,2.77,5,3.25,8.5-0.25c2.129-2.129,2.75-11.75,0-15.25s-5.5-4.25-8.125-2.467\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M518,118.5c0,0,7,21.5-1.5,38.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M519.628,127.5c0,0-0.628,12.5-3.128,20.75\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t</g>\r\n\t\t\t\t\t<g class=\"left-hand\">\r\n\t\t\t\t\t\t<g class=\"finger1\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M223.079,529.735\r\n\t\t\t\tc0,0-46.828,32.866-61.454,45.666\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M234.869,552.568c0,0-39.87,17.429-59.87,24.931\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M239.276,551.568\r\n\t\t\t\tc0,0-34.626,15.306-59.651,26.932\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M285.239,531.801c0,0-29.108,13.633-39.739,17.2\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M387.176,439.5C385.75,440,368.5,454,366,458.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M387.5,443.25c0,0-8.553,0.936-19.75,13.125\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M383,445.75c-1.155-0.998-13.25,9-17,15\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M379.625,470.25\r\n\t\t\t\tc-8.125-2.5-12.125-11.75-12.125-11.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M369.75,460.25c0,0,1.764,2.865,5.305,6.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M399.5,454.719c0,0-7.797,8.531-16.648,13.031\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M395.25,460.25c0,0-8.324,7-11.975,8.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M384.275,441.5c0,0,8.225,2.75,12.725,7.938\r\n\t\t\t\tc1.447,1.669,2.699,2.974,3.5,7.938\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M388.25,439.25c0.75,0.5,10.22,6.027,12,13.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M379.588,444.25c0,0-9.088,0-24.338,10.5\r\n\t\t\t\tc0,0-13.75,9.5-23.5,15\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M337,467.5c0,0-20.75,11-33,15.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M306.186,482.625\r\n\t\t\t\tc-1-0.25-37.436,24.875-46.436,29.375\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M289.015,493.64c0,0-16.515,12.61-24.015,18.36\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M341.75,501c0,0-17.395-19.116-8.25-28.5\r\n\t\t\t\ts25.25,15.248,26,25.624\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M342.172,470.25c0,0,19.828,10.5,13.497,25.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M382.852,470.846\r\n\t\t\t\tc-1.519,1.822-18.81,17.465-30.811,22.794\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M363.375,491.001\r\n\t\t\t\tc0,0-18.203,16.833-46.375,33.667\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M349.544,498.124c0,0-8.979,6.963-23.548,14.692\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M394.25,466c-1.75,0-21.25,30.75-42.25,39.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M355.621,501c0,0-30.75,35.5-59.25,43\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M336.25,517.875c0,0-34.25,24.125-44,31.375\r\n\t\t\t\ts-36.75,26.25-43.5,31.5s-39.25,50-64,63.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M236.25,583c0,0-25.001,37.334-74.625,61.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M265.625,569.25\r\n\t\t\t\tc2.76-9.212-57.343,65.913-88.125,85.475\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M221.608,590.201\r\n\t\t\t\tc0,0-24.94,25.465-59.983,37.132\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M249.5,577.5c-0.75-0.25-24.5,33.75-43.75,41.75\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M226.5,607.25c0,0-54,51-80.25,55.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M381.25,440.5c0,0-14.532,2.152-50.407,27\r\n\t\t\t\tc-8.898,6.163-18.308,9.436-23.843,12\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M245.448,498.124\r\n\t\t\t\tc-1.948,8.677,6.446,18.235,23.114,7.679\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M295.75,501c0,0,20.104,4.716,16.25,21.5\r\n\t\t\t\tc-2.063,8.983-18.5,9.25-25.128,2.742c-4.997-3.742-2.622-12.859-2.122-15.301\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M299.25,498.124c0,0,5.49,0.969,7.75,6.001\r\n\t\t\t\ts7.75,19.375-3.25,22.625c-6.823,2.016-15.75,0.329-18.307-8.875\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M288,520c0,0,9.912,11.801,21.938,2.5\r\n\t\t\t\tc6.063-5.499-2.734-14.379-7.688-17.18\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M272.727,539.4\r\n\t\t\t\tc-3.728,2.201-24.59,10.002-29.559,11.201\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M174.578,514.816\r\n\t\t\t\tc0,0-63.579,78.186-71.579,90.585\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M176.578,519.5c0,0-49.178,59.501-58.578,72.701\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M181.999,493.125\r\n\t\t\t\tc-11.339,6.668-14.705,17.422-3.374,25.819c8.125,6.021,25.309-7.003,20.165-15.944\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M190.6,493.64c0,0-21.726,1.094-15.601,16.302\r\n\t\t\t\tc3.626,9.003,12.852,7.628,17.353,5.426\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M137.285,460.5c0,0-4.636,16.021,6.965,20\r\n\t\t\t\ts22-10.25,22-16\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M151.098,447.75\r\n\t\t\t\tc-12.099,2.625-13.497,9.549-15.598,16s-0.991,11.375,2.699,15.219c4.765,4.962,14.301,6.222,20.301,1s7.066-7.719,6.231-13.699\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M111.25,441\r\n\t\t\t\tc-4.051,6.001,3.951,18.699,10.25,13.75s12.101-11.151,14-18.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M111.723,452.574c0,0,7.838,5.926,15.677-5.888\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M108.723,443.25\r\n\t\t\t\tc0,0-21.688,46.026-40.473,68.197\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger3\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M243.085,352.536\r\n\t\t\t\tc0,0-11.085,11.596,0.286,22.571c9.25,8.752,23.63-4.257,23.63-9.862c0-6.619-3.529-13.649-14.414-15.709\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M258.412,376.896\r\n\t\t\t\tc7.4-3.271,12.645-10.864,10.838-16.521c-1.35-4.225-4.014-9.829-13.722-11.746\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M242.085,354.654c0,0-7.518,9.414,2.286,17.65\r\n\t\t\t\tc9.805,8.237,17.453,0.326,18.041-1.454\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M245.5,353.5c0,0-40,36.25-58,56.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M173.25,424.75c1-1.25,18.5-19.25,24.75-25.75\r\n\t\t\t\ts20.938-22.375,28.5-31.25c3.897-4.574,15.216-15.235,16.07-15.684\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M236.25,362.514c0,0-39,42.736-54.75,56.611\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M245.5,350.5c0,0,44.5-28,61-32.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M302.25,320.679\r\n\t\t\t\tc0,0-43.451,23.071-52.851,27.821\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M332.563,326.944\r\n\t\t\t\tc0,0-13.59-16.423-23.571-12.166c-5.633,1.431-4.7,10.647-2.149,14.769c2.193,3.546,8.821,12.188,13.935,14.318\r\n\t\t\t\tc5.111,2.129,14.747,1.455,15.794-3.582C338.029,333.273,332.563,326.944,332.563,326.944z\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M304.451,318.364\r\n\t\t\t\tc-0.139,0.268-6.13,14.479,12.539,26.6c12.104,7.859,23.942-4.875,20.331-13.513c-3.612-8.639-17.126-16.859-21.724-17.416\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M311.465,336.199c0,0-5.328-5.642-3.796-11.701\r\n\t\t\t\tc1.371-5.435,6.173-7.461,9.474-7.091c2.835,0.836,11.564,3.469,15.743,10.991\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M308.093,316.418c0,0,4.312-2.366,10.582-2.344\r\n\t\t\t\tc7.001,0.392,9.746,3.736,12.958,8.055c4.251,6.036,6.021,15.726,4.18,20.127\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M377.001,312\r\n\t\t\t\tc-0.5,0.5-7.296,16.323-37.962,31.028\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M366.5,328.5\r\n\t\t\t\tc-11.555,12.328-28.738,15.965-24.5,14.528\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M380.05,307.167c0,0,1.744,5.1,0.598,7.05\r\n\t\t\t\tS372.833,324.24,367.5,328\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M379.806,315.468\r\n\t\t\t\tc-4.805,7.699-11.309,13.046-16.306,16.782\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M316.667,311.667c0,0,20.499-7.334,27.333-8.167\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M321.5,311.667c0,0,14.964-6.001,19.815-6.667\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M344.707,301.5c0,0,12.709,15.501,18.668,16.084\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M346.334,305.334\r\n\t\t\t\tc-0.003-0.004,6.338,8.836,13.167,12.333\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M352.041,317.584c0,0,22.92-8.751,26.606-11.084\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M356.786,319.334c0,0,21.935-9.166,23.741-13\r\n\t\t\t\tS372.146,295,368.656,296\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M342.315,305.667\r\n\t\t\t\tc1.019-0.667,12.284-8.381,26.352-10.156\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M345,306.657\r\n\t\t\t\tc0.167-0.823,18.854-9.471,24.344-10.73\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M381.038,305.584c0,0-4.205-7.427-8.288-10.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M333.737,345.716\r\n\t\t\t\tc0,0-33.582,21.611-43.07,25.785\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger2\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M236.25,484.499c0,0-9.75,23.335-2.314,35.001\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M278.641,423.001\r\n\t\t\t\tc0,0-24.861,38.249-40.398,58.19\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M268.563,423.001c0,0-9.07,24.998-23.982,41.499\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M258.75,512.5c-0.75,0-14.75,7.5-16.25,2\r\n\t\t\t\ts3.5-26.254,5-30.252s26.25-35.998,29.75-44.748\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M244.986,512.816\r\n\t\t\t\tc-1.486-6.012,1.263-22.065,5.764-30.066c4.5-8,18.508-19.875,32.258-47.375c6.74-4.905,24.794-14.873,38.492-25.875\r\n\t\t\t\tc6.823-3.651,44.344-38.411,45-39.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M282.25,434.137c0,0,12.528-8.442,29.241-20.693\r\n\t\t\t\tc17.803-13.05,12.509-6.193,28.634-21.943\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M326.731,405.625\r\n\t\t\t\tc-5.271,3.559,51.134-36.684,50.856-52.875\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M265,451c0,0-6,13.246-19.5,32.248\r\n\t\t\t\tc-3.073,4.002-7.658,30.268-5.224,33.268\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M339.016,391.25c0,0,0-19.75-10.141-25.125\r\n\t\t\t\tc-6.699-3.551-10.557-5.084-15.159-1.802c-8.313,5.927-4.216,20.177,1.034,31.177s10.25,10.75,13.5,8.375\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M320.5,400.938\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M322.658,360.375\r\n\t\t\t\tc0,0,15.588,6.549,17.657,20.375\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M279,418.75\r\n\t\t\t\tc0.949-1.354-11.425,20.104-32.822,3.25c-5.229-5.504-8.428-11.75-6.178-17s6.178-11.1,14.168-11\r\n\t\t\t\tc10.271,0.339,21.312,3.661,23.832,14.5c2.5,10.75-3.5,14.25-9.5,16\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M340.315,348.75\r\n\t\t\t\tc-0.815,1-22.815,10.75-43.065,22.5s-37.414,19-50.082,23\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M367.5,338c0,0-41.563,18.006-52.781,26.628\r\n\t\t\t\tc-8.369,5.622-30.581,17.149-36.469,20.288c-6.25,3.209-22,9.334-22,9.334\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M250.375,391.75c0,0-19.565,17.75,1,31.75\r\n\t\t\t\tc6.464,3.25,13.5,2,15.438,1.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M252.295,421.5c0,0-6.465-2.75-7.715-8.75\r\n\t\t\t\ts1.92-13.75,6.107-16c2.57-1.381,8.286-3.139,17.125,1.125\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M236.25,411.75c0,0-20.75,19.313-30.5,38.625\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M222.75,420.25c0,0-17.25,29.25-28.5,44\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M236.25,409.5c0,0-7.442,7.737-16.25,19.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M342,350.125c0,0,11.248,14.375,12.874,14\r\n\t\t\t\tS373,355,379.75,346.75c0-3-3.097-8.75-8.75-10.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M357.484,362.498\r\n\t\t\t\tc-2.3-1.001-12.731-11.432-12.625-13.014c-1.859-4.234,21.125-10.75,24.875-12.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M370.5,338c0,0,8.625,2.507,9.09,11.257\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M310.5,374.625c0,0,1.438,16.61,7.109,24.375\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M275.75,420.25c0,0,27.066-4.75,56.408-26\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M279.25,420.25\r\n\t\t\t\tc0.75,0.5,30.316-7.078,44.408-19.289\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t<g class=\"finger4\">\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M205.25,345.25c-1.25-0.5-33.5,35.5-45.75,51.5\r\n\t\t\t\ts-32.75,31-41.5,39.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M201.75,343.629c0,0-35,41.371-44.25,50.621\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M104.75,464.375\r\n\t\t\t\tC112.5,454.75,92.5,480.25,90,484.25S42.75,544.75,37.75,548\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M106.5,466\r\n\t\t\t\tc-1.383,0.461-45.706,65.077-58.5,74.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M79.25,504.25\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M110.25,467.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M154.5,396.75c0,0-34.5,32.773-38,37.387\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M132.75,424.75c0,0-19.25,8.375-24.027,16.75\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M204.667,355.75\r\n\t\t\t\tc-2.466-2.25-5.249-11.333,1.334-17.083c2.874-2.667,9.472-6.077,15.166-6.077c4.667,0,13.834,3.41,12.667,13.91\r\n\t\t\t\tc-0.935,8.406-17.668,27.299-30.084,4.566\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M206.334,340c0,0-10.812,8.643,2.541,14.75\r\n\t\t\t\ts21.792-9.659,21.792-11.121s1.68-9.044-6.5-9.645\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M207.91,356.064c0,0,19.254,7.945,26.025-3.897\r\n\t\t\t\tc4.731-8.538-9.769-20.183-15.435-18.167\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M240.276,344.5\r\n\t\t\t\tc0.058-0.333,43.558-22.166,52.058-25.166\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M202.201,340.834\r\n\t\t\t\tc0.466-0.334,7.798-7.918,16.799-9.459\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M219.334,331.25c0,0,11.832-6.583,16.916-8.083\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M229.501,328.388\r\n\t\t\t\tc16.166-10.888,36.5-18.887,47.833-22.804s16-5.906,22-7.495\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M303.167,298.089c0,0,12.654-4.964,19.827-5.776\r\n\t\t\t\t\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M302.26,298.667c0,0,6.726,7.666,12.459,8.5\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M302.25,298.089c0,0-1.676-0.245-1.296,0\r\n\t\t\t\ts-0.449,4.579,6.049,8.245s7.716,3.208,7.716,3.208\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M322.658,291.5c0,0,9.343,3.584,10.676,8.959\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M319.501,291.5\r\n\t\t\t\tc0.5,0.334,8.156,0.584,11.078,8.959\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M282.814,330.031\r\n\t\t\t\tc-5.279-5.316-5.432-6.864-8.498-13.031c-2.26-4.544-2.316-9.504,1.434-12.343c2.185-1.654,6.418-1.823,9.751,0.927\r\n\t\t\t\tc3.337,2.753,5.831,4.578,10.333,17.583\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M294.667,325.25\r\n\t\t\t\tc0.667,2.958-1.5,10.354-10.665,6.562c-6.191-3.529-8.063-7.988-9.686-11.645\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M292.334,314.217c0,0,5,9.346,3,15.814\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M299.334,296.667\r\n\t\t\t\tc0,0-47.582,16.012-55.333,22.012\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M134.446,479.045\r\n\t\t\t\tC100.199,534.123,96.6,550.568,64.6,590.201\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M146.399,485.75c0,0-45.8,60.052-65.8,91.651\" />\r\n\t\t\t\t\t\t\t<path fill=\"none\" stroke=\"#000000\" stroke-width=\"0.8\" stroke-miterlimit=\"10\" d=\"M122.826,463.75c0,0-32.227,39.349-58.227,72.5\" />\r\n\t\t\t\t\t\t</g>\r\n\t\t\t\t\t</g>\r\n\t\t\t\t</svg>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"see-examples\">\r\n\t\t\t<h4>Discover. Design. <strong>Inspire.</strong></h4>\r\n\t\t\t<div class=\"flex-wrapper\">\r\n\t\t\t\t<div class=\"images\">\r\n\t\t\t\t\t<div class=\"image img1\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/1.png\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"image img3\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/2.png\"  />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"image img5\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/3.png\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"images\">\r\n\t\t\t\t\t<div class=\"image img2\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/4.png\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"image img4\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/5.png\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"image img6\">\r\n\t\t\t\t\t\t<img src=\"../../assets/img/6.png\"  />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<h4 class=\"more\"><a href=\"\">Explore more</a></h4>\r\n\t\t</div>\r\n\t\r\n\t\t<div class=\"join\" *ngIf=\"loggedIn === false\">\r\n\r\n\t\t\t<mat-tab-group>\r\n\t\t\t\t<mat-tab label=\"Join\" id=\"join\">\r\n\t\t\t\t\t<div class=\"form-wrapper\">\r\n\t\t\t\t\t\t<form *ngIf=\"registered === false\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm)\">\r\n\t\t\t\t\t\t\t<input-text [data]=\"{\r\n\t\t\t\t\t\t\t\tlabel: 'Username'\r\n\t\t\t\t\t\t\t}\" formControlName=\"name\" #name></input-text>\r\n\t\t\t\t\t\t\t<confirm-password [data]=\"{\r\n\t\t\t\t\t\t\t\tlabel: 'Password'\r\n\t\t\t\t\t\t\t}\" formControlName=\"passwords\"></confirm-password>\r\n\t\t\t\t\t\t\t<input-email [data]=\"{\r\n\t\t\t\t\t\t\t\tlabel: 'E-mail'\r\n\t\t\t\t\t\t\t}\" formControlName=\"email\" #email></input-email>\r\n\t\t\t\t\t\t\t<input-checkbox [data]=\"{\r\n\t\t\t\t\t\t\t\tlabel: 'This is a demonstration page. \r\n\t\t\t\t\t\t\t\tAll content can be deleted and accounts removed. \r\n\t\t\t\t\t\t\t\tThe user\\'s data belongs to him \r\n\t\t\t\t\t\t\t\tand can not be used further'\r\n\t\t\t\t\t\t\t}\" formControlName=\"checkbox\"></input-checkbox>\r\n\t\t\t\t\t\t\t<div class=\"warning summary-warning\" *ngIf=\"registerWarning !== ''\">{{registerWarning}}</div>\r\n\t\t\t\t\t\t\t<re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LdV5pYUAAAAAAKMSM93P-KFs_r7frSEs3iOb5_8\" formControlName=\"captcha\"></re-captcha>\r\n\t\t\t\t\t\t\t<div class=\"warning summary-warning\" *ngIf=\"registerWarning !== ''\">{{registerWarning}}</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<button area-label=\"edit profile\" class=\"button-colored\" type=\"submit\">\r\n\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t\t<span *ngIf=\"registerLoading\" class=\"loading\"\r\n\t\t\t\t\t\t\t\t><i class=\"icon-spin4 animate-spin\"></i\r\n\t\t\t\t\t\t\t></span>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div *ngIf=\"registered === true\" >You have been succesfully registered. Log in.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"Sign in\">\r\n\t\t\t\t\t<div class=\"form-wrapper\">\r\n\t\t\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin(loginForm)\">\r\n\t\t\t\t\t\t\t\t<input-email [data]=\"{\r\n\t\t\t\t\t\t\t\t\tlabel: 'Email',\r\n\t\t\t\t\t\t\t\t\tplaceholder: 'e-mail'\r\n\t\t\t\t\t\t\t\t\t}\" formControlName=\"email\" #emailLogin></input-email>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<input-password [data]=\"{\r\n\t\t\t\t\t\t\t\t\tlabel: 'Password'\r\n\t\t\t\t\t\t\t\t}\" formControlName=\"password\" #passwordLogin></input-password>\r\n\t\t\t\t\t\t\t\t<div class=\"warning summary-warning\" *ngIf=\"loginWarning !== ''\">{{loginWarning}}</div>\r\n\t\t\t\t\t\t\t\t<button area-label=\"edit profile\" class=\"button-colored\" type=\"submit\">\r\n\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"loginLoading\" class=\"loading\"\r\n\t\t\t\t\t\t\t\t\t><i class=\"icon-spin4 animate-spin\"></i\r\n\t\t\t\t\t\t\t\t></span>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/pages/index/index.component.scss":
/*!********************************************************!*\
  !*** ./ClientApp/app/pages/index/index.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display:400,700\");\n:host ::ng-deep app-menu menu {\n  box-shadow: none;\n  position: static; }\n.homepage-container {\n  margin-top: -50px;\n  padding: 0 70px 70px;\n  font-family: \"Playfair Display\", serif; }\n.form-wrapper {\n  max-width: 500px;\n  margin: 0 auto;\n  height: 477px; }\n.registered {\n  font-size: 25px;\n  font-family: \"Roboto\", sans-serif;\n  color: #313131;\n  font-weight: 300; }\n.text {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-60%);\n          transform: translateY(-60%); }\n.text p {\n    padding: 70px 0 0 60px;\n    width: 60%; }\nh4 {\n  text-align: center; }\n.title {\n  height: 140px;\n  position: relative; }\n.title h3 {\n    color: black;\n    font-size: 80px;\n    padding: 0;\n    top: 60px;\n    left: 60px; }\n.title span {\n    color: #f2f2f2;\n    font-size: 105px;\n    top: 0; }\n.title h3,\n  .title span {\n    position: absolute; }\n.more {\n  text-decoration: underline; }\n.more a {\n    color: #bb8866; }\nh3,\nh4 {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  color: #5e5e5e;\n  font-size: 24px;\n  padding: 70px 0; }\nh3 strong,\n  h4 strong {\n    color: #333;\n    display: inline-block;\n    text-decoration: underline; }\n.white-background {\n  min-height: 100vh;\n  background: #fff; }\n.main-view {\n  height: 100vh;\n  position: relative;\n  max-height: 1100px; }\n.main-view .button-colored {\n    border-radius: 20px;\n    padding: 10px 25px;\n    margin: 40px 0 0 60px; }\n.hands-wrapper {\n  right: 3%;\n  height: 94%;\n  top: 6vh;\n  position: absolute; }\nsvg {\n  height: 100%;\n  width: auto; }\n.see-examples .flex-wrapper {\n  margin: 0 auto;\n  max-width: 1100px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: calc(50% - 30px) calc(50% - 30px);\n      grid-template-columns: calc(50% - 30px) calc(50% - 30px);\n  justify-content: space-between;\n  position: relative; }\n.images {\n  width: 100%; }\n.images:nth-of-type(2) {\n  padding-top: 30%; }\n.image {\n  margin-bottom: 60px; }\n.image img {\n    max-width: 480px;\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n    height: auto;\n    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17); }\n.content {\n  position: relative;\n  z-index: 50; }\n@-webkit-keyframes opacity {\n  100% {\n    opacity: 1; } }\n@keyframes opacity {\n  100% {\n    opacity: 1; } }\npath {\n  stroke-dasharray: 300;\n  stroke-dashoffset: -300;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-name: strokeAnimation;\n          animation-name: strokeAnimation;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n.right-hand .finger1 path:nth-of-type(1) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n.right-hand .finger1 path:nth-of-type(2) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s; }\n.right-hand .finger1 path:nth-of-type(3) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n.right-hand .finger1 path:nth-of-type(4) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n.right-hand .finger1 path:nth-of-type(5) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s; }\n.right-hand .finger1 path:nth-of-type(6) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.right-hand .finger1 path:nth-of-type(7) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; }\n.right-hand .finger1 path:nth-of-type(8) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s; }\n.right-hand .finger1 path:nth-of-type(9) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s; }\n.right-hand .finger1 path:nth-of-type(10) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s; }\n.right-hand .finger1 path:nth-of-type(11) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n.right-hand .finger1 path:nth-of-type(12) {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s; }\n.right-hand .finger1 path:nth-of-type(13) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s; }\n.right-hand .finger1 path:nth-of-type(14) {\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s; }\n.right-hand .finger1 path:nth-of-type(15) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s; }\n.right-hand .finger1 path:nth-of-type(16) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s; }\n.right-hand .finger1 path:nth-of-type(17) {\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s; }\n.right-hand .finger1 path:nth-of-type(18) {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s; }\n.right-hand .finger1 path:nth-of-type(19) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s; }\n.right-hand .finger1 path:nth-of-type(20) {\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s; }\n.right-hand .finger1 path:nth-of-type(21) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n.right-hand .finger1 path:nth-of-type(22) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s; }\n.right-hand .finger1 path:nth-of-type(23) {\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s; }\n.right-hand .finger1 path:nth-of-type(24) {\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s; }\n.right-hand .finger1 path:nth-of-type(25) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n.right-hand .finger1 path:nth-of-type(26) {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n.right-hand .finger1 path:nth-of-type(27) {\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s; }\n.right-hand .finger1 path:nth-of-type(28) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s; }\n.right-hand .finger1 path:nth-of-type(29) {\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s; }\n.right-hand .finger1 path:nth-of-type(30) {\n  -webkit-animation-delay: 2.9s;\n          animation-delay: 2.9s; }\n.right-hand .finger1 path:nth-of-type(31) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n.right-hand .finger1 path:nth-of-type(32) {\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s; }\n.right-hand .finger1 path:nth-of-type(33) {\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s; }\n.right-hand .finger1 path:nth-of-type(34) {\n  -webkit-animation-delay: 3.3s;\n          animation-delay: 3.3s; }\n.right-hand .finger1 path:nth-of-type(35) {\n  -webkit-animation-delay: 3.4s;\n          animation-delay: 3.4s; }\n.right-hand .finger1 path:nth-of-type(36) {\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s; }\n.right-hand .finger1 path:nth-of-type(37) {\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s; }\n.right-hand .finger1 path:nth-of-type(38) {\n  -webkit-animation-delay: 3.7s;\n          animation-delay: 3.7s; }\n.right-hand .finger1 path:nth-of-type(39) {\n  -webkit-animation-delay: 3.8s;\n          animation-delay: 3.8s; }\n.right-hand .finger1 path:nth-of-type(40) {\n  -webkit-animation-delay: 3.9s;\n          animation-delay: 3.9s; }\n.right-hand .finger1 path:nth-of-type(41) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n.right-hand .finger1 path:nth-of-type(42) {\n  -webkit-animation-delay: 4.1s;\n          animation-delay: 4.1s; }\n.right-hand .finger1 path:nth-of-type(43) {\n  -webkit-animation-delay: 4.2s;\n          animation-delay: 4.2s; }\n.right-hand .finger1 path:nth-of-type(44) {\n  -webkit-animation-delay: 4.3s;\n          animation-delay: 4.3s; }\n.right-hand .finger1 path:nth-of-type(45) {\n  -webkit-animation-delay: 4.4s;\n          animation-delay: 4.4s; }\n.right-hand .finger1 path:nth-of-type(46) {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n.right-hand .finger1 path:nth-of-type(47) {\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s; }\n.right-hand .finger1 path:nth-of-type(48) {\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s; }\n.right-hand .finger1 path:nth-of-type(49) {\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n.right-hand .finger1 path:nth-of-type(50) {\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s; }\n.right-hand .finger2 path:nth-of-type(1) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s; }\n.right-hand .finger2 path:nth-of-type(2) {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s; }\n.right-hand .finger2 path:nth-of-type(3) {\n  -webkit-animation-delay: 2.2s;\n          animation-delay: 2.2s; }\n.right-hand .finger2 path:nth-of-type(4) {\n  -webkit-animation-delay: 2.3s;\n          animation-delay: 2.3s; }\n.right-hand .finger2 path:nth-of-type(5) {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n.right-hand .finger2 path:nth-of-type(6) {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s; }\n.right-hand .finger2 path:nth-of-type(7) {\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s; }\n.right-hand .finger2 path:nth-of-type(8) {\n  -webkit-animation-delay: 2.7s;\n          animation-delay: 2.7s; }\n.right-hand .finger2 path:nth-of-type(9) {\n  -webkit-animation-delay: 2.8s;\n          animation-delay: 2.8s; }\n.right-hand .finger2 path:nth-of-type(10) {\n  -webkit-animation-delay: 2.9s;\n          animation-delay: 2.9s; }\n.right-hand .finger2 path:nth-of-type(11) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s; }\n.right-hand .finger2 path:nth-of-type(12) {\n  -webkit-animation-delay: 3.1s;\n          animation-delay: 3.1s; }\n.right-hand .finger2 path:nth-of-type(13) {\n  -webkit-animation-delay: 3.2s;\n          animation-delay: 3.2s; }\n.right-hand .finger2 path:nth-of-type(14) {\n  -webkit-animation-delay: 3.3s;\n          animation-delay: 3.3s; }\n.right-hand .finger2 path:nth-of-type(15) {\n  -webkit-animation-delay: 3.4s;\n          animation-delay: 3.4s; }\n.right-hand .finger2 path:nth-of-type(16) {\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s; }\n.right-hand .finger2 path:nth-of-type(17) {\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s; }\n.right-hand .finger2 path:nth-of-type(18) {\n  -webkit-animation-delay: 3.7s;\n          animation-delay: 3.7s; }\n.right-hand .finger2 path:nth-of-type(19) {\n  -webkit-animation-delay: 3.8s;\n          animation-delay: 3.8s; }\n.right-hand .finger2 path:nth-of-type(20) {\n  -webkit-animation-delay: 3.9s;\n          animation-delay: 3.9s; }\n.right-hand .finger2 path:nth-of-type(21) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s; }\n.right-hand .finger2 path:nth-of-type(22) {\n  -webkit-animation-delay: 4.1s;\n          animation-delay: 4.1s; }\n.right-hand .finger2 path:nth-of-type(23) {\n  -webkit-animation-delay: 4.2s;\n          animation-delay: 4.2s; }\n.right-hand .finger2 path:nth-of-type(24) {\n  -webkit-animation-delay: 4.3s;\n          animation-delay: 4.3s; }\n.right-hand .finger2 path:nth-of-type(25) {\n  -webkit-animation-delay: 4.4s;\n          animation-delay: 4.4s; }\n.right-hand .finger2 path:nth-of-type(26) {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n.right-hand .finger2 path:nth-of-type(27) {\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s; }\n.right-hand .finger2 path:nth-of-type(28) {\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s; }\n.right-hand .finger2 path:nth-of-type(29) {\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n.right-hand .finger2 path:nth-of-type(30) {\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s; }\n.right-hand .finger2 path:nth-of-type(31) {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n.right-hand .finger2 path:nth-of-type(32) {\n  -webkit-animation-delay: 5.1s;\n          animation-delay: 5.1s; }\n.right-hand .finger2 path:nth-of-type(33) {\n  -webkit-animation-delay: 5.2s;\n          animation-delay: 5.2s; }\n.right-hand .finger2 path:nth-of-type(34) {\n  -webkit-animation-delay: 5.3s;\n          animation-delay: 5.3s; }\n.right-hand .finger2 path:nth-of-type(35) {\n  -webkit-animation-delay: 5.4s;\n          animation-delay: 5.4s; }\n.right-hand .finger2 path:nth-of-type(36) {\n  -webkit-animation-delay: 5.5s;\n          animation-delay: 5.5s; }\n.right-hand .finger2 path:nth-of-type(37) {\n  -webkit-animation-delay: 5.6s;\n          animation-delay: 5.6s; }\n.right-hand .finger2 path:nth-of-type(38) {\n  -webkit-animation-delay: 5.7s;\n          animation-delay: 5.7s; }\n.right-hand .finger2 path:nth-of-type(39) {\n  -webkit-animation-delay: 5.8s;\n          animation-delay: 5.8s; }\n.right-hand .finger2 path:nth-of-type(40) {\n  -webkit-animation-delay: 5.9s;\n          animation-delay: 5.9s; }\n.right-hand .finger2 path:nth-of-type(41) {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s; }\n.right-hand .finger2 path:nth-of-type(42) {\n  -webkit-animation-delay: 6.1s;\n          animation-delay: 6.1s; }\n.right-hand .finger2 path:nth-of-type(43) {\n  -webkit-animation-delay: 6.2s;\n          animation-delay: 6.2s; }\n.right-hand .finger2 path:nth-of-type(44) {\n  -webkit-animation-delay: 6.3s;\n          animation-delay: 6.3s; }\n.right-hand .finger2 path:nth-of-type(45) {\n  -webkit-animation-delay: 6.4s;\n          animation-delay: 6.4s; }\n.right-hand .finger2 path:nth-of-type(46) {\n  -webkit-animation-delay: 6.5s;\n          animation-delay: 6.5s; }\n.right-hand .finger2 path:nth-of-type(47) {\n  -webkit-animation-delay: 6.6s;\n          animation-delay: 6.6s; }\n.right-hand .finger2 path:nth-of-type(48) {\n  -webkit-animation-delay: 6.7s;\n          animation-delay: 6.7s; }\n.right-hand .finger2 path:nth-of-type(49) {\n  -webkit-animation-delay: 6.8s;\n          animation-delay: 6.8s; }\n.right-hand .finger2 path:nth-of-type(50) {\n  -webkit-animation-delay: 6.9s;\n          animation-delay: 6.9s; }\n.right-hand .finger3 path:nth-of-type(1) {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s; }\n.right-hand .finger3 path:nth-of-type(2) {\n  -webkit-animation-delay: 4.6s;\n          animation-delay: 4.6s; }\n.right-hand .finger3 path:nth-of-type(3) {\n  -webkit-animation-delay: 4.7s;\n          animation-delay: 4.7s; }\n.right-hand .finger3 path:nth-of-type(4) {\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n.right-hand .finger3 path:nth-of-type(5) {\n  -webkit-animation-delay: 4.9s;\n          animation-delay: 4.9s; }\n.right-hand .finger3 path:nth-of-type(6) {\n  -webkit-animation-delay: 5s;\n          animation-delay: 5s; }\n.right-hand .finger3 path:nth-of-type(7) {\n  -webkit-animation-delay: 5.1s;\n          animation-delay: 5.1s; }\n.right-hand .finger3 path:nth-of-type(8) {\n  -webkit-animation-delay: 5.2s;\n          animation-delay: 5.2s; }\n.right-hand .finger3 path:nth-of-type(9) {\n  -webkit-animation-delay: 5.3s;\n          animation-delay: 5.3s; }\n.right-hand .finger3 path:nth-of-type(10) {\n  -webkit-animation-delay: 5.4s;\n          animation-delay: 5.4s; }\n.right-hand .finger3 path:nth-of-type(11) {\n  -webkit-animation-delay: 5.5s;\n          animation-delay: 5.5s; }\n.right-hand .finger3 path:nth-of-type(12) {\n  -webkit-animation-delay: 5.6s;\n          animation-delay: 5.6s; }\n.right-hand .finger3 path:nth-of-type(13) {\n  -webkit-animation-delay: 5.7s;\n          animation-delay: 5.7s; }\n.right-hand .finger3 path:nth-of-type(14) {\n  -webkit-animation-delay: 5.8s;\n          animation-delay: 5.8s; }\n.right-hand .finger3 path:nth-of-type(15) {\n  -webkit-animation-delay: 5.9s;\n          animation-delay: 5.9s; }\n.right-hand .finger3 path:nth-of-type(16) {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s; }\n.right-hand .finger3 path:nth-of-type(17) {\n  -webkit-animation-delay: 6.1s;\n          animation-delay: 6.1s; }\n.right-hand .finger3 path:nth-of-type(18) {\n  -webkit-animation-delay: 6.2s;\n          animation-delay: 6.2s; }\n.right-hand .finger3 path:nth-of-type(19) {\n  -webkit-animation-delay: 6.3s;\n          animation-delay: 6.3s; }\n.right-hand .finger3 path:nth-of-type(20) {\n  -webkit-animation-delay: 6.4s;\n          animation-delay: 6.4s; }\n.right-hand .finger3 path:nth-of-type(21) {\n  -webkit-animation-delay: 6.5s;\n          animation-delay: 6.5s; }\n.right-hand .finger3 path:nth-of-type(22) {\n  -webkit-animation-delay: 6.6s;\n          animation-delay: 6.6s; }\n.right-hand .finger3 path:nth-of-type(23) {\n  -webkit-animation-delay: 6.7s;\n          animation-delay: 6.7s; }\n.right-hand .finger3 path:nth-of-type(24) {\n  -webkit-animation-delay: 6.8s;\n          animation-delay: 6.8s; }\n.right-hand .finger3 path:nth-of-type(25) {\n  -webkit-animation-delay: 6.9s;\n          animation-delay: 6.9s; }\n.right-hand .finger3 path:nth-of-type(26) {\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s; }\n.right-hand .finger3 path:nth-of-type(27) {\n  -webkit-animation-delay: 7.1s;\n          animation-delay: 7.1s; }\n.right-hand .finger3 path:nth-of-type(28) {\n  -webkit-animation-delay: 7.2s;\n          animation-delay: 7.2s; }\n.right-hand .finger3 path:nth-of-type(29) {\n  -webkit-animation-delay: 7.3s;\n          animation-delay: 7.3s; }\n.right-hand .finger3 path:nth-of-type(30) {\n  -webkit-animation-delay: 7.4s;\n          animation-delay: 7.4s; }\n.right-hand .finger3 path:nth-of-type(31) {\n  -webkit-animation-delay: 7.5s;\n          animation-delay: 7.5s; }\n.right-hand .finger3 path:nth-of-type(32) {\n  -webkit-animation-delay: 7.6s;\n          animation-delay: 7.6s; }\n.right-hand .finger3 path:nth-of-type(33) {\n  -webkit-animation-delay: 7.7s;\n          animation-delay: 7.7s; }\n.right-hand .finger3 path:nth-of-type(34) {\n  -webkit-animation-delay: 7.8s;\n          animation-delay: 7.8s; }\n.right-hand .finger3 path:nth-of-type(35) {\n  -webkit-animation-delay: 7.9s;\n          animation-delay: 7.9s; }\n.right-hand .finger3 path:nth-of-type(36) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s; }\n.right-hand .finger3 path:nth-of-type(37) {\n  -webkit-animation-delay: 8.1s;\n          animation-delay: 8.1s; }\n.right-hand .finger3 path:nth-of-type(38) {\n  -webkit-animation-delay: 8.2s;\n          animation-delay: 8.2s; }\n.right-hand .finger3 path:nth-of-type(39) {\n  -webkit-animation-delay: 8.3s;\n          animation-delay: 8.3s; }\n.right-hand .finger3 path:nth-of-type(40) {\n  -webkit-animation-delay: 8.4s;\n          animation-delay: 8.4s; }\n.right-hand .finger3 path:nth-of-type(41) {\n  -webkit-animation-delay: 8.5s;\n          animation-delay: 8.5s; }\n.right-hand .finger3 path:nth-of-type(42) {\n  -webkit-animation-delay: 8.6s;\n          animation-delay: 8.6s; }\n.right-hand .finger3 path:nth-of-type(43) {\n  -webkit-animation-delay: 8.7s;\n          animation-delay: 8.7s; }\n.right-hand .finger3 path:nth-of-type(44) {\n  -webkit-animation-delay: 8.8s;\n          animation-delay: 8.8s; }\n.right-hand .finger3 path:nth-of-type(45) {\n  -webkit-animation-delay: 8.9s;\n          animation-delay: 8.9s; }\n.right-hand .finger3 path:nth-of-type(46) {\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s; }\n.right-hand .finger3 path:nth-of-type(47) {\n  -webkit-animation-delay: 9.1s;\n          animation-delay: 9.1s; }\n.right-hand .finger3 path:nth-of-type(48) {\n  -webkit-animation-delay: 9.2s;\n          animation-delay: 9.2s; }\n.right-hand .finger3 path:nth-of-type(49) {\n  -webkit-animation-delay: 9.3s;\n          animation-delay: 9.3s; }\n.right-hand .finger3 path:nth-of-type(50) {\n  -webkit-animation-delay: 9.4s;\n          animation-delay: 9.4s; }\n.right-hand .finger4 path:nth-of-type(1) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s; }\n.right-hand .finger4 path:nth-of-type(2) {\n  -webkit-animation-delay: 8.1s;\n          animation-delay: 8.1s; }\n.right-hand .finger4 path:nth-of-type(3) {\n  -webkit-animation-delay: 8.2s;\n          animation-delay: 8.2s; }\n.right-hand .finger4 path:nth-of-type(4) {\n  -webkit-animation-delay: 8.3s;\n          animation-delay: 8.3s; }\n.right-hand .finger4 path:nth-of-type(5) {\n  -webkit-animation-delay: 8.4s;\n          animation-delay: 8.4s; }\n.right-hand .finger4 path:nth-of-type(6) {\n  -webkit-animation-delay: 8.5s;\n          animation-delay: 8.5s; }\n.right-hand .finger4 path:nth-of-type(7) {\n  -webkit-animation-delay: 8.6s;\n          animation-delay: 8.6s; }\n.right-hand .finger4 path:nth-of-type(8) {\n  -webkit-animation-delay: 8.7s;\n          animation-delay: 8.7s; }\n.right-hand .finger4 path:nth-of-type(9) {\n  -webkit-animation-delay: 8.8s;\n          animation-delay: 8.8s; }\n.right-hand .finger4 path:nth-of-type(10) {\n  -webkit-animation-delay: 8.9s;\n          animation-delay: 8.9s; }\n.right-hand .finger4 path:nth-of-type(11) {\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s; }\n.right-hand .finger4 path:nth-of-type(12) {\n  -webkit-animation-delay: 9.1s;\n          animation-delay: 9.1s; }\n.right-hand .finger4 path:nth-of-type(13) {\n  -webkit-animation-delay: 9.2s;\n          animation-delay: 9.2s; }\n.right-hand .finger4 path:nth-of-type(14) {\n  -webkit-animation-delay: 9.3s;\n          animation-delay: 9.3s; }\n.right-hand .finger4 path:nth-of-type(15) {\n  -webkit-animation-delay: 9.4s;\n          animation-delay: 9.4s; }\n.right-hand .finger4 path:nth-of-type(16) {\n  -webkit-animation-delay: 9.5s;\n          animation-delay: 9.5s; }\n.right-hand .finger4 path:nth-of-type(17) {\n  -webkit-animation-delay: 9.6s;\n          animation-delay: 9.6s; }\n.right-hand .finger4 path:nth-of-type(18) {\n  -webkit-animation-delay: 9.7s;\n          animation-delay: 9.7s; }\n.right-hand .finger4 path:nth-of-type(19) {\n  -webkit-animation-delay: 9.8s;\n          animation-delay: 9.8s; }\n.right-hand .finger4 path:nth-of-type(20) {\n  -webkit-animation-delay: 9.9s;\n          animation-delay: 9.9s; }\n.right-hand .finger4 path:nth-of-type(21) {\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s; }\n.right-hand .finger4 path:nth-of-type(22) {\n  -webkit-animation-delay: 10.1s;\n          animation-delay: 10.1s; }\n.right-hand .finger4 path:nth-of-type(23) {\n  -webkit-animation-delay: 10.2s;\n          animation-delay: 10.2s; }\n.right-hand .finger4 path:nth-of-type(24) {\n  -webkit-animation-delay: 10.3s;\n          animation-delay: 10.3s; }\n.right-hand .finger4 path:nth-of-type(25) {\n  -webkit-animation-delay: 10.4s;\n          animation-delay: 10.4s; }\n.right-hand .finger4 path:nth-of-type(26) {\n  -webkit-animation-delay: 10.5s;\n          animation-delay: 10.5s; }\n.right-hand .finger4 path:nth-of-type(27) {\n  -webkit-animation-delay: 10.6s;\n          animation-delay: 10.6s; }\n.right-hand .finger4 path:nth-of-type(28) {\n  -webkit-animation-delay: 10.7s;\n          animation-delay: 10.7s; }\n.right-hand .finger4 path:nth-of-type(29) {\n  -webkit-animation-delay: 10.8s;\n          animation-delay: 10.8s; }\n.right-hand .finger4 path:nth-of-type(30) {\n  -webkit-animation-delay: 10.9s;\n          animation-delay: 10.9s; }\n.right-hand .finger4 path:nth-of-type(31) {\n  -webkit-animation-delay: 11s;\n          animation-delay: 11s; }\n.right-hand .finger4 path:nth-of-type(32) {\n  -webkit-animation-delay: 11.1s;\n          animation-delay: 11.1s; }\n.right-hand .finger4 path:nth-of-type(33) {\n  -webkit-animation-delay: 11.2s;\n          animation-delay: 11.2s; }\n.right-hand .finger4 path:nth-of-type(34) {\n  -webkit-animation-delay: 11.3s;\n          animation-delay: 11.3s; }\n.right-hand .finger4 path:nth-of-type(35) {\n  -webkit-animation-delay: 11.4s;\n          animation-delay: 11.4s; }\n.right-hand .finger4 path:nth-of-type(36) {\n  -webkit-animation-delay: 11.5s;\n          animation-delay: 11.5s; }\n.right-hand .finger4 path:nth-of-type(37) {\n  -webkit-animation-delay: 11.6s;\n          animation-delay: 11.6s; }\n.right-hand .finger4 path:nth-of-type(38) {\n  -webkit-animation-delay: 11.7s;\n          animation-delay: 11.7s; }\n.right-hand .finger4 path:nth-of-type(39) {\n  -webkit-animation-delay: 11.8s;\n          animation-delay: 11.8s; }\n.right-hand .finger4 path:nth-of-type(40) {\n  -webkit-animation-delay: 11.9s;\n          animation-delay: 11.9s; }\n.right-hand .finger4 path:nth-of-type(41) {\n  -webkit-animation-delay: 12s;\n          animation-delay: 12s; }\n.right-hand .finger4 path:nth-of-type(42) {\n  -webkit-animation-delay: 12.1s;\n          animation-delay: 12.1s; }\n.right-hand .finger4 path:nth-of-type(43) {\n  -webkit-animation-delay: 12.2s;\n          animation-delay: 12.2s; }\n.right-hand .finger4 path:nth-of-type(44) {\n  -webkit-animation-delay: 12.3s;\n          animation-delay: 12.3s; }\n.right-hand .finger4 path:nth-of-type(45) {\n  -webkit-animation-delay: 12.4s;\n          animation-delay: 12.4s; }\n.right-hand .finger4 path:nth-of-type(46) {\n  -webkit-animation-delay: 12.5s;\n          animation-delay: 12.5s; }\n.right-hand .finger4 path:nth-of-type(47) {\n  -webkit-animation-delay: 12.6s;\n          animation-delay: 12.6s; }\n.right-hand .finger4 path:nth-of-type(48) {\n  -webkit-animation-delay: 12.7s;\n          animation-delay: 12.7s; }\n.right-hand .finger4 path:nth-of-type(49) {\n  -webkit-animation-delay: 12.8s;\n          animation-delay: 12.8s; }\n.right-hand .finger4 path:nth-of-type(50) {\n  -webkit-animation-delay: 12.9s;\n          animation-delay: 12.9s; }\n.left-hand .finger1 path:nth-of-type(1) {\n  -webkit-animation-delay: 23.3s;\n          animation-delay: 23.3s; }\n.left-hand .finger1 path:nth-of-type(2) {\n  -webkit-animation-delay: 23.4s;\n          animation-delay: 23.4s; }\n.left-hand .finger1 path:nth-of-type(3) {\n  -webkit-animation-delay: 23.5s;\n          animation-delay: 23.5s; }\n.left-hand .finger1 path:nth-of-type(4) {\n  -webkit-animation-delay: 23.6s;\n          animation-delay: 23.6s; }\n.left-hand .finger1 path:nth-of-type(5) {\n  -webkit-animation-delay: 23.7s;\n          animation-delay: 23.7s; }\n.left-hand .finger1 path:nth-of-type(6) {\n  -webkit-animation-delay: 23.8s;\n          animation-delay: 23.8s; }\n.left-hand .finger1 path:nth-of-type(7) {\n  -webkit-animation-delay: 23.9s;\n          animation-delay: 23.9s; }\n.left-hand .finger1 path:nth-of-type(8) {\n  -webkit-animation-delay: 24s;\n          animation-delay: 24s; }\n.left-hand .finger1 path:nth-of-type(9) {\n  -webkit-animation-delay: 24.1s;\n          animation-delay: 24.1s; }\n.left-hand .finger1 path:nth-of-type(10) {\n  -webkit-animation-delay: 24.2s;\n          animation-delay: 24.2s; }\n.left-hand .finger1 path:nth-of-type(11) {\n  -webkit-animation-delay: 24.3s;\n          animation-delay: 24.3s; }\n.left-hand .finger1 path:nth-of-type(12) {\n  -webkit-animation-delay: 24.4s;\n          animation-delay: 24.4s; }\n.left-hand .finger1 path:nth-of-type(13) {\n  -webkit-animation-delay: 24.5s;\n          animation-delay: 24.5s; }\n.left-hand .finger1 path:nth-of-type(14) {\n  -webkit-animation-delay: 24.6s;\n          animation-delay: 24.6s; }\n.left-hand .finger1 path:nth-of-type(15) {\n  -webkit-animation-delay: 24.7s;\n          animation-delay: 24.7s; }\n.left-hand .finger1 path:nth-of-type(16) {\n  -webkit-animation-delay: 24.8s;\n          animation-delay: 24.8s; }\n.left-hand .finger1 path:nth-of-type(17) {\n  -webkit-animation-delay: 24.9s;\n          animation-delay: 24.9s; }\n.left-hand .finger1 path:nth-of-type(18) {\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s; }\n.left-hand .finger1 path:nth-of-type(19) {\n  -webkit-animation-delay: 25.1s;\n          animation-delay: 25.1s; }\n.left-hand .finger1 path:nth-of-type(20) {\n  -webkit-animation-delay: 25.2s;\n          animation-delay: 25.2s; }\n.left-hand .finger1 path:nth-of-type(21) {\n  -webkit-animation-delay: 25.3s;\n          animation-delay: 25.3s; }\n.left-hand .finger1 path:nth-of-type(22) {\n  -webkit-animation-delay: 25.4s;\n          animation-delay: 25.4s; }\n.left-hand .finger1 path:nth-of-type(23) {\n  -webkit-animation-delay: 25.5s;\n          animation-delay: 25.5s; }\n.left-hand .finger1 path:nth-of-type(24) {\n  -webkit-animation-delay: 25.6s;\n          animation-delay: 25.6s; }\n.left-hand .finger1 path:nth-of-type(25) {\n  -webkit-animation-delay: 25.7s;\n          animation-delay: 25.7s; }\n.left-hand .finger1 path:nth-of-type(26) {\n  -webkit-animation-delay: 25.8s;\n          animation-delay: 25.8s; }\n.left-hand .finger1 path:nth-of-type(27) {\n  -webkit-animation-delay: 25.9s;\n          animation-delay: 25.9s; }\n.left-hand .finger1 path:nth-of-type(28) {\n  -webkit-animation-delay: 26s;\n          animation-delay: 26s; }\n.left-hand .finger1 path:nth-of-type(29) {\n  -webkit-animation-delay: 26.1s;\n          animation-delay: 26.1s; }\n.left-hand .finger1 path:nth-of-type(30) {\n  -webkit-animation-delay: 26.2s;\n          animation-delay: 26.2s; }\n.left-hand .finger1 path:nth-of-type(31) {\n  -webkit-animation-delay: 26.3s;\n          animation-delay: 26.3s; }\n.left-hand .finger1 path:nth-of-type(32) {\n  -webkit-animation-delay: 26.4s;\n          animation-delay: 26.4s; }\n.left-hand .finger1 path:nth-of-type(33) {\n  -webkit-animation-delay: 26.5s;\n          animation-delay: 26.5s; }\n.left-hand .finger1 path:nth-of-type(34) {\n  -webkit-animation-delay: 26.6s;\n          animation-delay: 26.6s; }\n.left-hand .finger1 path:nth-of-type(35) {\n  -webkit-animation-delay: 26.7s;\n          animation-delay: 26.7s; }\n.left-hand .finger1 path:nth-of-type(36) {\n  -webkit-animation-delay: 26.8s;\n          animation-delay: 26.8s; }\n.left-hand .finger1 path:nth-of-type(37) {\n  -webkit-animation-delay: 26.9s;\n          animation-delay: 26.9s; }\n.left-hand .finger1 path:nth-of-type(38) {\n  -webkit-animation-delay: 27s;\n          animation-delay: 27s; }\n.left-hand .finger1 path:nth-of-type(39) {\n  -webkit-animation-delay: 27.1s;\n          animation-delay: 27.1s; }\n.left-hand .finger1 path:nth-of-type(40) {\n  -webkit-animation-delay: 27.2s;\n          animation-delay: 27.2s; }\n.left-hand .finger1 path:nth-of-type(41) {\n  -webkit-animation-delay: 27.3s;\n          animation-delay: 27.3s; }\n.left-hand .finger1 path:nth-of-type(42) {\n  -webkit-animation-delay: 27.4s;\n          animation-delay: 27.4s; }\n.left-hand .finger1 path:nth-of-type(43) {\n  -webkit-animation-delay: 27.5s;\n          animation-delay: 27.5s; }\n.left-hand .finger1 path:nth-of-type(44) {\n  -webkit-animation-delay: 27.6s;\n          animation-delay: 27.6s; }\n.left-hand .finger1 path:nth-of-type(45) {\n  -webkit-animation-delay: 27.7s;\n          animation-delay: 27.7s; }\n.left-hand .finger1 path:nth-of-type(46) {\n  -webkit-animation-delay: 27.8s;\n          animation-delay: 27.8s; }\n.left-hand .finger1 path:nth-of-type(47) {\n  -webkit-animation-delay: 27.9s;\n          animation-delay: 27.9s; }\n.left-hand .finger1 path:nth-of-type(48) {\n  -webkit-animation-delay: 28s;\n          animation-delay: 28s; }\n.left-hand .finger1 path:nth-of-type(49) {\n  -webkit-animation-delay: 28.1s;\n          animation-delay: 28.1s; }\n.left-hand .finger1 path:nth-of-type(50) {\n  -webkit-animation-delay: 28.2s;\n          animation-delay: 28.2s; }\n.left-hand .finger2 path:nth-of-type(1) {\n  -webkit-animation-delay: 20.8s;\n          animation-delay: 20.8s; }\n.left-hand .finger2 path:nth-of-type(2) {\n  -webkit-animation-delay: 20.9s;\n          animation-delay: 20.9s; }\n.left-hand .finger2 path:nth-of-type(3) {\n  -webkit-animation-delay: 21s;\n          animation-delay: 21s; }\n.left-hand .finger2 path:nth-of-type(4) {\n  -webkit-animation-delay: 21.1s;\n          animation-delay: 21.1s; }\n.left-hand .finger2 path:nth-of-type(5) {\n  -webkit-animation-delay: 21.2s;\n          animation-delay: 21.2s; }\n.left-hand .finger2 path:nth-of-type(6) {\n  -webkit-animation-delay: 21.3s;\n          animation-delay: 21.3s; }\n.left-hand .finger2 path:nth-of-type(7) {\n  -webkit-animation-delay: 21.4s;\n          animation-delay: 21.4s; }\n.left-hand .finger2 path:nth-of-type(8) {\n  -webkit-animation-delay: 21.5s;\n          animation-delay: 21.5s; }\n.left-hand .finger2 path:nth-of-type(9) {\n  -webkit-animation-delay: 21.6s;\n          animation-delay: 21.6s; }\n.left-hand .finger2 path:nth-of-type(10) {\n  -webkit-animation-delay: 21.7s;\n          animation-delay: 21.7s; }\n.left-hand .finger2 path:nth-of-type(11) {\n  -webkit-animation-delay: 21.8s;\n          animation-delay: 21.8s; }\n.left-hand .finger2 path:nth-of-type(12) {\n  -webkit-animation-delay: 21.9s;\n          animation-delay: 21.9s; }\n.left-hand .finger2 path:nth-of-type(13) {\n  -webkit-animation-delay: 22s;\n          animation-delay: 22s; }\n.left-hand .finger2 path:nth-of-type(14) {\n  -webkit-animation-delay: 22.1s;\n          animation-delay: 22.1s; }\n.left-hand .finger2 path:nth-of-type(15) {\n  -webkit-animation-delay: 22.2s;\n          animation-delay: 22.2s; }\n.left-hand .finger2 path:nth-of-type(16) {\n  -webkit-animation-delay: 22.3s;\n          animation-delay: 22.3s; }\n.left-hand .finger2 path:nth-of-type(17) {\n  -webkit-animation-delay: 22.4s;\n          animation-delay: 22.4s; }\n.left-hand .finger2 path:nth-of-type(18) {\n  -webkit-animation-delay: 22.5s;\n          animation-delay: 22.5s; }\n.left-hand .finger2 path:nth-of-type(19) {\n  -webkit-animation-delay: 22.6s;\n          animation-delay: 22.6s; }\n.left-hand .finger2 path:nth-of-type(20) {\n  -webkit-animation-delay: 22.7s;\n          animation-delay: 22.7s; }\n.left-hand .finger2 path:nth-of-type(21) {\n  -webkit-animation-delay: 22.8s;\n          animation-delay: 22.8s; }\n.left-hand .finger2 path:nth-of-type(22) {\n  -webkit-animation-delay: 22.9s;\n          animation-delay: 22.9s; }\n.left-hand .finger2 path:nth-of-type(23) {\n  -webkit-animation-delay: 23s;\n          animation-delay: 23s; }\n.left-hand .finger2 path:nth-of-type(24) {\n  -webkit-animation-delay: 23.1s;\n          animation-delay: 23.1s; }\n.left-hand .finger2 path:nth-of-type(25) {\n  -webkit-animation-delay: 23.2s;\n          animation-delay: 23.2s; }\n.left-hand .finger2 path:nth-of-type(26) {\n  -webkit-animation-delay: 23.3s;\n          animation-delay: 23.3s; }\n.left-hand .finger2 path:nth-of-type(27) {\n  -webkit-animation-delay: 23.4s;\n          animation-delay: 23.4s; }\n.left-hand .finger2 path:nth-of-type(28) {\n  -webkit-animation-delay: 23.5s;\n          animation-delay: 23.5s; }\n.left-hand .finger2 path:nth-of-type(29) {\n  -webkit-animation-delay: 23.6s;\n          animation-delay: 23.6s; }\n.left-hand .finger2 path:nth-of-type(30) {\n  -webkit-animation-delay: 23.7s;\n          animation-delay: 23.7s; }\n.left-hand .finger2 path:nth-of-type(31) {\n  -webkit-animation-delay: 23.8s;\n          animation-delay: 23.8s; }\n.left-hand .finger2 path:nth-of-type(32) {\n  -webkit-animation-delay: 23.9s;\n          animation-delay: 23.9s; }\n.left-hand .finger2 path:nth-of-type(33) {\n  -webkit-animation-delay: 24s;\n          animation-delay: 24s; }\n.left-hand .finger2 path:nth-of-type(34) {\n  -webkit-animation-delay: 24.1s;\n          animation-delay: 24.1s; }\n.left-hand .finger2 path:nth-of-type(35) {\n  -webkit-animation-delay: 24.2s;\n          animation-delay: 24.2s; }\n.left-hand .finger2 path:nth-of-type(36) {\n  -webkit-animation-delay: 24.3s;\n          animation-delay: 24.3s; }\n.left-hand .finger2 path:nth-of-type(37) {\n  -webkit-animation-delay: 24.4s;\n          animation-delay: 24.4s; }\n.left-hand .finger2 path:nth-of-type(38) {\n  -webkit-animation-delay: 24.5s;\n          animation-delay: 24.5s; }\n.left-hand .finger2 path:nth-of-type(39) {\n  -webkit-animation-delay: 24.6s;\n          animation-delay: 24.6s; }\n.left-hand .finger2 path:nth-of-type(40) {\n  -webkit-animation-delay: 24.7s;\n          animation-delay: 24.7s; }\n.left-hand .finger2 path:nth-of-type(41) {\n  -webkit-animation-delay: 24.8s;\n          animation-delay: 24.8s; }\n.left-hand .finger2 path:nth-of-type(42) {\n  -webkit-animation-delay: 24.9s;\n          animation-delay: 24.9s; }\n.left-hand .finger2 path:nth-of-type(43) {\n  -webkit-animation-delay: 25s;\n          animation-delay: 25s; }\n.left-hand .finger2 path:nth-of-type(44) {\n  -webkit-animation-delay: 25.1s;\n          animation-delay: 25.1s; }\n.left-hand .finger2 path:nth-of-type(45) {\n  -webkit-animation-delay: 25.2s;\n          animation-delay: 25.2s; }\n.left-hand .finger2 path:nth-of-type(46) {\n  -webkit-animation-delay: 25.3s;\n          animation-delay: 25.3s; }\n.left-hand .finger2 path:nth-of-type(47) {\n  -webkit-animation-delay: 25.4s;\n          animation-delay: 25.4s; }\n.left-hand .finger2 path:nth-of-type(48) {\n  -webkit-animation-delay: 25.5s;\n          animation-delay: 25.5s; }\n.left-hand .finger2 path:nth-of-type(49) {\n  -webkit-animation-delay: 25.6s;\n          animation-delay: 25.6s; }\n.left-hand .finger2 path:nth-of-type(50) {\n  -webkit-animation-delay: 25.7s;\n          animation-delay: 25.7s; }\n.left-hand .finger3 path:nth-of-type(1) {\n  -webkit-animation-delay: 18s;\n          animation-delay: 18s; }\n.left-hand .finger3 path:nth-of-type(2) {\n  -webkit-animation-delay: 18.1s;\n          animation-delay: 18.1s; }\n.left-hand .finger3 path:nth-of-type(3) {\n  -webkit-animation-delay: 18.2s;\n          animation-delay: 18.2s; }\n.left-hand .finger3 path:nth-of-type(4) {\n  -webkit-animation-delay: 18.3s;\n          animation-delay: 18.3s; }\n.left-hand .finger3 path:nth-of-type(5) {\n  -webkit-animation-delay: 18.4s;\n          animation-delay: 18.4s; }\n.left-hand .finger3 path:nth-of-type(6) {\n  -webkit-animation-delay: 18.5s;\n          animation-delay: 18.5s; }\n.left-hand .finger3 path:nth-of-type(7) {\n  -webkit-animation-delay: 18.6s;\n          animation-delay: 18.6s; }\n.left-hand .finger3 path:nth-of-type(8) {\n  -webkit-animation-delay: 18.7s;\n          animation-delay: 18.7s; }\n.left-hand .finger3 path:nth-of-type(9) {\n  -webkit-animation-delay: 18.8s;\n          animation-delay: 18.8s; }\n.left-hand .finger3 path:nth-of-type(10) {\n  -webkit-animation-delay: 18.9s;\n          animation-delay: 18.9s; }\n.left-hand .finger3 path:nth-of-type(11) {\n  -webkit-animation-delay: 19s;\n          animation-delay: 19s; }\n.left-hand .finger3 path:nth-of-type(12) {\n  -webkit-animation-delay: 19.1s;\n          animation-delay: 19.1s; }\n.left-hand .finger3 path:nth-of-type(13) {\n  -webkit-animation-delay: 19.2s;\n          animation-delay: 19.2s; }\n.left-hand .finger3 path:nth-of-type(14) {\n  -webkit-animation-delay: 19.3s;\n          animation-delay: 19.3s; }\n.left-hand .finger3 path:nth-of-type(15) {\n  -webkit-animation-delay: 19.4s;\n          animation-delay: 19.4s; }\n.left-hand .finger3 path:nth-of-type(16) {\n  -webkit-animation-delay: 19.5s;\n          animation-delay: 19.5s; }\n.left-hand .finger3 path:nth-of-type(17) {\n  -webkit-animation-delay: 19.6s;\n          animation-delay: 19.6s; }\n.left-hand .finger3 path:nth-of-type(18) {\n  -webkit-animation-delay: 19.7s;\n          animation-delay: 19.7s; }\n.left-hand .finger3 path:nth-of-type(19) {\n  -webkit-animation-delay: 19.8s;\n          animation-delay: 19.8s; }\n.left-hand .finger3 path:nth-of-type(20) {\n  -webkit-animation-delay: 19.9s;\n          animation-delay: 19.9s; }\n.left-hand .finger3 path:nth-of-type(21) {\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n.left-hand .finger3 path:nth-of-type(22) {\n  -webkit-animation-delay: 20.1s;\n          animation-delay: 20.1s; }\n.left-hand .finger3 path:nth-of-type(23) {\n  -webkit-animation-delay: 20.2s;\n          animation-delay: 20.2s; }\n.left-hand .finger3 path:nth-of-type(24) {\n  -webkit-animation-delay: 20.3s;\n          animation-delay: 20.3s; }\n.left-hand .finger3 path:nth-of-type(25) {\n  -webkit-animation-delay: 20.4s;\n          animation-delay: 20.4s; }\n.left-hand .finger3 path:nth-of-type(26) {\n  -webkit-animation-delay: 20.5s;\n          animation-delay: 20.5s; }\n.left-hand .finger3 path:nth-of-type(27) {\n  -webkit-animation-delay: 20.6s;\n          animation-delay: 20.6s; }\n.left-hand .finger3 path:nth-of-type(28) {\n  -webkit-animation-delay: 20.7s;\n          animation-delay: 20.7s; }\n.left-hand .finger3 path:nth-of-type(29) {\n  -webkit-animation-delay: 20.8s;\n          animation-delay: 20.8s; }\n.left-hand .finger3 path:nth-of-type(30) {\n  -webkit-animation-delay: 20.9s;\n          animation-delay: 20.9s; }\n.left-hand .finger3 path:nth-of-type(31) {\n  -webkit-animation-delay: 21s;\n          animation-delay: 21s; }\n.left-hand .finger3 path:nth-of-type(32) {\n  -webkit-animation-delay: 21.1s;\n          animation-delay: 21.1s; }\n.left-hand .finger3 path:nth-of-type(33) {\n  -webkit-animation-delay: 21.2s;\n          animation-delay: 21.2s; }\n.left-hand .finger3 path:nth-of-type(34) {\n  -webkit-animation-delay: 21.3s;\n          animation-delay: 21.3s; }\n.left-hand .finger3 path:nth-of-type(35) {\n  -webkit-animation-delay: 21.4s;\n          animation-delay: 21.4s; }\n.left-hand .finger3 path:nth-of-type(36) {\n  -webkit-animation-delay: 21.5s;\n          animation-delay: 21.5s; }\n.left-hand .finger3 path:nth-of-type(37) {\n  -webkit-animation-delay: 21.6s;\n          animation-delay: 21.6s; }\n.left-hand .finger3 path:nth-of-type(38) {\n  -webkit-animation-delay: 21.7s;\n          animation-delay: 21.7s; }\n.left-hand .finger3 path:nth-of-type(39) {\n  -webkit-animation-delay: 21.8s;\n          animation-delay: 21.8s; }\n.left-hand .finger3 path:nth-of-type(40) {\n  -webkit-animation-delay: 21.9s;\n          animation-delay: 21.9s; }\n.left-hand .finger3 path:nth-of-type(41) {\n  -webkit-animation-delay: 22s;\n          animation-delay: 22s; }\n.left-hand .finger3 path:nth-of-type(42) {\n  -webkit-animation-delay: 22.1s;\n          animation-delay: 22.1s; }\n.left-hand .finger3 path:nth-of-type(43) {\n  -webkit-animation-delay: 22.2s;\n          animation-delay: 22.2s; }\n.left-hand .finger3 path:nth-of-type(44) {\n  -webkit-animation-delay: 22.3s;\n          animation-delay: 22.3s; }\n.left-hand .finger3 path:nth-of-type(45) {\n  -webkit-animation-delay: 22.4s;\n          animation-delay: 22.4s; }\n.left-hand .finger3 path:nth-of-type(46) {\n  -webkit-animation-delay: 22.5s;\n          animation-delay: 22.5s; }\n.left-hand .finger3 path:nth-of-type(47) {\n  -webkit-animation-delay: 22.6s;\n          animation-delay: 22.6s; }\n.left-hand .finger3 path:nth-of-type(48) {\n  -webkit-animation-delay: 22.7s;\n          animation-delay: 22.7s; }\n.left-hand .finger3 path:nth-of-type(49) {\n  -webkit-animation-delay: 22.8s;\n          animation-delay: 22.8s; }\n.left-hand .finger3 path:nth-of-type(50) {\n  -webkit-animation-delay: 22.9s;\n          animation-delay: 22.9s; }\n.left-hand .finger4 path:nth-of-type(1) {\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s; }\n.left-hand .finger4 path:nth-of-type(2) {\n  -webkit-animation-delay: 15.1s;\n          animation-delay: 15.1s; }\n.left-hand .finger4 path:nth-of-type(3) {\n  -webkit-animation-delay: 15.2s;\n          animation-delay: 15.2s; }\n.left-hand .finger4 path:nth-of-type(4) {\n  -webkit-animation-delay: 15.3s;\n          animation-delay: 15.3s; }\n.left-hand .finger4 path:nth-of-type(5) {\n  -webkit-animation-delay: 15.4s;\n          animation-delay: 15.4s; }\n.left-hand .finger4 path:nth-of-type(6) {\n  -webkit-animation-delay: 15.5s;\n          animation-delay: 15.5s; }\n.left-hand .finger4 path:nth-of-type(7) {\n  -webkit-animation-delay: 15.6s;\n          animation-delay: 15.6s; }\n.left-hand .finger4 path:nth-of-type(8) {\n  -webkit-animation-delay: 15.7s;\n          animation-delay: 15.7s; }\n.left-hand .finger4 path:nth-of-type(9) {\n  -webkit-animation-delay: 15.8s;\n          animation-delay: 15.8s; }\n.left-hand .finger4 path:nth-of-type(10) {\n  -webkit-animation-delay: 15.9s;\n          animation-delay: 15.9s; }\n.left-hand .finger4 path:nth-of-type(11) {\n  -webkit-animation-delay: 16s;\n          animation-delay: 16s; }\n.left-hand .finger4 path:nth-of-type(12) {\n  -webkit-animation-delay: 16.1s;\n          animation-delay: 16.1s; }\n.left-hand .finger4 path:nth-of-type(13) {\n  -webkit-animation-delay: 16.2s;\n          animation-delay: 16.2s; }\n.left-hand .finger4 path:nth-of-type(14) {\n  -webkit-animation-delay: 16.3s;\n          animation-delay: 16.3s; }\n.left-hand .finger4 path:nth-of-type(15) {\n  -webkit-animation-delay: 16.4s;\n          animation-delay: 16.4s; }\n.left-hand .finger4 path:nth-of-type(16) {\n  -webkit-animation-delay: 16.5s;\n          animation-delay: 16.5s; }\n.left-hand .finger4 path:nth-of-type(17) {\n  -webkit-animation-delay: 16.6s;\n          animation-delay: 16.6s; }\n.left-hand .finger4 path:nth-of-type(18) {\n  -webkit-animation-delay: 16.7s;\n          animation-delay: 16.7s; }\n.left-hand .finger4 path:nth-of-type(19) {\n  -webkit-animation-delay: 16.8s;\n          animation-delay: 16.8s; }\n.left-hand .finger4 path:nth-of-type(20) {\n  -webkit-animation-delay: 16.9s;\n          animation-delay: 16.9s; }\n.left-hand .finger4 path:nth-of-type(21) {\n  -webkit-animation-delay: 17s;\n          animation-delay: 17s; }\n.left-hand .finger4 path:nth-of-type(22) {\n  -webkit-animation-delay: 17.1s;\n          animation-delay: 17.1s; }\n.left-hand .finger4 path:nth-of-type(23) {\n  -webkit-animation-delay: 17.2s;\n          animation-delay: 17.2s; }\n.left-hand .finger4 path:nth-of-type(24) {\n  -webkit-animation-delay: 17.3s;\n          animation-delay: 17.3s; }\n.left-hand .finger4 path:nth-of-type(25) {\n  -webkit-animation-delay: 17.4s;\n          animation-delay: 17.4s; }\n.left-hand .finger4 path:nth-of-type(26) {\n  -webkit-animation-delay: 17.5s;\n          animation-delay: 17.5s; }\n.left-hand .finger4 path:nth-of-type(27) {\n  -webkit-animation-delay: 17.6s;\n          animation-delay: 17.6s; }\n.left-hand .finger4 path:nth-of-type(28) {\n  -webkit-animation-delay: 17.7s;\n          animation-delay: 17.7s; }\n.left-hand .finger4 path:nth-of-type(29) {\n  -webkit-animation-delay: 17.8s;\n          animation-delay: 17.8s; }\n.left-hand .finger4 path:nth-of-type(30) {\n  -webkit-animation-delay: 17.9s;\n          animation-delay: 17.9s; }\n.left-hand .finger4 path:nth-of-type(31) {\n  -webkit-animation-delay: 18s;\n          animation-delay: 18s; }\n.left-hand .finger4 path:nth-of-type(32) {\n  -webkit-animation-delay: 18.1s;\n          animation-delay: 18.1s; }\n.left-hand .finger4 path:nth-of-type(33) {\n  -webkit-animation-delay: 18.2s;\n          animation-delay: 18.2s; }\n.left-hand .finger4 path:nth-of-type(34) {\n  -webkit-animation-delay: 18.3s;\n          animation-delay: 18.3s; }\n.left-hand .finger4 path:nth-of-type(35) {\n  -webkit-animation-delay: 18.4s;\n          animation-delay: 18.4s; }\n.left-hand .finger4 path:nth-of-type(36) {\n  -webkit-animation-delay: 18.5s;\n          animation-delay: 18.5s; }\n.left-hand .finger4 path:nth-of-type(37) {\n  -webkit-animation-delay: 18.6s;\n          animation-delay: 18.6s; }\n.left-hand .finger4 path:nth-of-type(38) {\n  -webkit-animation-delay: 18.7s;\n          animation-delay: 18.7s; }\n.left-hand .finger4 path:nth-of-type(39) {\n  -webkit-animation-delay: 18.8s;\n          animation-delay: 18.8s; }\n.left-hand .finger4 path:nth-of-type(40) {\n  -webkit-animation-delay: 18.9s;\n          animation-delay: 18.9s; }\n.left-hand .finger4 path:nth-of-type(41) {\n  -webkit-animation-delay: 19s;\n          animation-delay: 19s; }\n.left-hand .finger4 path:nth-of-type(42) {\n  -webkit-animation-delay: 19.1s;\n          animation-delay: 19.1s; }\n.left-hand .finger4 path:nth-of-type(43) {\n  -webkit-animation-delay: 19.2s;\n          animation-delay: 19.2s; }\n.left-hand .finger4 path:nth-of-type(44) {\n  -webkit-animation-delay: 19.3s;\n          animation-delay: 19.3s; }\n.left-hand .finger4 path:nth-of-type(45) {\n  -webkit-animation-delay: 19.4s;\n          animation-delay: 19.4s; }\n.left-hand .finger4 path:nth-of-type(46) {\n  -webkit-animation-delay: 19.5s;\n          animation-delay: 19.5s; }\n.left-hand .finger4 path:nth-of-type(47) {\n  -webkit-animation-delay: 19.6s;\n          animation-delay: 19.6s; }\n.left-hand .finger4 path:nth-of-type(48) {\n  -webkit-animation-delay: 19.7s;\n          animation-delay: 19.7s; }\n.left-hand .finger4 path:nth-of-type(49) {\n  -webkit-animation-delay: 19.8s;\n          animation-delay: 19.8s; }\n.left-hand .finger4 path:nth-of-type(50) {\n  -webkit-animation-delay: 19.9s;\n          animation-delay: 19.9s; }\n@-webkit-keyframes strokeAnimation {\n  100% {\n    stroke-dashoffset: 0; } }\n@keyframes strokeAnimation {\n  100% {\n    stroke-dashoffset: 0; } }\n:host ::ng-deep mat-tab-group {\n  max-width: 700px;\n  margin: 0 auto; }\n:host ::ng-deep mat-tab-group .mat-tab-labels {\n    justify-content: center; }\n:host ::ng-deep mat-tab-group .mat-tab-labels .mat-tab-label {\n      font-size: 24px;\n      width: 130px;\n      min-width: 0;\n      color: #333;\n      position: relative;\n      opacity: 1;\n      padding-bottom: 10px; }\n:host ::ng-deep mat-tab-group .mat-tab-labels .mat-tab-label-active,\n    :host ::ng-deep mat-tab-group .mat-tab-labels .mat-tab-label-focused {\n      color: #333; }\n:host ::ng-deep mat-tab-group .mat-tab-labels .mat-tab-label-content {\n      position: absolute;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n:host ::ng-deep mat-tab-group .mat-tab-label-container {\n    margin: 30px 0 40px; }\n:host ::ng-deep mat-tab-group .mat-ink-bar {\n    background: #c5c5c5;\n    width: 40px !important;\n    -webkit-transform: translateX(45px);\n            transform: translateX(45px); }\n.image {\n  margin-top: 100px;\n  opacity: 0;\n  transition: 0.5s;\n  width: 100%;\n  height: 400px; }\n.image img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n.image:nth-of-type(1) {\n  margin-top: 50px; }\n.image:nth-of-type(1).visible {\n    margin-top: 0px; }\n.image.visible {\n  margin-top: 50px;\n  opacity: 1; }\n@media screen and (max-width: 1020px) {\n  .homepage-container {\n    padding: 0 40px 70px; }\n  .title span {\n    font-size: 80px; }\n  .title h3 {\n    font-size: 60px;\n    top: 50px;\n    left: 50px; }\n  .text p {\n    padding: 30px 0 0 50px; }\n  .main-view .button-colored {\n    padding: 10px 25px;\n    margin: 40px 0 0 50px; }\n  .hands-wrapper {\n    opacity: 0.6; } }\n@media screen and (max-width: 900px) {\n  .text {\n    padding: 140px 0 20px;\n    position: static;\n    -webkit-transform: translate(0);\n            transform: translate(0); }\n    .text p {\n      width: 100%;\n      box-sizing: border-box; }\n  .hands-wrapper {\n    opacity: 0.5;\n    top: 15%; }\n  .main-view {\n    height: auto; }\n  .see-examples {\n    margin-top: 40px; } }\n@media screen and (max-width: 800px) {\n  .hands-wrapper {\n    display: none; }\n  .title {\n    position: static;\n    height: auto; }\n    .title span {\n      display: none; }\n    .title h3 {\n      font-size: 35px;\n      position: static; }\n  .text p {\n    padding: 20px 0 0; }\n  .main-view .button-colored {\n    margin: 20px 0 0; }\n  .see-examples {\n    margin-top: 0; }\n  h4 {\n    font-size: 22px;\n    padding: 70px 0 0; }\n  .see-examples .flex-wrapper {\n    -ms-grid-columns: 100%;\n        grid-template-columns: 100%; }\n  .img6,\n  .img5 {\n    display: none; }\n  .image {\n    width: 100%;\n    max-width: 400px;\n    margin: 100px auto 0; }\n  .image:nth-of-type(1) {\n    margin-top: 100px; }\n  .image:nth-of-type(1).visible {\n    margin-top: 50px; }\n  .images:nth-of-type(2) {\n    padding-top: 0; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/index/index.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/pages/index/index.component.ts ***!
  \******************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/account.service */ "./ClientApp/app/services/account.service.ts");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
/* harmony import */ var _logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/validators/email-validator */ "./ClientApp/app/logic/validators/email-validator.ts");
/* harmony import */ var _logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logic/validators/passwords-validator */ "./ClientApp/app/logic/validators/passwords-validator.ts");
/* harmony import */ var _logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logic/classes/login-manager */ "./ClientApp/app/logic/classes/login-manager.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var IndexComponent = /** @class */ (function (_super) {
    __extends(IndexComponent, _super);
    function IndexComponent(_accountService, fb, router) {
        var _this = _super.call(this) || this;
        _this._accountService = _accountService;
        _this.fb = fb;
        _this.router = router;
        _this._registered = false;
        _this._registerWarning = "";
        _this._loginWarning = "";
        _this.host = "http://localhost:4200/";
        _this.recaptcha = false;
        _this._loginLoading = false;
        _this._registerLoading = false;
        _this.loginForm = _this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_5__["emailValidator"]]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_4__["passwordValidator"]]]
        });
        _this.registerForm = _this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_5__["emailValidator"]]],
            passwords: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_4__["requiredTextValidator"], _logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_6__["passwordsValidator"]]
            ],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_4__["requiredTextValidator"]]],
            checkbox: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_4__["checkboxValidator"]]],
            captcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        return _this;
    }
    IndexComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.animateScrolling();
    };
    IndexComponent.prototype.childEmitter = function () {
        this.scrollDown();
    };
    IndexComponent.prototype.scrollDown = function () {
        setTimeout(function () {
            document
                .getElementsByClassName("mat-tab-label-container")[0]
                .scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }, 100);
    };
    IndexComponent.prototype.authenticateUser = function (name, password) {
        var _this = this;
        this._accountService
            .getUserToken({
            email: name,
            password: password
        })
            .subscribe(function (res) {
            // to do: walidacja
            _logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_7__["LoginManager"].loginUser(res);
            window.location.replace("");
            _this._loginLoading = false;
        }, function (err) {
            _this._loginLoading = false;
            if (err.status === 401) {
                _this.emailLogin.Input.nativeElement.classList.add("invalid");
                _this.passwordLogin.Input.nativeElement.classList.add("invalid");
                _this._loginWarning =
                    "Cannot find a user with given name and password.";
            }
        });
    };
    IndexComponent.prototype.onLogin = function (form) {
        if (form.status === "VALID") {
            this._loginLoading = true;
            this._loginWarning = "";
            this.authenticateUser(form.value.email, form.value.password);
        }
        else {
            this._loginWarning = "Form must be valid.";
        }
    };
    IndexComponent.prototype.onRegister = function (form) {
        var _this = this;
        if (form.status === "VALID" && this.recaptcha) {
            this._registerLoading = true;
            this._registerWarning = "";
            this._accountService
                .registerUser({
                name: form.value.name,
                email: form.value.email,
                password: form.value.passwords.new,
                link: ""
            })
                .subscribe(function (res) {
                _this._registered = true;
                _this._registerLoading = false;
            }, function (err) {
                _this._registerLoading = false;
                // email already exists
                if (err.status === 409) {
                    _this.email.validateMessage = "Email already exists!";
                }
                // username already exists
                if (err.status === 403) {
                    _this.name.validateMessage = "Name already exists!";
                }
            });
        }
        else {
            this._registerWarning = "All fields must be filled.";
        }
    };
    IndexComponent.prototype.animateScrolling = function () {
        var name = ".img";
        for (var i = 1; i <= 6; i++) {
            var controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2__["Controller"]();
            var scene = new ScrollMagic__WEBPACK_IMPORTED_MODULE_2__["Scene"]({
                triggerElement: name + i,
                triggerHook: 0.9
            })
                .setClassToggle(name + i, "visible")
                .addTo(controller);
        }
    };
    IndexComponent.prototype.resolved = function ($e) {
        this.recaptcha = true;
    };
    Object.defineProperty(IndexComponent.prototype, "registered", {
        get: function () {
            return this._registered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexComponent.prototype, "registerWarning", {
        get: function () {
            return this._registerWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexComponent.prototype, "loginWarning", {
        get: function () {
            return this._loginWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexComponent.prototype, "registerLoading", {
        get: function () {
            return this._registerLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexComponent.prototype, "loginLoading", {
        get: function () {
            return this._loginLoading;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("name"),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("emailLogin"),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "emailLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordLogin"),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "passwordLogin", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-index",
            template: __webpack_require__(/*! ./index.component.html */ "./ClientApp/app/pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./ClientApp/app/pages/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_8__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/pages/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-not-found\">404 Page not found.</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/not-found/not-found.component.scss":
/*!****************************************************************!*\
  !*** ./ClientApp/app/pages/not-found/not-found.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-not-found {\n  padding: 100px 40px 0;\n  margin: 0 auto;\n  max-width: 1200px;\n  box-sizing: border-box;\n  font-size: 30px;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-not-found",
            template: __webpack_require__(/*! ./not-found.component.html */ "./ClientApp/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./ClientApp/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./ClientApp/app/pages/profile/profile.component.html":
/*!************************************************************!*\
  !*** ./ClientApp/app/pages/profile/profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered-profile\">\r\n  <div class=\"flex-wrapper\">\r\n    <div class=\"profile-introduction-container\">\r\n      <div class=\"profile-introduction\">\r\n        <div class=\"profile-section\">\r\n          <div class=\"image-with-description\">\r\n            <div class=\"avatar-container huge-avatar\">\r\n              <a class=\"avatar-link\" routerLink=\"/user/{{ getUser().id }}\">\r\n                <img\r\n                  src=\"{{\r\n                    getUser().avatarImgLink === null ||\r\n                    getUser().avatarImgLink === ''\r\n                      ? '../../assets/img/avatar.png'\r\n                      : getUser().avatarImgLink\r\n                  }}\"\r\n                />\r\n              </a>\r\n            </div>\r\n\r\n            <div class=\"description\">\r\n              <h2>\r\n                <a routerLink=\"/user/{{ getUser().id }}\">{{\r\n                  getUser().name\r\n                }}</a>\r\n              </h2>\r\n              <p class=\"content-secondary\">{{ getUser().link }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"buttons-wrapper\" *ngIf=\"loggedId != getUrl() && loggedIn\">\r\n            <app-follow-button\r\n              [idDestinateUser]=\"getUrl()\"\r\n              [followed]=\"getUser().followed\"\r\n            ></app-follow-button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"profile-section about-section\">\r\n          <h3>About</h3>\r\n          <p class=\"content-secondary\">\r\n            <span *ngIf=\"getUser().about !== ''\">{{ getUser().about }}</span>\r\n            <i *ngIf=\"getUser().about === '' && getUser().id !== this.loggedId\"\r\n              >This user doesn't have a description yet.</i\r\n            >\r\n            <i *ngIf=\"getUser().id === this.loggedId && getUser().about === ''\">\r\n              You don't have description yet.\r\n              <a routerLink=\"/settings\">Change</a>\r\n            </i>\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"profile-section statistic-section\">\r\n          <h3>Statistics</h3>\r\n          <p class=\"content-secondary\">\r\n            <span (click)=\"showFollowing()\">Following</span>\r\n            <span (click)=\"showFollowing()\">{{\r\n              getUser().followingCount\r\n            }}</span>\r\n          </p>\r\n          <p class=\"content-secondary\">\r\n            <span (click)=\"showFollowed()\">Followed by</span>\r\n            <span (click)=\"showFollowed()\">{{ getUser().followedCount }}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"profile-images-container\">\r\n      <ul class=\"menu-list\">\r\n        <li class=\"firstLink\" #link>\r\n          <a\r\n            routerLinkActive=\"active\"\r\n            [routerLink]=\"['/user', getUrl()]\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            >Trending\r\n          </a>\r\n        </li>\r\n        <li><a routerLinkActive=\"active\" routerLink=\"recent\">Recent</a></li>\r\n      </ul>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-information-label #label></app-information-label>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./ClientApp/app/pages/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-profile {\n  max-width: 1290px;\n  margin: 0px auto 70px;\n  padding: 110px 20px 0; }\n\n.statistic-section span {\n  cursor: pointer;\n  border-bottom: 1px solid transparent;\n  transition: 0.05s; }\n\n.statistic-section span:hover {\n  border-bottom: 1px solid #a3a3a3; }\n\n.button-colored {\n  text-transform: none;\n  font-size: 14px; }\n\n.button-colored:nth-of-type(2) {\n    margin-left: 10px;\n    background-color: #a7a7a7; }\n\n.buttons-wrapper {\n  margin-top: 15px;\n  text-align: center; }\n\n.avatar-container.huge-avatar {\n  width: 70px;\n  height: 70px;\n  margin-right: 20px; }\n\n.image-with-description {\n  display: flex;\n  align-items: center; }\n\n.image-with-description .description h2 {\n    font-weight: 400; }\n\n.image-with-description .description p {\n    margin-top: 2px; }\n\n.menu-list {\n  margin-bottom: 20px; }\n\n.profile-introduction-container {\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 30px; }\n\n.profile-introduction {\n  background: #fff;\n  width: 300px;\n  border-radius: 3px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 20px;\n  box-sizing: border-box; }\n\n.menu-list {\n  padding: 0; }\n\n.about-section p {\n  color: #707070; }\n\n.statistic-section p {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #efefef;\n  padding: 4px; }\n\n.statistic-section p:first-of-type {\n  padding-top: 0; }\n\n.statistic-section p:last-of-type {\n  padding-bottom: 0;\n  border: none; }\n\n.profile-section {\n  padding: 20px 0;\n  border-bottom: 1px solid #efefef; }\n\n.profile-section:first-of-type {\n    padding-top: 0; }\n\n.profile-section:last-of-type {\n    padding-bottom: 0;\n    border-bottom: 0; }\n\n.profile-section p:first-of-type {\n    margin-top: 16px; }\n\n@media screen and (max-width: 1350px) {\n  .centered-profile {\n    max-width: 960px; } }\n\n@media screen and (max-width: 1000px) {\n  .menu-list {\n    width: 630px;\n    margin-left: auto;\n    margin-right: auto; }\n  .flex-wrapper {\n    flex-direction: column; }\n  .profile-introduction-container {\n    margin: 0 0 40px 0; }\n  .profile-introduction {\n    width: 100%;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1.5fr 1fr;\n        grid-template-columns: 1.5fr 1fr;\n    grid-column-gap: 30px; }\n  .profile-section:first-of-type {\n    display: flex;\n    align-items: center; }\n  .about-section {\n    -ms-grid-row: 1;\n        grid-row-start: 1;\n    -ms-grid-row-span: 2;\n    grid-row-end: 3;\n    -ms-grid-column: 2;\n        grid-column-start: 2;\n    border-bottom: 0; }\n  .buttons-wrapper {\n    margin-right: 20px; }\n  .image-with-description {\n    display: flex;\n    align-items: center;\n    flex-grow: 1; } }\n\n@media only screen and (max-width: 670px) {\n  .profile-introduction {\n    display: block; }\n  .menu-list {\n    max-width: 300px; } }\n\n@media only screen and (max-width: 410px) {\n  .profile-section:first-of-type {\n    display: block; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/pages/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _logic_classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/classes/user */ "./ClientApp/app/logic/classes/user.ts");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(imageService, route) {
        var _this = _super.call(this) || this;
        _this.imageService = imageService;
        _this.route = route;
        _this.user = new _logic_classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        _this.url = _this.route.snapshot.params.id;
        return _this;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.route.params.subscribe(function (params) {
            _this.getUserData();
            _this.link.nativeElement.classList.add("activeLi");
        });
    };
    ProfileComponent.prototype.getUserData = function () {
        var _this = this;
        this.imageService
            .selectUserById(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            res.avatarImgLink = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_5__["GlobalVariables"].parseImageLink(70, 70, res.avatarImgLink);
            _this.user = res;
        });
    };
    ProfileComponent.prototype.showFollowed = function () {
        var _this = this;
        var informationToSend;
        this.imageService
            .getFollowed(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            informationToSend = res;
            _this.label.show(informationToSend, "Followed by this user");
        });
    };
    ProfileComponent.prototype.showFollowing = function () {
        var _this = this;
        var informationToSend;
        this.imageService
            .getFollowing(this._loggedId.toString(), this.route.snapshot.params.id)
            .subscribe(function (res) {
            informationToSend = res;
            _this.label.show(informationToSend, "Following by this user");
        });
    };
    ProfileComponent.prototype.getUser = function () {
        return this.user;
    };
    Object.defineProperty(ProfileComponent.prototype, "loggedUser", {
        get: function () {
            return this._loggedId;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.getUrl = function () {
        return this.route.snapshot.params.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("label"),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("link"),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "link", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./ClientApp/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./ClientApp/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_3__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/settings/credentials/credentials.component.html":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/credentials/credentials.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"email !== ''\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onFormUpload(form)\">\r\n    <input-email\r\n      [data]=\"{\r\n        label: 'Email'\r\n      }\"\r\n      formControlName=\"email\"\r\n    ></input-email>\r\n\r\n    <confirm-password\r\n      [data]=\"{\r\n        label: 'New password'\r\n      }\"\r\n      formControlName=\"passwords\"\r\n    ></confirm-password>\r\n    <input-password\r\n      [data]=\"{\r\n        label: 'Your current password'\r\n      }\"\r\n      formControlName=\"password\"\r\n    ></input-password>\r\n    <div class=\"warning summary-warning\" *ngIf=\"warning !== ''\">\r\n      {{ warning }}\r\n    </div>\r\n\r\n    <button area-label=\"edit profile\" class=\"button-colored\" type=\"submit\">\r\n      Submit & logout\r\n    </button>\r\n  </form>\r\n</ng-container>\r\n<app-confirmation-message #msg></app-confirmation-message>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/settings/credentials/credentials.component.scss":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/credentials/credentials.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/pages/settings/credentials/credentials.component.ts":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/credentials/credentials.component.ts ***!
  \***************************************************************************/
/*! exports provided: CredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsComponent", function() { return CredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
/* harmony import */ var ClientApp_app_logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/logic/validators/passwords-validator */ "./ClientApp/app/logic/validators/passwords-validator.ts");
/* harmony import */ var ClientApp_app_logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/logic/validators/email-validator */ "./ClientApp/app/logic/validators/email-validator.ts");
/* harmony import */ var ClientApp_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var ClientApp_app_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var ClientApp_app_logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/logic/classes/login-manager */ "./ClientApp/app/logic/classes/login-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CredentialsComponent = /** @class */ (function (_super) {
    __extends(CredentialsComponent, _super);
    function CredentialsComponent(fb, service) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.service = service;
        _this._email = "";
        _this._warning = "";
        return _this;
    }
    CredentialsComponent.prototype.initializeForm = function () {
        this.form = this.fb.group({
            email: [this._email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ClientApp_app_logic_validators_email_validator__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]]],
            passwords: ["", ClientApp_app_logic_validators_passwords_validator__WEBPACK_IMPORTED_MODULE_3__["passwordsValidator"]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__["passwordValidator"]]]
        });
    };
    CredentialsComponent.prototype.getUserEmail = function () {
        var _this = this;
        this.service
            .getUserEmail({ userId: this._loggedId }, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this._email = res.email;
            _this.initializeForm();
        });
    };
    CredentialsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.getUserEmail();
    };
    CredentialsComponent.prototype.onFormUpload = function (form) {
        var _this = this;
        if (form.status === "INVALID") {
            this._warning = "Email and password must be given.";
        }
        else {
            this._warning = "";
            var data = {
                id: this._loggedId,
                oldPassword: form.value.password,
                newEmail: form.value.email,
                newPassword: form.value.passwords.new === "" ? null : form.value.passwords.new,
                oldEmail: this._email
            };
            this.service
                .editUserCredentials(data, this._loggedId, this._loggedToken)
                .subscribe(function (res) {
                ClientApp_app_logic_classes_login_manager__WEBPACK_IMPORTED_MODULE_7__["LoginManager"].logoutUser();
                window.location.replace("homepage");
            }, function (err) {
                if (err.status === 401)
                    _this._warning = "Password is invalid.";
                if (err.status === 409)
                    _this._warning = "Email arleady exists.";
            });
        }
    };
    Object.defineProperty(CredentialsComponent.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CredentialsComponent.prototype, "warning", {
        get: function () {
            return this._warning;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], CredentialsComponent.prototype, "msg", void 0);
    CredentialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-credentials",
            template: __webpack_require__(/*! ./credentials.component.html */ "./ClientApp/app/pages/settings/credentials/credentials.component.html"),
            styles: [__webpack_require__(/*! ./credentials.component.scss */ "./ClientApp/app/pages/settings/credentials/credentials.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ClientApp_app_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]])
    ], CredentialsComponent);
    return CredentialsComponent;
}(ClientApp_app_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_6__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/settings/informations/informations.component.html":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/informations/informations.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"user.id !== 0\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onFormUpload(form)\">\r\n    <input-text\r\n      [data]=\"{\r\n        label: 'Name'\r\n      }\"\r\n      formControlName=\"userName\"\r\n    ></input-text>\r\n    <input-text\r\n      [data]=\"{\r\n        label: 'Short information',\r\n        validation: 'short'\r\n      }\"\r\n      formControlName=\"shortInformation\"\r\n    ></input-text>\r\n    <input-textarea\r\n      [data]=\"{\r\n        label: 'Description'\r\n      }\"\r\n      formControlName=\"description\"\r\n    ></input-textarea>\r\n    <input-file\r\n      [data]=\"{\r\n        label: 'Input profile image'\r\n      }\"\r\n      formControlName=\"file\"\r\n      #file\r\n    >\r\n    </input-file>\r\n    <div class=\"warning summary-warning\" *ngIf=\"informationsWarning !== ''\">\r\n      {{ informationsWarning }}\r\n    </div>\r\n\r\n    <button area-label=\"edit profile\" class=\"button-colored\" type=\"submit\">\r\n      Submit\r\n    </button>\r\n\r\n    <span *ngIf=\"loading\" class=\"loading\"\r\n      ><i class=\"icon-spin4 animate-spin\"></i\r\n    ></span>\r\n  </form>\r\n</ng-container>\r\n<app-confirmation-message #msg></app-confirmation-message>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/settings/informations/informations.component.scss":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/informations/informations.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/pages/settings/informations/informations.component.ts":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/pages/settings/informations/informations.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InformationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsComponent", function() { return InformationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
/* harmony import */ var ClientApp_app_logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/logic/validators/file-validator */ "./ClientApp/app/logic/validators/file-validator.ts");
/* harmony import */ var ClientApp_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ClientApp/app/services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var ClientApp_app_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/app/logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var ClientApp_app_logic_classes_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ClientApp/app/logic/classes/user */ "./ClientApp/app/logic/classes/user.ts");
/* harmony import */ var ClientApp_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ClientApp/app/services/user.service */ "./ClientApp/app/services/user.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InformationsComponent = /** @class */ (function (_super) {
    __extends(InformationsComponent, _super);
    function InformationsComponent(fb, service, userService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.service = service;
        _this.userService = userService;
        _this._user = new ClientApp_app_logic_classes_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        _this._informationsWarning = "";
        _this._loading = false;
        return _this;
    }
    InformationsComponent.prototype.initializeForm = function () {
        this.form = this.fb.group({
            userName: [this._user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, ClientApp_app_logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__["requiredTextValidator"]]],
            shortInformation: this._user.link,
            description: [this._user.about],
            file: [null, ClientApp_app_logic_validators_file_validator__WEBPACK_IMPORTED_MODULE_3__["fileValidator"]]
        });
    };
    InformationsComponent.prototype.informationAboutUser = function () {
        var _this = this;
        this.service
            .selectUserById(this._loggedId.toString(), this._loggedId.toString())
            .subscribe(function (res) {
            _this._user = res;
            _this.initializeForm();
        });
    };
    InformationsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.informationAboutUser();
    };
    InformationsComponent.prototype.editUser = function (link, value) {
        var _this = this;
        this.service
            .editUser({
            link: value.shortInformation,
            id: this._loggedId,
            name: value.userName,
            avatarImgLink: link,
            about: value.description
        }, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this._loading = false;
            _this.msg.show("Profile updated successfully.");
            _this.file.clear();
            _this._informationsWarning = "";
        }, function (err) {
            if (err.status === 403)
                _this._informationsWarning = "Name arleady exists.";
        });
    };
    InformationsComponent.prototype.onFormUpload = function (form) {
        var _this = this;
        if (form.status === "VALID") {
            this._loading = true;
            if (this.file.validateMessage !== "") {
                form.value.file = null;
                this.file.clear();
            }
            if (form.value.file === null) {
                this.editUser(null, form.value);
            }
            else {
                this.service
                    .uploadImage(form.value.file, this._loggedId, this._loggedToken)
                    .subscribe(function (res) {
                    var linkToImg = res[0].url;
                    _this.editUser(linkToImg, form.value);
                });
            }
        }
        else {
            this._informationsWarning = "All fields must be valid.";
        }
    };
    Object.defineProperty(InformationsComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformationsComponent.prototype, "informationsWarning", {
        get: function () {
            return this._informationsWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformationsComponent.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("file"),
        __metadata("design:type", Object)
    ], InformationsComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], InformationsComponent.prototype, "msg", void 0);
    InformationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-informations",
            template: __webpack_require__(/*! ./informations.component.html */ "./ClientApp/app/pages/settings/informations/informations.component.html"),
            styles: [__webpack_require__(/*! ./informations.component.scss */ "./ClientApp/app/pages/settings/informations/informations.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ClientApp_app_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"],
            ClientApp_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], InformationsComponent);
    return InformationsComponent;
}(ClientApp_app_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_5__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/settings/settings.component.html":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/settings/settings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered centered-block\">\r\n  <div class=\"upload-centered\">\r\n    <ul class=\"menu-list\">\r\n      <li>\r\n        <a\r\n          routerLinkActive=\"active\"\r\n          routerLink=\"/settings\"\r\n          [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >Informations</a\r\n        >\r\n      </li>\r\n      <li *ngIf=\"loggedIn\">\r\n        <a routerLinkActive=\"active\" routerLink=\"/settings/credentials\"\r\n          >Credentials</a\r\n        >\r\n      </li>\r\n    </ul>\r\n    <h2>Edit your profile</h2>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<app-confirmation-message #message></app-confirmation-message>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/settings/settings.component.scss":
/*!**************************************************************!*\
  !*** ./ClientApp/app/pages/settings/settings.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep input-file .file-label {\n  height: 120px; }\n\n.menu-list {\n  padding: 0 0 20px 0; }\n\n.menu-list a {\n    color: #bababa; }\n\n.menu-list a.active {\n    color: #2196f3;\n    font-weight: 400;\n    letter-spacing: 0.3px; }\n\n.upload-centered {\n  max-width: 600px; }\n\n.input-description {\n  display: block;\n  margin-bottom: -15px; }\n\n@media only screen and (max-width: 800px) {\n  .centered {\n    background: #fff;\n    min-height: calc(100vh - 153px); }\n  .upload-centered {\n    box-shadow: none;\n    margin: 0 auto; } }\n"

/***/ }),

/***/ "./ClientApp/app/pages/settings/settings.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/pages/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function (_super) {
    __extends(SettingsComponent, _super);
    function SettingsComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        return _this;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this._loggedIn === false) {
            this.router.navigateByUrl("/not-found");
        }
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.component.html */ "./ClientApp/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./ClientApp/app/pages/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_1__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/pages/tags/tags.component.html":
/*!******************************************************!*\
  !*** ./ClientApp/app/pages/tags/tags.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"centered\">\r\n    <div class=\"tag-wrapper\">\r\n      <span># {{ tagname }}</span>\r\n    </div>\r\n    <app-images-common #imgComp></app-images-common>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/pages/tags/tags.component.scss":
/*!******************************************************!*\
  !*** ./ClientApp/app/pages/tags/tags.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-wrapper {\n  text-align: left;\n  font-weight: 500;\n  padding: 50px 0;\n  font-size: 40px; }\n\n.container {\n  margin-bottom: 70px; }\n"

/***/ }),

/***/ "./ClientApp/app/pages/tags/tags.component.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/pages/tags/tags.component.ts ***!
  \****************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsComponent = /** @class */ (function () {
    function TagsComponent(route, service) {
        this.route = route;
        this.service = service;
        this._tagname = "";
        this._images = [];
    }
    TagsComponent.prototype.ngOnInit = function () {
        this._tagname = this.route.snapshot.params.id;
        this.getImages();
    };
    TagsComponent.prototype.getImages = function () {
        var _this = this;
        this.imgComp.showLoadingMsg();
        this.service.imagesByTag(this._tagname).subscribe(function (res) {
            _this.imgComp.hideLoadingMsg();
            _this._images = res;
            _this.imgComp.images = _this._images;
        }, function (err) {
            _this.imgComp.showErrorMsg();
        });
    };
    Object.defineProperty(TagsComponent.prototype, "tagname", {
        get: function () {
            return this._tagname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagsComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imgComp"),
        __metadata("design:type", Object)
    ], TagsComponent.prototype, "imgComp", void 0);
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tags",
            template: __webpack_require__(/*! ./tags.component.html */ "./ClientApp/app/pages/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.scss */ "./ClientApp/app/pages/tags/tags.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/propmts/agree-label/agree-label.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/propmts/agree-label/agree-label.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-container\" #wrapper>\r\n  <div class=\"wrapper\">\r\n    <div class=\"header\">\r\n      <span>WARNING</span>\r\n      <span (click)=\"close()\" tabindex=\"0\" class=\"close-button\">X</span>\r\n    </div>\r\n    <div class=\"content\">\r\n      <span class=\"message\">{{ message }}</span>\r\n      <div class=\"flex-wrapper\">\r\n        <span (click)=\"close()\" class=\"button\" tabindex=\"0\">NO</span>\r\n        <span (click)=\"confirm()\" class=\"button\" tabindex=\"0\">YES</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/propmts/agree-label/agree-label.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/propmts/agree-label/agree-label.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  margin: 20px 10px 0;\n  padding: 0px 20px;\n  cursor: pointer;\n  transition: 0.1s; }\n\n.button:nth-of-type(2) {\n  color: #3b9cf8; }\n\n.button:nth-of-type(2):hover {\n  color: #7ec1ff; }\n\n.button:nth-of-type(1):hover {\n  color: #5e5e5e; }\n"

/***/ }),

/***/ "./ClientApp/app/propmts/agree-label/agree-label.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/propmts/agree-label/agree-label.component.ts ***!
  \********************************************************************/
/*! exports provided: AgreeLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreeLabelComponent", function() { return AgreeLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgreeLabelComponent = /** @class */ (function () {
    function AgreeLabelComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgreeLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener("click", function (e) {
            if (e.path[0].classList.contains("message-container")) {
                _this.close();
            }
        });
    };
    AgreeLabelComponent.prototype.confirm = function () {
        this.close();
        this.emitter.emit();
    };
    AgreeLabelComponent.prototype.show = function () {
        var nullCheck = document.querySelector("body");
        if (nullCheck === null) {
            return;
        }
        nullCheck.classList.add("stop-scrolling");
        var el = this.wrapper.nativeElement;
        el.classList.add("display");
        setTimeout(function () {
            el.classList.add("opacity");
        }, 0);
    };
    AgreeLabelComponent.prototype.close = function () {
        var nullCheck = document.querySelector("body");
        if (nullCheck === null) {
            return;
        }
        nullCheck.classList.remove("stop-scrolling");
        var el = this.wrapper.nativeElement;
        el.classList.remove("opacity");
        setTimeout(function () {
            el.classList.remove("display");
        }, 200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgreeLabelComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgreeLabelComponent.prototype, "emitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("wrapper"),
        __metadata("design:type", Object)
    ], AgreeLabelComponent.prototype, "wrapper", void 0);
    AgreeLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-agree-label",
            template: __webpack_require__(/*! ./agree-label.component.html */ "./ClientApp/app/propmts/agree-label/agree-label.component.html"),
            styles: [__webpack_require__(/*! ./agree-label.component.scss */ "./ClientApp/app/propmts/agree-label/agree-label.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgreeLabelComponent);
    return AgreeLabelComponent;
}());



/***/ }),

/***/ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.html":
/*!****************************************************************************************!*\
  !*** ./ClientApp/app/propmts/confirmation-message/confirmation-message.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"closeMessage(0)\" class=\"success-message message\" #msg>\r\n  <div class=\"animated\">\r\n    <div class=\"content\">\r\n      <span>{{ message }}</span>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.scss":
/*!****************************************************************************************!*\
  !*** ./ClientApp/app/propmts/confirmation-message/confirmation-message.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".visible {\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  -webkit-animation-name: showShadow;\n          animation-name: showShadow;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.05); }\n\n.hidden {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-name: hideShadow;\n          animation-name: hideShadow;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.visible .animated {\n  overflow: hidden;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-name: contentShow;\n          animation-name: contentShow;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.hidden .animated {\n  overflow: hidden;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-name: contentHide;\n          animation-name: contentHide;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.message {\n  position: fixed;\n  width: calc(100% - 8rem);\n  top: 2rem;\n  left: 4rem;\n  z-index: 1000;\n  height: 62px;\n  overflow: hidden;\n  margin: 0;\n  display: none; }\n\n.message .animated {\n    background: #6aff8b;\n    width: 1px;\n    height: 1px;\n    visibility: hidden;\n    border-radius: 50%;\n    margin-left: 50vw;\n    overflow: hidden;\n    position: relative;\n    z-index: 1; }\n\n.message .content {\n    box-sizing: border-box;\n    position: fixed;\n    top: 2rem;\n    left: 4rem;\n    display: flex;\n    justify-content: space-between;\n    width: calc(100% - 8rem);\n    height: 62px;\n    align-items: center;\n    padding: 0 20px;\n    background: #6aff8b;\n    color: #32693a;\n    font-weight: 500; }\n\n.message .content button {\n      color: #144c2d;\n      background: none;\n      border: none;\n      cursor: pointer;\n      font-size: 20px;\n      transition: 0.2s; }\n\n.message .content button:hover {\n      color: #3a8059; }\n\n.message.visible {\n  display: block; }\n\n.message.hidden {\n  display: block; }\n\n@-webkit-keyframes contentShow {\n  0% {\n    visibility: visible; }\n  99% {\n    width: 150vw;\n    height: 150vw;\n    margin-top: -110vw;\n    margin-left: -30vw;\n    overflow: hidden;\n    display: block; }\n  100% {\n    visibility: visible;\n    overflow: visible;\n    display: none; } }\n\n@keyframes contentShow {\n  0% {\n    visibility: visible; }\n  99% {\n    width: 150vw;\n    height: 150vw;\n    margin-top: -110vw;\n    margin-left: -30vw;\n    overflow: hidden;\n    display: block; }\n  100% {\n    visibility: visible;\n    overflow: visible;\n    display: none; } }\n\n@-webkit-keyframes contentHide {\n  0% {\n    display: block;\n    visibility: visible;\n    width: 150vw;\n    height: 150vw;\n    margin-top: -110vw;\n    margin-left: -30vw; }\n  99% {\n    overflow: hidden;\n    display: block;\n    visibility: visible; }\n  100% {\n    visibility: visible;\n    overflow: visible;\n    display: none;\n    width: 1px;\n    height: 1px;\n    margin-left: 30vw;\n    margin-top: 20vw; } }\n\n@keyframes contentHide {\n  0% {\n    display: block;\n    visibility: visible;\n    width: 150vw;\n    height: 150vw;\n    margin-top: -110vw;\n    margin-left: -30vw; }\n  99% {\n    overflow: hidden;\n    display: block;\n    visibility: visible; }\n  100% {\n    visibility: visible;\n    overflow: visible;\n    display: none;\n    width: 1px;\n    height: 1px;\n    margin-left: 30vw;\n    margin-top: 20vw; } }\n\n@-webkit-keyframes showShadow {\n  0% {\n    box-shadow: none; }\n  50% {\n    box-shadow: none; }\n  100% {\n    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.05); } }\n\n@keyframes showShadow {\n  0% {\n    box-shadow: none; }\n  50% {\n    box-shadow: none; }\n  100% {\n    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.05); } }\n\n@-webkit-keyframes hideShadow {\n  0% { }\n  100% {\n    box-shadow: none; } }\n\n@keyframes hideShadow {\n  0% { }\n  100% {\n    box-shadow: none; } }\n"

/***/ }),

/***/ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.ts":
/*!**************************************************************************************!*\
  !*** ./ClientApp/app/propmts/confirmation-message/confirmation-message.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfirmationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationMessageComponent", function() { return ConfirmationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationMessageComponent = /** @class */ (function () {
    function ConfirmationMessageComponent() {
        this._message = "";
    }
    ConfirmationMessageComponent.prototype.show = function (message) {
        this._message = message;
        // show confirmation message
        var el = this.msgElement.nativeElement;
        el.classList.add("visible");
        // remove message after 8 seconds
        setTimeout(function () {
            if (el.classList.contains("visible")) {
                el.classList.add("hidden");
                setTimeout(function () {
                    el.classList.remove("hidden");
                    el.classList.remove("visible");
                }, 300);
            }
        }, 4000);
    };
    ConfirmationMessageComponent.prototype.closeMessage = function (id) {
        var el = this.msgElement.nativeElement;
        el.classList.add("hidden");
        setTimeout(function () {
            el.classList.remove("hidden");
            el.classList.remove("visible");
        }, 300);
    };
    Object.defineProperty(ConfirmationMessageComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("msg"),
        __metadata("design:type", Object)
    ], ConfirmationMessageComponent.prototype, "msgElement", void 0);
    ConfirmationMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-confirmation-message",
            template: __webpack_require__(/*! ./confirmation-message.component.html */ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-message.component.scss */ "./ClientApp/app/propmts/confirmation-message/confirmation-message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationMessageComponent);
    return ConfirmationMessageComponent;
}());



/***/ }),

/***/ "./ClientApp/app/propmts/information-label/information-label.component.html":
/*!**********************************************************************************!*\
  !*** ./ClientApp/app/propmts/information-label/information-label.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-container\" #wrapper>\r\n  <div class=\"wrapper\">\r\n    <div class=\"header\">\r\n      <span>{{ labelName }}</span>\r\n      <span (click)=\"close()\" tabindex=\"0\" class=\"close-button\">X</span>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"item\" *ngFor=\"let item of getData()\">\r\n        <div class=\"img-wrapper\">\r\n          <a routerLink=\"/user/{{ item.userId }}\" (click)=\"close()\">\r\n            <img\r\n              src=\"{{\r\n                item.avatarImgLink === '' || item.avatarImgLink === null\r\n                  ? '../../assets/img/avatar.png'\r\n                  : item.avatarImgLink\r\n              }}\"\r\n            />\r\n          </a>\r\n        </div>\r\n        <span class=\"name\"\r\n          ><a routerLink=\"/user/{{ item.userId }}\" (click)=\"close()\">{{\r\n            item.name\r\n          }}</a></span\r\n        >\r\n        <app-follow-button\r\n          *ngIf=\"item.userId !== loggedId && loggedIn\"\r\n          [idDestinateUser]=\"item.userId\"\r\n          [followed]=\"item.followed\"\r\n        ></app-follow-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/propmts/information-label/information-label.component.scss":
/*!**********************************************************************************!*\
  !*** ./ClientApp/app/propmts/information-label/information-label.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e5e5e5;\n  padding: 10px 0; }\n\n.item:last-of-type {\n  border-bottom: 0; }\n\n.img-wrapper {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.name {\n  margin-left: 10px;\n  flex-grow: 1; }\n\nimg {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./ClientApp/app/propmts/information-label/information-label.component.ts":
/*!********************************************************************************!*\
  !*** ./ClientApp/app/propmts/information-label/information-label.component.ts ***!
  \********************************************************************************/
/*! exports provided: InformationLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationLabelComponent", function() { return InformationLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationLabelComponent = /** @class */ (function (_super) {
    __extends(InformationLabelComponent, _super);
    function InformationLabelComponent() {
        var _this = _super.call(this) || this;
        _this._labelName = "";
        _this.data = [];
        return _this;
    }
    InformationLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        document.addEventListener("click", function (e) {
            if (e.path[0].classList.contains("message-container")) {
                _this.close();
            }
        });
    };
    InformationLabelComponent.prototype.close = function () {
        var el = this.wrapper.nativeElement;
        el.classList.remove("opacity");
        setTimeout(function () {
            el.classList.remove("display");
            var nullCheck = document.querySelector("body");
            if (nullCheck === null) {
                return;
            }
            nullCheck.classList.remove("stop-scrolling");
        }, 200);
    };
    InformationLabelComponent.prototype.show = function (data, name) {
        // stop scrolling when label visible
        var nullCheck = document.querySelector("body");
        if (nullCheck === null)
            return;
        nullCheck.classList.add("stop-scrolling");
        // show element
        var el = this.wrapper.nativeElement;
        el.classList.add("display");
        setTimeout(function () {
            el.classList.add("opacity");
        }, 0);
        // set proper data - this.data is used for displaying users
        this._labelName = name;
        this.data = data;
    };
    InformationLabelComponent.prototype.getData = function () {
        return this.data;
    };
    Object.defineProperty(InformationLabelComponent.prototype, "labelName", {
        get: function () {
            return this._labelName;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("wrapper"),
        __metadata("design:type", Object)
    ], InformationLabelComponent.prototype, "wrapper", void 0);
    InformationLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-information-label",
            template: __webpack_require__(/*! ./information-label.component.html */ "./ClientApp/app/propmts/information-label/information-label.component.html"),
            styles: [__webpack_require__(/*! ./information-label.component.scss */ "./ClientApp/app/propmts/information-label/information-label.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationLabelComponent);
    return InformationLabelComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_1__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/services/account.service.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/services/account.service.ts ***!
  \***************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(_http) {
        this._http = _http;
        this.host = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].host;
    }
    AccountService.prototype.selectUserById = function (id) {
        return this._http.get(this.host + "api/Posts/Users/" + id);
    };
    AccountService.prototype.getUserToken = function (data) {
        return this._http.post(this.host + "api/SignIn/In", data);
    };
    AccountService.prototype.registerUser = function (data) {
        return this._http.post(this.host + "api/Users/AddUser", data);
    };
    AccountService.prototype.logoutUser = function (data, id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic " + btoa("" + id + ":" + token));
        headers = headers.append("Content-Type", "application/json");
        return this._http.post(this.host + "api/SignIn/Out", data, {
            headers: headers
        });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./ClientApp/app/services/image.service.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/services/image.service.ts ***!
  \*************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = /** @class */ (function () {
    function ImageService(_http) {
        this._http = _http;
        this.host = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].host;
    }
    ImageService.prototype.selectRecentImages = function () {
        return this._http.get(this.host + "api/Posts/AllPosts/the_newest");
    };
    ImageService.prototype.selectPopularImages = function () {
        return this._http.get(this.host + "api/Posts/AllPosts/most_popular");
    };
    ImageService.prototype.selectFollowedImages = function (id) {
        return this._http.get(this.host + "api/Posts/" + id + "/GetFollowingPosts");
    };
    ImageService.prototype.ImageByPath = function (userId, postId) {
        return this._http.get(this.host + "api/Posts/" + userId + "/" + postId);
    };
    ImageService.prototype.CommentsByImgPath = function (userId, postId) {
        return this._http.get(this.host + "api/Comments/" + userId + "/" + postId);
    };
    ImageService.prototype.uploadComment = function (comment, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Comments/AddPostComment", comment, {
            headers: headers
        });
    };
    ImageService.prototype.removeComment = function (id, idToken, token) {
        var headers = this.getHeaders(idToken, token);
        return this._http.delete(this.host + "api/Comments/DeletePostComment/" + id, { headers: headers });
    };
    ImageService.prototype.selectUserById = function (loggedUserId, userId) {
        return this._http.get(this.host + "api/Users/" + loggedUserId + "/" + userId);
    };
    ImageService.prototype.selectUserRecentImages = function (id) {
        return this._http.get(this.host + "api/Users/" + id + "/GetPosts/the_newest");
    };
    ImageService.prototype.selectUserTrendingImages = function (id) {
        return this._http.get(this.host + "api/Users/" + id + "/GetPosts/most_popular");
    };
    ImageService.prototype.getFollowed = function (loggedUserId, userId) {
        return this._http.get(this.host + "api/Followers/GetFollowed/" + loggedUserId + "/" + userId);
    };
    ImageService.prototype.getFollowing = function (loggedUserId, userId) {
        return this._http.get(this.host + "api/Followers/GetFollowing/" + loggedUserId + "/" + userId);
    };
    ImageService.prototype.getPostLikes = function (userId, postId) {
        return this._http.get(this.host + "api/Likes/Post/" + userId + "/" + postId);
    };
    ImageService.prototype.getHeaders = function (id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic " + btoa("" + id + ":" + token));
        headers = headers.append("Content-Type", "application/json");
        return headers;
    };
    ImageService.prototype.unlikePost = function (userId, postId, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.delete(this.host + "api/Likes/Post/RemoveLike/" + userId + "/" + postId, {
            headers: headers
        });
    };
    ImageService.prototype.likePost = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Likes/Post/AddLike", data, {
            headers: headers
        });
    };
    ImageService.prototype.getCommentLikes = function (userId, commentId) {
        return this._http.get(this.host + "api/Likes/Comment/" + userId + "/" + commentId);
    };
    ImageService.prototype.likeComment = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Likes/Comment/AddLike", data, {
            headers: headers
        });
    };
    ImageService.prototype.unlikeComment = function (userId, postId, token) {
        var headers = this.getHeaders(userId, token);
        return this._http.delete(this.host + "api/Likes/Comment/RemoveLike/" + userId + "/" + postId, {
            headers: headers
        });
    };
    ImageService.prototype.editComment = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.put(this.host + "api/Comments/EditPostComment", data, {
            headers: headers
        });
    };
    // followedUserId, followingUserId
    ImageService.prototype.follow = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Followers/AddFollower", data, {
            headers: headers
        });
    };
    // followedUserId, followingUserId
    ImageService.prototype.unfollow = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.delete(this.host +
            "api/Followers/DeleteFollower" +
            "/" +
            data.followingUserId +
            "/" +
            data.followedUserId, { headers: headers });
    };
    ImageService.prototype.search = function (searchWord) {
        return this._http.get(this.host + "api/Search/" + searchWord);
    };
    ImageService.prototype.imagesByTag = function (tag) {
        return this._http.get(this.host + "api/Posts/AllPostsByTag/" + tag);
    };
    ImageService.prototype.addTagsToImage = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Tags/AddPostTags", data, {
            headers: headers
        });
    };
    ImageService.prototype.addAdditionalImageInfo = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Posts/AddPost", data, {
            headers: headers
        });
    };
    ImageService.prototype.editImage = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.put(this.host + "api/Posts/EditPost", data, {
            headers: headers
        });
    };
    ImageService.prototype.uploadImage = function (data, id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic " + btoa("" + id + ":" + token));
        var fd = new FormData();
        fd.append("file", data);
        return this._http.post(this.host + "api/UploadImage", fd, {
            headers: headers
        });
    };
    ImageService.prototype.deleteImage = function (id, userId, token) {
        var headers = this.getHeaders(userId, token);
        return this._http.delete(this.host + "/api/Posts/DeletePost/" + id, {
            headers: headers
        });
    };
    ImageService.prototype.editUser = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.put(this.host + "api/Users/EditUser", data, {
            headers: headers
        });
    };
    ImageService.prototype.editUserCredentials = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.put(this.host + "api/Users/EditUserCredentials", data, {
            headers: headers
        });
    };
    ImageService.prototype.getUserEmail = function (data, id, token) {
        var headers = this.getHeaders(id, token);
        return this._http.post(this.host + "api/Users/GetUserEmail", data, {
            headers: headers
        });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./ClientApp/app/services/user.service.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/classes/global-variables */ "./ClientApp/app/logic/classes/global-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.host = _logic_classes_global_variables__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"].host;
    }
    UserService.prototype.getHeaders = function (id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic " + btoa("" + id + ":" + token));
        headers = headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.selectUserById = function (id) {
        return this._http.get(this.host + "api/Posts/Users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./ClientApp/app/single-components/editable-field/editable-field.component.html":
/*!**************************************************************************************!*\
  !*** ./ClientApp/app/single-components/editable-field/editable-field.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"informations-wrapper\">\n  <div class=\"informations-additional\">\n    <span\n      *ngIf=\"data.additional\"\n      [innerHTML]=\"data.additional\"\n      class=\"additional-wrapper\"\n    ></span>\n    <span class=\"icons-wrapper\" *ngIf=\"data.userCanEdit\">\n      <span\n        class=\"edit-delete-icon header-info\"\n        *ngIf=\"!data.disableRemove\"\n        (click)=\"removeElement()\"\n      >\n        <i class=\"icon-trash\"></i>\n      </span>\n      <span (click)=\"editField()\" class=\"edit-delete-icon\"\n        ><i class=\"icon-pencil\"></i>\n      </span>\n    </span>\n  </div>\n  <div\n    class=\"informations-proper\"\n    *ngIf=\"!fieldEditing\"\n    [innerHTML]=\"data.value\"\n  ></div>\n</div>\n<ng-container *ngIf=\"fieldEditing\">\n  <form [formGroup]=\"fieldForm\" (ngSubmit)=\"submitEditField(fieldForm)\">\n    <input-text\n      *ngIf=\"data.inputType === 'input'\"\n      [data]=\"{\n        label: ''\n      }\"\n      formControlName=\"{{ data.name }}\"\n    ></input-text>\n\n    <input-textarea\n      *ngIf=\"data.inputType === 'textarea'\"\n      [data]=\"{\n        label: '',\n        value: data.value,\n        validation: !data.allowedEmpty\n      }\"\n      formControlName=\"{{ data.name }}\"\n    ></input-textarea>\n    {{ data.allowedEmpty }}\n    <tag-input\n      *ngIf=\"data.inputType === 'tags'\"\n      [maxItems]=\"'10'\"\n      [addOnPaste]=\"'true'\"\n      [animationDuration]=\"{ enter: '0ms', leave: '0ms' }\"\n      [placeholder]=\"'Press Enter to add item'\"\n      [separatorKeyCodes]=\"'[32, 13]'\"\n      formControlName=\"{{ data.name }}\"\n    ></tag-input>\n    <div class=\"edit-elements\">\n      <button class=\"discard\" type=\"button\" (click)=\"discardEditField()\">\n        Discard\n      </button>\n      <button class=\"submit\" type=\"submit\">Submit</button>\n    </div>\n  </form>\n</ng-container>\n"

/***/ }),

/***/ "./ClientApp/app/single-components/editable-field/editable-field.component.scss":
/*!**************************************************************************************!*\
  !*** ./ClientApp/app/single-components/editable-field/editable-field.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span > .informations-wrapper {\n  display: flex; }\n\n.informations-additional,\n.additional-wrapper,\n.icons-wrapper {\n  display: flex;\n  align-items: center; }\n\n.informations-additional {\n  margin-bottom: 5px; }\n\n.additional-wrapper h4,\n.additional-wrapper p,\n.additional-wrapper span {\n  margin-right: 5px; }\n\n.additional-wrapper span:last-of-type {\n  color: #787878; }\n\n.additional-wrapper p {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./ClientApp/app/single-components/editable-field/editable-field.component.ts":
/*!************************************************************************************!*\
  !*** ./ClientApp/app/single-components/editable-field/editable-field.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditableFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableFieldComponent", function() { return EditableFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/validators/text-validator */ "./ClientApp/app/logic/validators/text-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableFieldComponent = /** @class */ (function () {
    function EditableFieldComponent(fb) {
        this.fb = fb;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fieldEditing = false;
        console.log(this.data);
    }
    EditableFieldComponent.prototype.ngOnInit = function () {
        var _a;
        this.fieldForm = this.fb.group((_a = {},
            _a[this.data.name] = [
                this.data.value,
                this.data.allowedEmpty
                    ? null
                    : [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _logic_validators_text_validator__WEBPACK_IMPORTED_MODULE_2__["requiredTextareaValidator"]]
            ],
            _a));
        console.log(this.data);
    };
    EditableFieldComponent.prototype.editField = function () {
        this.fieldEditing = true;
    };
    EditableFieldComponent.prototype.discardEditField = function () {
        console.log("discarded");
        this.fieldEditing = false;
    };
    EditableFieldComponent.prototype.submitEditField = function (form) {
        if (form.status === "VALID") {
            console.log(form.value.title);
            this.fieldEditing = false;
            this.emitter.emit({
                id: this.data.id,
                action: "change",
                value: form.value
            });
        }
    };
    EditableFieldComponent.prototype.removeElement = function () {
        this.emitter.emit({
            action: "delete",
            value: this.data.id
        });
        // pokazanie sie informacji czy na pewno
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditableFieldComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditableFieldComponent.prototype, "emitter", void 0);
    EditableFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-editable-field",
            template: __webpack_require__(/*! ./editable-field.component.html */ "./ClientApp/app/single-components/editable-field/editable-field.component.html"),
            styles: [__webpack_require__(/*! ./editable-field.component.scss */ "./ClientApp/app/single-components/editable-field/editable-field.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditableFieldComponent);
    return EditableFieldComponent;
}());



/***/ }),

/***/ "./ClientApp/app/single-components/follow-button/follow-button.component.html":
/*!************************************************************************************!*\
  !*** ./ClientApp/app/single-components/follow-button/follow-button.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"follow-button\">\r\n  <span class=\"button-colored\" (click)=\"follow()\" *ngIf=\"!this.followed\"\r\n    >FOLLOW</span\r\n  >\r\n  <span\r\n    class=\"unfollow button-colored\"\r\n    (click)=\"unFollow()\"\r\n    *ngIf=\"this.followed\"\r\n    >UNFOLLOW</span\r\n  >\r\n</span>\r\n"

/***/ }),

/***/ "./ClientApp/app/single-components/follow-button/follow-button.component.scss":
/*!************************************************************************************!*\
  !*** ./ClientApp/app/single-components/follow-button/follow-button.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".follow-button {\n  margin-top: 0; }\n\n.unfollow {\n  background: #a9a9a9; }\n"

/***/ }),

/***/ "./ClientApp/app/single-components/follow-button/follow-button.component.ts":
/*!**********************************************************************************!*\
  !*** ./ClientApp/app/single-components/follow-button/follow-button.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return FollowButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
/* harmony import */ var _logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/classes/logged-in */ "./ClientApp/app/logic/classes/logged-in.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowButtonComponent = /** @class */ (function (_super) {
    __extends(FollowButtonComponent, _super);
    function FollowButtonComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.idDestinateUser = 0;
        _this.followed = false;
        _this.class = "";
        return _this;
    }
    FollowButtonComponent.prototype.follow = function () {
        var _this = this;
        var data = {
            followedUserId: this.idDestinateUser,
            followingUserId: this._loggedId
        };
        this.service
            .follow(data, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this.followed = true;
        });
    };
    FollowButtonComponent.prototype.unFollow = function () {
        var _this = this;
        var data = {
            followedUserId: this.idDestinateUser,
            followingUserId: this._loggedId
        };
        this.service
            .unfollow(data, this._loggedId, this._loggedToken)
            .subscribe(function (res) {
            _this.followed = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "idDestinateUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "followed", void 0);
    FollowButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-follow-button",
            template: __webpack_require__(/*! ./follow-button.component.html */ "./ClientApp/app/single-components/follow-button/follow-button.component.html"),
            styles: [__webpack_require__(/*! ./follow-button.component.scss */ "./ClientApp/app/single-components/follow-button/follow-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}(_logic_classes_logged_in__WEBPACK_IMPORTED_MODULE_2__["LoggedIn"]));



/***/ }),

/***/ "./ClientApp/app/single-components/search/search.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/single-components/search/search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"search\" #searchField>\r\n    <span class=\"icon\"><i class=\"icon-search\"></i></span>\r\n    <input\r\n      type=\"text\"\r\n      placeholder=\"Search...\"\r\n      (keyup)=\"search(this.input.value)\"\r\n      #input\r\n    />\r\n    <span class=\"loading\" *ngIf=\"loading\"\r\n      ><i class=\"icon-spin4 animate-spin\"></i\r\n    ></span>\r\n  </div>\r\n</div>\r\n<div class=\"search-result\" #searchResult>\r\n  <ul *ngIf=\"res !== null && res !== []\">\r\n    <li *ngFor=\"let response of res\">\r\n      <div class=\"response\">\r\n        <div class=\"response-image\">\r\n          <!-- if it is not a tag, but a person -->\r\n          <a *ngIf=\"response.tagName === null\" href=\"/user/{{ response.id }}\">\r\n            <img\r\n              src=\"{{\r\n                response.avatarImgLink === null || response.avatarImgLink === ''\r\n                  ? '../../assets/img/avatar.png'\r\n                  : response.avatarImgLink\r\n              }}\"\r\n            />\r\n          </a>\r\n\r\n          <!-- if it is a tag  -->\r\n          <a\r\n            class=\"tag-sign\"\r\n            *ngIf=\"response.tagName !== null\"\r\n            href=\"/tags/{{ response.tagName }}\"\r\n          >\r\n            <span>#</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"response-text\">\r\n          <div class=\"header\">\r\n            <ng-container *ngIf=\"response.tagName !== null\"\r\n              ><a href=\"/tags/{{ response.tagName }} \">{{\r\n                response.tagName\r\n              }}</a></ng-container\r\n            >\r\n            <ng-container *ngIf=\"response.tagName === null\">\r\n              <a href=\"/user/{{ response.id }}\">{{ response.name }}</a>\r\n            </ng-container>\r\n          </div>\r\n          <div class=\"description\">\r\n            {{\r\n              response.tagName !== null\r\n                ? response.count + (response.count === 1 ? \" post\" : \" posts\")\r\n                : \"Followed by \" + response.followedCount\r\n            }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/single-components/search/search.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/single-components/search/search.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex; }\n\ni {\n  display: block;\n  margin: 0 5px; }\n\n.search {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 3px;\n  width: 180px;\n  border-radius: 5px;\n  transition-duration: 0.2s;\n  background: #f8f8f8;\n  color: #c2c2c2;\n  border: 1px solid #eeeeee; }\n\n.search img {\n    display: block; }\n\n.search:focus-within {\n  background: #fcfcfc; }\n\ninput {\n  margin-bottom: 0;\n  border: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: block;\n  background: none;\n  color: #727272; }\n\ninput::-webkit-input-placeholder {\n  color: #8d8d8d; }\n\ninput::-ms-input-placeholder {\n  color: #8d8d8d; }\n\ninput::placeholder {\n  color: #8d8d8d; }\n\n.search-result.display {\n  display: block; }\n\n.search-button {\n  margin-left: 10px; }\n\ninput.active {\n  padding: 5px 2px;\n  width: 180px; }\n\ninput:focus {\n  border: 0; }\n\napp-search {\n  position: relative; }\n\n.search-result {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: absolute;\n  background: white;\n  width: 250px;\n  border-radius: 5px;\n  padding: 5px 0;\n  max-height: 400px;\n  display: none;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);\n  margin-top: 5px; }\n\n.response {\n  display: flex;\n  padding: 5px;\n  border-bottom: 1px solid #f5f5f5;\n  box-sizing: border-box;\n  width: 100%; }\n\n.response img {\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%; }\n\nli:last-of-type .response {\n  border-bottom: 0; }\n\n.tag-sign {\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 35px;\n  color: #8d8d8d; }\n\n.response-image {\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: 23px;\n  overflow: hidden; }\n\n.response-image a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    background-position: center;\n    background-size: cover; }\n\n.response-image a.tag-sign {\n    display: flex; }\n\n.response-text {\n  width: 100%;\n  padding-left: 10px;\n  font-size: 15px;\n  line-height: 1.4; }\n\n.header {\n  font-weight: 500; }\n\n.description {\n  color: #6f6f6f;\n  font-weight: 300; }\n"

/***/ }),

/***/ "./ClientApp/app/single-components/search/search.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/single-components/search/search.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./ClientApp/app/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(service) {
        this.service = service;
        this._res = [];
        this.loading = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener("click", function (e) {
            if (e.target !== _this.SearchResult.nativeElement &&
                !_this.SearchResult.nativeElement.contains(e.target) &&
                (e.target !== _this.SearchField.nativeElement &&
                    !_this.SearchField.nativeElement.contains(e.target))) {
                _this.SearchResult.nativeElement.classList.remove("display");
            }
        });
    };
    SearchComponent.prototype.search = function (value) {
        var _this = this;
        this.loading = true;
        if (value !== null && value !== "") {
            this.service.search(value).subscribe(function (res) {
                if (JSON.stringify(res) !== "[]") {
                    _this._res = res;
                    _this.SearchResult.nativeElement.classList.add("display");
                }
                else {
                    _this._res = [];
                    _this.SearchResult.nativeElement.classList.remove("display");
                }
                _this.loading = false;
            }, function (error) { });
        }
        else {
            this.SearchResult.nativeElement.classList.remove("display");
            this._res = [];
            this.loading = false;
        }
    };
    Object.defineProperty(SearchComponent.prototype, "res", {
        get: function () {
            return this._res;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "Input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("button"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "Button", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchResult"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "SearchResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("searchField"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "SearchField", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! ./search.component.html */ "./ClientApp/app/single-components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./ClientApp/app/single-components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\weron\OneDrive\Pulpit\programy\JS\PaintStore\backEnd\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map