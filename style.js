function store()
{

    let car={ key:key.value,brand:brand.value,price:price.value}
    if(car.key=='' || car.brand=='' || car.price=='')
    {
        alert("Please fill the form")
    }

    else

{
    if(car.key in localStorage)
    {
        alert("Key already exist")
        document.getElementById('f1').reset();


    }
    else
    {

    
    localStorage.setItem(car.key,JSON.stringify(car));

    alert("Record stored!!!")
    document.getElementById('f1').reset();

    }

}
}

function searchKey()
{
    let k=key1.value;
   console.log(k);
    
        if(k in localStorage)
        {
let retrive= JSON.parse(localStorage.getItem(k))
console.log(retrive);
show.innerHTML=` <div class="card" style="width: 18rem;">
<div class="text-end"><button type="button" class="btn-close " aria-label="Close" onclick="closebtn()"></button>
</div>

<div class="card-body">
  <h5 class="card-title">Car Details</h5>
  
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Car Key : ${k}</li>
  <li class="list-group-item">Car Brand : ${retrive.brand}</li>
  <li class="list-group-item">Car Price: ${retrive.price}</li>
</ul>

</div> `


        }

        else
        {
            alert("Key not exist!!")
            document.getElementById('f2').reset();
        }
    }



    // Delete the item

    function deleteKey()
    {
        if(delet.value in localStorage)
        {
           localStorage.removeItem(delet.value)
            alert("Item removed")
            document.getElementById('f3').reset();
        }
        else
        {
            alert("Data not found")
        }
    }

    // clear all records

    function clearitem()
    {
        localStorage.clear();
        alert("All data cleared" )
    }
function closebtn()
{
  show.innerHTML=""  
  document.getElementById('f2').reset();
}
