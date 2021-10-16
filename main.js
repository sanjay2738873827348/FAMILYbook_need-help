var images =["4.png","1.png","2.png","3.png","5.png"];
var FMNL = ["Family_pic","Mom","Dad","Brother","Sister"];
var i=0; 
function Update()
{
    i++; 
    var number_of_members_in_array = 5;
    if(i>number_of_members_in_array)
    {
        i=0;
    }
    var updatedimage=images[i];
    var updatedname=FMNL[i];
    document.getElementById("img1").src=updatedimage;
    document.getElementById("FMN").innerHTML=updatedname;

}