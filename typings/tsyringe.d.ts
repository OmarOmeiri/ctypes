import * as tsyringe from 'tsyringe';

declare module 'tsyringe' {

  declare class CustomDependencyContainer {
    static dependencies: any;

    static init(): void
  }


   type RegisterParams<T = unknown> =
   | [tsyringe.ValueProvider<T>]
   | [tsyringe.FactoryProvider<T>]
   | [tsyringe.TokenProvider<T>, tsyringe.RegistrationOptions | undefined]
   | [tsyringe.ClassProvider<T> , tsyringe.RegistrationOptions | undefined]
   | [tsyringe.constructor<T>, tsyringe.RegistrationOptions | undefined]
}
