import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { getCurrentUser } from '../lib/appwrite'
// // Define the interface for your context state
// interface GlobalContextType {
//     state: boolean;
//     setState: Dispatch<SetStateAction<boolean>>;
// }

// // Create the context with a default value (undefined)
// const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// // Custom hook to use the context
// export const useGlobalContext = (): GlobalContextType => {
//     const context = useContext(GlobalContext);
//     if (context === undefined) {
//         throw new Error('useGlobalContext must be used within a GlobalProvider');
//     }
//     return context;
// };

// // Define the type for the provider's children
// interface GlobalProviderProps {
//     children: ReactNode;
// }

// // Context provider component
// const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
//     // State and any other logic you want to share globally
//     const [state, setState] = useState<boolean>(false);

//     return (
//         <GlobalContext.Provider value={{ state, setState }}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };

// export default GlobalProvider;



const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);


const GlobalProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		getCurrentUser()
			.then((res) => {
				if (res) {
					setIsLogged(true);
					setUser(res);
				}
				else {

					setIsLogged(false);
					setUser(null);
				}

			})
			.catch((error) => {
				console.log(error);
			})

			.finally(() => {
				setIsLoading(false)
			})
	}, [])


	return (

		<GlobalContext.Provider value={{
			isLogged,
			setIsLogged,
			user,
			setUser,
			isLoading,






		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider;