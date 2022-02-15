// funtion for all button to display price and make total price

function getUpdate(buttonId, costId, price){
    document.getElementById(buttonId).addEventListener('click', function(){
        const memoryPriceText = document.getElementById(costId);
        memoryPriceText.innerText = price;

        const bestPrice = document.getElementById('best-price').innerText;
        const memoryCost = document.getElementById('memory-cost').innerText;
        const storageCost = document.getElementById('storage-cost').innerText;
        const deliveryCost = document.getElementById('delivery-cost').innerText;

        const totalCost = parseInt(bestPrice) + parseInt(memoryCost) + parseInt
        (storageCost) + parseInt(deliveryCost);

        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = totalCost;
    })
}


// all buttons to call function

getUpdate('sixteenGB', 'memory-cost', 300);
getUpdate('eightGB', 'memory-cost', 0);
getUpdate('ssd1', 'storage-cost', 0);
getUpdate('ssd2', 'storage-cost', 300);
getUpdate('ssd3', 'storage-cost', 500);
getUpdate('free-delivery', 'delivery-cost', 0);
getUpdate('paid-delivery', 'delivery-cost', 20);


// promo code section
document.getElementById('apply-btn').addEventListener('click',function(){
    const totalPrice = document.getElementById('total-price');
    const totalPriceNum = parseInt(totalPrice.innerText);
    const promoInput = document.getElementById('promo-input').value;
    const promoCode = 'HimelVai';
    const discount = totalPriceNum * 0.2;


    const applied = document.getElementById('applied-text');
    const failed = document.getElementById('unmatched-text');


    if(promoInput === promoCode){
        totalPrice.innerText = totalPriceNum - discount;
        
        applied.classList.remove('d-none');
        failed.classList.add('d-none');
    }
    else{
        applied.classList.add('d-none');
        failed.classList.remove('d-none');
    }
})

