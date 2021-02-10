const LoadProductService = require('../services/LoadProductService');
const LoadOrderService = require('../services/LoadOrderService');
const User = require('../models/User');
const Order = require('../models/Order');

const mailer = require('../../lib/mailer');
const Cart = require('../../lib/cart');

const email = (seller, product, buyer) => `
    <h2>Olá ${seller.name}</h2>
    <p>Você tem um novo pedido de compra do seu produto</p>
    <p>Produto: ${product.name}</p>
    <p>Preço: ${product.formattedPrice}</p>
    <p><br/><br/></p>
    <h3>Dados do comprador</h3>
    <p>${buyer.name}</p>
    <p>${buyer.email}</p>
    <p>${buyer.address}</p>
    <p>${buyer.cep}</p>
    <p><br/><br/></p>
    <p><strong>Entre em contacto com o comprador para finalizar a venda!</strong></p>
    <p><br/><br/></p>
    <p>Atenciosamente, Equipe Launchstore</p>`;

module.exports = {
  async index(req, res) {
    const orders = await LoadOrderService.load('orders', {
      where: { buyer_id: req.session.userId },
    });

    return res.render('orders/index', { orders });
  },
  async sales(req, res) {
    const sales = await LoadOrderService.load('orders', {
      where: { seller_id: req.session.userId },
    });

    return res.render('orders/sales', { sales });
  },
  async show(req, res) {
    const order = await LoadOrderService.load('order', {
      where: { id: req.params.id },
    });
    return res.render('orders/details', { order });
  },
  async post(req, res) {
    try {
      // get user from cart
      const cart = Cart.init(req.session.cart);

      const buyer_id = req.session.userId;
      const filteredItems = cart.items.filter(
        (item) => item.product.user_id != buyer_id
      );

      //  create order
      const createOrdersPromise = filteredItems.map(async (item) => {
        let { product, price: total, quantity } = item;
        const { price, id: product_id, user_id: seller_id } = product;
        const status = 'open';

        const order = await Order.create({
          seller_id,
          buyer_id,
          product_id,
          price,
          total,
          quantity,
          status,
        });

        // Get products data
        product = await LoadProductService.load('product', {
          where: { id: product_id },
        });

        // get seller data,
        const seller = await User.findOne({ where: { id: seller_id } });

        // get buyer data
        const buyer = await User.findOne({ where: { id: buyer_id } });

        // send email with product data to seller
        await mailer.sendMail({
          to: seller.email,
          from: 'no-replay@launchstore.co.mz',
          subject: 'Novo pedido de compra',
          html: email(seller, product, buyer),
        });

        return order;
      });
      await Promise.all(createOrdersPromise);

      // clear cart
      delete req.session.cart;
      Cart.init();

      //  seed success notification for user
      return res.render('orders/success');
    } catch (error) {
      console.error(error);
      return res.render('orders/error');
    }
  },
  async update(req, res) {
    const { id, action } = req.params;
    const acceptedAction = ['close', 'cancel'];

    if (!acceptedAction.includes(action))
      return res.send('cannot do this action1');

    // get order
    const order = await Order.findOne({
      where: { id },
    });
    if (!order) return res.send('Order not found');
    // if status == open
    if (order.status != 'open') return res.send('cannot do this action2');

    // update order
    const statuses = {
      close: 'sold',
      cancel: 'canceled',
    };
    order.status = statuses[action];

    await Order.update(id, {
      status: order.status,
    });

    return res.redirect('/orders/sales');
  },
};
