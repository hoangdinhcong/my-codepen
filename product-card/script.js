
$('.card .favorite').on('click', function () {
    $(this).parents('.card').toggleClass('card--added-to-favorite');
});

$('.card .cart').on('click', function () {
    $(this).parents('.card').toggleClass('card--added-to-cart');
});