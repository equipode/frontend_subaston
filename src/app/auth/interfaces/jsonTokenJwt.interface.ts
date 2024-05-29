export interface tokenJwt {
  status: string,
  message: string,
  user: {
    id: number,
    user: string,
    nick: string
  },
  Token: string
}
