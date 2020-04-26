function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var china = document.getElementById("china");
    var macao = document.getElementById("macao");
    var hong = document.getElementById("hong");
    var south = document.getElementById("south");
    var italy = document.getElementById("italy");
    var iran = document.getElementById("iran");
    if (checkBox.checked == true){
      china.style.display = "block";
      macao.style.display = "block";
      hong.style.display = "block";
      south.style.display = "block";
      italy.style.display = "block";
      iran.style.display = "block";
    } else {
        china.style.display = "none";
        macao.style.display = "none";
        hong.style.display = "none";
        south.style.display = "none";
        italy.style.display = "none";
        iran.style.display = "none";
    }
  }