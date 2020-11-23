const User = require("../models/User");
async function post(req, res, next) {
  // check if has all fields
  const keys = Object.keys(req.body);

  for (key in keys) {
    if (req.body[key] == "") {
      return res.render("users/register", {user:req.body,error:"Por favor, preencha todos os campos"});
    } 
  }
  // check if user exists [email]
  let { email, cpf_cnpj, password, passwordRepeat } = req.body;

  cpf_cnpj = cpf_cnpj.replace(/\D/g, "");

  const user = await User.findOne({
    where: { email },
    or: { cpf_cnpj },
  });

  if (user) return res.render("users/register", {user:req.body,error:"Usuário ja cadastrado"});

  // check if password match
  if (password != passwordRepeat) return res.render("users/register", {user:req.body,error:"A senha esta diferente"});
 
  next();
}

module.exports = {
  post,
};
 