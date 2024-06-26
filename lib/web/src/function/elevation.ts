import { elevation } from '../../../style/src/content/elevation';

const UMBRA = {
  0: "0px 0px 0px 0px",
  1: "0px 2px 1px -1px",
  2: "0px 3px 1px -2px",
  3: "0px 3px 3px -2px",
}

const PENUMBRA = {
    0: "0px 0px 0px 0px",
    1: "0px 1px 1px 0px",
    2: "0px 2px 2px 0px",
    3: "0px 3px 4px 0px",
}

const AMBIENT = {
    0: "0px 0px 0px 0px",
    1: "0px 1px 3px 0px",
    2: "0px 1px 5px 0px",
    3: "0px 1px 8px 0px",
}

const umbraOpacity= "33";
const penumbraOpacity= "24";
const ambientOpacity= "1F";

export default (elevation : keyof typeof UMBRA, color: string) =>{
    return `${UMBRA[elevation]} ${color}${umbraOpacity},
    ${PENUMBRA[elevation]} ${color}${penumbraOpacity},
    ${AMBIENT[elevation]} ${color}${ambientOpacity}
    `;
}