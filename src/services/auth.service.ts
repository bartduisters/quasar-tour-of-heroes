import { LocalStorage } from 'quasar';
import { User } from 'src/components/models';
import { ref, Ref } from 'vue';
import { useBackend } from './backend.service';

const service = () => {
  const { authenticateJwt } = useBackend();
  const authenticatedUser: Ref<User | null> = ref(null);
  const accessToken = ref('');

  const tryToAuthenticate = async (): Promise<{ accessToken: string; user: User }> => {
    const jwt = <string>LocalStorage.getItem('jwt');
    return authenticateJwt(jwt).then(({ data }: { data: { accessToken: string; user: User } }) => {
      authenticatedUser.value = data.user;
      accessToken.value = data.accessToken;
      return data;
    });
  };

  const setAccessToken = (jwt: string) => {
    accessToken.value = jwt;
    LocalStorage.set('jwt', jwt);
  };

  const setAuthenticatedUser = (user: User | null) => {
    authenticatedUser.value = user;
  };

  const logout = () => {
    LocalStorage.remove('jwt');
    return tryToAuthenticate();
  };

  return { authenticatedUser, setAuthenticatedUser, accessToken, setAccessToken, tryToAuthenticate, logout };
};

const singleton = service();
const useAuth = () => singleton;

export { useAuth };
