const isOpen=[false,false,false];

const elements=[
    [document.getElementById("basic_calc"),document.getElementById("proj_headings_calc")],
    [document.getElementById("tictactoe"),document.getElementById("proj_headings_tic")],
    [document.getElementById("portfolio"),document.getElementById("proj_headings_port")]
];

const dropid=["show_calc","show_tictac","show_port"];

function open(x,vid){
    elements[x].at(0).classList.add("extraanime");
    document.getElementById(vid).classList.add("dropdownanime");
    elements[x].at(1).classList.add("projheadanime");
}
function close(x,vid){
    elements[x].at(0).classList.remove("extraanime");
    document.getElementById(vid).classList.remove("dropdownanime");
    elements[x].at(1).classList.remove("projheadanime");
}
document.querySelectorAll(".drop").forEach(dropdown=>{
    dropdown.addEventListener("click",()=>{
        let divid=dropdown.id;
        if(divid==dropid[0]){
            if(!isOpen[0]){
            open(0,divid);
            close(1,dropid[1]);
            close(2,dropid[2]);
            isOpen[0]=!isOpen[0];
            }
            else{
                close(0,divid);
                isOpen[0]=!isOpen[0];
            }
        }
        else if(divid==dropid[1]){
            if(!isOpen[1]){
            open(1,divid);
            close(0,dropid[0]);
            close(2,dropid[2]);
            isOpen[1]=!isOpen[1];
            }
            else{
                close(1,divid);
                isOpen[1]=!isOpen[1];
            }
        }
        else if(divid==dropid[2]){
            if(!isOpen[2]){
            open(2,divid);
            close(1,dropid[1]);
            close(0,dropid[0]);
            isOpen[2]=!isOpen[2];
            }
            else{
                close(2,divid);
                isOpen[2]=!isOpen[2];
            }
        }
    })
})
