import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    fields: () => ({ value:'Opa' })
})

class Pokemons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: []
        };
    }

    componentDidMount(){
        ApiService.ListaPokemons()
                .then(res => {
                    if(res.message === 'success'){
                        PopUp.exibeMensagem('success', 'Pokemons listados com sucesso');
                        this.setState({nomes: [...this.state.nomes, ...res.data]});
                    }
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar Pokemons'));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo}/>
                </div>
            </Fragment>
        );
    }

}
export default Autores;