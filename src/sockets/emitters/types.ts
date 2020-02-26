export interface EmitterArgs {
    data?: string | number | object,
    ack?: Function,
}

export interface EmitterList {
    [key: string]: Function
}