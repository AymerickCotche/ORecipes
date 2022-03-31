import { createStore, applyMiddleware, compose } from 'redux';
import recipesMW from 'src/middlewares/recipes';
import logginMW from 'src/middlewares/user';
import rootReducer from 'src/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipesMW, logginMW),
);

const store = createStore(rootReducer, enhancers);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
