
import './clientes.styles.css'

function ClienteIndex() {
    return (
        <>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-12 px-0">
                        <button className="btn btn-outline-success custom-shadow btn-cadastrar border-0 rounded-0">
                            <i className="fas fa-plus "></i> &nbsp;
                            Cadastrar Novo Cliente
                        </button>
                    </div>
                </div>
            </div>
            <div className="container shadow">
                <div className="row pt-0">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobre Nome</th>
                                <th scope="col">Profissão</th>
                                <th scope="col" className="col-acoes ps-3">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button className="btn btn-outline-warning btn-sm border-0 custom-shadow-icon">
                                        <i className="fas fa-pen fa-fw"></i>
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm border-0 custom-shadow-icon ms-1">
                                        <i className="fas fa-trash fa-fw"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ClienteIndex;