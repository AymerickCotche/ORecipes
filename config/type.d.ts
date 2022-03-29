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
}

type UserState = {
  isLogged: boolean,
  email: string,
  password: string,
  emailInput: string,
  passwordInput: string,
  loggedMessage: string,
};


type RecipeAction = {
  type?: string,
  recipe?: IRecipe,
  recipes?: IRecipe[]
}

type UserAction = {
  type?: string,
  input?: { email?: string } | { password?: string},
  recipes?: IRecipe[]
}