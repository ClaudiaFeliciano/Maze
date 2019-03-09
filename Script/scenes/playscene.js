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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        PlayScene.prototype.Start = function () {
            // this._meteorNum = 3;
            // Instantiates a new Array container of Type objects.meteor
            //this._meteor = new Array<objects.Meteor>();
            // Fill the meteor Array with meteors
            /*for (let count = 0; count < this._meteorNum; count++) {
                this._meteor[count] = new objects.Meteor();
            }*/
            this._engineSound = createjs.Sound.play("mazeSound"); //lo pongo akip ara que comience en cuanto comience la scence
            this._engineSound.loop = -1; //play forever
            this._engineSound.volume = 0.2;
            //this._scoreBoard = new managers.ScoreBoard();
            // managers.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        //triggered every frame
        PlayScene.prototype.Update = function () {
            this._maze.Update();
            this._player.Update();
            //this._island.Update();
            //check collision between arrow and island
            //managers.Collision.Check(this._player, this._island);
            // Update Each meteor in the Meteor Array
            /*for (const meteor of this._meteor) {
                meteor.Update();
               
                managers.Collision.Check(this._player, meteor);   //check collision between the arrow and the meteor
            }

            //if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop(); //sino me sigue sonando the app
                managers.Game.currentState = config.Scene.OVER;
            }*/
        };
        PlayScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        PlayScene.prototype.Reset = function () {
        };
        PlayScene.prototype.Main = function () {
            // adds space to the scene
            this._maze = new objects.Maze();
            this.addChild(this._maze);
            // adds island to the scene
            /*this._island = new objects.Island();
            this.addChild(this._island);*/
            // adds player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // adds Each meteor in the meteor Array to the Scene
            /*for (const meteor of this._meteor) {
                this.addChild(meteor);*/
            /* this._meteor.forEach(meteor => {
                 this.addChild(meteor);
                 
             });
 
             //add scoreboard labels to the scene
             this.addChild(this._scoreBoard.LivesLabel);
             this.addChild(this._scoreBoard.ScoreLabel);*/
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=playscene.js.map