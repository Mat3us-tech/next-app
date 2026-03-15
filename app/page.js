export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Acesso ao Sistema</h1>
        <p>Use seu e-mail corporativo para entrar.</p>

        <form className="login-form">
          <div>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="seuemail@empresa.com" required />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input id="password" type="password" placeholder="Digite sua senha" required />
          </div>

          <button type="submit">Entrar</button>
        </form>

        <div className="small">Exemplo visual para autenticação em Next.js</div>
      </section>
    </main>
  );
}
