const LoadProductService = require('../services/LoadProductService');
const User = require('../models/User');

const mailer = require('../../lib/mailer');

const email = (seller, product, buyer) => {
  `   <h2>Olá ${seller.name}</h2>
    <p>Você tem um novo pedido de compra do seu product</p>
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
};

module.exports = {
  async post(req, res) {
    try {
      // Get products data
      const product = await LoadProductService.load('product', {
        where: { id: req.body.id },
      });

      // get seller data,
      const seller = await User.findOne({ where: { id: product.user_id } });

      // get user data
      const buyer = await User.findOne({ where: { id: req.session.userId } });

      // send email with product data to seller
      await mailer.sendMail({
        to: seller.email,
        from: 'no-replay@launchstore.co.mz',
        subject: 'Novo pedido de compra',
        html: email(seller, product, buyer),
      });
      //  seed success notification for user
      return res.render('orders/success');
    } catch (error) {
      console.error(error);
      return res.render('orders/error');
    }
  },
};
