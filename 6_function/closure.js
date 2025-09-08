function clickme(){
    let num = 0;
    function inner(){
        num++;
        alert(`click the button ${num} times`)
    }
    return inner
}
const click = clickme();
click()
click()
click()
click()
click()
click()