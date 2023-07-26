function workRight(){
  document.getElementById('test').innerHTML="<h3>this is for work</h3>"
  var flowerList=["burger!","sandwich!","candy!","milk!","beef!","chicken!"]
  for(i=0; i<flowerList.length;i++){
  document.writeln("<br>my favorite food "+flowerList[i]+"<br>")
}
}