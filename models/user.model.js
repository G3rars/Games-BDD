const ROLES = {
    USER: 'user',
    ADMIN: 'admin'
}

class User {
    email
    password
    role
    token
    constructor({ email, password, role = ROLES.USER , token = null})
    {
        this.email = email
        this.password = password
        this.role = role
        this.token = token
    }

    DTO () {
        return {
            email: this.email,
            password: this.password,
            role: this.role
        }
    }
}

module.exports = User;