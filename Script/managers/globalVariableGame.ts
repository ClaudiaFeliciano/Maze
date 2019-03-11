module managers {
    export class GlobalVariableGame { //esta clase la cree para tener todos las variables at the global level y poder hacer referencia desde the scene
        // Globals variables
        public static assetManager:createjs.LoadQueue; ;//access to all my access
        public static stage:createjs.Stage; //access to my global stage object
        public static currentState:config.Scene; ;// wich current scene is
        public static keyboardManager : managers.Keyboard;
        public static currentScene: number;  
        public static canvas: HTMLCanvasElement;
        public static maze: objects.Maze;
        public static dataImage: objects.DataImage;
        public static player: objects.Player;


    }
}