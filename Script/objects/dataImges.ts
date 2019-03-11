module objects {
    export class DataImage{
        public context = managers.GlobalVariableGame.canvas.getContext("2d");
        public maze =  managers.GlobalVariableGame.maze;

public canMoveTo(destX, destY) {
    var imgData = this.context.getImageData(destX, destY, 20, 20);
    var data = imgData.data;
    var canMove = 1; // 1 means: the rectangle can move
    if (destX >= 0 && destX <= managers.GlobalVariableGame.canvas.width - 20 && destY >= 0 && destY <= managers.GlobalVariableGame.canvas.height - 20) { // check whether the rectangle would move inside the bounds of the canvas
        for (var i = 0; i < 4 * 20 * 20; i += 4) { // look at all pixels
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { // black
                canMove = 0; // 0 means: the rectangle can't move
                console.log("nhgdg");
                break;
            }
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { // lime: #00FF00
                canMove = 2; // 2 means: the end point is reached
                break;
            }
        }
    }
    else {
        canMove = 0;
    }
    return canMove;
}

}
}