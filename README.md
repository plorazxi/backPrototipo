# Documentação da API

## Rodando a API (Via docker):

Criar o arquivo `.env` de acordo com o `.env.example`

E depois executar o comando:

```
docker compose up
```

## Rotas:

### GET - /

Lista todos os particiantes

### POST - /

Cria participante

#### Entrada esperada:

```
nome: String
email: String
matricula: String
curso: String
evento: String
```

### PATCH - /

Edita o participante do `id` informado

#### Entrada esperada:

```
id: Int
nome: String?
email: String?
matricula: String?
curso: String?
evento: String?
```

### DELETE - /

Deleta um participante

#### Entrada esperada:

```
id: Int
```