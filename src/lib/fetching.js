export const getCarts = async () => {
    const res = await fetch(`https://my-pixgen.vercel.app/data.json`)
    return res.json()
}

export const getCategories = async () => {
    const res = await fetch(`https://my-pixgen.vercel.app/category.json`)
    return res.json()
}