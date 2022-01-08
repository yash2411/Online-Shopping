const deleteProductButtons = document.querySelectorAll('.product-item button')

async function deleteProduct(event){

    const buttonElement = event.target;
    const productId = buttonElement.dataset.productid;
    const csrfToken = buttonElement.dataset.csrf

    const res = await fetch('/admin/products/'+productId+'?_csrf='+csrfToken, {
        method: 'DELETE'
    })
    if(!res.ok){
        alert('Something went wrong');
        return;
    }
    buttonElement.parentElement.parentElement.parentElement.parentElement.remove()
}

for(const deleteProductButton of deleteProductButtons)
{
    deleteProductButton.addEventListener('click', deleteProduct)
}