export class CallLogDto {
  readonly AccountSid: string;
  readonly ApiVersion: string;
  readonly CallSid: string;
  readonly CallStatus: string;
  readonly Called: string;
  readonly CalledCity: string;
  readonly CalledCountry: string;
  readonly CalledState: string;
  readonly CalledZip: string;
  readonly Caller: string;
  readonly CallerCity: string;
  readonly CallerCountry: string;
  readonly CallerState: string;
  readonly CallerZip: string;
  readonly DialBridged: string;
  readonly DialCallDuration: string;
  readonly DialCallSid: string;
  readonly DialCallStatus: string;
  readonly Direction: string;
  readonly From: string;
  readonly FromCity: string;
  readonly FromCountry: string;
  readonly FromState: string;
  readonly FromZip: string;
  readonly To: string;
  readonly ToCity: string;
  readonly ToCountry: string;
  readonly ToState: string;
  readonly ToZip: string;
  readonly CreatedAt: Date;
}
export const CallLogFilter = [
  'AccountSid',
  'ApiVersion',
  'CallSid',
  'CallStatus',
  'Called',
  'CalledCity',
  'CalledCountry',
  'CalledState',
  'CalledZip',
  'Caller',
  'CallerCity',
  'CallerCountry',
  "Digits",
  'CallerState',
  'CallerZip',
  'DialBridged',
  'DialCallDuration',
  'DialCallSid',
  'DialCallStatus',
  'Direction',
  'From',
  'FromCity',
  'FromCountry',
  'FromState',
  'FromZip',
  'To',
  'ToCity',
  'ToCountry',
  'ToState',
  'ToZip',
  'CreatedAt',
];
