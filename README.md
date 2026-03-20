# Documentação da API

## Rodando a API (Via docker):

Criar o arquivo `.env` de acordo com o `.env.example`

E depois executar o comando:

```
docker compose up
```

## Rotas:

### Inscritos:

<hr>

#### GET - /inscrito

Lista todos os particiantes

#### POST - /inscrito

Cria inscrito

##### Entrada esperada:

```
nome_inscrito: String
email: String
num_matricula: String
curso: String
endereco: Object {
    rua: String
    numero: String
    bairro: String
    cidade: String
    estado: String
    cep: String
    tipo_local: String
}
```

#### PATCH - /inscrito

Edita o inscrito do `id_inscrito` informado

##### Entrada esperada:

```
id_inscrito: Int
nome_inscrito: String?
email: String?
num_matricula: String?
curso: String?
```

#### DELETE - /inscrito

Deleta um inscrito

##### Entrada esperada:

```
id_inscrito: Int
```

<hr>

### Eventos:

#### GET - /evento

Lista todos os Eventos

#### POST - /evento

Cria um evento

##### Entrada esperada:

```
nome_evento: String
centro_academico: String
local_campus: String
data_evento: DateTime
endereco: Object {
    rua: String
    numero: String
    bairro: String
    cidade: String
    estado: String
    cep: String
    tipo_local: String
}
```

#### PATCH - /evento

Edita o evento do `id_evento` informado

##### Entrada esperada:

```
id_evento: Int
nome_evento: String?
centro_academico: String?
local_campus: String?
data_evento: DateTime?
```

#### DELETE - /evento

Deleta um evento

##### Entrada esperada:

```
id_evento: Int
```

<hr>

### Destaque

#### GET - /destaque

Lista todos os destaques

#### POST - /destaque

Cria um destaque

##### Entrada esperada:

```
id_evento: Int
```

#### DELETE - /destaque

Deleta um destaque

##### Entrada esperada:

```
id_destaque: Int
```