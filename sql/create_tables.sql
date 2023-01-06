DROP TABLE IF EXISTS COMMENT;

CREATE TABLE COMMENT (
  ID uuid NOT NULL,
  POST_ID uuid NOT NULL,
  CONTENT varchar(400),
  POSTER_EMAIL varchar(200),
  CREATION_TIMESTAMP TIMESTAMP,
  PRIMARY KEY (ID)
);
