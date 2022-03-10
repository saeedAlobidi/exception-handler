declare function validate(errorHandler: any): (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export default validate;
