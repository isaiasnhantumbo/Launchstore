const crypto = require("crypto");
const User = require("../models/User");
const mailer = require("../../lib/mailer");
const { hash } = require("bcryptjs");

module.exports = {
  loginForm(req, res) {
    return res.render("session/login");
  },
  login(req, res) {
    req.session.userId = req.user.id

    return res.redirect("/users");
  },
  logout(req, res) {
    req.session.destroy();
    return res.redirect("/");
  },
  forgotForm(req, res) {
    return res.render("session/forgot-password");
  },
  async forgot(req, res) {
    const user = req.user;
    try {
      // token para esse usuario
      const token = crypto.randomBytes(20).toString("hex");

      // criar expericao do token
      let now = new Date();
      now = now.setHours(now.getHours() + 1);

      await User.update(user.id, {
        reset_token: token,
        reset_token_expires: now,
      });

      // enviar um email com um link de recuperacao de senha
      await mailer.sendMail({
        to: user.email,
        from: "no-reply@launchstore.co.mz",
        subject: "Recuperar senha",
        html: `<h2>Perdeu a chave?</h2>
      <p>Nao se preocupe, cliquer no no link abaixo para recuperar a senha</p>
      <p><a href="http://localhost:3000/users/password-reset?token${token}" target="_blank">Recuperar senha</a></p>
      `,
      });

      // avisar o usuario que recebemos o emial
      return res.render("session/forgot-password", {
        success: "Verrifique o seu email para resetar a sua senha!",
      });
    } catch (err) {
      console.error(err);
      return res.render("session/forgot-password", {
        error: "Algo de errado nao deu certo, tente novamente!",
      });
    }
  },
  resetForm(req, res) {
    return res.render("session/password-reset", { token: req.query.token });
  },
  async reset(req, res) {
    const user = req.user;

    const { password,token } = req.body;

    try {
      // criar um novo hash de senha
      const newPassword = await hash(password, 8);
      // atualizar o usuario
      await User.update(user.id, {
        password: newPassword,
        reset_token: "",
        reset_token_expires: "",
      });
      // avisar o usuario que ele tem uma nova senha
      return res.render("session/login", {
        user: req.body,
        success: "Senha atualizada com sucesso! Faca o seu login",
      });
    } catch (err) {
      console.error(err);
      return res.render("session/password-reset", {
        user: req.body,
        token,
        error: "Algo de errado nao deu certo, tente novamente!",
      });
    }
  },
};
