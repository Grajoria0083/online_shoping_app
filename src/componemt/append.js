function append(data,container){
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
        container.append(div);
    });
}

export default append;