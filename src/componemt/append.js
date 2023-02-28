function append(data,container){
    data.forEach(el => {
        let div = document.createElement('div');

        // let img = document.createElement('img');
        // img.src = el.image;
        let h1 = document.createElement('h1');
        h1.innerText = el.productName;

        div.append(h1)
        container.append(div);
    });
}

export default append;