import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.json('{"res":"json"}')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})


