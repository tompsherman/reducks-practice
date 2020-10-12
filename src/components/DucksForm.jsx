import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postDucks} from '../actions'



const DucksForm = (props) => {
    const [duck, setDuck] = useState({
        species: "",
        region: "",
        cookTime: ""
    })

    const submitHandler = event => {
        event.preventDefault();
        props.postDucks(duck)
    }

    const changeHandler = event => {
        setDuck({...duck, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    name='species'
                    type='text'
                    value={props.species}
                    onChange={changeHandler}
                    placeholder='enter species'
                />
                <input 
                    name='region'
                    type='text'
                    value={props.region}
                    onChange={changeHandler}
                    placeholder='enter region'
                />
                <input 
                    name='cookTime'
                    type='text'
                    value={props.cookTime}
                    onChange={changeHandler}
                    placeholder='enter cook time'
                />
                <button>add that duck!</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ducks: state.ducks,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (mapStateToProps, {postDucks}) (DucksForm)

//-------------------------------------\\

// "import React, {useState} from 'react'\nimport {connect} from 'react-redux'\nimport {postDucks} from '../actions'\n\nconst DucksForm = (props) => {\n\tconst [duck, setDuck] = useState({\n\t\tspecies: '',\n\t\tregion: '',\n\t\tcookTime: ''\n\t})\n\n\tconst submitHandler = event => {\n\t\tevent.preventDefault();\n\t\tprops.postDucks(duck)\n\t}\n\n\tconst changeHandler = event => {\n\t\tsetDuck({...duck, [event.target.name]: event.target.value})\n\t}\n\n\treturn (\n\t\t<div>\n\t\t\t<form onSubmit={submitHandler}>\n\t\t\t\t<input\n\t\t\t\t\tname='species'\n\t\t\t\t\ttype='text'\n\t\t\t\t\tvalue={props.species}\n\t\t\t\t\tonChange={changeHandler}\n\t\t\t\t\tplaceholder='enter species'\n\t\t\t\t/>\n\t\t\t\t<input\n\t\t\t\t\tname='region'\n\t\t\t\t\ttype='text'\n\t\t\t\t\tvalue={props.region}\n\t\t\t\t\tonChange={changeHandler}\n\t\t\t\t\tplaceholder='enter region'\n\t\t\t\t/>\n\t\t\t\t<input\n\t\t\t\t\tname='cookTime'\n\t\t\t\t\ttype='text'\n\t\t\t\t\tvalue={props.cookTime}\n\t\t\t\t\tonChange={changeHandler}\n\t\t\t\t\tplaceholder='enter cook time'\n\t\t\t\t/>\n\t\t\t\t<button>add that duck!</button>\n\t\t\t</form>\n\t\t</div>\n\t)\n}\n\nconst mapStateToProps = (state) => {\n\treturn {\n\t\tducks: state.ducks,\n\t\tisLoading: state.isLoading,\n\t\terror: state.error\n\t}\n}\n\nexport default connect (mapStateToProps, {postDucks}) (DucksForm)"
