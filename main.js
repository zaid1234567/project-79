menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Paneer Pizza", "Chicken Pizza", "Veg Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menu list'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
}
htmldata='</ol>'
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"<div class+'card'>"
    +'<img src="images/pizza.png"/>'
    + menu_list_array[1] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}