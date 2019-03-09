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
var objects;
(function (objects) {
    var Maze = /** @class */ (function (_super) {
        __extends(Maze, _super);
        // constructor
        function Maze() {
            return _super.call(this, managers.GlobalVariableGame.assetManager.getResult("maze")) || this;
        }
        Maze.prototype.Reset = function () {
        };
        Maze.prototype.Start = function () {
        };
        Maze.prototype.Update = function () {
        };
        Maze.prototype.Destroy = function () {
        };
        return Maze;
    }(createjs.Bitmap));
    objects.Maze = Maze;
})(objects || (objects = {}));
//# sourceMappingURL=maze.js.map