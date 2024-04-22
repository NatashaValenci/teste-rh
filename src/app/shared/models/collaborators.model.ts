class Collaborators {
    collaborators: [Collaborator] | undefined
}

class Collaborator {
    id: string | undefined;
    nome: string | undefined;
    email: string | undefined;
    telefone: string | undefined;
    cpf: string | undefined;

}

export { Collaborator, Collaborators}