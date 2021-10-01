function vote1(){
  if(document.cookie=="vote=2"){
    console.log("switch 1");
    document.cookie = "vote=1"
  } else if(document.cookie===""){
    document.cookie = "vote=1";
    console.log("vote 1")
  }
  
}
function vote2(){
  if(document.cookie=="vote=1"){
    console.log("switch 2");
    document.cookie = "vote=2"
  } else if(document.cookie===""){
    document.cookie = "vote=2";
    console.log("vote 2")
  }
  
}
