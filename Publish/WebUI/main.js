(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Manager/Component/AddTask.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Manager/Component/AddTask.component.ts ***!
  \********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_ManageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/ManageService */ "./src/app/Manager/Service/ManageService.ts");
/* harmony import */ var _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/TaskModel */ "./src/app/Manager/Model/TaskModel.ts");
/* harmony import */ var _Model_ParentTaskModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/ParentTaskModel */ "./src/app/Manager/Model/ParentTaskModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(manageService) {
        this.manageService = manageService;
        this.title = 'task';
        this.taskList = [];
        this.isParentChecked = false;
        this.projectList = [];
        this.parentList = [];
        this.lblGreen = '';
        this.lblRed = '';
        this.ManagerName = '';
        this.userList = [];
        this.userPopupVisible = false;
        this.projectPopupVisible = false;
        this.parentPopupVisible = false;
        this.ProjectName = '';
        this.ParentName = '';
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        console.log('in task compoennt');
        this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        this.taskAddModel.Task_ID = 0;
        this.taskAddModel.Task = '';
        this.taskAddModel.Project_ID = 0;
        this.taskAddModel.Parent_ID = 0;
        this.taskAddModel.StartDate = new Date();
        this.taskAddModel.EndDate = new Date(this.taskAddModel.StartDate.getFullYear(), this.taskAddModel.StartDate.getMonth(), (this.taskAddModel.StartDate.getDate() + 1), 0);
        this.taskAddModel.Priority = 0;
        this.parentTaskAddModel = new _Model_ParentTaskModel__WEBPACK_IMPORTED_MODULE_3__["ParentTaskModel"]();
        this.parentTaskAddModel.Parent_ID = 0;
        this.parentTaskAddModel.Parent_Task = '';
        this.getUserList();
        this.getProjectList();
        this.getParentList();
    };
    AddTaskComponent.prototype.getUserList = function () {
        var _this = this;
        this.manageService.GetUserDetailsList().subscribe(function (res) {
            _this.userList = res;
        });
    };
    AddTaskComponent.prototype.onUserRowClick = function (event) {
        this.ManagerName = event.key.FirstName;
        this.userPopupVisible = false;
    };
    AddTaskComponent.prototype.onProjectRowClick = function (event) {
        this.ProjectName = event.key.Project;
        this.projectPopupVisible = false;
    };
    AddTaskComponent.prototype.onParentRowClick = function (event) {
        this.ParentName = event.key.Parent_Task;
        this.parentPopupVisible = false;
    };
    AddTaskComponent.prototype.getProjectList = function () {
        var _this = this;
        this.manageService.GetProjectList().subscribe(function (res) {
            _this.projectList = res;
        });
    };
    AddTaskComponent.prototype.getParentList = function () {
        var _this = this;
        this.manageService.GetParentList().subscribe(function (res) {
            _this.parentList = res;
        });
    };
    AddTaskComponent.prototype.onUserSearch = function () {
        this.userPopupVisible = true;
    };
    AddTaskComponent.prototype.onParentSearch = function () {
        this.parentPopupVisible = true;
    };
    AddTaskComponent.prototype.onProjectSearch = function () {
        this.projectPopupVisible = true;
    };
    AddTaskComponent.prototype.addEditTask = function () {
        var _this = this;
        if (this.isParentChecked) {
            if (this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != '') {
                this.parentTaskAddModel.Parent_Task = this.taskAddModel.Task;
                this.manageService.AddEditParent(this.parentTaskAddModel).subscribe(function (res) {
                    if (res.indexOf('Success') >= 0) {
                        _this.lblGreen = res;
                        _this.lblRed = '';
                        _this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
                        _this.taskAddModel.Task_ID = 0;
                        _this.taskAddModel.Project_ID = 0;
                        _this.taskAddModel.StartDate = new Date();
                        _this.taskAddModel.EndDate = new Date(_this.taskAddModel.StartDate.getFullYear(), _this.taskAddModel.StartDate.getMonth(), (_this.taskAddModel.StartDate.getDate() + 1), 0);
                        _this.taskAddModel.Priority = 0;
                        _this.parentTaskAddModel = new _Model_ParentTaskModel__WEBPACK_IMPORTED_MODULE_3__["ParentTaskModel"]();
                        _this.parentTaskAddModel.Parent_ID = 0;
                        _this.parentTaskAddModel.Parent_Task = '';
                        _this.ManagerName = '';
                        _this.ParentName = '';
                        _this.ProjectName = '';
                        _this.isParentChecked = false;
                        _this.parentPopupVisible = false;
                        _this.userPopupVisible = false;
                        _this.projectPopupVisible = false;
                    }
                    else {
                        _this.lblRed = res;
                        _this.lblGreen = '';
                    }
                });
            }
            else {
                this.lblGreen = '';
                if (!(this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != ''))
                    this.lblRed = this.lblRed + "Task Name is mandatory;";
            }
        }
        else {
            if (this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != '' &&
                this.ManagerName.trim() != '' && this.ParentName.trim() != '' && this.ProjectName.trim() != '' &&
                this.taskAddModel.EndDate.getFullYear() >= this.taskAddModel.StartDate.getFullYear() &&
                this.taskAddModel.EndDate.getMonth() >= this.taskAddModel.StartDate.getMonth() &&
                this.taskAddModel.EndDate.getDate() > this.taskAddModel.StartDate.getDate()) {
                this.manageService.AddEditTask(this.taskAddModel).subscribe(function (res) {
                    debugger;
                    if (res.indexOf('Success') >= 0) {
                        _this.lblGreen = res;
                        _this.lblRed = '';
                        _this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
                        _this.taskAddModel.Task_ID = 0;
                        _this.taskAddModel.Project_ID = 0;
                        _this.taskAddModel.StartDate = new Date();
                        _this.taskAddModel.EndDate = new Date(_this.taskAddModel.StartDate.getFullYear(), _this.taskAddModel.StartDate.getMonth(), (_this.taskAddModel.StartDate.getDate() + 1), 0);
                        _this.taskAddModel.Priority = 0;
                        _this.ManagerName = '';
                        _this.ParentName = '';
                        _this.ProjectName = '';
                        _this.isParentChecked = false;
                        _this.parentPopupVisible = false;
                        _this.userPopupVisible = false;
                        _this.projectPopupVisible = false;
                    }
                    else {
                        _this.lblRed = res;
                        _this.lblGreen = '';
                    }
                });
            }
            else {
                this.lblGreen = '';
                if (!(this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != ''))
                    this.lblRed = this.lblRed + "Task Name is mandatory;";
                if (!(this.taskAddModel.EndDate.getFullYear() >= this.taskAddModel.StartDate.getFullYear() &&
                    this.taskAddModel.EndDate.getMonth() >= this.taskAddModel.StartDate.getMonth() &&
                    this.taskAddModel.EndDate.getDate() > this.taskAddModel.StartDate.getDate()))
                    this.lblRed = this.lblRed + "End date cannot be earlier to Start Date";
            }
            if (this.ManagerName.trim() == '')
                this.lblRed = this.lblRed + "manager Name is mandatory;";
            if (this.ParentName.trim() == '')
                this.lblRed = this.lblRed + "Parent Name is mandatory;";
            if (this.ProjectName.trim() == '')
                this.lblRed = this.lblRed + "Project Name is mandatory;";
        }
    };
    AddTaskComponent.prototype.btnReset = function () {
        this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        this.taskAddModel.Task_ID = 0;
        this.taskAddModel.Parent_ID = 0;
        this.taskAddModel.Project_ID = 0;
        this.taskAddModel.Task = '';
        this.ManagerName = '';
        this.ProjectName = '';
        this.ParentName = '';
        this.isParentChecked = false;
        this.taskAddModel.StartDate = new Date();
        this.taskAddModel.EndDate = new Date(this.taskAddModel.StartDate.getFullYear(), this.taskAddModel.StartDate.getMonth(), (this.taskAddModel.StartDate.getDate() + 1), 0);
        this.taskAddModel.Priority = 0;
        this.lblRed = '';
        this.lblGreen = '';
        this.parentPopupVisible = false;
        this.userPopupVisible = false;
        this.projectPopupVisible = false;
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ../View/AddTask.html */ "./src/app/Manager/View/AddTask.html"),
            providers: [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]]
        }),
        __metadata("design:paramtypes", [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/Manager/Component/ProjectView.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Manager/Component/ProjectView.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_ManageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/ManageService */ "./src/app/Manager/Service/ManageService.ts");
/* harmony import */ var _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/ProjectModel */ "./src/app/Manager/Model/ProjectModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(manageService) {
        this.manageService = manageService;
        this.title = 'project';
        this.isDateChecked = false;
        this.projectList = [];
        this.lblGreen = '';
        this.lblRed = '';
        this.ManagerName = '';
        this.userList = [];
        this.popupVisible = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        console.log('in project compoennt');
        this.projectAddModel = new _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
        this.projectAddModel.Project_ID = 0;
        this.projectAddModel.StartDate = new Date();
        this.projectAddModel.EndDate = new Date(this.projectAddModel.StartDate.getFullYear(), this.projectAddModel.StartDate.getMonth(), (this.projectAddModel.StartDate.getDate() + 1), 0);
        this.projectAddModel.Priority = 0;
        this.getUserList();
        this.getProjectList();
    };
    ProjectComponent.prototype.getUserList = function () {
        var _this = this;
        this.manageService.GetUserDetailsList().subscribe(function (res) {
            _this.userList = res;
        });
    };
    ProjectComponent.prototype.onUserRowClick = function (event) {
        this.ManagerName = event.key.FirstName;
    };
    ProjectComponent.prototype.getProjectList = function () {
        var _this = this;
        this.manageService.GetProjectList().subscribe(function (res) {
            _this.projectList = res;
        });
    };
    ProjectComponent.prototype.onSearch = function () {
        this.popupVisible = true;
    };
    ProjectComponent.prototype.addEditProject = function () {
        var _this = this;
        debugger;
        if (this.projectAddModel.Project != undefined && this.projectAddModel.Project != null && this.projectAddModel.Project.trim() != '' &&
            this.projectAddModel.EndDate.getFullYear() >= this.projectAddModel.StartDate.getFullYear() &&
            this.projectAddModel.EndDate.getMonth() >= this.projectAddModel.StartDate.getMonth() &&
            this.projectAddModel.EndDate.getDate() > this.projectAddModel.StartDate.getDate()) {
            this.manageService.AddEditProject(this.projectAddModel).subscribe(function (res) {
                debugger;
                if (res.indexOf('Success') >= 0) {
                    _this.lblGreen = res;
                    _this.lblRed = '';
                    _this.projectAddModel = new _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
                    _this.projectAddModel.Project_ID = 0;
                    _this.projectAddModel.StartDate = new Date();
                    _this.projectAddModel.EndDate = new Date(_this.projectAddModel.StartDate.getFullYear(), _this.projectAddModel.StartDate.getMonth(), (_this.projectAddModel.StartDate.getDate() + 1), 0);
                    _this.projectAddModel.Priority = 0;
                    _this.ManagerName = '';
                    _this.isDateChecked = false;
                    _this.getProjectList();
                }
                else {
                    _this.lblRed = res;
                    _this.lblGreen = '';
                }
            });
        }
        else {
            this.lblGreen = '';
            if (!(this.projectAddModel.Project != undefined && this.projectAddModel.Project != null && this.projectAddModel.Project.trim() != ''))
                this.lblRed = this.lblRed + "Project Name is mandatory;";
            if (!(this.projectAddModel.EndDate.getFullYear() >= this.projectAddModel.StartDate.getFullYear() &&
                this.projectAddModel.EndDate.getMonth() >= this.projectAddModel.StartDate.getMonth() &&
                this.projectAddModel.EndDate.getDate() > this.projectAddModel.StartDate.getDate()))
                this.lblRed = this.lblRed + "End date cannot be earlier to Start Date";
        }
    };
    ProjectComponent.prototype.updateProjectModel = function (item) {
        this.projectAddModel = new _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
        this.projectAddModel = item;
    };
    ProjectComponent.prototype.Deleteproject = function (item) {
        var _this = this;
        this.manageService.DeleteProject(item.Project_ID).subscribe(function (res) {
            if (res.indexOf('Success') >= 0) {
                _this.lblGreen = res;
                _this.lblRed = '';
                _this.projectAddModel = new _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
                _this.projectAddModel.Project_ID = 0;
            }
            else {
                _this.lblRed = res;
                _this.lblGreen = '';
            }
        });
    };
    ProjectComponent.prototype.btnReset = function () {
        this.projectAddModel = new _Model_ProjectModel__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
        this.projectAddModel.Project_ID = 0;
        this.projectAddModel.Project = '';
        this.isDateChecked = false;
        this.projectAddModel.StartDate = new Date();
        this.projectAddModel.EndDate = new Date(this.projectAddModel.StartDate.getFullYear(), this.projectAddModel.StartDate.getMonth(), (this.projectAddModel.StartDate.getDate() + 1), 0);
        this.projectAddModel.Priority = 0;
        this.ManagerName = '';
        this.lblRed = '';
        this.lblGreen = '';
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ../View/ProjectView.html */ "./src/app/Manager/View/ProjectView.html"),
            providers: [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]]
        }),
        __metadata("design:paramtypes", [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/Manager/Component/UserView.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Manager/Component/UserView.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_ManageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/ManageService */ "./src/app/Manager/Service/ManageService.ts");
/* harmony import */ var _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/UserModel */ "./src/app/Manager/Model/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(manageService) {
        this.manageService = manageService;
        this.title = 'user';
        this.userList = [];
        this.lblGreen = '';
        this.lblRed = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log('in user compoennt');
        this.userAddModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        this.userAddModel.User_ID = 0;
        this.getUserList();
    };
    UserComponent.prototype.getUserList = function () {
        var _this = this;
        this.manageService.GetUserDetailsList().subscribe(function (res) {
            _this.userList = res;
        });
    };
    UserComponent.prototype.addEditUser = function () {
        var _this = this;
        debugger;
        if (this.userAddModel.FirstName != undefined && this.userAddModel.LastName != undefined && this.userAddModel.Employee_ID != undefined &&
            this.userAddModel.FirstName != null && this.userAddModel.LastName != null && this.userAddModel.Employee_ID != null &&
            this.userAddModel.FirstName.trim() != '' && this.userAddModel.LastName.trim() != '' && this.userAddModel.Employee_ID.toString().trim() != '') {
            this.manageService.AddEditUser(this.userAddModel).subscribe(function (res) {
                debugger;
                if (res.indexOf('Success') >= 0) {
                    _this.lblGreen = res;
                    _this.lblRed = '';
                    _this.userAddModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
                    _this.userAddModel.User_ID = 0;
                    _this.getUserList();
                }
                else {
                    _this.lblRed = res;
                    _this.lblGreen = '';
                }
            });
        }
        else {
            this.lblGreen = '';
            if (this.userAddModel.FirstName != undefined || this.userAddModel.FirstName != null || this.userAddModel.FirstName.trim() != '')
                this.lblRed = this.lblRed + "First Name is mandatory;";
            if (this.userAddModel.LastName != undefined || this.userAddModel.LastName != null || this.userAddModel.LastName.trim() != '')
                this.lblRed = this.lblRed + "Last Name is mandatory;";
            if ((this.userAddModel.Employee_ID != undefined || this.userAddModel.Employee_ID != null) && this.userAddModel.Employee_ID.toString().trim() != '')
                this.lblRed = this.lblRed + "Employee ID is mandatory;";
        }
    };
    UserComponent.prototype.btnReset = function () {
        this.userAddModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        this.userAddModel.User_ID = 0;
        this.userAddModel.FirstName = '';
        this.userAddModel.LastName = '';
        this.lblRed = '';
        this.lblGreen = '';
    };
    UserComponent.prototype.updateUserModel = function (item) {
        this.userAddModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        this.userAddModel = item;
    };
    UserComponent.prototype.DeleteUser = function (item) {
        var _this = this;
        this.manageService.DeleteUser(item.User_ID).subscribe(function (res) {
            if (res.indexOf('Success') >= 0) {
                _this.lblGreen = res;
                _this.lblRed = '';
                _this.userAddModel = new _Model_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
                _this.userAddModel.User_ID = 0;
            }
            else {
                _this.lblRed = res;
                _this.lblGreen = '';
            }
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user',
            template: __webpack_require__(/*! ../View/UserView.html */ "./src/app/Manager/View/UserView.html"),
            providers: [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]]
        }),
        __metadata("design:paramtypes", [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/Manager/Component/ViewTask.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Manager/Component/ViewTask.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_ManageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/ManageService */ "./src/app/Manager/Service/ManageService.ts");
/* harmony import */ var _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/TaskModel */ "./src/app/Manager/Model/TaskModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(manageService) {
        this.manageService = manageService;
        this.title = 'Viewtask';
        this.taskList = [];
        this.lblGreen = '';
        this.lblRed = '';
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        console.log('in project compoennt');
        this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        this.taskAddModel.Task_ID = 0;
        this.taskAddModel.Task = '';
        this.taskAddModel.StartDate = new Date();
        this.taskAddModel.EndDate = new Date(this.taskAddModel.StartDate.getFullYear(), this.taskAddModel.StartDate.getMonth(), (this.taskAddModel.StartDate.getDate() + 1), 0);
        this.taskAddModel.Priority = 0;
        this.getTaskList();
    };
    ViewTaskComponent.prototype.getTaskList = function () {
        var _this = this;
        this.manageService.GetTaskList().subscribe(function (res) {
            _this.taskList = res;
        });
    };
    ViewTaskComponent.prototype.EditTask = function (event) {
        this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        this.taskAddModel.Task_ID = event.key.Task_ID;
        this.taskAddModel.Task = event.key.Task;
        this.taskAddModel.StartDate = event.key.StartDate;
        this.taskAddModel.EndDate = event.key.EndDate;
        this.taskAddModel.Priority = event.key.Priority;
        this.taskAddModel.Status = 'INP';
        this.addEditTask();
    };
    ViewTaskComponent.prototype.EndTask = function (event) {
        this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        this.taskAddModel.Task_ID = event.key.Task_ID;
        this.taskAddModel.Task = event.key.Task;
        this.taskAddModel.StartDate = event.key.StartDate;
        this.taskAddModel.EndDate = event.key.EndDate;
        this.taskAddModel.Priority = event.key.Priority;
        this.taskAddModel.Status = 'COM';
        this.addEditTask();
    };
    ViewTaskComponent.prototype.addEditTask = function () {
        var _this = this;
        if (this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != '' &&
            this.taskAddModel.EndDate.getFullYear() >= this.taskAddModel.StartDate.getFullYear() &&
            this.taskAddModel.EndDate.getMonth() >= this.taskAddModel.StartDate.getMonth() &&
            this.taskAddModel.EndDate.getDate() > this.taskAddModel.StartDate.getDate()) {
            this.manageService.AddEditTask(this.taskAddModel).subscribe(function (res) {
                if (res.indexOf('Success') >= 0) {
                    _this.lblGreen = res;
                    _this.lblRed = '';
                    _this.taskAddModel = new _Model_TaskModel__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
                    _this.taskAddModel.Task_ID = 0;
                    _this.taskAddModel.Task = '';
                    _this.taskAddModel.StartDate = new Date();
                    _this.taskAddModel.EndDate = new Date(_this.taskAddModel.StartDate.getFullYear(), _this.taskAddModel.StartDate.getMonth(), (_this.taskAddModel.StartDate.getDate() + 1), 0);
                    _this.taskAddModel.Priority = 0;
                    _this.getTaskList();
                }
                else {
                    _this.lblRed = res;
                    _this.lblGreen = '';
                }
            });
        }
        else {
            this.lblGreen = '';
            if (!(this.taskAddModel.Task != undefined && this.taskAddModel.Task != null && this.taskAddModel.Task.trim() != ''))
                this.lblRed = this.lblRed + "Project Name is mandatory;";
            if (!(this.taskAddModel.EndDate.getFullYear() >= this.taskAddModel.StartDate.getFullYear() &&
                this.taskAddModel.EndDate.getMonth() >= this.taskAddModel.StartDate.getMonth() &&
                this.taskAddModel.EndDate.getDate() > this.taskAddModel.StartDate.getDate()))
                this.lblRed = this.lblRed + "End date cannot be earlier to Start Date";
        }
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ../View/TaskView.html */ "./src/app/Manager/View/TaskView.html"),
            providers: [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]]
        }),
        __metadata("design:paramtypes", [_Service_ManageService__WEBPACK_IMPORTED_MODULE_1__["ManageService"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/Manager/Model/ParentTaskModel.ts":
/*!**************************************************!*\
  !*** ./src/app/Manager/Model/ParentTaskModel.ts ***!
  \**************************************************/
/*! exports provided: ParentTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskModel", function() { return ParentTaskModel; });
var ParentTaskModel = /** @class */ (function () {
    function ParentTaskModel() {
    }
    return ParentTaskModel;
}());



/***/ }),

/***/ "./src/app/Manager/Model/ProjectModel.ts":
/*!***********************************************!*\
  !*** ./src/app/Manager/Model/ProjectModel.ts ***!
  \***********************************************/
/*! exports provided: ProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModel", function() { return ProjectModel; });
var ProjectModel = /** @class */ (function () {
    function ProjectModel() {
    }
    return ProjectModel;
}());



/***/ }),

/***/ "./src/app/Manager/Model/TaskModel.ts":
/*!********************************************!*\
  !*** ./src/app/Manager/Model/TaskModel.ts ***!
  \********************************************/
/*! exports provided: TaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
var TaskModel = /** @class */ (function () {
    function TaskModel() {
    }
    return TaskModel;
}());



/***/ }),

/***/ "./src/app/Manager/Model/UserModel.ts":
/*!********************************************!*\
  !*** ./src/app/Manager/Model/UserModel.ts ***!
  \********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/Manager/Service/ManageService.ts":
/*!**************************************************!*\
  !*** ./src/app/Manager/Service/ManageService.ts ***!
  \**************************************************/
/*! exports provided: ManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageService", function() { return ManageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageService = /** @class */ (function () {
    function ManageService(http) {
        this.http = http;
        this.apiurl = '172.18.3.27:85';
        //apiurl: string = 'localhost:51530';
        this.AddEditUserURL = "http://" + this.apiurl + "/api/ProjectManager/AddEditUser";
        this.AddParentTaskURL = "http://" + this.apiurl + "/api/ProjectManager/AddParentTask";
        this.AddProjectURL = "http://" + this.apiurl + "/api/ProjectManager/AddProject";
        this.AddTaskURL = "http://" + this.apiurl + "/api/ProjectManager/AddTask";
        this.DeleteUserURL = "http://" + this.apiurl + "/api/ProjectManager/DeleteUser";
        this.GetProjectDetailsListURL = "http://" + this.apiurl + "/api/ProjectManager/GetProjectDetailsList";
        this.GetTaskDetailsListURL = "http://" + this.apiurl + "/api/ProjectManager/GetTaskDetailsList";
        this.GetUserDetailsListURL = "http://" + this.apiurl + "/api/ProjectManager/GetUserDetailsList";
        this.DeleteProjectURL = "http://" + this.apiurl + "/api/ProjectManager/DeleteProject";
        this.GetParentListURL = "http://" + this.apiurl + "/api/ProjectManager/GetParentList";
    }
    ManageService.prototype.GetUserDetailsList = function () {
        return this.http.get(this.GetUserDetailsListURL, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.AddEditUser = function (userModel) {
        return this.http.post(this.AddEditUserURL, userModel, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.DeleteUser = function (userId) {
        return this.http.post(this.DeleteUserURL, userId, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.DeleteProject = function (id) {
        return this.http.post(this.DeleteProjectURL, id, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.GetProjectList = function () {
        return this.http.get(this.GetProjectDetailsListURL, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.AddEditProject = function (projectModel) {
        return this.http.post(this.AddProjectURL, projectModel, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.GetTaskList = function () {
        return this.http.get(this.GetTaskDetailsListURL, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.GetParentList = function () {
        return this.http.get(this.GetParentListURL, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.AddEditTask = function (taskModel) {
        return this.http.post(this.AddTaskURL, taskModel, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.AddEditParent = function (parentModel) {
        return this.http.post(this.AddParentTaskURL, parentModel, this.getRequestOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err); }));
    };
    ManageService.prototype.getRequestOptions = function () {
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        requestOptions.headers = headers;
        requestOptions.withCredentials = true;
        return requestOptions;
    };
    ManageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ManageService);
    return ManageService;
}());



/***/ }),

/***/ "./src/app/Manager/View/AddTask.html":
/*!*******************************************!*\
  !*** ./src/app/Manager/View/AddTask.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div style=\"width:80%; padding:3%;margin-left:10%;border:thin;border-color:lightgrey;\">\r\n    <h4>\r\n        Add Task Management\r\n    </h4>\r\n    <label id=\"lblRed\" style=\"color:red;\">{{lblRed}}</label>\r\n    <label id=\"lblGreen\" style=\"color:green;\">{{lblGreen}}</label>\r\n    <div id=\"wrapper\">\r\n        <div id=\"addSection\" style=\"width:100%\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Project\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" [disabled]=\"isParentChecked\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"ProjectName\" />\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    <button type=\"button\" [disabled]=\"isParentChecked\"  class=\"btn btn-default\" style=\"width:100%;height:33px;\" (click)=\"onProjectSearch()\">\r\n                        Search </button>\r\n\r\n                    <dx-popup class=\"popup\" [width]=\"500\" [height]=\"500\" [showTitle]=\"true\" title=\"User\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\"\r\n                        [(visible)]=\"projectPopupVisible\">\r\n                        <dx-data-grid id=\"gridContainer\" [hoverStateEnabled]=\"true\" [dataSource]=\"projectList\" [showBorders]=\"true\" (onRowClick)=\"onProjectRowClick($event)\">\r\n                            <dxi-column dataField=\"Project_ID\" [visible]=\"false\"></dxi-column>\r\n                            <dxi-column dataField=\"Project\"></dxi-column>\r\n                        </dx-data-grid>\r\n\r\n                    </dx-popup>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Task\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" style=\"width:100%;\" id=\"txttaskName\" [(ngModel)]=\"taskAddModel.Task\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;text-align:left;\">\r\n\r\n                </div>\r\n                <div class=\"col-sm-3\" style=\"width:1px;\">\r\n                    <input type=\"checkbox\" id=\"setDate\" [(ngModel)]=\"isParentChecked\" /> Parent Task\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Priority\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <dx-slider [disabled]=\"isParentChecked\" [min]=\"0\" [max]=\"10\" [step]=\"1\" [(ngModel)]=\"taskAddModel.Priority\">\r\n                        <dxo-tooltip [enabled]=\"true\"></dxo-tooltip>\r\n                    </dx-slider>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Parent Task\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" [disabled]=\"isParentChecked\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"ParentName\" />\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    <button type=\"button\" [disabled]=\"isParentChecked\" class=\"btn btn-default\" style=\"width:100%;height:33px;\" (click)=\"onParentSearch()\">\r\n                        Search </button>\r\n\r\n                    <dx-popup class=\"popup\" [width]=\"500\" [height]=\"500\" [showTitle]=\"true\" title=\"User\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\"\r\n                        [(visible)]=\"parentPopupVisible\">\r\n                        <dx-data-grid id=\"gridContainer\" [hoverStateEnabled]=\"true\" [dataSource]=\"parentList\" [showBorders]=\"true\" (onRowClick)=\"onParentRowClick($event)\">\r\n                            <dxi-column dataField=\"Parent_ID\" [visible]=\"false\"></dxi-column>\r\n                            <dxi-column dataField=\"Parent_Task\"></dxi-column>\r\n                        </dx-data-grid>\r\n\r\n                    </dx-popup>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Start Date \r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                        :\r\n                    </div>\r\n                <div class=\"col-sm-2\" style=\"width:1px;\">\r\n                    <dx-date-box [disabled]=\"isParentChecked\" type=\"date\" [(ngModel)]=\"taskAddModel.StartDate\">\r\n                    </dx-date-box>\r\n                </div>\r\n\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    End Date      :\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <dx-date-box [disabled]=\"isParentChecked\" type=\"date\" [(ngModel)]=\"taskAddModel.EndDate\"></dx-date-box>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Manager\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" [disabled]=\"isParentChecked\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"ManagerName\" />\r\n\r\n\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    <button type=\"button\" [disabled]=\"isParentChecked\" class=\"btn btn-default\" style=\"width:100%;height:33px;\" (click)=\"onUserSearch()\">\r\n                        Search </button>\r\n\r\n                    <dx-popup class=\"popup\" [width]=\"500\" [height]=\"500\" [showTitle]=\"true\" title=\"User\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\"\r\n                        [(visible)]=\"userPopupVisible\">\r\n                        <dx-data-grid id=\"gridContainer\" [hoverStateEnabled]=\"true\" [dataSource]=\"userList\" [showBorders]=\"true\" (onRowClick)=\"onUserRowClick($event)\">\r\n                            <dxi-column dataField=\"User_ID\" [visible]=\"false\"></dxi-column>\r\n                            <dxi-column dataField=\"FirstName\"></dxi-column>\r\n                        </dx-data-grid>\r\n\r\n                    </dx-popup>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\" style=\"text-align: right\">\r\n                    <button type=\"button\" class=\"btn-default\" (click)=\"addEditTask()\"> Add </button> &nbsp;&nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn-default\" (click)=\"btnReset()\"> Reset</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Manager/View/ProjectView.html":
/*!***********************************************!*\
  !*** ./src/app/Manager/View/ProjectView.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div style=\"width:80%; padding:3%;margin-left:10%;border:thin;border-color:lightgrey;\">\r\n        <h4>\r\n                Project Management\r\n                </h4>\r\n    <label id=\"lblRed\" style=\"color:red;\">{{lblRed}}</label>\r\n    <label id=\"lblGreen\" style=\"color:green;\">{{lblGreen}}</label>\r\n    <div id=\"wrapper\">\r\n        <div id=\"addSection\" style=\"width:100%\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Project\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"projectAddModel.Project\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\" style=\"font-weight: bold;margin-left:1%;text-align:left;\">\r\n                    <input type=\"checkbox\" id=\"setDate\" [(ngModel)]=\"isDateChecked\" /> Set Start Date and End Date\r\n                </div>\r\n                <div class=\"col-sm-2\" style=\"width:1px;\">\r\n                    <dx-date-box [disabled]=\"!isDateChecked\" type=\"date\" [(ngModel)]=\"projectAddModel.StartDate\">\r\n                    </dx-date-box>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <dx-date-box [disabled]=\"!isDateChecked\" type=\"date\" [(ngModel)]=\"projectAddModel.EndDate\"></dx-date-box>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Priority\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <dx-slider [min]=\"0\" [max]=\"10\" [step]=\"1\" [(ngModel)]=\"projectAddModel.Priority\">\r\n                        <dxo-tooltip [enabled]=\"true\"></dxo-tooltip>\r\n                    </dx-slider>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    Manager\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                    :\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <input type=\"text\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"ManagerName\" />\r\n\r\n\r\n                </div>\r\n                <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                    <button type=\"button\" class=\"btn btn-default\" style=\"width:100%;height:33px;\" (click)=\"onSearch()\">\r\n                        Search </button>\r\n\r\n                    <dx-popup class=\"popup\" [width]=\"500\" [height]=\"500\" [showTitle]=\"true\" title=\"User\" [dragEnabled]=\"false\" [closeOnOutsideClick]=\"true\"\r\n                        [(visible)]=\"popupVisible\">\r\n                        <dx-data-grid id=\"gridContainer\" [hoverStateEnabled]=\"true\" [dataSource]=\"userList\" [showBorders]=\"true\" (onRowClick)=\"onUserRowClick($event)\">\r\n                            <dxi-column dataField=\"User_ID\" [visible]=\"false\"></dxi-column>\r\n                            <dxi-column dataField=\"FirstName\"></dxi-column>\r\n                        </dx-data-grid>\r\n\r\n                    </dx-popup>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\" style=\"text-align: right\">\r\n                    <button type=\"button\" *ngIf=\"projectAddModel.Project_ID == 0\" class=\"btn-default\" (click)=\"addEditProject()\"> Add </button>\r\n                    <button type=\"button\" *ngIf=\"projectAddModel.Project_ID != 0\" class=\"btn-default\" (click)=\"addEditProject()\"> Update </button> &nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn-default\" (click)=\"btnReset()\"> Reset</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div id=\"listsection\" style=\"padding-top:5%;border-top:solid;border-color:dimgrey;\">\r\n            <dx-list height=\"600\" [dataSource]=\"projectList\" itemTemplate=\"data\" [keyExpr]=\"Project_ID\">\r\n                <div *dxTemplate=\"let item of 'data'\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5\" style=\"margin:0.5%;border-radius: 0.25em; background-color:rgb(212, 206, 206);\">\r\n                            <div class=\"row row-temp\" style=\"padding-top:15px;padding-bottom:10px;\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <label id=\"lblProject\" style=\"width:100%\">\r\n                                        <b>Project : &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</b>{{item.Project}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row row-temp\" style=\"padding-bottom:10px;\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <label id=\"lbltasks\">\r\n                                        <b>No of tasks : &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </b>{{item.TaskCount}}</label>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <label id=\"lbltasksC\">\r\n                                        <b>Completed : &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </b>{{item.CompletedTaskCount}}</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row row-temp\" style=\"padding-bottom:10px;\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <label id=\"lblSDate\">\r\n                                        <b>Start Date : &nbsp;&nbsp;&nbsp;&nbsp;</b>{{item.StartDate | date :'shortDate'}}</label>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <label id=\"lblSDate\">\r\n                                        <b>End Date : &nbsp;&nbsp;&nbsp;&nbsp;</b>{{item.EndDate | date :'shortDate'}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\" style=\"padding-top:15px;margin:0.5%;border-radius: 0.25em; background-color:rgb(212, 206, 206);\">\r\n                            <b>Priority</b>\r\n                            <br>\r\n                            <br>\r\n                            <p>\r\n                                {{item.Priority}} </p>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-2\" style=\"margin:1%;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <button type=\"button\" style=\"width:100px;height:40px;\" class=\"btn-default\" (click)=\"updateProjectModel(item)\"> Update </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <button type=\"button\" style=\"width:100px;height:40px;\" class=\"btn-default\" (click)=\"DeleteProject(item)\"> Suspend </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </dx-list>\r\n\r\n        </div>\r\n\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Manager/View/TaskView.html":
/*!********************************************!*\
  !*** ./src/app/Manager/View/TaskView.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div style=\"width:80%; padding:3%;margin-left:10%;border:thin;border-color:lightgrey;\">\r\n    <h4>\r\n        Task Management\r\n    </h4>\r\n    <label id=\"lblRed\" style=\"color:red;\">{{lblRed}}</label>\r\n    <label id=\"lblGreen\" style=\"color:green;\">{{lblGreen}}</label>\r\n    <div id=\"wrapper\">\r\n        <div id=\"addSection\" style=\"width:100%\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-10\" style=\"font-weight: bold;\">\r\n\r\n                    <dx-data-grid id=\"gridContainer\" [hoverStateEnabled]=\"true\" [dataSource]=\"taskList\" [showBorders]=\"true\" [showColumnLines]=\"true\" [showRowLines]=\"true\" (onRowUpdated)=\"EditTask($event)\">\r\n                        <dxo-editing mode=\"row\" [allowUpdating]=\"true\" [allowDeleting]=\"false\" [allowAdding]=\"false\">\r\n                        </dxo-editing>\r\n                        <dxi-column dataField=\"Task_ID\" [visible]=\"false\"></dxi-column>\r\n                        <dxi-column dataField=\"Task\"></dxi-column>\r\n                        <dxi-column dataField=\"ParentName\"></dxi-column>\r\n                        <dxi-column dataField=\"Priority\"></dxi-column>\r\n                        <dxi-column dataField=\"StartDate\" dataType=\"date\"></dxi-column>\r\n                        <dxi-column dataField=\"EndDate\" dataType=\"date\"></dxi-column>\r\n                        <dxi-column cellTemplate=\"data\"></dxi-column>\r\n\r\n                        <div *dxTemplate=\"let item of 'data'\">\r\n                            <a style=\"width:100%;height:33px;\" (click)=\"EndTask(item)\">\r\n                                End Task </a>\r\n                        </div>\r\n                    </dx-data-grid>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Manager/View/UserView.html":
/*!********************************************!*\
  !*** ./src/app/Manager/View/UserView.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div style=\"width:80%; padding:3%;margin-left:10%;border:thin;border-color:lightgrey;\">\r\n        <h4>\r\n               User Management\r\n               </h4>\r\n    <label id=\"lblRed\" style=\"color:red;\" >{{lblRed}}</label>\r\n    <label id=\"lblGreen\" style=\"color:green;\" >{{lblGreen}}</label>\r\n<div id=\"wrapper\">\r\n    <div id=\"addSection\" style=\"width:100%\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                First Name \r\n            </div>\r\n            <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                :\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <input type=\"text\" style=\"width:100%;\" id=\"txtFirstName\" [(ngModel)]=\"userAddModel.FirstName\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\" style=\"font-weight: bold;\">\r\n                Last Name \r\n            </div>\r\n            <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                :\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <input  type=\"text\" style=\"width:100%;\" id=\"txtLastName\" [(ngModel)]=\"userAddModel.LastName\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\" style=\"font-weight: bold;\" >\r\n                EmployeeID\r\n            </div>\r\n            <div class=\"col-sm-1\" style=\"width:1px;\">\r\n                :\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <input type=\"text\" style=\"width:100%;\" id=\"txtEmpID\" [(ngModel)]=\"userAddModel.Employee_ID\"/>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"row\">\r\n    <div class=\"col-sm-8\" style=\"text-align: right\">\r\n        <button type=\"button\" *ngIf=\"userAddModel.User_ID == 0\" class=\"btn-default\" (click)= \"addEditUser()\"> Add </button>\r\n        <button type=\"button\" *ngIf=\"userAddModel.User_ID != 0\"  class=\"btn-default\" (click)= \"addEditUser()\"> Update </button> &nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn-default\" (click)= \"btnReset()\" > Reset</button>\r\n    </div>\r\n    \r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <div id=\"listsection\" style=\"padding-top:5%;border-top:solid;border-color:dimgrey;\">\r\n        <dx-list\r\n        height=\"600\"\r\n        [dataSource]=\"userList\"        \r\n        itemTemplate=\"data\"\r\n        [keyExpr] = \"User_ID\"\r\n    >\r\n        <div *dxTemplate=\"let item of 'data'\">\r\n            <div class=\"row row-temp\" style=\"padding-bottom:10px;\">\r\n                <div class=\"col-sm-4\">\r\n                    <input  type=\"text\" style=\"width:100%;height:45px;\" id=\"txtLastName\" value=\"{{item.FirstName}}\" [disabled]=\"true\"/>  \r\n                </div>\r\n                <div class=\"col-sm-1\">\r\n                        <button type=\"button\"  style=\"width:100%;height:45px;\" class=\"btn-default\" (click)= \"updateUserModel(item)\" > Edit </button> \r\n                </div>\r\n            </div>\r\n            <div class=\"row row-temp\" style=\"padding-bottom:10px;\">\r\n                    <div class=\"col-sm-4\">\r\n                            <input  type=\"text\"  style=\"width:100%;height:45px;\" id=\"txtLastName\" value=\"{{item.LastName}}\" [disabled]=\"true\"/>  \r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                            <button type=\"button\"  style=\"width:100%;height:45px;\" class=\"btn-default\" (click)= \"DeleteUser(item)\"> Delete </button> \r\n                    </div>\r\n                </div>\r\n                <div class=\"row row-temp\" style=\"padding-bottom:10px;\">\r\n                        <div class=\"col-sm-4\">\r\n                            <input  type=\"text\"  style=\"width:100%;height:45px;\" id=\"txtLastName\" value=\"{{item.Employee_ID}}\" [disabled]=\"true\"/> \r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                              \r\n                        </div>\r\n                    </div>\r\n\r\n        </div>\r\n    </dx-list>\r\n\r\n    </div>\r\n    \r\n    <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Manager/home.component.html":
/*!*********************************************!*\
  !*** ./src/app/Manager/home.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom:0;background-color:#0061A0;background-image:none;\">\r\n<div class=\"navbar-collapse collapse\" style=\"display:block;\">\r\n\r\n    <ul class=\"nav navbar-nav\">\r\n        <li>\r\n            <a class=\"navbar-text\" routerLink=\"../user\">Add User</a>\r\n        </li>\r\n        \r\n        <li>\r\n            <a  class=\"navbar-text\" [routerLink]=\"['../addTask']\">Add Task</a>\r\n        </li>\r\n        \r\n        <li>\r\n            <a class=\"navbar-text\" [routerLink]=\"['../project']\">Add Project</a>\r\n        </li>\r\n        \r\n        <li>\r\n            <a class=\"navbar-text\" [routerLink]=\"['../viewTask']\">View Task</a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n</nav>    \r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/Manager/home.component.ts":
/*!*******************************************!*\
  !*** ./src/app/Manager/home.component.ts ***!
  \*******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Home';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Manager/home.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Manager/home.module.ts":
/*!****************************************!*\
  !*** ./src/app/Manager/home.module.ts ***!
  \****************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/Manager/home.component.ts");
/* harmony import */ var _Component_AddTask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/AddTask.component */ "./src/app/Manager/Component/AddTask.component.ts");
/* harmony import */ var _Component_ViewTask_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/ViewTask.component */ "./src/app/Manager/Component/ViewTask.component.ts");
/* harmony import */ var _Component_ProjectView_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/ProjectView.component */ "./src/app/Manager/Component/ProjectView.component.ts");
/* harmony import */ var _Component_UserView_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/UserView.component */ "./src/app/Manager/Component/UserView.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/Manager/home.routing.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _Component_AddTask_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _Component_ViewTask_component__WEBPACK_IMPORTED_MODULE_7__["ViewTaskComponent"],
                _Component_ProjectView_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
                _Component_UserView_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxTemplateModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxDateBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxSliderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxPopupModule"]
            ],
            providers: [],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/Manager/home.routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/Manager/home.routing.module.ts ***!
  \************************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Component_AddTask_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/AddTask.component */ "./src/app/Manager/Component/AddTask.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/Manager/home.component.ts");
/* harmony import */ var _Component_ProjectView_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/ProjectView.component */ "./src/app/Manager/Component/ProjectView.component.ts");
/* harmony import */ var _Component_UserView_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/UserView.component */ "./src/app/Manager/Component/UserView.component.ts");
/* harmony import */ var _Component_ViewTask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/ViewTask.component */ "./src/app/Manager/Component/ViewTask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'addTask', component: _Component_AddTask_component__WEBPACK_IMPORTED_MODULE_2__["AddTaskComponent"] },
    { path: 'viewTask', component: _Component_ViewTask_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"] },
    { path: 'user', component: _Component_UserView_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'project', component: _Component_ProjectView_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Manager_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager/home.component */ "./src/app/Manager/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _Manager_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', component: _Manager_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " ul{\r\n    display: flex;padding-left: 35%;\r\n    flex-direction: row;\r\n}\r\n\r\nli{\r\n    margin-left:5%;\r\n}\r\n\r\na{\r\n    color: white !important;\r\n    width:100% !important;\r\n}\r\n\r\n.navbar-collapse collapse{\r\n    display:block !important;\r\n}\r\n\r\n.btn-default{\r\n    background-color:#0061A0 !important;\r\n    color: white !important;\r\n}\r\n\r\n.row{\r\n    margin-bottom: 5px !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;align:center;\">\n  <h1>\n   Project Manager\n  </h1>\n  <div class=\"row\">\n   \n</div>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProjectManager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Manager_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Manager/home.module */ "./src/app/Manager/home.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _Manager_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\FinalAssessment\UI\ProjectManagerApp\ProjectManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map