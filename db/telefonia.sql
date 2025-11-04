create database empresas_telefonia;


use empresas_telefonia;

create table empresa(
id_empresa int PRIMARY KEY,
nombre varchar (200),
direcccion varchar (200),
pais varchar (100),
ingrsos_anuales int

);

INSERT INTO empresa (id_empresa, nombre, direcccion, pais, ingrsos_anuales)
VALUES
(101, 'Telefónica', 'Gran Vía 28, Madrid', 'España', 40000000),
(102, 'Vodafone', '1 Kingdom St, London', 'Reino Unido', 45000000),
(103, 'Orange', '111 Avenue de France, Paris', 'Francia', 38000000),
(104, 'Deutsche Telekom', 'Friedrich-Ebert-Allee 140, Bonn', 'Alemania', 79000000),
(105, 'Verizon', '1095 Avenue of the Americas, NY', 'EE.UU.', 133000000),
(106, 'AT&T', '208 S Akard St, Dallas', 'EE.UU.', 171000000),
(107, 'Claro', 'Av. América 304, Ciudad de México', 'México', 25000000),
(108, 'Movistar', 'Av. Corrientes 566, Buenos Aires', 'Argentina', 15000000),
(109, 'TIM', 'Piazza Luigi Einaudi 8, Milan', 'Italia', 18000000),
(110, 'NTT Docomo', 'Sanno Park Tower, Tokyo', 'Japón', 85000000),
(111, 'China Mobile', '29 Jinrong Street, Beijing', 'China', 120000000),
(112, 'América Móvil', 'Lago Zurich 245, Ciudad de México', 'México', 50000000),
(113, 'Telstra', '242 Exhibition St, Melbourne', 'Australia', 22000000),
(114, 'Rogers Communications', '333 Bloor St E, Toronto', 'Canadá', 14000000),
(115, 'Swisscom', 'Alte Tiefenaustrasse 6, Worblaufen', 'Suiza', 12000000),
(116, 'KPN', 'Maanplein 55, The Hague', 'Países Bajos', 7000000),
(117, 'Telenor', 'Snarøyveien 30, Fornebu', 'Noruega', 13000000),
(118, 'Oi', 'Rua do Lavradio 71, Rio de Janeiro', 'Brasil', 5000000),
(119, 'Airtel', 'Airtel Center, Gurgaon', 'India', 30000000),
(120, 'SoftBank', '1-9-1 Higashi-Shimbashi, Minato-ku', 'Japón', 90000000);
