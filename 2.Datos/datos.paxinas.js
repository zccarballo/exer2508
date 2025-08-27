const paxinas = {
    app: `<div class="caixa">
      <div class="img"></div>
    </div>
    <div class="container">
      <div class="formulario-caixa">
        <p class="title">FORMULARIO</p>
        <form id="formulario" enctype="multipart/form-data" class="form-group">
          <div class="subgrupo">
            <label for="nome" class="label">Nome</label>
            <input
              id="nome"
              name="Nome"
              type="text"
              placeholder="Introduce nome "
              class="input-style"
            />
          </div>
          <div class="subgrupo">
            <label for="apelido" class="label">Primeiro apelido</label>
            <input
              id="apelido1"
              name="Primeiro apelido"
              type="text"
              placeholder="Introduce primeiro apelido "
              class="input-style"
            />
          </div>
          <div class="subgrupo">
            <label for="apelido2" class="label">Segundo apelido</label>
            <input
              id="apelido2"
              name="Segundo apelido"
              type="text"
              placeholder="Introduce segundo apelido "
              class="input-style"
            />
          </div>
          <div class="subgrupo">
            <label for="idade" class="label">Idade</label>
            <input
              id="idade"
              name="Idade"
              type="number"
              placeholder="Introduce idade "
              class="input-style"
            />
          </div>
          <div class="subgrupo">
            <label for="profesion" class="label">Profesión</label>
            <input
              id="profesion"
              name="Profesión"
              type="text"
              placeholder="Introduce profesion "
              class="input-style"
            />
          </div>
          <div class="subgrupo">
            <label for="avatar" class="label">Avatar :</label>
            <input id="avatar" name="Avatar" type="file" class="input-style" />
          </div>
          <button type="submit" class="button"><span>Insertar</span></button>
          <button type="reset" class="button"><span>Borrar datos</span></button>
        </form>
      </div>
    </div>
    <button id="sair">Sair</button>`,
    usuario:`<!-- TAREFAS ASIGNADAS -->
    <h2>LISTA DE TAREFAS</h2>
    <div id="tarefasContainer"></div>
    <h3>Nova tarefa</h3>
    <form id="formNovaTarefa">
        <input type="text" id="novaTarefa" placeholder="Escribe unha nova tarefa" required />
        <button type="submit">Engadir</button>
    </form>`,
   
}
module.exports = paxinas