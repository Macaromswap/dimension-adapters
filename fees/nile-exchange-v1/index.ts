import { SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";
import { getDexFeesExports } from "../../helpers/dexVolumeLogs";

const FACTORY_ADDRESS = '0xAAA16c016BF556fcD620328f0759252E29b1AB57';

const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.LINEA]: {
      fetch: getDexFeesExports({ chain: CHAIN.LINEA, factory: FACTORY_ADDRESS,}),
      start: 1705053913,
    },
  }
};

export default adapter;