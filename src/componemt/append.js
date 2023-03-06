function appendData(data,container){
    container.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.productImage;
        let h1 = document.createElement('h1');
        h1.innerText = el.productName;
        let brand = document.createElement('p');
        brand.innerText = `BRAND: ${el.manufacturer}`;
        let price = document.createElement('p');
        price.innerText = `PRICE: ${el.price} $`;
        div.append(img,h1,brand,price);
        const id = el.productId;
        div.addEventListener('click',()=>{
                ParticularProduct(id);
            })
        
        container.append(div);
    });
}

const ParticularProduct=(id)=>{
    window.location = `/product.html?id=${id}`;
}

export default appendData;