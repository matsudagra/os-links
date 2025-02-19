export default {
  async fetch(request, env, ctx) {
    // Define os arquivos disponíveis
    const files = {
      "/": "public/index.html",
      "/script.js": "public/script.js",
      "/style.css": "public/style.css",
    };

    // Obtém a URL da requisição
    const url = new URL(request.url);
    const path = url.pathname === "/" ? "/" : url.pathname;

    // Verifica se o arquivo existe
    if (files[path]) {
      const file = await env.ASSETS.fetch(`https://example.com/${files[path]}`);
      return new Response(await file.text(), {
        headers: { "Content-Type": getContentType(path) },
      });
    }

    return new Response("Arquivo não encontrado", { status: 404 });
  },
};

// Função para definir o tipo de conteúdo correto
function getContentType(path) {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".css")) return "text/css";
  if (path.endsWith(".js")) return "application/javascript";
  return "text/plain";
}
