-- -----------------------------------------------------
-- Schema sistema_financeiro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sistema_financeiro` DEFAULT CHARACTER SET utf8 ;
USE `sistema_financeiro` ;

-- -----------------------------------------------------
-- Table `sistema_financeiro`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_financeiro`.`usuarios` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_login` VARCHAR(255) NOT NULL,
  `user_password` CHAR(32) NOT NULL,
  `user_status` INT NOT NULL,
  `user_photo` LONGTEXT NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_financeiro`.`despesa_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_financeiro`.`despesa_categoria` (
  `despesa_categoria_id` INT NOT NULL AUTO_INCREMENT,
  `despesa_categoria_nome` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`despesa_categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_financeiro`.`despesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_financeiro`.`despesas` (
  `despesas_id` INT NOT NULL AUTO_INCREMENT,
  `despesa_descricao` TEXT NOT NULL,
  `despesa_valor` DOUBLE NOT NULL,
  `despesa_data` DATE NOT NULL,
  `usuarios_user_id` INT NOT NULL,
  `despesa_categoria_despesa_categoria_id` INT NOT NULL,
  PRIMARY KEY (`despesas_id`),
  INDEX `fk_despesas_usuarios_idx` (`usuarios_user_id` ASC),
  INDEX `fk_despesas_despesa_categoria1_idx` (`despesa_categoria_despesa_categoria_id` ASC),
  CONSTRAINT `fk_despesas_usuarios`
    FOREIGN KEY (`usuarios_user_id`)
    REFERENCES `sistema_financeiro`.`usuarios` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_despesas_despesa_categoria1`
    FOREIGN KEY (`despesa_categoria_despesa_categoria_id`)
    REFERENCES `sistema_financeiro`.`despesa_categoria` (`despesa_categoria_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sistema_financeiro`.`recebimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sistema_financeiro`.`recebimentos` (
  `recebimento_id` INT NOT NULL AUTO_INCREMENT,
  `recebimento_descricao` TEXT NOT NULL,
  `recebimento_valor` DOUBLE NOT NULL,
  `recebimento_data` DATETIME NOT NULL,
  `usuarios_user_id` INT NOT NULL,
  PRIMARY KEY (`recebimento_id`),
  INDEX `fk_recebimentos_usuarios1_idx` (`usuarios_user_id` ASC),
  CONSTRAINT `fk_recebimentos_usuarios1`
    FOREIGN KEY (`usuarios_user_id`)
    REFERENCES `sistema_financeiro`.`usuarios` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
