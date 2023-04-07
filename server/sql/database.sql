CREATE DATABASE auth_app;

CREATE TABLE users(
    id INT() NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR(25) NOT NULL,
    apPaterno VARCHAR(25) NOT NULL,
    apMaterno VARCHAR(25) NOT NULL,
    userDescription VARCHAR(500),
    contrasena VARCHAR(30) NOT NULL,
    salt VARCHAR(255) NOT NULL
);

DESCRIBE users;