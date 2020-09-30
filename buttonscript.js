var click = true;
function JsonFunction(){
    if(click){
        fetch('data.json')
    .then(response => response.json())
    .then(data => {
        for(const property in data){
            var list = document.getElementById("myList");
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(data[property]));
            list.appendChild(entry);
        }
        click = false;
    });
    }
    
}