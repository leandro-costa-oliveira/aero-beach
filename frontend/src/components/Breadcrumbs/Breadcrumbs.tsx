import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const { pathname } = useLocation();

  const routes: Record<string, string> = {
    "/": "Home",
    "/torneios": "Torneios",
    "/ranking": "Ranking",
    "/perfil": "Perfil",
    "/login": "Entrar",
    "/cadastro": "Cadastro",
  };

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="mb-4">
      {segments.length === 0 ? (
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      ) : (
        <>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>

          {segments.map((segment, index) => {
            const currentPath =
              "/" + segments.slice(0, index + 1).join("/");

            const isLast = index === segments.length - 1;

            let label = routes[currentPath];

            if (!label && currentPath.startsWith("/torneios/")) {
              label = "Detalhes";
            }

            if (!label) {
              label =
                segment.charAt(0).toUpperCase() + segment.slice(1);
            }

            return (
              <Breadcrumb.Item
                key={currentPath}
                active={isLast}
                linkAs={isLast ? undefined : Link}
                linkProps={
                  isLast ? undefined : { to: currentPath }
                }
              >
                {label}
              </Breadcrumb.Item>
            );
          })}
        </>
      )}
    </Breadcrumb>
  );
}