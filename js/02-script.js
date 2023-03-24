const headers = document.querySelectorAll('[data-name="accordion-header"]');


headers.forEach(function(item){
   
   item.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('hidden');
    //  this ссылается на тот элемент, по которому произошло событие, которое мы отслеживаем
    // nextElementSibling значит, что мы ищем следующий соседствующий элемент. вроде бы, надо того же уровня. 
    // с разными уровнями у меня не вышло
        const icon = this.querySelector('.material-symbols-outlined');    
        icon.classList.toggle('rotate');

} )

})

