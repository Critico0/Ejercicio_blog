const { Comment } = require("../models");
const formidable = require("formidable");
const pagesController = require("./pagesController");

// Store a newly created resource in storage.
async function store(req, res) {
  await Comment.create({
    authorId: req.user.id,
    content: req.body.content,
    articleId: req.body.articleId,
  });
  res.redirect("back");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const comment = await Comment.findOne({ where: { id: req.params.id }, include: { all: true } });
  const name = comment.author.firstname;
  const { textoBoton, ruta, textoBotonB, rutaB } = pagesController.buttonNavbar(req);
  req.body.title = res.render("editComment", {
    comment,
    textoBoton,
    ruta,
    textoBotonB,
    rutaB,
    name,
  });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
    }
    await Comment.update(
      {
        content: fields.content,
      },
      {
        where: { id: req.params.id },
      },
    );
    return res.redirect(`/articulos/${req.params.id}`);
  });
  //aca edito comentarios///
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Comment.destroy({ where: { id: req.params.id } });
  console.log(req.params.id);
  return res.redirect("back");
}

module.exports = {
  store,
  edit,
  update,
  destroy,
};
