let mainSection = document.getElementById("mainSection");

async function getCartData() {
  let res = await fetch("http://localhost:3000/cart");
  let data = await res.json();

  cartData(data);
}
getCartData();

function cartData(serverCartdata) {
  let toPrintData = serverCartdata.map((el, i) =>
    printcart(el.title, el.price, el.productImg, el.id, el.quantity)
  );

  mainSection.innerHTML = toPrintData.join(" ");
  console.log(mainSection);
}

function printcart(title, price, image, id, quantitiy) {
  let cartDataUpdate = `
        <div class="col-lg-12 col-md-12 col-sm-12 cartDetail">
            <img
              src=${image}
              alt=""
            />
            <div class="priceDetail">
                <h3>${title}</h3>
            <p>Price:$ ${price}</p>
            <button class="btn border-0 btn-dark rounded-0 inc " id=${id}>+</button>
        <span >Qty : ${quantitiy}</span>
             <button class="btn border-0 btn-dark rounded-0 dec" id=${id}>-</button>
           
             <button class="btn border-0 btn-dark rounded-0 btn-dark d-block mt-5 del " id=${id}>Remove</button>
            </div>
            
          </div>`;
  return cartDataUpdate;
}

function handelQty(id, change) {
  console.log(id, change);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("inc")) {
   const ID =e.target.id
    handelQty(ID, 1);
  }
  // ;
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("dec")) {
   const ID =e.target.id
    handelQty(ID, -1);
  }
  // const ID =e.target.id;
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
   const ID =e.target.id
    


   fetch(`http://localhost:3000/cart/${ID}`,{
    method:"DELETE"
   })

  }
  // ;
});