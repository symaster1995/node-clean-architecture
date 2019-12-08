class UserSeralizer {
    serialize(data){
        if(!data){
            throw new Error('No data')
        }

        return {
            'id': data.id,
            'name': data.name,
            'email': data.email,
            'btcId': data.btcId,
            'ethId': data.ethId,
            'maxAmount': data.maxAmount,
            'createdAt': data.createdAt,
            'updatedAt': data.updatedAt
        }
    }
}


export default UserSeralizer