
$(document).ready(function(){
    var controls = document.getElementById("controls");
    var term = document.getElementById("country");
    var button = document.getElementById("lookup");
    var resultArea = document.getElementById("result");
    var url = "https://info2180-lab7-ericavirgo.c9users.io/world.php?country="
    let text  = document.createElement("text");
    let checkbox = document.createElement("input");


    insertCheckboxAll();

    //function that creates and adds checkbox for All 
    function insertCheckboxAll(){
        text                  = "All Information";
        checkbox.id           = "check";
        checkbox.type         = "checkbox";
        checkbox.name         = "All Information";
        checkbox.defaultValue = "false";
        controls.appendChild(checkbox);
        controls.append(text);
    }
    
    //function that returns the search term
    function getTerm(){
        return term.value;
    }
    
    //function that responds to Search button click and returns results
    button.onclick = function(){
        button.preventDefault;

        var request = new XMLHttpRequest();
        var keyword = getTerm().toUpperCase();
        
        if (checkbox.checked){
            term.value= "";
            url = "https://info2180-lab7-ericavirgo.c9users.io/world.php?all=true";
        }else{
            url = "https://info2180-lab7-ericavirgo.c9users.io/world.php?country=" + keyword;
        }
        
        request.onreadystatechange = function(){
            if (request.readyState === XMLHttpRequest.DONE){
                if (request.status === 200 && !request.responseText.includes("<ul></ul>")){
                    resultArea.innerHTML = request.responseText;
                } else {
                    resultArea.innerHTML = keyword + " Not Found.";

                }
            }
        }
        
        request.open('GET', url);
        request.send();
    }
    
    

});