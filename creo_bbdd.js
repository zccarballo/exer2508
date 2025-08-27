const sqlite3 = require("sqlite3").verbose();

function creoBBDD() {
    const db = new sqlite3.Database(
        "listaTarefas.db",
        sqlite3.OPEN_READWRITE,
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("conectado ...");
        },
    );
    

    // Habilitar las foreign keys
    db.run("PRAGMA foreign_keys = ON;", (err) => {
      if (err) {
        console.error("Error al activar foreign_keys:", err.message);
      } else {
        console.log("Foreign keys activadas");
      }
    });




        db.exec(
            `CREATE TABLE IF NOT EXISTS USUARIOS (
        id_usuarios		INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_usuarios	TEXT(200),
        mail_usuarios	TEXT(10),
        rol_usuarios	TEXT default 'usuario'
    );

    CREATE TABLE IF NOT EXISTS LISTA_TAREFAS(
        id_lista_tarefas			INTEGER PRIMARY KEY AUTOINCREMENT,
        tarefa_lista_tarefas		TEXT(200),
        id_usuarios_lista_tarefas	INTEGER,
        foreign key (id_usuarios_lista_tarefas) references USUARIOS(id_usuarios) on delete cascade
    )`,
            (err) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("creada ...");
            },
        );
        return db;
}

module.exports = creoBBDD();
