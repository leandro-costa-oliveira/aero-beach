import { Alert, Form, Spinner, Table } from "react-bootstrap";
import { useAtualizarRole, AuthRoles, type AuthRole } from "../hooks/useAtualizarRole";
import { useListaUsuarios } from "../hooks/useListarUsuarios";

export function AdminUsuarios() {
  const { data, isLoading, error } = useListaUsuarios();
  const atualizarRole = useAtualizarRole();

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Não foi possível carregar os usuários.</Alert>;
  }

  return (
    <>
      <h2 className="mb-4">Gerenciamento de Usuários</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Perfil</th>
          </tr>
        </thead>

        <tbody>
          {data?.jogadores.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <Form.Select
                  value={usuario.role}
                  onChange={(e) =>
                    atualizarRole.mutate({
                      id: usuario.id,
                      role: e.target.value as AuthRole,
                    })
                  }
                >
                  {Object.entries(AuthRoles).map(([label, value]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}