module scenes {
    export class StartScene extends objects.Scene {
        // private instance variable
         private _nameGame:objects.Label;
         private _nameStudent:objects.Label;
         //private _space:objects.Space;
         private _playButton:objects.Button;
         private _helpButton: objects.Button;
         private _quitButton:objects.Button;
        

        // constructor
        constructor() {
            super();

            this.Start();
        }      

        // public methods

        public Start(): void {

            //this._space = new objects.Space();
            this._nameGame = new objects.Label("Maze Game", "60px", "Consolas", "#FF00F0", 399, 140, true);
            this._playButton = new objects.Button("playButton", 420, 260, true);
            this._helpButton = new objects.Button("helpButton", 300, 360, true);
            this._quitButton= new objects.Button("quitButton", 420, 460, true);
            this._nameStudent = new objects.Label("Student:Claudia Feliciano Torres", "13px", "Consolas", "#FF00F0", 120, 10, true);

            this.Main();
        }        
        
        public Update(): void {
           // this._space.Update();
        }
        
        public Destroy(): void {
            this.removeAllChildren();
        }
        
        public Reset(): void {

        }
        
        public Main(): void {
                
        //this.addChild(this._space);
        this.addChild(this._nameGame);
        this.addChild(this._playButton);
        this.addChild(this._helpButton);
        this.addChild(this._quitButton);
        this.addChild(this._nameStudent);

        this._playButton.on("click", ()=>{
            managers.GlobalVariableGame.currentState = config.Scene.PLAY;
        });

    }
    }
}