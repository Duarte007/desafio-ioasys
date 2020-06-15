class EnterpriseTransformation{
    transform(enterprises){
        return enterprises.map(enterprise => {
            return {
                id: enterprise.id,
                email_enterprise: enterprise.email_enterprise,
                facebook: enterprise.facebook,
                twitter: enterprise.twitter,
                linkedin: enterprise.linkedin,
                phone: enterprise.phone,
                own_enterprise: enterprise.own_enterprise,
                enterprise_name: enterprise.enterprise_name,
                photo: enterprise.photo,
                description: enterprise.description,
                city: enterprise.city,
                country: enterprise.country,
                value: enterprise.value,
                share_price: enterprise.share_price,
                enterprise_type: {
                    id: enterprise.enterprise_type_id,
                    enterprise_type_name: enterprise.EnterpriseType.enterprise_type_name
                }
            }
        })
    }
}

module.exports = new EnterpriseTransformation();

