//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    var currentScene;
    var currentState;
    var keyboardManager;
    var assetManifest = [
        { id: "background", src: "./Assets/images/mazebackground.png" },
        { id: "playButton", src: "/Assets/images/PlayButton.png" },
        { id: "helpButton", src: "/Assets/images/HelpButton.png" },
        { id: "quitButton", src: "/Assets/images/QuitButton.png" },
        { id: "maze", src: "/Assets/images/maze.png" },
        { id: "owl", src: "/Assets/images/owl.png" },
        { id: "mazeSound", src: "/Assets/audio/immortal.mp3" },
        { id: "buttonSound", src: "/Assets/audio/phaseJump.mp3" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue(); //create the asset manager
        managers.GlobalVariableGame.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); //asset manager can load sound- enable sound preloading
        assetManager.loadManifest(assetManifest); //Loads the manifest defined above -preloads all assets listed in the manifest
        assetManager.on("complete", Start, this); // call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.GlobalVariableGame.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.GlobalVariableGame.currentState = currentState; //it makes a refrence to my stage and I hold it in my global object
        keyboardManager = new managers.Keyboard();
        managers.GlobalVariableGame.keyboardManager = keyboardManager;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        // if the scene that is playing returns anthr scene
        //then call Main again and switch the scene
        if (currentState != managers.GlobalVariableGame.currentState) {
            currentState = managers.GlobalVariableGame.currentState;
            Main();
        }
        stage.update(); //redraws the state
    }
    function Main() {
        //remove all current objects from the stage
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                //instattiate a new scene object
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.PLAY:
                //instattiate a new scene object
                currentScene = new scenes.PlayScene();
                break;
            case config.Scene.OVER:
                //instattiate a new scene object
                //  currentScene = new scenes.Over();
                break;
        }
        //add the new scene object to stage
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map