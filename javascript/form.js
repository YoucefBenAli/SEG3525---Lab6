
var changeDoctor;
var change;
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(document).ready(function(){

    var datePicker = $("#datePicker");
    var doctor = "doctor4";
    var currentDay = new Date();
    var availableDays = [1,2,3,4,5];
    
    /*Initial Date Picker*/
    //debugger;
    datePicker.datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: currentDay,
        beforeShowDay: checkDate
    });

    /*Updated Date Picker*/
     changeDoctor = function(newDoctor, days){
        doctor = newDoctor;
        availableDays = days;

        datePicker.datepicker({
            dateFormat: 'dd-mm-yy',
            minDate: currentDay,
            beforeShowDay: checkDate
        });
    }

    change = function(vet){
        if(vet=="Ericka Veronica"){
            changeDoctor('doctor1', [2,3])
        }
        else if(vet=="Terence Chester"){
            changeDoctor('doctor2', [1,5])
        }
        else if (vet=="Cassandra Gladwyn"){
            changeDoctor('doctor3', [3,5])
        }
        else{
            changeDoctor('doctor4', [1,2,3,4,5])
        }
    }


    
    function checkDate(date){
        let localDay = date.getDay();
        if (availableDays.indexOf(localDay)>=0) {
            return [true, "av", "available"];
        } else {
            return [false, "notav", 'Not Available'];
        }
    }

    function phoneMask() {
        if($(this).val().length==10){

            var num = $(this).val().replace(/\D/g,''); 
            $(this).val('(' + num.substring(0,3) + ')' + '-' + num.substring(3,6) + '-' + num.substring(6,11)); 
        }
    }

    function creditMask() { 

        if($(this).val().length==16){
            var num = $(this).val().replace(/\D/g,''); 
            $(this).val(num.substring(0,4) + ' ' + num.substring(4,8) + ' ' + num.substring(8,12) + ' ' + num.substring(12,16)); 
        }
    }
    $('#tel').keyup(phoneMask);
    $('#credit').keyup(creditMask);

});


