function calcPer(){
    let totalMarks = Number(document.getElementById('total-marks').value);
    let obtMarks = Number(document.getElementById('obtained-marks').value);

    if(obtMarks > totalMarks || obtMarks < 0){
        alert("Obtained Marks must be between 1 to " +totalMarks +" & less than Total Marks")
        return;
    }
    let percentage = (obtMarks / totalMarks) * 100;
    percentage.toFixed(2);
    document.getElementsByClassName('display-percentage')[0].innerText = "PERCENTAGE : " +percentage+"%";

}