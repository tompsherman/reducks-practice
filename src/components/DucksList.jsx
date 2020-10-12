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

//----------------------------// 

// "import React, {useEffect} from 'react'\nimport {connect} from 'react-redux'\nimport {fetchDucks} from '../actions'\nimport DucksCard from './DucksCard'\n\nconst DucksList = (props) => {\n\tuseEffect(() => {\n\t\tprops.fetchDucks()\n\t}, [])\n\n\treturn (\n\t\t<div>\n\t\t\t{\n\t\t\t\tprops.ducks.map(item => (\n\t\t\t\t\t<DucksCard key={item.id} duck={item}/>\n\t\t\t\t))\n\t\t\t}\n\t\t</div>\n\t)\n}\n\nconst mapStateToProps = (state) => {\n\treturn {\n\t\tducks: state.ducks,\n\t\tisLoading: state.isLoading,\n\t\terrors: state.errors\n\t}\n}\n\nexport default connect (mapStateToProps, {fetchDucks}) (DucksList)"


