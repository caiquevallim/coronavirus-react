import reducerRegistry from "../../services/reducer-registry/reducerRegistry";
import covid19Reducer from "./covid19/covid19Reducer";

reducerRegistry.register('covid19', covid19Reducer);