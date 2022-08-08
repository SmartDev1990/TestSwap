import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56',
  18,
  'xRICE',
  'xRice Token',
  'https://riceptotocol.org/',
)

const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

const BUSD_MAINNET = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.BSC]: BUSD_MAINNET,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const bscTokens = {
  wbnb: WBNB[ChainId.BSC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(  ChainId.BSC,'0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710', 18, 'Wrapped BRISE', 'WBRISE', 'https://www.bitgert.com/',
  ),
  cake: CAKE_MAINNET,
  beta: new Token(ChainId.BSC, '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28', 18, 'BETA', 'Beta Finance', 'https://betafinance.org',),
  nft: new Token(ChainId.BSC, '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D', 6, 'NFT', 'APENFT', 'https://apenft.org'),
}

export const bscTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  syrup: new Token(ChainId.BSC_TESTNET, '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9', 18, 'SYRUP', 'SyrupBar Token', 'https://pancakeswap.finance/',),
}
