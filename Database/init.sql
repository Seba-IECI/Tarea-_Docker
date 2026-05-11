-- =============================================
-- FC Barcelona - Base de Datos
-- Inicialización de tablas y datos
-- PostgreSQL 16
-- =============================================

-- Tabla: Jugadores Actuales (Plantilla 2025/2026)
CREATE TABLE IF NOT EXISTS jugadores_actuales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dorsal INTEGER,
    posicion VARCHAR(50) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    altura DECIMAL(3,2),
    peso INTEGER,
    pie_dominante VARCHAR(20),
    imagen_url VARCHAR(255),
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: Jugadores Históricos (Leyendas)
CREATE TABLE IF NOT EXISTS jugadores_historicos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    posicion VARCHAR(50) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    anio_inicio INTEGER NOT NULL,
    anio_fin INTEGER NOT NULL,
    goles INTEGER DEFAULT 0,
    partidos INTEGER DEFAULT 0,
    titulos_ganados INTEGER DEFAULT 0,
    imagen_url VARCHAR(255),
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: Logros Históricos
CREATE TABLE IF NOT EXISTS logros_historicos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    anio INTEGER NOT NULL,
    descripcion TEXT,
    imagen_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- DATOS: Jugadores Actuales (Plantilla 2024/2025)
-- =============================================
INSERT INTO jugadores_actuales (nombre, dorsal, posicion, nacionalidad, fecha_nacimiento, altura, peso, pie_dominante, descripcion) VALUES
('Marc-André ter Stegen', 1, 'Portero', 'Alemania', '1992-04-30', 1.87, 85, 'Derecho', 'Portero titular del FC Barcelona desde 2014. Reconocido por su excelente juego con los pies y reflejos felinos.'),
('Iñaki Peña', 13, 'Portero', 'España', '1999-03-02', 1.84, 78, 'Derecho', 'Portero canterano que ha demostrado solvencia cuando ha tenido oportunidades en el primer equipo.'),
('Pau Cubarsí', 2, 'Defensa Central', 'España', '2007-01-22', 1.82, 73, 'Derecho', 'Joven prodigio de La Masía. Debutó con solo 16 años y se consolidó rápidamente como titular.'),
('Alejandro Balde', 3, 'Lateral Izquierdo', 'España', '2003-10-18', 1.75, 69, 'Izquierdo', 'Lateral izquierdo veloz y con gran proyección ofensiva, producto de La Masía.'),
('Ronald Araújo', 4, 'Defensa Central', 'Uruguay', '1999-03-07', 1.88, 82, 'Derecho', 'Defensor potente y rápido, uno de los mejores centrales del mundo por su contundencia.'),
('Iñigo Martínez', 5, 'Defensa Central', 'España', '1991-05-17', 1.82, 78, 'Izquierdo', 'Defensa central experimentado con gran calidad en el juego aéreo y salida de balón.'),
('Jules Koundé', 23, 'Lateral Derecho', 'Francia', '1998-11-01', 1.80, 75, 'Derecho', 'Defensa versátil que puede jugar como central o lateral derecho con gran calidad técnica.'),
('Pedri', 8, 'Centrocampista', 'España', '2002-11-25', 1.74, 63, 'Izquierdo', 'Mediocampista extraordinario con visión de juego excepcional y control de balón sublime.'),
('Gavi', 6, 'Centrocampista', 'España', '2004-08-05', 1.73, 70, 'Derecho', 'Centrocampista intenso, ganador del Golden Boy 2022. Destaca por su entrega y calidad.'),
('Frenkie de Jong', 21, 'Centrocampista', 'Países Bajos', '1997-05-12', 1.81, 74, 'Derecho', 'Mediocampista elegante con capacidad para romper líneas con conducción y pase.'),
('Dani Olmo', 20, 'Mediapunta', 'España', '1998-05-07', 1.79, 74, 'Derecho', 'Jugador polivalente con gran disparo, visión y capacidad para desequilibrar en el último tercio.'),
('Fermín López', 16, 'Centrocampista', 'España', '2003-02-07', 1.75, 70, 'Derecho', 'Centrocampista dinámico con llegada al área y capacidad goleadora. Campeón olímpico 2024.'),
('Marc Casadó', 17, 'Pivote', 'España', '2003-09-14', 1.84, 77, 'Derecho', 'Mediocentro defensivo canterano con excelente lectura del juego y capacidad de distribución.'),
('Lamine Yamal', 19, 'Extremo Derecho', 'España', '2007-07-13', 1.80, 71, 'Izquierdo', 'Prodigio absoluto del fútbol mundial. Debutó con 15 años y ya es pieza clave del equipo y la selección.'),
('Raphinha', 11, 'Extremo Derecho', 'Brasil', '1996-12-14', 1.76, 68, 'Izquierdo', 'Extremo brasileño con gran desborde, velocidad y potente disparo desde fuera del área.'),
('Robert Lewandowski', 9, 'Delantero Centro', 'Polonia', '1988-08-21', 1.85, 81, 'Derecho', 'Goleador histórico. Uno de los mejores delanteros de la historia con instinto letal en el área.'),
('Pau Víctor', 14, 'Delantero', 'España', '2002-09-10', 1.80, 73, 'Derecho', 'Delantero canterano con olfato goleador y gran movilidad en el frente de ataque.');

-- =============================================
-- DATOS: Jugadores Históricos (Leyendas)
-- =============================================
INSERT INTO jugadores_historicos (nombre, posicion, nacionalidad, anio_inicio, anio_fin, goles, partidos, titulos_ganados, descripcion) VALUES
('Lionel Messi', 'Delantero', 'Argentina', 2004, 2021, 672, 778, 35, 'El mejor jugador de la historia del FC Barcelona y posiblemente del fútbol mundial. 4 Champions League, 10 Ligas y 7 Balones de Oro con el club.'),
('Xavi Hernández', 'Centrocampista', 'España', 1998, 2015, 85, 767, 25, 'El maestro del tiki-taka. Centrocampista con la mejor visión de juego de su generación y pilar del Barça de Guardiola.'),
('Andrés Iniesta', 'Centrocampista', 'España', 2002, 2018, 57, 674, 32, 'El genio del control y la pausa. Autor del gol del Mundial 2010 y leyenda eterna del barcelonismo.'),
('Carles Puyol', 'Defensa Central', 'España', 1999, 2014, 18, 593, 21, 'El capitán por excelencia. Líder nato, valiente y ejemplo de sacrificio. Símbolo del Barça campeón.'),
('Ronaldinho', 'Mediapunta', 'Brasil', 2003, 2008, 94, 207, 6, 'El jugador que devolvió la alegría al Camp Nou. Balón de Oro 2005, magia pura con el balón.'),
('Johan Cruyff', 'Delantero', 'Países Bajos', 1973, 1978, 60, 180, 4, 'Revolucionó el fútbol del Barcelona tanto como jugador como entrenador. Padre del estilo Barça.'),
('Ronaldo Nazário', 'Delantero', 'Brasil', 1996, 1997, 47, 49, 3, 'Aunque breve, su paso fue devastador. Considerado el mejor delantero que ha vestido la camiseta azulgrana.'),
('Diego Maradona', 'Mediapunta', 'Argentina', 1982, 1984, 38, 58, 3, 'Genio del fútbol que dejó huella imborrable en el Camp Nou pese a su corta estancia.'),
('Rivaldo', 'Mediapunta', 'Brasil', 1997, 2002, 130, 235, 6, 'Balón de Oro 1999. Jugador decisivo con una zurda prodigiosa y goles espectaculares.'),
('Samuel Eto''o', 'Delantero', 'Camerún', 2004, 2009, 130, 199, 9, 'Delantero letal que fue pieza clave en las dos Champions de la era Rijkaard-Guardiola.'),
('Neymar Jr.', 'Extremo', 'Brasil', 2013, 2017, 105, 186, 9, 'Parte de la legendaria MSN. Talento desbordante, regate y gol en un tridente histórico.'),
('Luis Suárez', 'Delantero', 'Uruguay', 2014, 2020, 198, 283, 13, 'Tercer máximo goleador de la historia del club. Pichichi de la MSN y depredador del área.'),
('Gerard Piqué', 'Defensa Central', 'España', 2008, 2022, 53, 616, 30, 'Defensa central que formó parte de la mejor generación del Barcelona. Canterano de éxito mundial.'),
('Sergio Busquets', 'Pivote', 'España', 2008, 2023, 18, 722, 32, 'El pivote perfecto. Maestro de la interceptación y la distribución, pilar del tiki-taka.'),
('Dani Alves', 'Lateral Derecho', 'Brasil', 2008, 2016, 23, 391, 23, 'El lateral derecho más ganador de la historia del fútbol. Sociedad letal con Messi por la banda derecha.');

-- =============================================
-- DATOS: Logros Históricos
-- =============================================
INSERT INTO logros_historicos (titulo, categoria, anio, descripcion) VALUES
('Liga de Campeones de la UEFA', 'Champions League', 1992, 'Primera Copa de Europa del Barcelona, ganada en Wembley con gol de Ronald Koeman ante la Sampdoria.'),
('Liga de Campeones de la UEFA', 'Champions League', 2006, 'Victoria ante el Arsenal en París (2-1) con remontada histórica. Goles de Eto''o y Belletti.'),
('Liga de Campeones de la UEFA', 'Champions League', 2009, 'El sextete de Guardiola. Victoria 2-0 ante el Manchester United en Roma con goles de Eto''o y Messi.'),
('Liga de Campeones de la UEFA', 'Champions League', 2011, 'Considerada la mejor exhibición en una final. 3-1 ante el Manchester United en Wembley.'),
('Liga de Campeones de la UEFA', 'Champions League', 2015, 'El triplete de Luis Enrique. 3-1 ante la Juventus en Berlín. La MSN al completo marcó.'),
('La Liga - Título 27', 'La Liga', 2024, 'Título de Liga bajo la dirección de Xavi Hernández, el título número 27 del club.'),
('La Liga - Título 26', 'La Liga', 2023, 'Campeonato de Liga conseguido de manera contundente con récord de puntos bajo Xavi.'),
('Copa del Rey', 'Copa del Rey', 2021, 'Victoria aplastante 4-0 ante el Athletic Club en la final con un gran Messi.'),
('Copa del Rey', 'Copa del Rey', 2024, 'Título de Copa del Rey logrado completando el doblete doméstico de la temporada.'),
('Supercopa de España', 'Supercopa', 2023, 'Victoria contundente en la Supercopa celebrada en Arabia Saudí.'),
('Supercopa de Europa', 'Supercopa de Europa', 2015, 'Victoria ante el Sevilla (5-4) en un partido épico con prórroga en Tbilisi.'),
('Mundial de Clubes', 'Mundial de Clubes', 2009, 'Victoria ante Estudiantes de La Plata en Abu Dabi con gol agónico de Messi.'),
('Mundial de Clubes', 'Mundial de Clubes', 2011, 'Goleada 4-0 ante el Santos de Neymar en Yokohama.'),
('Mundial de Clubes', 'Mundial de Clubes', 2015, 'Victoria 3-0 ante River Plate en Yokohama con goles de Messi, Suárez e Iniesta.'),
('Recopa de Europa', 'Recopa de Europa', 1997, 'Último título europeo antes de la era Champions moderna, victoria ante el PSG.'),
('El Sextete', 'Hito Histórico', 2009, 'El Barcelona de Guardiola conquista los 6 títulos posibles en un año natural: Liga, Copa del Rey, Champions League, Supercopa de España, Supercopa de Europa y Mundial de Clubes.'),
('Remontada ante PSG (6-1)', 'Hito Histórico', 2017, 'Remontada épica en Champions League. Tras perder 4-0 en París, el Barça logró un histórico 6-1 en el Camp Nou.'),
('Triplete 2015', 'Hito Histórico', 2015, 'La MSN (Messi, Suárez, Neymar) llevó al Barcelona a conquistar Liga, Copa del Rey y Champions League.');
