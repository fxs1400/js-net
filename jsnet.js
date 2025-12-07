function select(name , from) {
    function find(namet , fromt) {
       fetch("https://raw.githubusercontent.com/"+ fromt +"/"+ namet +"/refs/heads/main/myjsnet.js").then(function (response) {
     return response.text()
 }).then(function (data) {
namet = data;
 })
 return namet
 return fromt
    }
    let x = find(name , from);
 eval(x);
 console.log("trun on");
 return name
 return from
}
select("Fxs" , "fxs1400");
