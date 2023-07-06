import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const getRecipeService = async (drinkId) => {
    try {
        const url = `${apiUrl}lookup.php?i=${drinkId}`;
        const {data} = await axios.get(url);
        return data.drinks[0];

    } catch (error) {
        console.error(error);
        throw new Error('Hubo un error al obtener la receta');
    }
};

const filterDrinksSerrvice = async (name, category) => {
    try {
        const url = `${apiUrl}filter.php?i=${name}&c=${category}`;
        const{data} = await axios.get(url);
        return data.drinks;

    } catch (error) {
        console.error(error);
        throw new Error('Hubo un error al obtener las bebidas');
    }
}

export { getRecipeService, filterDrinksSerrvice }

/* export const getCategoriesService = async () => {
    try {
        const url = `${apiUrl}list.php?c=list`;
        const { data } = await axios(url);
        return data.drinks || [];

    } catch (error) {
        console.log(error)
        throw new Error('Hubo un error al obtener las categorias.')
    }
} */