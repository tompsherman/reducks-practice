import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {fetchDucks} from "../actions"
import DucksCard from './DucksCard'

const DucksList = (props) => {
    useEffect(() => {
        props.fetchDucks()
    }, [])

    return (
        <div>
            {
                props.ducks.map(item => (
                    <DucksCard key={item.id} duck={item}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ducks: state.ducks,
        isLoading: state.isLoading,
        errors: state.errors
    }
}

export default connect (mapStateToProps, {fetchDucks}) (DucksList)
