function buy(id){
if (localStorage.getItem("pr")==undefined)
{localStorage.setItem("pr","")}
 let l=localStorage.getItem("pr");
 l=l+"/"+id;
 localStorage.setItem("pr",l);


}
id="shirt"
pr="5/shirt"
l="5/shirt"
