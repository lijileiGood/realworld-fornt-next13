export interface IAuthor {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface IArticle {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: IAuthor
}

export type Articles = IArticle[]
