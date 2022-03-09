

# typescript library

annotation-exception-handlers is a library that allows you to write a try and catch using Try and catch that makes the code ugly? just used annotation   like this   @validate("name your function").






 
 

# NPM


```NPM

npm i annotation-exception-handlers

```



#### Demo
```Example
 import validate from "annotation-exception-handlers/validate";

 class test {
    constructor() {}


    // this function not fire error so all functionality  call on correct way
    // print hellow saeed 
    @validate("function_without_error")
    function_without_error() {
      console.log(" hello saeed 1")
    }


    // this function   fire error so all functionality  not work
    // print method that fire error and error message
    @validate("function_with_error")
    function_with_error() {
        throw 'this error because you not make star  for this library ^_^';
        console.log(" hello saeed 2")
    }

   // if you want customize  error function you can override the default 
   // for example send email
   error(error) {

    // TODO: sned email that contain error messgae 
    console.log(error)
}
 

}

```

 

 
# About me

 name:Saeed Mohammed Saleh Alabidi
email: saeed1adm@gmail.com

 
