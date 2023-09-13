import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppStateValues = {
  darkMode: boolean | null;
};

type AppStateActions = {
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
};

type AppState = AppStateValues & AppStateActions;

const initialState: AppStateValues = {
  darkMode: null,
};

const useStore = create<AppState>()(
  persist(
    set => ({
      ...initialState,
      setDarkMode: (darkMode: boolean) => set({darkMode}),
      toggleDarkMode: () =>
        set(state => ({
          darkMode: state.darkMode !== null ? !state.darkMode : state.darkMode,
        })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
