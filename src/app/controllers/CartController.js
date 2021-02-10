const Cart = require('../../lib/cart');
const LoadProductService = require('../services/LoadProductService');

module.exports = {
  async index(req, res) {
    try {
      // get cart from session
      let { cart } = req.session;

      // cart manager
      cart = Cart.init(cart);

      return res.render('cart/index', { cart });
    } catch (error) {
      console.error(error);
    }
  },
  async addOne(req, res) {
    //   get id of product and get product
    const { id } = req.params;

    const product = await LoadProductService.load('product', { where: { id } });

    // get session cart
    let { cart } = req.session;

    // add product on cart using (cart manager)
    cart = Cart.init(cart).addOne(product);

    //  update session cart
    req.session.cart = cart;

    // redirect user to cart page
    return res.redirect('/cart');
  },
  async removeOne(req, res) {
    //   get product id
    let { id } = req.params;

    // get session cart
    let { cart } = req.session;

    // if haven't cart, return
    if (!cart) return res.redirect('/cart');

    // init cart(cart manager) and remove product
    cart = Cart.init(cart).removeOne(id);

    // update session cart, removing 1 item
    req.session.cart = cart;

    // redirect to cart page
    return res.redirect('/cart');
  },
  delete(req, res) {
    let { id } = req.params;
    let { cart } = req.session;

    if (!cart) return;

    req.session.cart = Cart.init(cart).delete(id);

    return res.redirect('/cart');
  },
};
