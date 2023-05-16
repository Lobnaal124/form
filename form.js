function add_one()
{
  document.f.sld6.value=parseInt(document.f.sld6.value)+1;
  show_value2(document.f.sld6.value);
}
function subtract_one()
{
  document.f.sld6.value=parseInt(document.f.sld6.value)-1;
  show_value2(document.f.sld6.value);
}
function show_value2(x)
{
 document.getElementById("slider_value2").innerHTML=x;
}
function Submit(){
  alert("done...");
}