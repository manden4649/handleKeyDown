window.addEventListener("load", init);

function init() {
    window.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        let keyCode = event.keyCode;
        let str = String.fromCharCode(keyCode);

        if (65 <= keyCode && keyCode <= 90) {
            for (var i = 0; i < enemyList.length; i++) {
                if (enemyList[i].text === str) {
                    stage.removeChild(enemyList[i]);
                    stage.removeChild(circleList[i]);
                    enemyList.splice(i, 1);
                    score = score++;
                }
            }
        }
    }
}
