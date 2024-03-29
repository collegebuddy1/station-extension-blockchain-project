interface AccountHistory {
  pagination: {
    total: string
    next_key: string | null
  }
  tx_responses: AccountHistoryItem[]
}

interface PubKey {
  "@type": string
  key: string
}

interface SignerInfo {
  public_key: PubKey
  mode_info: {
    single: {
      mode: string
    }
  }
  sequence: string
}

interface MultiSignerInfo {
  public_key: {
    "@type": string
    threshold: number
    public_keys: PubKey[]
  }
  mode_info: {
    multi: {
      mode_infos: [
        {
          single: {
            mode: string
          }
        },
        {
          single: {
            mode: string
          }
        }
      ]
    }
  }
  sequence: string
}

interface AccountHistoryItem {
  txhash: string
  timestamp: any
  code: number
  height: string
  // collapsed?: number // WHAT IS THIS?
  tx: {
    body: {
      messages: any[]
      memo?: string
    }
    auth_info: {
      fee: {
        amount: CoinData[]
      }
      signer_infos: SignerInfo[] | MultiSignerInfo[]
    }
  }
  raw_log?: string
  logs: TxLog[]
}

interface TxLog {
  msg_index: number
  log: string
  events: TxLogEvent[]
}

interface TxLogEvent {
  type: string
  attributes: {
    key: string
    value: string
  }[]
}

type ActivityItem = AccountHistoryItem & {
  chain: string
}

interface TxMessage {
  msgType: string
  canonicalMsg: string[]
}
