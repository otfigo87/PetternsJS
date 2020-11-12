
function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 600;
    let height = 600;

    while( width > 20 ) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');
        //CSS Proproties for the new div element created
        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];
        newDiv.style.borderRadius = "100%";
        //attach the new div element created to the DOM
        document.body.appendChild(newDiv);
        //update css values for the new div inside the while loop
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}