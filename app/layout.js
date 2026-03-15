import "./globals.css";

export const metadata = {
  title: "Login App Next",
  description: "Tela de login simples em Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
