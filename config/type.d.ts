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
  logged: boolean,
}

type RecipeAction = {
  type?: string,
  recipe?: IRecipe,
  recipes?: IRecipe[]
}