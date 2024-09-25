import { db } from '../db.js'

const createTable = `
  CREATE TABLE IF NOT EXISTS address(
    id int auto_increment not null primary key,
    rua varchar(100) not null,
    numero varchar(10),
    complemento varchar(255),
    user_id int not null,
    foreign key (user_id) references usuarios(id)
  )
`

db.query(createTable,(err, res) => {
  if(err) {
    console.log(`erro ao criar tabela ${err}`)
    return;
  }

  console.log('tabela criada com sucesso')

  db.end((err) => {
    if(err) {
      console.log(`erro ao encerrar conexão ${err}`)
      return;
    }

    return console.log('conexão encerrada com sucesso')
  })

})