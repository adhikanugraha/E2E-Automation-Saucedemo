const productSelector = {
    inventoryItem : '.inventory_item',
    productNameBtn : (name) => `//div[text()="${name}"]/ancestor::div[@class="inventory_item"]//button`,
    cartBadge: '.shopping_cart_badge',
    cartLink: '.shopping_cart_link'
}

export default productSelector;