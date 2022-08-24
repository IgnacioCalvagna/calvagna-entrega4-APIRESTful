let productos = [];
let id = 1;

exports.getAll = (req, res, next) => {
  res.render("productos",{productos});
};


exports.add = (req, res, next) => {
  const { nombre, precio, img } = req.body;
  const newProduct = { id, nombre, precio, img };
  productos.push(newProduct);
  id = id + 1;

  res.render("form");
};



exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const producto = await productos.find((producto) => producto.id == id);
    if (producto === undefined) {
      res.send({ error: "producto no encontrado " });
    } else {
      res.send(producto);
    }
  } catch (err) {
    next(err);
  }
};


exports.edit = (req, res, next) => {
  const { id } = req.params;
  const { nombre, precio, cantidad } = req.body;
  try {
    const prodEdit = productos.find((producto) => producto.id == id);
    if (!prodEdit) {
      res.send({ error: "producto no encontrado" });
    } else {
      productos.pop(prodEdit);
      const editado = { id: id, nombre, cantidad, precio };
      productos.push(editado);
      res.send(editado);
    }
  } catch (err) {
    next(err);
  }
};
exports.deleteAll = (req, res, next) => {
  productos = [];
  res.send(productos);
};
exports.deleteById = (req, res, next) => {
  const { id } = req.params;
  let newArr = productos.filter((producto) => producto.id != id);
  productos = newArr;
  res.send(productos);
};
