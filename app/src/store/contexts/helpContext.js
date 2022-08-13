import React, {
    createContext,
    useReducer,
    useContext,
    useEffect,
    useState,
} from 'react';
import helpReducer from '../reducers/helpReducer';
import { UserContext } from './userContext';
import { CategoryContext } from './categoryContext';
import useService from '../../services/useService';
import actions from '../actions';
import HelpService from '../../services/Help';
import {
    connect,
    disconnect,
    subscribeToNewHelps,
    subscribeToDeleteHelp,
    changeCategories,
} from '../../services/socket';
export const HelpContext = createContext();

export default function HelpContextProvider(props) {
    const {
        selectedCategories,
        filterCategories,
        setFilterCategories,
    } = useContext(CategoryContext);
    const { user, userPosition } = useContext(UserContext);
    const [helpList, dispatch] = useReducer(helpReducer, []);
    const [loadingHelps, setLoadingHelps] = useState(false);

    useEffect(() => {
        setLoadingHelps(true);
        if (userPosition && user._id) {
            getHelpList(userPosition);
            setupWebSocket();
        }
    }, [user._id, userPosition]);

    useEffect(() => {
        subscribeToNewHelps((help) => {
            if (help.ownerId !== user._id) {
                const helpListArray = [...helpList, help];
                helpListArray.sort((a, b) => {
                    if (a.distanceValue < b.distanceValue) {
                        return -1;
                    }
                    if (a.distanceValue > b.distanceValue) {
                        return 1;
                    }
                    return 0;
                });
                dispatch({
                    type: actions.help.storeList,
                    helps: helpListArray,
                });
            }
        });

        subscribeToDeleteHelp((helpId) => {
            let helpListArray = helpList.filter((help) => {
                return help._id != helpId;
            });
            dispatch({ type: actions.help.storeList, helps: helpListArray });
        });
    }, [helpList]);

    useEffect(() => {
        const isUserAuthenticated = user._id;
        if (userPosition && isUserAuthenticated) {
            if (selectedCategories.length) {
                getHelpListWithCategories(userPosition);
            } else {
                getHelpList(userPosition);
                setFilterCategories(false);
            }
            changeCategories(selectedCategories);
        }
    }, [selectedCategories]);

    async function getHelpList(coords) {
        if (coords) {
            const { _id: userId } = user;
            const helpListArray = await useService(HelpService, 'getNearHelp', [
                coords,
                userId,
            ]);

            if (!helpListArray.error) {
                dispatch({
                    type: actions.help.storeList,
                    helps: helpListArray,
                });
            }
            setLoadingHelps(false);
        }
    }

    async function getHelpListWithCategories(coords) {
        if (coords && selectedCategories.length && filterCategories) {
            const { _id: userId } = user;
            const helpListFiltered = await useService(
                HelpService,
                'getAllHelpForCategory',
                [coords, selectedCategories, userId],
            );
            if (!helpListFiltered.error) {
                dispatch({
                    type: actions.help.storeList,
                    helps: helpListFiltered,
                });
            }
            setFilterCategories(false);
        }
    }

    function setupWebSocket() {
        disconnect();
        const { _id: userId } = user;
        connect(JSON.stringify(userPosition), userId);
    }

    return (
        <HelpContext.Provider value={{ helpList, dispatch, loadingHelps }}>
            {props.children}
        </HelpContext.Provider>
    );
}
