/* Address book */
interface AddressBook {
  name: string
  recipient: string
  memo?: string
  favorite?: boolean
  icon?: string
  index?: number
}

/* Tokens */
type CustomTokens = Record<NetworkName, CustomTokensByNetwork>

interface NativeTokenBasicInfo {
  denom: CoinDenom
  id: string
}

interface CustomTokensByNetwork {
  cw20: CW20TokenInfoResponse[]
  cw721: CW721ContractInfoResponse[]
  native: NativeTokenBasicInfo[]
}

type CustomToken = CustomTokenCW20 | CustomTokenCW721 | NativeTokenBasicInfo

interface CustomTokenCW20 extends CW20TokenInfoResponse {
  token: TerraAddress
  chainID?: string
}

interface CustomTokenCW721 extends CW721ContractInfoResponse {
  contract: TerraAddress
}
