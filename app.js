let mobiles = {
    iphone: {
        iphone7: {
            RAM: '4GB',
            ROM: '32GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        iphone8plus: {
            RAM: '4GB',
            ROM: '64GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        iphone11: {
            RAM: '8GB',
            ROM: '512GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        iphone11pro: {
            RAM: '8GB',
            ROM: '128GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        }
    },
    oppo: {
        oppoA5s: {
            RAM: '8GB',
            ROM: '512GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        oppoA54: {
            RAM: '6GB',
            ROM: '64GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        oppoA52020: {
            RAM: '8GB',
            ROM: '512GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        oppof11: {
            RAM: '6GB',
            ROM: '64GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        }
    },
    vivo: {
        vivoY11: {
            RAM: '4GB',
            ROM: '64GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        vivoY27s: {
            RAM: '8GB',
            ROM: '128GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        vivoY17s: {
            RAM: '8GB',
            ROM: '512GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        },
        vivoY73: {
            RAM: '4GB',
            ROM: '64GB',
            Camera: '12MP',
            LCD: '4.7 inch',
        }
    },
    xiaomi: {
        redmiNote11: {
            RAM: '4GB',
            ROM: '128GB',
            Camera: '80MP',
            LCD: '4.7 inch',
        },
        redmiNote10pro: {
            RAM: '8GB',
            ROM: '512GB',
            Camera: '108MP',
            LCD: '4.7 inch',
        },
        redmiNote11pro: {
            RAM: '4GB',
            ROM: '64GB',
            Camera: '64MP',
            LCD: '4.7 inch',
        },
        redmiNote13: {
            RAM: '6GB',
            ROM: '128GB',
            Camera: '30MP',
            LCD: '4.7 inch',
        }
    }
}

let brand = document.getElementById('brand')
let model = document.getElementById('model')


let allBrands = Object.keys(mobiles)
for (let i = 0; i < allBrands.length; i++) {
   brand.innerHTML += `<option>${allBrands[i]}<option/>`;
}

function selectBrand() {
    let selectedBrand= brand.value;
    let allModels = Object.keys(mobiles[selectedBrand])
    model.innerHTML= "";
    for (let i = 0; i < allModels.length; i++) {
        model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}<option/>`;
     }   
}
function selectModel() {
    let div = document.getElementById('div')
    // console.log(brand.value, model.value);
    // console.log(mobiles[brand.value][model.value]);
    
    let selectedBrand= brand.value;
    let selectedModel= model.value;
    let mobile = mobiles[selectedBrand][selectedModel];
    div.innerHTML = "";

    div.innerHTML = `<strong> ${selectedBrand} - ${selectedModel}: <strong/>`;
    for (let key in mobile) {
        div.innerHTML += `<div><strong>${key}:</strong> ${mobile[key]}</div>`;
    }
  
}

