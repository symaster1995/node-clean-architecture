class UserSeralizer {
    serialize(data){
        if(!data){
            throw new Error('No data')
        }

        return {
            'id': data.id,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'createdAt': data.createdAt,
            'updatedAt': data.updatedAt
        }
    }
}


export default UserSeralizer