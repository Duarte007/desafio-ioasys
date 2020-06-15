class UserTransformation{
    transform(user){
        return {
            id: user.id,
            investor_name: user.investor_name,
            email: user.email,
            city: user.city,
            country: user.country,
            balance: parseFloat(user.country),
            photo: user.photo,
            portfolio: {
                enterprises_number: 0,
                enterprises: []
            },
            portfolio_value: user.portfolio_value,
            first_access: user.first_access,
            super_angel: user.super_angel
        }
    }
}

module.exports = new UserTransformation();

