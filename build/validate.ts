  function validate(errorHandler) {

    return function inti(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {


        let method = descriptor.value!;
        let exceptionHandler = function (arg) {
            try {
                
                return method.call(this, arg);

            } catch (error) {
                this.error("method name:" + errorHandler + ", error message" + error);

            }
        };


        descriptor.value = function () {
            this.error =(message)=>   console.log(message)
            return exceptionHandler.apply(this, arguments);
        };



    }
}


export default  validate
