/*(function() {
    var _old_alert = window.alert;
    window.alert = function() {
        // run some code when the alert pops up
        console.log("alert before");
        if (!(document.getElementById('unblur') == null))
        {
            document.getElementById('unblur').id = 'blur';
        }
        
        


        _old_alert.apply(window,arguments);
        console.log("alert after");

        if (!(document.getElementById('blur') == null))
        {
           document.getElementById('blur').id = 'unblur';
        }
        
         
    };
})();*/
function blur()
{
  document.getElementById("overlay").className = "unblur";
}

function unblur()
{
  document.getElementById("overlay").className = "unblur";
}