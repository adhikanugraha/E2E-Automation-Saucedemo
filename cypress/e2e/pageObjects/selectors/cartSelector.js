const cartSelector = {
    cartTitle: '.title',
    cartItems: '.cart_item',
    cartItemName: '.inventory_item_name',
    cartItemPrice: '.inventory_item_price',
    cartItemDesc: '.inventory_item_desc',
    checkoutButton: '#checkout',
    continueShoppingButton: '#continue-shopping',
    cartBadge: '.shopping_cart_badge',
    removeButtonByName: (productName) => { "//div[contains(@class,'cart_item')]/div[contains(@class,'inventory_item_name') and text()='Sauce Labs Backpack']//ancestor::div[contains(@class,'cart_item')]//button[contains(@id,'remove')]"
    },
}

export default cartSelector;

