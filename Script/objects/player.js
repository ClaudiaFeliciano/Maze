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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // constructors
        function Player() {
            var _this = _super.call(this, "owl") || this;
            _this.Start();
            return _this;
        }
        // public methods
        Player.prototype.Start = function () {
            //this.regX = this.HalfWidth;
            //this.regY = this.HalfHeight;
            this.x = 737; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 10; //kiero k el avion comienze en el medio de mi eje y
        };
        Player.prototype.Update = function () {
            // checking the bottom boundary
            if (this.y >= 650 - this.HalfWidth) { //it is not responsive.If I want to fo that i should add a configuration file
                this.y = 650 - this.HalfWidth;
            }
            // checking the top boundary
            if (this.y <= this.HalfWidth) {
                this.y = this.HalfWidth;
            }
            if (this.y >= 650 - this.HalfWidth) { //it is not responsive.If I want to fo that i should add a configuration file
                this.y = 650 - this.HalfWidth;
            }
            // checking the top boundary
            if (this.y <= this.HalfWidth) {
                this.y = this.HalfWidth;
            }
            this.Move();
        };
        Player.prototype.Move = function () {
            if (managers.GlobalVariableGame.keyboardManager.moveForward) {
                this.y -= 2;
            }
            if (managers.GlobalVariableGame.keyboardManager.moveBackward) {
                this.y += 2;
            }
            if (managers.GlobalVariableGame.keyboardManager.moveLeft) {
                this.x -= 2;
            }
            if (managers.GlobalVariableGame.keyboardManager.moveRight) {
                this.x += 2;
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.AbstractGameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map