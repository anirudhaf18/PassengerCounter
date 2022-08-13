let count = 0;
function increment() {
    count = count + 1;
    document.getElementById('head').innerText = count;
}

function show(){
    // document.getElementById('total').innerText = "Total Number of Passenger is "+count+" !";
    let countStr = count + " - "
    document.getElementById('total').textContent += countStr;
    count = 0;
}