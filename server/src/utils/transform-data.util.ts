import { plainToClass as libPlainToClass } from 'class-transformer';

type ClassConstructor<T> = {
  new (...args: unknown[]): T;
};

export const TransformDataUtil = {
  /**
   * Transforms a plain JS object into an instance of a specified class,
   * excluding any properties that are not explicitly marked with @Expose()
   * in the class definition.
   * @param classDto - A dto class constructor to transform the plain object into
   * @param plain - A JS plain object to be transformed into an instance of the specified class
   * @returns Instance of the specified class with properties mapped from the plain object, excluding any extraneous values
   */
  plainToClass: <TClass, TPlain>(
    classDto: ClassConstructor<TClass>,
    plain: TPlain,
  ) => {
    return libPlainToClass(classDto, plain, { excludeExtraneousValues: true });
  },
};
