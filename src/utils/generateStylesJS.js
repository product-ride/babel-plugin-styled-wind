import resolveConfigObjects from './resolveConfig';
import { defaultConfig } from './defaultConfig';

export default function resolveConfig(...configs) {
  return resolveConfigObjects([...configs, defaultConfig]);
}