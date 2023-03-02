function append(data,container,xtraFun){
    data.forEach(el => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.productImage;
        let h1 = document.createElement('h1');
        h1.innerText = el.productName;
        let brand = document.createElement('p');
        brand.innerText = el.manufacturer;        ;
        let price = document.createElement('p');
        price.innerText = el.price;
        div.append(img,h1,brand,price);
        const id = el.productId;
        if(xtraFun){
            div.addEventListener('click',()=>{
                ParticularProduct(id);
            })
        }
        container.append(div);
    });
}

const ParticularProduct=(id)=>{
    console.log(id);
    localStorage.setItem('id',JSON.stringify(id));
    window.location = '/src/pages/product.html';
}

export default append;