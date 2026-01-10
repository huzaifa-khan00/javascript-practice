

function calcPer(){
    let totalMarks = document.getElementById('total-marks').value;
    let obtMarks = document.getElementById('obtained-marks').value;
    
    let percentage = "PERCENTAGE : " + (obtMarks / totalMarks) * 100+"%";
    document.getElementsByClassName('display-percentage')[0].innerText = percentage;
}