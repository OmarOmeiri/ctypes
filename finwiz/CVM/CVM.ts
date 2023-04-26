export type CVMDocClasses = 'CIA_ABERTA' | 'FI';
export type CVMDocTypes<C extends CVMDocClasses> =
C extends 'CIA_ABERTA'
? 'cad' | 'cadE' | 'dfp' | 'fre' | 'fca' | 'itr'
: C extends 'FI'
? 'cad' | 'cda' | 'extr' | 'lam' | 'infD' | 'infA' // | 'perfM'
: never;

/**
 * All file structure should conform to this.
 */
export const CVM_FILES_MAP: {
  [C in CVMDocClasses]: CVMDocTypes<C>[]
} = {
  CIA_ABERTA: [
    'cad',
    'cadE',
    'dfp',
    'fre',
    'fca',
    'itr',
  ],
  FI: [
    'cad',
    'cda',
    'extr',
    'lam',
    'infD',
    'infA',
    // 'perfM',
  ],
};

export enum CVMFBRSit {
  INC = 'INC',
  PREOP = 'PREOP',
  ESP ='ESP',
  LIQ = 'LIQ',
  NORMAL = 'NM',
  CANC = 'CN',
}

export enum CVMFBRPubAlv {
  PREV = 'PREV',
  PROF = 'PROF',
  QUALIF = 'QUALIF',
  QUALIFPROF = 'QUALIFPROF',
  GNRL = 'GNRL'
}

export const CVMFBRPubAlvMap: {
  [K in CVMFBRPubAlv]: RegExp
} = {
  [CVMFBRPubAlv.PREV]: /.*previd.*/i,
  [CVMFBRPubAlv.PROF]: /(?<!qualif.*)profiss.*/i,
  [CVMFBRPubAlv.QUALIF]: /.*qualificado.?(?!profissional)*$/i,
  [CVMFBRPubAlv.QUALIFPROF]: /^(.*qualif).*?(profis.*)/i,
  [CVMFBRPubAlv.GNRL]: /.*gera.*/i,
};

export const CVMFBRSitMap: {
  [K in CVMFBRSit]: RegExp
} = {
  [CVMFBRSit.INC]: /.*incorp.+/i,
  [CVMFBRSit.PREOP]: /.*pr(e|é)(-)?op.*/i,
  [CVMFBRSit.ESP]: /.*sit.+esp.+/i,
  [CVMFBRSit.LIQ]: /.*liquid.+/i,
  [CVMFBRSit.NORMAL]: /.*normal.*/i,
  [CVMFBRSit.CANC]: /.*cancel.+/i,
};

export enum CVMCBRSit {
  ACTIVE = 'A',
  CANC = 'CN',
  SUS = 'SUS'
}

export const CVMCBRSitMap: {
  [K in CVMCBRSit]: RegExp
} = {
  [CVMCBRSit.ACTIVE]: /.*ativ.+/i,
  [CVMCBRSit.CANC]: /.*cancel.+/i,
  [CVMCBRSit.SUS]: /.*susp.+/i,
};
