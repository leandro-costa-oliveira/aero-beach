export interface CredentialsDTO {
  userId: string;
  username: string;
  role: "user" | "player" | "admin";
}