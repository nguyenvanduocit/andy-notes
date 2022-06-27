```go
var validate *validator.Validate  
var validateOnce sync.Once  
  
func validateStruct(str interface{}) error {  
   validateOnce.Do(func() {  
      validate = validator.New()  
   })  
  
   return validate.Struct(str)  
}
```