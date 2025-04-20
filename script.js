const div = document.querySelector('.custbtn')
fetch('./assets/lib/custbtn.html')
.then(res=>res.text())
.then(data=>{
    div.innerHTML=data
})
