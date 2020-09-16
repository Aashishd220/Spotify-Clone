import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style/index.css'
import {DataLayer} from './components/DataLayer'
import reducer,{initialState} from './components/Reducer'
ReactDOM.render(
    <DataLayer initialState={initialState} reducer={reducer}>
<App/>
</DataLayer>
,document.querySelector('#root'));