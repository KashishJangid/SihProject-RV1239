
        function myfunc(){
    var selected = document.getElementById("choose-one").value;
    switch(selected)
    {
        case "Pan1":
        {   
            document.getElementById('display-content').innerHTML='Account-Holder-Name => Hardik saini <br> Account-No. => 848332XXXXXX ' ;
            document.getElementById("re-set").reset();
        }
        break;

        case "Pan2": 
        {
            document.getElementById('display-content').innerHTML='Account-Holder-Name => Kashish Jangid <br> Account-No. => 545325XXXXXX ' ;
            document.getElementById("re-set").reset();
        }
        break;

        case "Pan3": 
        {
            document.getElementById('display-content').innerHTML='Account-Holder-Name => Jeetu saini <br> Account-No. => 235465XXXXXX ' ;
            document.getElementById("re-set").reset();
        }
        break;

        case "Pan4":
        {
            document.getElementById('display-content').innerHTML='Account-Holder-Name => Himanshu Jangid <br> Account-No. => 263432XXXXXX ' ;
            document.getElementById("re-set").reset();
        }
        break;

        default:{
            alert("Please Enter a Valid PAN Card Number");
            document.getElementById("re-set").reset();
        }
    }
}
