

# Android View Animations [![Build Status](https://travis-ci.org/daimajia/AndroidViewAnimations.svg)](https://travis-ci.org/daimajia/AndroidViewAnimations)

  This is a library that allows you to write a function without using Try and cach that makes the code ugly?.

# Demo
 

# Usage


```NPM

npm i 

```



#### Example
```Example
 
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

# Why YoYo?

 
# About me

 name:Saeed Mohammed Saleh Alabidi
email: saeed1adm@gmail.com

 