import React from "react";
import "../Cards/index.css";


export default function CardHome(){
    return( <div>



            <div className="col-12 col-md-10 offset-md-1" id="mini-banners">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <i className="bi bi-image-alt"> </i>
                            <div className="card-body">
                                <h5 className="card-title secondary-color">Lindos Lugares</h5>
                                <p className="card-text secondary-color">Os melhores destinos e a melhor culinária local.
                                </p>
                                <a href="./destinos.html" className="btn btn-dark">Saber Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <i className="bi bi-cash-coin secondary-color"> </i>
                            <div className="card-body">
                                <h5 className="card-title secondary-color">Preços Incríveis</h5>
                                <p className="card-text secondary-color">São diversos pacotes e promoções o ano todo.</p>
                                <a href="./pacotes.html" className="btn btn-dark">Saber Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card text-center">
                            <i className="bi bi-sunglasses secondary-color"> </i>
                            <div className="card-body">
                                <h5 className="card-title secondary-color">Todos os Gostos</h5>
                                <p className="card-text secondary-color">Para descansar ou para curtir, aqui é o lugar
                                    certo.</p>
                                <div className="btn btn-dark">Saber Mais</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
                       
    
    
    )
}