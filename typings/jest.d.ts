
import type ApiException from '#common/errors/ApiException';
import type CustomError from '#common/errors/CustomError';
import type ServerError from '#common/errors/ServerError';
import type { OpUnitType } from 'dayjs';

export {}
declare global {
  namespace jest {


    type Errors = typeof ServerError | typeof ApiException | typeof CustomError
    type ErrorKeys<E extends Errors> = keyof E['prototype']
    type ErrorValues<E extends Errors, K extends ErrorKeys<E>> = Expand<E['prototype'][K]>

    type ExpectedErrorWith<E extends Errors, K extends ErrorKeys<E>> = [
      E,
      {
        hasProperty?: {
          [P in K]?: ErrorValues<E, P>
        },
      }
    ] | [Errors]

    type toHaveTypeTypes =
    | 'date'
    | 'string'
    | 'boolean'
    | 'number'
    | 'numberOrNaN'
    | 'integer'
    | 'array'
    | 'object'
    | 'buffer'

    type toHaveTypeObjTypes = toHaveTypeTypes | 'optional'

    interface Matchers<R> {
      toBeIncludedIn<T>(expected: Array<T>): CustomMatcherResult;
      twoWayIncludes<T>(expected: Array<T>): CustomMatcherResult;
      toInclude(expected: Primitives): CustomMatcherResult;
      toThrowErrorWith<E extends Errors, K extends ErrorKeys<E>>(...expected: ExpectedErrorWith<E, K>): Promise<CustomMatcherResult>
      toRun(): CustomMatcherResult;
      toHaveType(expected: toHaveTypeTypes): CustomMatcherResult
      toHaveLengthGtThan(expected:number): CustomMatcherResult;
      toHaveLengthLtThan(expected:number): CustomMatcherResult;
      toBeCloseBy(expected: [number, number]): jest.CustomMatcherResult;
      toBeInRange(expected: [number, number]): jest.CustomMatcherResult;
      toMatchObjectType<T extends object>(
        expected: {[key in keyof T]: toHaveTypeObjTypes},
      ): jest.CustomMatcherResult;
      toBeSameDate(...expected: [Date, OpUnitType]): jest.CustomMatcherResult;
    }
    
    type RepeatWithCanFail = {
      times: number,
      untilPasses?: undefined,
      timeout?: undefined
      stopOnFail?: undefined,
      canFailPct: number,
      passIfOnePasses?: undefined,
      debug?: boolean,
    } | {
      times?: undefined,
      untilPasses: true,
      timeout: number
      stopOnFail?: undefined,
      canFailPct: number,
      passIfOnePasses?: undefined,
      debug?: boolean,
    }
    
    type RepeatWithPass = {
      times: number,
      untilPasses?: undefined,
      timeout?: undefined
      stopOnFail?: undefined,
      canFailPct?: undefined,
      passIfOnePasses: boolean,
      debug?: boolean,
    } | {
      times?: undefined,
      untilPasses: true,
      timeout: number,
      stopOnFail?: undefined,
      canFailPct?: undefined,
      passIfOnePasses: boolean,
      debug?: boolean,
    }
    
    type RepeatWithDefaults = {
      times: number,
      untilPasses?: undefined,
      timeout?: undefined
      stopOnFail?: boolean,
      canFailPct?: undefined,
      passIfOnePasses?: undefined,
      debug?: boolean,
    } | {
      times?: undefined,
      untilPasses: true,
      timeout: number
      stopOnFail?: boolean,
      canFailPct?: undefined,
      passIfOnePasses?: undefined,
      debug?: boolean,
    }

    type RepeatOpts<O = any> =
    O extends RepeatWithCanFail
    ? RepeatWithCanFail
    : O extends RepeatWithPass
    ? RepeatWithPass
    : RepeatWithDefaults;

    interface It {
      repeats: <O extends RepeatOpts>(
        options: RepeatOpts<O>,
        name: string,
        fn?: jest.ProvidesCallback,
        timeout?: number,
      ) => void;
    }

  }
}