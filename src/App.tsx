import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from './redux/store';
import {ITeamList, IWinner} from "./interface";
import './App.css';
import {getRestaurants} from "./redux/effects";
import {IDetailedData} from "./redux/interfaces/detailedInterface";
import SearchBar from "./Components/SearchBar";
import Participants from "./Components/Participants";
import RestaurantChoice from "./Components/RestaurantChoice";
import Voting from "./Components/Voting";
import AddInput from "./Components/AddInput";


const App = () => {

    const dispatch = useDispatch();
    const restaurants = useSelector((state: AppState) => state.restaurants).restaurants;
    const [area, setArea] = useState<string>("");
    const [teamList, setTeamList] = useState<ITeamList[]>([]);
    const [countInputBox, setCountInputBox] = useState<number>(0);
    const [winner, setWinner] = useState<string | 0>("");

    useEffect(() => {
        const obj: IWinner = {};
        teamList.forEach((item) => {
            if (item.restaurant.length) obj[item.restaurant] = ++obj[item.restaurant] || 1;
        })
        const winnerRes: string | 0 = Object.keys(obj).length &&
            Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

        setWinner(winnerRes)
    }, [teamList])

    useEffect(() => {
        setTeamList([]);
        setWinner("");
    }, [restaurants])

    const handleParticipantName = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {value} = e.target;
        const list: ITeamList[] = [...teamList];
        list[index].name = value
        setTeamList(list);
    };
    const handleInputRemove = useCallback((index: number) => {
        const list = [...teamList];
        const indexToRemove = list.findIndex(item => item.id === index)
        list.splice(indexToRemove, 1)
        setTeamList(list)
    }, [teamList]);

    const handleInputAdd = useCallback((countInputBox: number) => {
        setCountInputBox(countInputBox + 1);
        setTeamList([...teamList,
            {
                name: "",
                restaurant: "",
                id: countInputBox
            }
        ]);
    }, [teamList, setTeamList]);

    const handleVoting = (resId: string, userId: number) => {
        const updatedVotes = teamList.map((item) => {
            if (item.id === userId) {
                return {...item, restaurant: resId};
            }
            return item;
        });
        setTeamList(updatedVotes);
    };

    const setVoting = (eachParticipant: ITeamList) => {
        return (data: IDetailedData,
                idx: number) => {
            const venue = data.response.venue;
            const testId = `voting-section-${idx}`;
            return <Voting key={idx}
                           onClick={() => handleVoting(venue.id,
                               eachParticipant.id)}
                           eachParticipant={eachParticipant}
                           venue={venue}
                           testId={testId}
            />
        };
    }

    return (
        <div className="container">
            <SearchBar value={area} onChange={(e) => {
                setArea((e.target as HTMLInputElement).value)
            }} onClick={() => {
                area.length > 0 && dispatch(getRestaurants(area))
            }}/>

            <table className="styled-table" data-test-id="table">
                <tbody>
                <tr data-test-id="table-header">
                    <th>Name</th>
                    {restaurants.map((data: IDetailedData, idx: number) => {
                            const singleRestaurant = data.response.venue;
                            const testId = `rest-${idx}`;
                            return <RestaurantChoice key={idx}
                                                     testId = {testId}
                                                     singleRestaurant={singleRestaurant}
                                                     winner={winner}/>
                        }
                    )}
                    <th className="remove"/>
                </tr>
                {teamList.map((eachParticipant, index) => {
                    const testId = `participant-area-${index}`;
                    return <Participants key={index}
                                         testId={testId}
                                         eachParticipant={eachParticipant}
                                         onChange={e => handleParticipantName(e, index)}
                                         never={restaurants}
                                         callback={setVoting(eachParticipant)}
                                         iTeamLists={teamList}
                                         onClick={() => handleInputRemove(index)}/>
                })}
                </tbody>
            </table>
            <AddInput onClick={() => handleInputAdd(countInputBox)}/>
        </div>
    );
}

export default App;
