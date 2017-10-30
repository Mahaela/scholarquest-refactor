webpackJsonp([7],{

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(5);\r\nvar array_service_1 = __webpack_require__(303);\r\nvar api_service_1 = __webpack_require__(185);\r\nvar MathCloudsComponent = (function () {\r\n    //  @ViewChild('endGameDialog') endGameDialog: EndGameDialogComponent;\r\n    function MathCloudsComponent(renderer, arrayService, apiService) {\r\n        this.renderer = renderer;\r\n        this.arrayService = arrayService;\r\n        this.apiService = apiService;\r\n        this.state = 'moving';\r\n        this.mathProblemsFull = [];\r\n        this.mathProblemsRemaining = [];\r\n        this.score = 0;\r\n        this.strikes = 0;\r\n        this.scoreText = \"Score : 0\";\r\n        this.displayedProblems = [];\r\n        this.boxMoveRightDistance = -120;\r\n        this.strikeIcons = [];\r\n        this.startSpeed = .1;\r\n        // this.mathProblemsFull = this.mathProblemsService.getFirstGradeMathEquations();\r\n        // this.mathProblemsRemaining = this.mathProblemsService.getFirstGradeMathEquations(); \r\n        this.getProblems();\r\n    }\r\n    /**\r\n     * get the game ready\r\n     */\r\n    MathCloudsComponent.prototype.ngAfterViewInit = function () {\r\n        // get the displayed strikes\r\n        for (var i = 0; i < Object.keys(document.body.querySelectorAll('md-icon')).length; ++i) {\r\n            if (document.body.querySelectorAll('md-icon')[i].innerHTML == \"clear\") {\r\n                this.strikeIcons.push(document.body.querySelectorAll('md-icon')[i]);\r\n            }\r\n        }\r\n        this.loadGameBoard();\r\n    };\r\n    /**\r\n     * get the problems that will be displayed\r\n     */\r\n    MathCloudsComponent.prototype.getProblems = function () {\r\n        if (this.mathProblemsRemaining.length == 0)\r\n            this.mathProblemsRemaining = this.mathProblemsFull.slice();\r\n        this.displayedProblems = [];\r\n        // get the solution that will be displayed\r\n        this.displayedMathSolution = this.mathProblemsRemaining.splice(Math.floor(Math.random() * this.mathProblemsRemaining.length), 1)[0];\r\n        this.displayedProblems.push(this.arrayService.selectRandom(this.displayedMathSolution.problems, 1));\r\n        // find and remove the solution from the tempMathProblems array so that it doesnt repeat in the displayedProblems\r\n        var tempMathProblems = this.mathProblemsFull.slice();\r\n        for (var i = 0; i < tempMathProblems.length; i++) {\r\n            if (tempMathProblems[i].solution == this.displayedMathSolution.solution) {\r\n                tempMathProblems.splice(i, 1);\r\n            }\r\n        }\r\n        // add the remaining problems to be displayed    \r\n        for (var j = 0; j < 2; j++) {\r\n            var equation = tempMathProblems.splice(Math.floor(Math.random() * tempMathProblems.length), 1)[0];\r\n            this.displayedProblems.push(equation.problems[Math.floor(Math.random() * equation.problems.length)]);\r\n        }\r\n        // shuffle the displayed problems\r\n        this.displayedProblems = this.arrayService.shuffle(this.displayedProblems);\r\n    };\r\n    /**\r\n     * check to see if the correct answer was selected\r\n     * @param position\r\n     */\r\n    MathCloudsComponent.prototype.checkCorrect = function (position) {\r\n        var _this = this;\r\n        var isCorrect = false;\r\n        this.displayedMathSolution.problems.forEach(function (p) {\r\n            if (p == _this.displayedProblems[position]) {\r\n                isCorrect = true;\r\n                _this.score += 10;\r\n                _this.scoreText = \"Score : \" + _this.score;\r\n                _this.getProblems();\r\n                _this.boxMoveRightDistance = -120;\r\n                _this.boxSpeed += .03;\r\n            }\r\n        });\r\n        if (!isCorrect) {\r\n            this.addStrike();\r\n        }\r\n    };\r\n    /**\r\n     * add a strike to the player\r\n     */\r\n    MathCloudsComponent.prototype.addStrike = function () {\r\n        // change the strike color to red\r\n        if (this.strikes < this.strikeIcons.length) {\r\n            this.renderer.setElementStyle(this.strikeIcons[this.strikes], 'color', 'red');\r\n            this.strikes++;\r\n            // if the player has lost, open a dialog prompting the user to play again\r\n            if (this.strikes == this.strikeIcons.length) {\r\n                //  this.endGameDialog.openLoseDialog();\r\n                this.apiService.addCoins(this.score);\r\n                // stop the clock\r\n                clearInterval(this.boxMovingInterval);\r\n            }\r\n            else {\r\n                this.getProblems();\r\n                this.boxMoveRightDistance = -120;\r\n            }\r\n        }\r\n    };\r\n    /*\r\n    * change the vocabulary when a new word is selected\r\n    */\r\n    //  changeGradeLevel(event){\r\n    //    switch(event) { \r\n    //        case 2: { \r\n    //            this.mathProblemsFull = this.mathProblemsService.getSecondGradeMathEquations();\r\n    //            break; \r\n    //        }\r\n    //        case 3: { \r\n    //            this.mathProblemsFull = this.mathProblemsService.getThirdGradeMathEquations();\r\n    //            break; \r\n    //        }\r\n    //        case 4: { \r\n    //            this.mathProblemsFull = this.mathProblemsService.getFourthGradeMathEquations();            \r\n    //            break; \r\n    //        }\r\n    //        case 5: { \r\n    //            this.mathProblemsFull = this.mathProblemsService.getFifthGradeMathEquations();                         \r\n    //            break; \r\n    //        }\r\n    //        case 6: { \r\n    //            this.mathProblemsFull  = this.mathProblemsService.getSixthGradeMathEquations();\r\n    //            break; \r\n    //        } \r\n    //        default: { \r\n    //            this.mathProblemsFull = this.mathProblemsService.getFirstGradeMathEquations();\r\n    //            break; \r\n    //        }\r\n    //    }\r\n    //    this.mathProblemsRemaining = this.mathProblemsFull.slice();\r\n    //    this.replay(); \r\n    //  }\r\n    /*\r\n    * reload the gameboard;\r\n    */\r\n    MathCloudsComponent.prototype.loadGameBoard = function () {\r\n        var _this = this;\r\n        this.boxSpeed = this.startSpeed;\r\n        // decrement the clock every second\r\n        this.boxMovingInterval = setInterval(function (x) {\r\n            if (_this.boxMoveRightDistance < 580) {\r\n                _this.boxMoveRightDistance += _this.boxSpeed;\r\n                _this.renderer.setElementStyle(_this.box.nativeElement, 'left', _this.boxMoveRightDistance + 'px');\r\n            }\r\n            else {\r\n                _this.addStrike();\r\n            }\r\n        }, 1);\r\n    };\r\n    /**\r\n     * play again\r\n     */\r\n    MathCloudsComponent.prototype.replay = function () {\r\n        var _this = this;\r\n        this.getProblems();\r\n        clearInterval(this.boxMovingInterval);\r\n        this.boxMoveRightDistance = -120;\r\n        this.strikeIcons.forEach(function (icon) {\r\n            _this.renderer.setElementStyle(icon, 'color', null);\r\n        });\r\n        this.strikes = 0;\r\n        this.loadGameBoard();\r\n    };\r\n    __decorate([\r\n        core_1.ViewChild('box'),\r\n        __metadata(\"design:type\", typeof (_a = typeof core_1.ElementRef !== \"undefined\" && core_1.ElementRef) === \"function\" && _a || Object)\r\n    ], MathCloudsComponent.prototype, \"box\", void 0);\r\n    MathCloudsComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'sq-math-clouds',\r\n            template: __webpack_require__(1436),\r\n            styles: [__webpack_require__(1455)]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [typeof (_b = typeof core_1.Renderer !== \"undefined\" && core_1.Renderer) === \"function\" && _b || Object, typeof (_c = typeof array_service_1.ArrayService !== \"undefined\" && array_service_1.ArrayService) === \"function\" && _c || Object, typeof (_d = typeof api_service_1.ApiService !== \"undefined\" && api_service_1.ApiService) === \"function\" && _d || Object])\r\n    ], MathCloudsComponent);\r\n    return MathCloudsComponent;\r\n    var _a, _b, _c, _d;\r\n}());\r\nexports.MathCloudsComponent = MathCloudsComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE1Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9tYXRoLWNsb3Vkcy9tYXRoLWNsb3Vkcy5jb21wb25lbnQudHM/MTkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFycmF5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC91dGlscy9hcnJheS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvYXBpLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3EtbWF0aC1jbG91ZHMnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL21hdGgtY2xvdWRzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9tYXRoLWNsb3Vkcy5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRoQ2xvdWRzQ29tcG9uZW50IHtcclxuICBcclxuICBzdGF0ZSA9J21vdmluZyc7XHJcbiAgcHJpdmF0ZSBtYXRoUHJvYmxlbXNGdWxsID0gW107XHJcbiAgcHJpdmF0ZSBtYXRoUHJvYmxlbXNSZW1haW5pbmcgPSBbXTtcclxuICBwcml2YXRlIGRpc3BsYXllZE1hdGhTb2x1dGlvbjogYW55O1xyXG4gIHByaXZhdGUgc2NvcmUgPSAwO1xyXG4gIHByaXZhdGUgc3RyaWtlcyA9IDA7XHJcbiAgcHJpdmF0ZSBzY29yZVRleHQgPVwiU2NvcmUgOiAwXCJcclxuICBwcml2YXRlIGRpc3BsYXllZFByb2JsZW1zID0gW107XHJcbiAgcHJpdmF0ZSBib3hNb3ZpbmdJbnRlcnZhbDogYW55O1xyXG4gIHByaXZhdGUgYm94TW92ZVJpZ2h0RGlzdGFuY2UgPSAtMTIwO1xyXG4gIHByaXZhdGUgYm94U3BlZWQ7XHJcbiAgcHJpdmF0ZSBzdHJpa2VJY29ucyA9IFtdO1xyXG4gIHByaXZhdGUgc3RhcnRTcGVlZCA9IC4xO1xyXG4gXHJcbiAgIEBWaWV3Q2hpbGQoJ2JveCcpIGJveDogRWxlbWVudFJlZjtcclxuIFxyXG4gIC8vICBAVmlld0NoaWxkKCdlbmRHYW1lRGlhbG9nJykgZW5kR2FtZURpYWxvZzogRW5kR2FtZURpYWxvZ0NvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCAgcHJpdmF0ZSBhcnJheVNlcnZpY2U6IEFycmF5U2VydmljZSwgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlICl7XHJcbiAgICBcclxuICAgIC8vIHRoaXMubWF0aFByb2JsZW1zRnVsbCA9IHRoaXMubWF0aFByb2JsZW1zU2VydmljZS5nZXRGaXJzdEdyYWRlTWF0aEVxdWF0aW9ucygpO1xyXG4gICAgLy8gdGhpcy5tYXRoUHJvYmxlbXNSZW1haW5pbmcgPSB0aGlzLm1hdGhQcm9ibGVtc1NlcnZpY2UuZ2V0Rmlyc3RHcmFkZU1hdGhFcXVhdGlvbnMoKTsgXHJcbiAgICB0aGlzLmdldFByb2JsZW1zKCk7ICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCB0aGUgZ2FtZSByZWFkeVxyXG4gICAqL1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICAgLy8gZ2V0IHRoZSBkaXNwbGF5ZWQgc3RyaWtlc1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdtZC1pY29uJykpLmxlbmd0aDsgKytpKXtcclxuICAgICAgICBpZihkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ21kLWljb24nKVtpXS5pbm5lckhUTUwgPT0gXCJjbGVhclwiKXtcclxuICAgICAgICAgIHRoaXMuc3RyaWtlSWNvbnMucHVzaChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ21kLWljb24nKVtpXSk7XHJcbiAgICAgICB9ICBcclxuICAgICB9XHJcbiAgICAgdGhpcy5sb2FkR2FtZUJvYXJkKCk7XHJcbiAgIH1cclxuXHJcbi8qKlxyXG4gKiBnZXQgdGhlIHByb2JsZW1zIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICovXHJcbiAgZ2V0UHJvYmxlbXMoKXtcclxuXHJcbiAgICBpZih0aGlzLm1hdGhQcm9ibGVtc1JlbWFpbmluZy5sZW5ndGggPT0gMCkgdGhpcy5tYXRoUHJvYmxlbXNSZW1haW5pbmcgPSB0aGlzLm1hdGhQcm9ibGVtc0Z1bGwuc2xpY2UoKTtcclxuIFxyXG4gICAgIHRoaXMuZGlzcGxheWVkUHJvYmxlbXMgPSBbXTtcclxuICAgIC8vIGdldCB0aGUgc29sdXRpb24gdGhhdCB3aWxsIGJlIGRpc3BsYXllZFxyXG4gICAgdGhpcy5kaXNwbGF5ZWRNYXRoU29sdXRpb24gPSB0aGlzLm1hdGhQcm9ibGVtc1JlbWFpbmluZy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tYXRoUHJvYmxlbXNSZW1haW5pbmcubGVuZ3RoKSwgMSlbMF07ICAgIFxyXG4gICAgdGhpcy5kaXNwbGF5ZWRQcm9ibGVtcy5wdXNoKHRoaXMuYXJyYXlTZXJ2aWNlLnNlbGVjdFJhbmRvbSh0aGlzLmRpc3BsYXllZE1hdGhTb2x1dGlvbi5wcm9ibGVtcywgMSkpO1xyXG4gIFxyXG4gICAgLy8gZmluZCBhbmQgcmVtb3ZlIHRoZSBzb2x1dGlvbiBmcm9tIHRoZSB0ZW1wTWF0aFByb2JsZW1zIGFycmF5IHNvIHRoYXQgaXQgZG9lc250IHJlcGVhdCBpbiB0aGUgZGlzcGxheWVkUHJvYmxlbXNcclxuICAgIHZhciB0ZW1wTWF0aFByb2JsZW1zID0gdGhpcy5tYXRoUHJvYmxlbXNGdWxsLnNsaWNlKCk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGVtcE1hdGhQcm9ibGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGlmKHRlbXBNYXRoUHJvYmxlbXNbaV0uc29sdXRpb24gPT0gdGhpcy5kaXNwbGF5ZWRNYXRoU29sdXRpb24uc29sdXRpb24pe1xyXG4gICAgICAgIHRlbXBNYXRoUHJvYmxlbXMuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgdGhlIHJlbWFpbmluZyBwcm9ibGVtcyB0byBiZSBkaXNwbGF5ZWQgICAgXHJcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgMjsgaisrKXtcclxuICAgICAgdmFyIGVxdWF0aW9uID0gdGVtcE1hdGhQcm9ibGVtcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGVtcE1hdGhQcm9ibGVtcy5sZW5ndGgpLDEpWzBdXHJcbiAgICAgIHRoaXMuZGlzcGxheWVkUHJvYmxlbXMucHVzaChlcXVhdGlvbi5wcm9ibGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcXVhdGlvbi5wcm9ibGVtcy5sZW5ndGgpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2h1ZmZsZSB0aGUgZGlzcGxheWVkIHByb2JsZW1zXHJcbiAgICB0aGlzLmRpc3BsYXllZFByb2JsZW1zID0gdGhpcy5hcnJheVNlcnZpY2Uuc2h1ZmZsZSh0aGlzLmRpc3BsYXllZFByb2JsZW1zKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNoZWNrIHRvIHNlZSBpZiB0aGUgY29ycmVjdCBhbnN3ZXIgd2FzIHNlbGVjdGVkXHJcbiAqIEBwYXJhbSBwb3NpdGlvbiBcclxuICovXHJcbmNoZWNrQ29ycmVjdChwb3NpdGlvbil7XHJcblxyXG4gICAgdmFyIGlzQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kaXNwbGF5ZWRNYXRoU29sdXRpb24ucHJvYmxlbXMuZm9yRWFjaChwID0+e1xyXG4gICAgICBpZihwID09IHRoaXMuZGlzcGxheWVkUHJvYmxlbXNbcG9zaXRpb25dKXtcclxuICAgICAgICBpc0NvcnJlY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XHJcbiAgICAgICAgdGhpcy4gc2NvcmVUZXh0ID0gXCJTY29yZSA6IFwiICsgdGhpcy5zY29yZTtcclxuICAgICAgICB0aGlzLmdldFByb2JsZW1zKCk7XHJcbiAgICAgICAgdGhpcy5ib3hNb3ZlUmlnaHREaXN0YW5jZSA9IC0xMjA7XHJcbiAgICAgICAgdGhpcy5ib3hTcGVlZCArPS4wMztcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmKCFpc0NvcnJlY3Qpe1xyXG4gICAgICB0aGlzLmFkZFN0cmlrZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBhIHN0cmlrZSB0byB0aGUgcGxheWVyXHJcbiAgICovXHJcbiAgYWRkU3RyaWtlKCl7XHJcbiAgICAgICAvLyBjaGFuZ2UgdGhlIHN0cmlrZSBjb2xvciB0byByZWRcclxuICAgICAgIGlmKHRoaXMuc3RyaWtlcyA8IHRoaXMuc3RyaWtlSWNvbnMubGVuZ3RoKXtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5zdHJpa2VJY29uc1t0aGlzLnN0cmlrZXNdLCAnY29sb3InLCAncmVkJyk7XHJcbiAgICAgICAgIHRoaXMuc3RyaWtlcysrO1xyXG4gICAgICAgICAvLyBpZiB0aGUgcGxheWVyIGhhcyBsb3N0LCBvcGVuIGEgZGlhbG9nIHByb21wdGluZyB0aGUgdXNlciB0byBwbGF5IGFnYWluXHJcbiAgICAgICAgIGlmKHRoaXMuc3RyaWtlcyA9PSB0aGlzLnN0cmlrZUljb25zLmxlbmd0aCl7IFxyXG4gICAgICAgICAgLy8gIHRoaXMuZW5kR2FtZURpYWxvZy5vcGVuTG9zZURpYWxvZygpO1xyXG4gICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5hZGRDb2lucyh0aGlzLnNjb3JlKTtcclxuICAgICAgICAgICAvLyBzdG9wIHRoZSBjbG9ja1xyXG4gICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib3hNb3ZpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgdGhpcy5nZXRQcm9ibGVtcygpO1xyXG4gICAgICAgICAgIHRoaXMuYm94TW92ZVJpZ2h0RGlzdGFuY2UgPSAtMTIwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgICBcclxuICAgLypcclxuICAgKiBjaGFuZ2UgdGhlIHZvY2FidWxhcnkgd2hlbiBhIG5ldyB3b3JkIGlzIHNlbGVjdGVkXHJcbiAgICovXHJcbiAgLy8gIGNoYW5nZUdyYWRlTGV2ZWwoZXZlbnQpe1xyXG4gXHJcbiAgLy8gICAgc3dpdGNoKGV2ZW50KSB7IFxyXG4gIC8vICAgICAgICBjYXNlIDI6IHsgXHJcbiAgLy8gICAgICAgICAgICB0aGlzLm1hdGhQcm9ibGVtc0Z1bGwgPSB0aGlzLm1hdGhQcm9ibGVtc1NlcnZpY2UuZ2V0U2Vjb25kR3JhZGVNYXRoRXF1YXRpb25zKCk7XHJcbiAgLy8gICAgICAgICAgICBicmVhazsgXHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICAgICAgY2FzZSAzOiB7IFxyXG4gIC8vICAgICAgICAgICAgdGhpcy5tYXRoUHJvYmxlbXNGdWxsID0gdGhpcy5tYXRoUHJvYmxlbXNTZXJ2aWNlLmdldFRoaXJkR3JhZGVNYXRoRXF1YXRpb25zKCk7XHJcbiAgLy8gICAgICAgICAgICBicmVhazsgXHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICAgICAgY2FzZSA0OiB7IFxyXG4gIC8vICAgICAgICAgICAgdGhpcy5tYXRoUHJvYmxlbXNGdWxsID0gdGhpcy5tYXRoUHJvYmxlbXNTZXJ2aWNlLmdldEZvdXJ0aEdyYWRlTWF0aEVxdWF0aW9ucygpOyAgICAgICAgICAgIFxyXG4gIC8vICAgICAgICAgICAgYnJlYWs7IFxyXG4gIC8vICAgICAgICB9XHJcbiAgLy8gICAgICAgIGNhc2UgNTogeyBcclxuICAvLyAgICAgICAgICAgIHRoaXMubWF0aFByb2JsZW1zRnVsbCA9IHRoaXMubWF0aFByb2JsZW1zU2VydmljZS5nZXRGaWZ0aEdyYWRlTWF0aEVxdWF0aW9ucygpOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgIGJyZWFrOyBcclxuICAvLyAgICAgICAgfVxyXG4gIC8vICAgICAgICBjYXNlIDY6IHsgXHJcbiAgLy8gICAgICAgICAgICB0aGlzLm1hdGhQcm9ibGVtc0Z1bGwgID0gdGhpcy5tYXRoUHJvYmxlbXNTZXJ2aWNlLmdldFNpeHRoR3JhZGVNYXRoRXF1YXRpb25zKCk7XHJcbiAgLy8gICAgICAgICAgICBicmVhazsgXHJcbiAgLy8gICAgICAgIH0gXHJcbiAgLy8gICAgICAgIGRlZmF1bHQ6IHsgXHJcbiAgLy8gICAgICAgICAgICB0aGlzLm1hdGhQcm9ibGVtc0Z1bGwgPSB0aGlzLm1hdGhQcm9ibGVtc1NlcnZpY2UuZ2V0Rmlyc3RHcmFkZU1hdGhFcXVhdGlvbnMoKTtcclxuICAvLyAgICAgICAgICAgIGJyZWFrOyBcclxuICAvLyAgICAgICAgfVxyXG4gIC8vICAgIH1cclxuICAvLyAgICB0aGlzLm1hdGhQcm9ibGVtc1JlbWFpbmluZyA9IHRoaXMubWF0aFByb2JsZW1zRnVsbC5zbGljZSgpO1xyXG4gIC8vICAgIHRoaXMucmVwbGF5KCk7IFxyXG4gIC8vICB9XHJcbiBcclxuICAgLypcclxuICAgKiByZWxvYWQgdGhlIGdhbWVib2FyZDtcclxuICAgKi8gXHJcbiAgIGxvYWRHYW1lQm9hcmQoKXtcclxuICAgICB0aGlzLmJveFNwZWVkID0gdGhpcy5zdGFydFNwZWVkO1xyXG4gICAgIC8vIGRlY3JlbWVudCB0aGUgY2xvY2sgZXZlcnkgc2Vjb25kXHJcbiAgICAgXHJcbiAgICAgdGhpcy5ib3hNb3ZpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKHggPT4ge1xyXG4gXHJcbiAgICAgICBpZih0aGlzLmJveE1vdmVSaWdodERpc3RhbmNlIDwgNTgwKXtcclxuICAgICAgICAgdGhpcy5ib3hNb3ZlUmlnaHREaXN0YW5jZSArPSB0aGlzLmJveFNwZWVkO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmJveC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuYm94TW92ZVJpZ2h0RGlzdGFuY2UgKyAncHgnKTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuYWRkU3RyaWtlKCk7XHJcbiAgICAgICB9XHJcbiAgICAgfSwgMSk7XHJcbiAgIH1cclxuXHJcblxyXG4gLyoqXHJcbiAgKiBwbGF5IGFnYWluXHJcbiAgKi9cclxuICAgcmVwbGF5KCl7XHJcbiAgICAgdGhpcy5nZXRQcm9ibGVtcygpO1xyXG4gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ib3hNb3ZpbmdJbnRlcnZhbCk7XHJcbiAgICAgdGhpcy5ib3hNb3ZlUmlnaHREaXN0YW5jZSA9IC0xMjA7XHJcbiAgICAgdGhpcy5zdHJpa2VJY29ucy5mb3JFYWNoKGljb24gPT4geyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShpY29uLCAnY29sb3InLCBudWxsKTtcclxuICAgfSk7XHJcbiAgICAgdGhpcy5zdHJpa2VzID0gMDtcclxuICAgICB0aGlzLmxvYWRHYW1lQm9hcmQoKTtcclxuICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vYXNzZXRzL2FwcC9zdHVkZW50L2dhbWVzL21hdGgtY2xvdWRzL21hdGgtY2xvdWRzLmNvbXBvbmVudC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFRQTtBQWtCQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBbEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBLQTtBQUFBO0FBQUE7QUFBQTtBQWhCQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7QUFwQkE7QUFxTEE7O0FBQUE7QUFyTEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1152\n");

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(5);\r\nvar common_1 = __webpack_require__(63);\r\nvar material_1 = __webpack_require__(184);\r\nvar flex_layout_1 = __webpack_require__(302);\r\nvar router_1 = __webpack_require__(186);\r\nvar math_clouds_component_1 = __webpack_require__(1152);\r\nvar routes = [\r\n    { path: '', component: math_clouds_component_1.MathCloudsComponent },\r\n    { path: 'math-clouds', component: math_clouds_component_1.MathCloudsComponent }\r\n];\r\nvar MathCloudsModule = (function () {\r\n    function MathCloudsModule() {\r\n    }\r\n    MathCloudsModule = __decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                common_1.CommonModule,\r\n                material_1.MaterialModule,\r\n                flex_layout_1.FlexLayoutModule,\r\n                router_1.RouterModule.forChild(routes),\r\n            ],\r\n            declarations: [\r\n                math_clouds_component_1.MathCloudsComponent\r\n            ]\r\n        })\r\n    ], MathCloudsModule);\r\n    return MathCloudsModule;\r\n}());\r\nexports.default = MathCloudsModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE1My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9tYXRoLWNsb3Vkcy9tYXRoLWNsb3Vkcy5tb2R1bGUudHM/Mjg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IE1hdGhDbG91ZHNDb21wb25lbnQgfSBmcm9tICcuL21hdGgtY2xvdWRzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE1hdGhDbG91ZHNDb21wb25lbnQgfSxcclxuXHR7IHBhdGg6ICdtYXRoLWNsb3VkcycsIGNvbXBvbmVudDogTWF0aENsb3Vkc0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdGVyaWFsTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRNYXRoQ2xvdWRzQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoQ2xvdWRzTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vYXNzZXRzL2FwcC9zdHVkZW50L2dhbWVzL21hdGgtY2xvdWRzL21hdGgtY2xvdWRzLm1vZHVsZS50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1153\n");

/***/ }),

/***/ 1436:
/***/ (function(module, exports) {

eval("module.exports = \"<sq-grade-sidenav (buttonClicked)=\\\"changeGradeLevel($event)\\\">\\r\\n\\r\\n    <div class=\\\"title\\\">Title</div>\\r\\n    <div class=\\\"score\\\">{{scoreText}}</div>\\r\\n    <div class=\\\"errors\\\">\\r\\n        <div>\\r\\n            <md-icon>clear</md-icon>\\r\\n            <md-icon>clear</md-icon>\\r\\n            <md-icon>clear</md-icon>\\r\\n            <md-icon>clear</md-icon>\\r\\n            <md-icon>clear</md-icon>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"frame\\\">\\r\\n        <div fxLayout=\\\"row\\\" fxFlex=\\\"100\\\" fxLayout.xs=\\\"column\\\" fxLayoutGap=\\\"25px\\\" fxLayoutAlign=\\\"center\\\">\\r\\n            <div class=\\\"wall\\\" fxFlex=\\\"15\\\"></div>\\r\\n            <div fxLayout=\\\"column\\\" fxFlex=\\\"71\\\">\\r\\n                <div fxLayout=\\\"row\\\" fxFlex=\\\"100\\\" fxLayout.xs=\\\"column\\\" fxLayoutGap=\\\"25px\\\" fxLayoutAlign=\\\"center\\\">\\r\\n                    <div class=\\\"pipe\\\" #pipe1 (click)=\\\"checkCorrect(0)\\\">\\r\\n                        <div class=\\\"pipe-text\\\">{{displayedProblems[0]}}</div>\\r\\n                    </div>\\r\\n                    <div class=\\\"pipe\\\" #pipe2 (click)=\\\"checkCorrect(1)\\\">\\r\\n                        <div class=\\\"pipe-text\\\">{{displayedProblems[1]}}</div>\\r\\n                    </div>\\r\\n                    <div class=\\\"pipe\\\" #pipe3 (click)=\\\"checkCorrect(2)\\\">\\r\\n                        <div class=\\\"pipe-text\\\">{{displayedProblems[2]}}</div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"solution\\\" #box>\\r\\n                    <div class=\\\"solution-text\\\">{{displayedMathSolution.solution}}</div>\\r\\n                </div>\\r\\n\\r\\n                <div class=\\\"box-container\\\" fxLayout=\\\"row\\\" fxFlex=\\\"100\\\" fxLayout.xs=\\\"column\\\" fxLayoutGap=\\\"25px\\\" fxLayoutAlign=\\\"center\\\">\\r\\n                    <div class=\\\"box\\\" #box1></div>\\r\\n                    <div class=\\\"box\\\" #box2></div>\\r\\n                    <div class=\\\"box\\\" #box3></div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"wall\\\" fxFlex=\\\"15\\\"></div>\\r\\n        </div>\\r\\n    </div>\\r\\n</sq-grade-sidenav>\\r\\n<sq-end-game-dialog (playAgainSelect)=\\\"replay()\\\" #endGameDialog></sq-end-game-dialog>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQzNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9tYXRoLWNsb3Vkcy9tYXRoLWNsb3Vkcy5jb21wb25lbnQuaHRtbD85Y2E3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3EtZ3JhZGUtc2lkZW5hdiAoYnV0dG9uQ2xpY2tlZCk9XFxcImNoYW5nZUdyYWRlTGV2ZWwoJGV2ZW50KVxcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5UaXRsZTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZVxcXCI+e3tzY29yZVRleHR9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvcnNcXFwiPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5jbGVhcjwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5jbGVhcjwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5jbGVhcjwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5jbGVhcjwvbWQtaWNvbj5cXHJcXG4gICAgICAgICAgICA8bWQtaWNvbj5jbGVhcjwvbWQtaWNvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZnJhbWVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeEZsZXg9XFxcIjEwMFxcXCIgZnhMYXlvdXQueHM9XFxcImNvbHVtblxcXCIgZnhMYXlvdXRHYXA9XFxcIjI1cHhcXFwiIGZ4TGF5b3V0QWxpZ249XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2FsbFxcXCIgZnhGbGV4PVxcXCIxNVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cXFwiY29sdW1uXFxcIiBmeEZsZXg9XFxcIjcxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBmeExheW91dD1cXFwicm93XFxcIiBmeEZsZXg9XFxcIjEwMFxcXCIgZnhMYXlvdXQueHM9XFxcImNvbHVtblxcXCIgZnhMYXlvdXRHYXA9XFxcIjI1cHhcXFwiIGZ4TGF5b3V0QWxpZ249XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlXFxcIiAjcGlwZTEgKGNsaWNrKT1cXFwiY2hlY2tDb3JyZWN0KDApXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlLXRleHRcXFwiPnt7ZGlzcGxheWVkUHJvYmxlbXNbMF19fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlXFxcIiAjcGlwZTIgKGNsaWNrKT1cXFwiY2hlY2tDb3JyZWN0KDEpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlLXRleHRcXFwiPnt7ZGlzcGxheWVkUHJvYmxlbXNbMV19fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlXFxcIiAjcGlwZTMgKGNsaWNrKT1cXFwiY2hlY2tDb3JyZWN0KDIpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaXBlLXRleHRcXFwiPnt7ZGlzcGxheWVkUHJvYmxlbXNbMl19fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzb2x1dGlvblxcXCIgI2JveD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNvbHV0aW9uLXRleHRcXFwiPnt7ZGlzcGxheWVkTWF0aFNvbHV0aW9uLnNvbHV0aW9ufX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1jb250YWluZXJcXFwiIGZ4TGF5b3V0PVxcXCJyb3dcXFwiIGZ4RmxleD1cXFwiMTAwXFxcIiBmeExheW91dC54cz1cXFwiY29sdW1uXFxcIiBmeExheW91dEdhcD1cXFwiMjVweFxcXCIgZnhMYXlvdXRBbGlnbj1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCIgI2JveDE+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiICNib3gyPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIiAjYm94Mz48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2FsbFxcXCIgZnhGbGV4PVxcXCIxNVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zcS1ncmFkZS1zaWRlbmF2PlxcclxcbjxzcS1lbmQtZ2FtZS1kaWFsb2cgKHBsYXlBZ2FpblNlbGVjdCk9XFxcInJlcGxheSgpXFxcIiAjZW5kR2FtZURpYWxvZz48L3NxLWVuZC1nYW1lLWRpYWxvZz5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9tYXRoLWNsb3Vkcy9tYXRoLWNsb3Vkcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTQzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1436\n");

/***/ }),

/***/ 1455:
/***/ (function(module, exports) {

eval("module.exports = \".frame {\\n  width: 800px;\\n  min-width: 800px;\\n  height: 600px;\\n  min-height: 600px;\\n  border: solid black;\\n  margin: auto;\\n}\\n\\n.pipe {\\n  height: 125px;\\n  width: 200px;\\n  border: solid black;\\n  text-align: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n\\n.pipe-text {\\n  margin-top: 40px;\\n}\\n\\n.box {\\n  height: 75px;\\n  width: 200px;\\n  border: solid black;\\n}\\n\\n.wall {\\n  border: solid black;\\n  z-index: 2;\\n  background-color: white;\\n}\\n\\n.solution {\\n  position: relative;\\n  border: solid black;\\n  width: 95px;\\n  height: 95px;\\n  left: -120px;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.solution-text {\\n  margin-top: 40px;\\n}\\n\\n.title {\\n  text-align: center;\\n}\\n\\n.score {\\n  float: right;\\n  margin-right: 10%;\\n}\\n\\n.errors {\\n  margin-left: 10%;\\n}\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1NS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc3R1ZGVudC9nYW1lcy9tYXRoLWNsb3Vkcy9tYXRoLWNsb3Vkcy5jb21wb25lbnQuY3NzPzY3MzkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5mcmFtZSB7XFxuICB3aWR0aDogODAwcHg7XFxuICBtaW4td2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnBpcGUge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGlwZS10ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5ib3gge1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG59XFxuXFxuLndhbGwge1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNvbHV0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XFxuICB3aWR0aDogOTVweDtcXG4gIGhlaWdodDogOTVweDtcXG4gIGxlZnQ6IC0xMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2x1dGlvbi10ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zY29yZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG59XFxuXFxuLmVycm9ycyB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2FwcC9zdHVkZW50L2dhbWVzL21hdGgtY2xvdWRzL21hdGgtY2xvdWRzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NTVcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1455\n");

/***/ })

});