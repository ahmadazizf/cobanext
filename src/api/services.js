import api from '.'

const ENDPOINT = {
    ACCOUNT: '/accounts'
}

const getAllAccount = async () => {
    try {
        const res = await api.get(ENDPOINT.ACCOUNT)
        console.log('res', res);
        return res
    } catch (err) {
        throw Error(err)
    }
}

const getSelectedAccount = async (slug) => {
    try {
        const res = await api.get(`${ENDPOINT.ACCOUNT}?filters[slug][$eqi]=${slug}&populate=*`)
        console.log('res.byid', res);
        return res
    } catch (err) {
        throw Error(err)

    }
}


export { getAllAccount, getSelectedAccount }