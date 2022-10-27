//JSON : Javascript object notation
window.addEventListener("load", onLoad);

function onLoad() {
    var obj = [{
            empName: "Ramesh",
            empId: "1",
            empQualification: "B.Tech",
            designation: "Engineer"
    },
        {
            empName: "Suresh",
            empId: "2",
            empQualification: "M.Tech",
            designation: "Sr.Engineer"
    },
        {
            empName: "Naresh",
            empId: "3",
            empQualification: "M.Tech",
            designation: "Sr.Engineer"
    }
];


    for (var i = 0; i < obj.length; i++) {

        var box = document.createElement("div");
        box.className = "box";

        var left = document.createElement("div");
        left.className = "left";
        var right = document.createElement("div");
        right.className = "right";


        var name = document.createElement("h1");
        name.className = "title";
        name.innerHTML ="<span class='folding'>- </span>"+ obj[i].empName;
        name.open = true;
        
        name.addEventListener("click",onFolding);
        
        var desc = document.createElement("div");
        desc.className = "desc";

        var qualification = document.createElement("p");
        qualification.textContent = obj[i].empQualification;

        var designation = document.createElement("p");
        designation.textContent = obj[i].designation;

        var actions = document.createElement("div");
        
        var actionTitle = document.createElement("h1");
        actionTitle.className = "title";
        actionTitle.innerHTML = "<span> - </span> Actions";
        actionTitle.open = true;
        
        actionTitle.addEventListener("click",onFolding);

        var edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "blue";

        edit.addEventListener("click", onEdit);

        var deletes = document.createElement("button");
        deletes.textContent = "Delete";
        deletes.className = "red";
        
        deletes.addEventListener("click",onRemove);


        left.appendChild(name);
        desc.appendChild(qualification);
        desc.appendChild(designation);
        left.appendChild(desc);

        right.appendChild(actionTitle);
        actions.appendChild(edit);
        actions.appendChild(deletes);
        
        right.appendChild(actions);


        box.appendChild(left);
        box.appendChild(right);

        document.body.appendChild(box);


    }


}


function onEdit() {

    var title = this.parentNode.previousElementSibling.getElementsByClassName("title")[0];
    var qualification = this.parentNode.previousElementSibling.getElementsByTagName("p")[0];
    var designation = this.parentNode.previousElementSibling.getElementsByTagName("p")[1];

    if (this.editMode) {
        this.editMode = false;
        title.contentEditable = false;
        
        qualification.contentEditable = false;
        designation.contentEditable = false;
        this.textContent = "Edit";

    } else {

        this.editMode = true;
        title.contentEditable = true;
        qualification.contentEditable = true;
        designation.contentEditable = true;
        this.textContent = "Save";
    }
}

function onFolding(){
    
    
    if(this.open){
        
        
    this.nextElementSibling.style.display = "none";
    this.getElementsByTagName("span")[0].textContent = "+";
        
        this.open = false;
        
    }else{
        
        
    this.nextElementSibling.style.display = "block";
    this.getElementsByTagName("span")[0].textContent = "-";
        
        this.open = true;
        
    }
    
}

function onRemove(){
    
    document.body.removeChild(this.parentNode.parentNode.parentNode);
}