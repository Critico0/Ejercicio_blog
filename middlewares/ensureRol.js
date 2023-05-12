function ensureRol(roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    } else {
      req.session.redirectTo = req.query.redirectTo;
      console.log("no tienes permisos");
      return res.redirect("/");
    }
  };
}

module.exports = ensureRol;
