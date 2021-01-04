import Server from './app'

function main(): void {
  const server = new Server(3000)
  server.startServer()
}

main()
