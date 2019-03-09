module objects {
    export class Player extends objects.AbstractGameObject {

        // constructors
        constructor() {
            super("owl");
            this.Start();

        }

        // public methods
        public Start(): void {
            //this.regX = this.HalfWidth;
            //this.regY = this.HalfHeight;

            this.x = 737; //la posicion donde va a comenzar el avion como era de arriba hacia abajo 0 es arriba y 435 es pegado a abajo, menos la altura del avion
            this.y = 10; //kiero k el avion comienze en el medio de mi eje y
            
        }

        public Update(): void {
           

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
            
        }


        public Move(): void {

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
           
        }

        public Reset(): void {

        }

        public Destroy(): void {

        }
    }
}