interface IRecipe {
  id: number,
  title: string,
  slug: string,
  thumbnail: string,
  author: string,
  difficulty: string,
  description: string,
  ingredients: ({
    id: number,
    quantity: number,
    unit: string,
    name: string,
    } |
    {
      id: number,
      quantity: string,
      unit: string,
      name: string,
      }
    )[],
  instructions: string[],
}

type RecipeState = {
  list: IRecipe[],
  loading: boolean,
  favorites: IRecipe[]
}

type UserState = {
  logged: boolean,
  email: string,
  password: string,
  loggedMessage: string,
  pseudo: string,
  token: string
};


type RecipeAction = {
  type?: string,
  recipe?: IRecipe,
  recipes?: IRecipe[]
}

type UserAction = {
  type?: string,
  input?: { email?: string } | { password?: string},
  recipes?: IRecipe[],
  payload?: { pseudo: string, token: string, logged: boolean }
}