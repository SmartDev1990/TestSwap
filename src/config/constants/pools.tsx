import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake CAKE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      32520: '',
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 290,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.peel,
    contractAddress: {
      32520: '',
      56: '0x288d1aD79c113552B618765B4986f7DE679367Da',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.34',
    version: 3,
  },
  {
    sousId: 289,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.shell,
    contractAddress: {
      32520: '',
      56: '0x595B7AF4F1828AB4953792482b01B2AFC4A46b72',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '89.699',
    version: 3,
  },
]

// known finished pools
const finishedPools = [
  {
    sousId: 285,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sdao,
    contractAddress: {
      32520: '',
      56: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  },
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
