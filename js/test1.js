var word;

function goToProject(){
    word = document.getElementById("project").value;
    //window.location.href = "http://mysite.com/"+project;

    alert("Hello "+word);
    context.fillText(word,10,50);

};