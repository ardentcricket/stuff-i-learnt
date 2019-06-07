* When you create a class like Bat by just assigning this to the parameter. You can create an instance of that class, and then, consume any attachments to the class through the instance. 


For best performance, we should make sure the prototype are not deep.

* When you create instances from a constructor. They can have their individual identity when you modify the instance itself. 

* The prototype property does not point to ```__proto__`` property of the current objects, instead it's a separate property that is inherited.

* If you attach to the prototype before creating the instance, it will show up on the instance after the fact.

* If you attach something to the instance, it won't make it part of the constructor.