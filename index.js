const logger = require("./logger");

const isDeveloper = (valor) => {
  if (typeof valor === "boolean") {
    return valor;
  }
  throw new Error("El valor debe ser de tipo booleano");
};

try {
  isDeveloper(true);
  logger.info("El valor de la función es correcto");
} catch (error) {
  logger.error(`El valor de la función es incorrecto: ${error}`);
}
