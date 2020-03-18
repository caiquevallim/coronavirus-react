// import { center, getCoord } from '@turf/turf';
// import shape from '../shared/services/map/shape/shape.json';

const production = process.env.NODE_ENV === 'production';

const prodOrDevConfigs = production ? require('./config.prod.js').default : require('./config.dev.js').default;

const configMapBox = {
  BRAZIL: { lat: -17.4709498, lng: -49.7206912 }, // Brasil
};

const configService = {
  ...prodOrDevConfigs,
  configMapBox,
};
export default configService;
