export default function validateInfo(values){
    let errors = {}
    if(!values.username.trim()) {
        errors.username = "username is required"
    }
    //email
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Email address is invalid"
}
    if(!values.password){
    errors.password = "password is required"
}else if(values.password.length < 8){
   errors.password = "password needs to be 8 characters or more" 
}
    if(!values.password2){
    errors.password2 = ""
}else if (values.password2 !== values.password ){
    errors.password2 = "passwords must match"
}
    if(!values.description){
    errors.description = "Give a brief story about yourself"
}else if (values.description < 30 ){
    errors.description = "Add more words"
}
    if(!values.select){
    errors.select = "choose your country"
}else if (values.select !== values.select){
    errors.select = "No country selected"
}
return errors
}