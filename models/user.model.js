const ROLES = {
    USER: 'user',
    ADMIN: 'admin'
}

class User {
    email
    password
    role
    constructor({ email, password, role = ROLES.USER})
    {
        this.email = email
        this.password = password
        this.role = role
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