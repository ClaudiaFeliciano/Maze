var __extends = (this && this.__extends) || (function () {
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
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // constructor
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        StartScene.prototype.Start = function () {
            //this._space = new objects.Space();
            this._nameGame = new objects.Label("Maze Game", "60px", "Consolas", "#FF00F0", 399, 140, true);
            this._playButton = new objects.Button("playButton", 420, 260, true);
            this._helpButton = new objects.Button("helpButton", 300, 360, true);
            this._quitButton = new objects.Button("quitButton", 420, 460, true);
            this._nameStudent = new objects.Label("Student:Claudia Feliciano Torres", "13px", "Consolas", "#FF00F0", 120, 10, true);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            // this._space.Update();
        };
        StartScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        StartScene.prototype.Reset = function () {
        };
        StartScene.prototype.Main = function () {
            //this.addChild(this._space);
            this.addChild(this._nameGame);
            this.addChild(this._playButton);
            this.addChild(this._helpButton);
            this.addChild(this._quitButton);
            this.addChild(this._nameStudent);
            this._playButton.on("click", function () {
                managers.GlobalVariableGame.currentState = config.Scene.PLAY;
            });
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=startscene.js.map