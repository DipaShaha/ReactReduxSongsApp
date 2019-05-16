import {combineReducers} from 'redux';


const songsReducers=()=>{
	return[
		{title:'No Scrubs', duration :'2:30'},
		{title:'All star', duration :'3:20'},
		{title:'No pain', duration :'2:55'},
		{title:'nothing ', duration :'4:30'}

	];
};

const selectedSongReducer=(selectedSong=null,action)=>{
	if(action.type=='SONG_SELECTED')
		return action.payload;
	return selectedSong;
}


export default combineReducers({
	songs:songsReducer,
	selectedSong:selectedSongReducer
});