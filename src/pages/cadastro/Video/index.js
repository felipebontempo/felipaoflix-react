import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate'
function CadastroVideo() { 
    return (
        <PageTemplate>
            <h1>Página de Cadastro de Video</h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageTemplate>
    )
}

export default CadastroVideo;