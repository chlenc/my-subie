CREATE TABLE goods
(
    id serial PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    model VARCHAR (50) NOT NULL,
    gen VARCHAR (50) NOT NULL,
    tags TEXT[] NOT NULL,
    weight FLOAT NOT NULL,
    price FLOAT NOT NULL,
    oldprice FLOAT,
    stock BOOLEAN NOT NULL,
    description TEXT,
);

INSERT INTO goods
VALUES
     (2, 'title', 'model', 'gen', '{"tag1","tag2"}', 10.4, 200, 250, TRUE, 'Lorem ipstm'),
     (3, 'JDM SPEC B SPATS LEGACY 4TH GEN 03-09 BL BP', 'LEGACY / OUTBACK', '4TH GEN 03-09 (BL/BP)', '{"tag1"}',2.5, 80, NULL, TRUE, 'TEXT'),
     (4, 'JDM HID HEADLIGHTS LEGACY 03-06 (PREFACELIFT)','LEGACY / OUTBACK','4TH GEN 03-09 (BP/BL)', '{"tag2"}', 9.5,	180,	NULL,	TRUE,	'lorem ipsum');
