export class UserController {

    public signIn() {
        return "SignIn"
    }

    public signUp() {
        return "SignUp"
    }

    public getProfile() {
        return "GetProfile"
    }

    public findById(id: string) {
        return id
    }
    
    public findAll() {}
    
}
export default new UserController()