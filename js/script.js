function cardItem(itemcard, btnDiscernment, itemNumberFilds, btnIncrement, perproductPrice, Price, itemRemove){

    function UpdateItemNumber(isIncrement){
        const itemNumberFild = document.getElementById(itemNumberFilds);
        const itemNumberString = itemNumberFild.value;
        const priviousItemNumber = parseInt(itemNumberString);
        let newItemNumber ;
        if(isIncrement == true){
            newItemNumber = priviousItemNumber + 1;
        }
        else{
        
            newItemNumber = priviousItemNumber -1;
             
        }
        itemNumberFild.value = newItemNumber ;
        
        
        return newItemNumber;
        
    }
    
    function updateItemPrice(newItemNumber){
        let itemTotalPrice = newItemNumber * perproductPrice;
        let itemElementprice = document.getElementById(Price);
        itemElementprice.innerText = itemTotalPrice;
    }
    document.getElementById(btnIncrement).addEventListener('click', function(){
        let newItemNumber = UpdateItemNumber(true);
        updateItemPrice(newItemNumber);
    });
    document.getElementById(btnDiscernment).addEventListener('click', function(){
        const newItemNumber = UpdateItemNumber(false);
        updateItemPrice(newItemNumber);
    });
    document.getElementById(itemRemove).addEventListener('click',function(){
    
        const card = document.getElementById(itemcard);
        card.style.display = 'none';
    })

}


cardItem('phone-item', 'phone-btn-discernment', 'phone-item-number-filds', 'phone-btn-increment', 1219, 'phone-price', 'phone-item-remove');
cardItem('case-item', 'case-btn-discernment', 'case-item-number-filds', 'case-btn-increment', 59, 'case-price', 'case-item-remove');