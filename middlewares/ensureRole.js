function isReader(req, res, next) {
  if (req.user.role.rolcode >= 100) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    console.log("no tienes permisos");
    res.redirect("/login");
  }
}

function isWriter(req, res, next) {
  if (req.user.role.rolcode >= 200) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    console.log("no tienes permisos");
    res.redirect("/login");
  }
}

function isEditor(req, res, next) {
  if (req.user.role.rolcode >= 300) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    console.log("no tienes permisos");
    res.redirect("/login");
  }
}

function isAdmin(req, res, next) {
  if (req.user.role.rolcode >= 400) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo;
    console.log("no tienes permisos");
    res.redirect("/login");
  }
}
module.exports = { isReader, isWriter, isEditor, isAdmin };
