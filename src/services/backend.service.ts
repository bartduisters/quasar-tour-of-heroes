import { LocalStorage } from 'quasar';
import { Hero, HeroBackendResponse } from 'src/components/models';
import { ref, Ref } from 'vue';

const useAuthentication = () => {
    const authenticate = (email: string, password: string) => {
        const data = { strategy: 'local', email, password };

        return fetch('https://api.code-coaching.dev/authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    };

    const authenticateJwt = (jwt: string) => {
        const data = { strategy: 'jwt', accessToken: jwt };

        return fetch('https://api.code-coaching.dev/authentication', {
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
    const heroes: Ref<Array<Hero>> = ref([]);

    /*
    * note: the backend model has both `_id` and `id` as a property
    * id: is used because the frontend model uses id and name in the Quasar Tour of Heroes
    * _id is the id in the database, this is the property that can be used to update and delete a hero
    */

    const getHeroes = async () => {
        // Implement functionality to get all heroes
        const headers = new Headers();
        const jwt = <string>LocalStorage.getItem('jwt');
        headers.append('Authorization', `Bearer ${jwt}`);
        headers.append('Content-Type', 'application/json');

        const requestOptions = {
            method: 'GET',
            headers
        };

        const result = await fetch('https://api.code-coaching.dev/heroes/', requestOptions);
        const jsonResult = await <Promise<HeroBackendResponse>>result.json();

        console.log(jsonResult.data);
        heroes.value = jsonResult.data;
    }

    const createHero = (hero: Hero) => {
        // Implement functionality to create one hero
        const headers = new Headers();
        const jwt = <string>LocalStorage.getItem('jwt');
        headers.append('Authorization', `Bearer ${jwt}`);
        headers.append('Content-Type', 'application/json');

        const body = JSON.stringify(hero);

        const requestOptions = {
            method: 'POST',
            headers,
            body
        };

        fetch('https://api.code-coaching.dev/heroes/', requestOptions)
            .then(response => response.json())
            .then((result: Hero) => alert(`${result.name} is aangemaakt!`))
            .catch(error => alert(error));
    }

    const updateHero = (hero: Partial<Hero>) => {
        // Implement functionality to update one hero, use PATCH, not PUT
        console.log(hero);
    }

    const deleteHero = (id: number) => {
        // Implement functionality to delete one hero
        console.log(id);
    }

    return { heroes, getHeroes, createHero, updateHero, deleteHero };
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
