import { createBrowserHistory } from 'history';
import configureStore from './configureStore';


export const history = createBrowserHistory();
export default configureStore(undefined, history);
