import { Hero } from 'src/components/models';

const useAuthentication = () => {
    const authenticate = (email: string, password: string) => {
        const data = { strategy: 'local', email, password };

        return fetch('http://localhost:3030/authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    };

    const authenticateJwt = (jwt: string) => {
        const data = { strategy: 'jwt', accessToken: jwt };

        return fetch('http://localhost:3030/authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    };

    return { authenticate, authenticateJwt };
};

const useHeroes = () => {

    /*
    * note: the backend model has both `_id` and `id` as a property
    * id: is used because the frontend model uses id and name in the Quasar Tour of Heroes
    * _id is the id in the database, this is the property that can be used to update and delete a hero
    */

    const getHeroes = () => {
        // Implement functionality to get all heroes
    }

    const createHero = (hero: Hero) => {
        // Implement functionality to create one hero
        console.log(hero);
    }

    const updateHero = (hero: Partial<Hero>) => {
        // Implement functionality to update one hero, use PATCH, not PUT
        console.log(hero);
    }

    const deleteHero = (id: number) => {
        // Implement functionality to delete one hero
        console.log(id);
    }

    return { getHeroes, createHero, updateHero, deleteHero };
}

const useAuthenticationSingleton = useAuthentication();
const useHeroesSingleton = useHeroes();

const useBackend = () => {
    return {
        ...useAuthenticationSingleton,
        ...useHeroesSingleton
    };
};

export { useBackend };
