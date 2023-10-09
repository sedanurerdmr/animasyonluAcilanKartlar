const panels = document.querySelectorAll(".panel");  //tum panellere erismek istedigimiz icin all kullaniriz

panels.forEach(panel => {   //tum panellerde gezinmek icin foreach
    panel.addEventListener("click", () => {  //arrow function yontemi
//removeActive() fonksiyonunu cagirarak bir onceki active olan durumu silmis olduk
        removeActive();
        panel.classList.add("active");  //active class ozelliklerini css ile yaptik
    });
})
// gorselerden birisi aktif olduğunda digerinin silinmesi için yapilacak islemler
function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}
