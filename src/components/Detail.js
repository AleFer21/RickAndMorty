import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RickAndMortyService from '../services/RickAndMorty.service';

const Detail = () => {

  const [personaje, setPersonaje] = useState({});
  const {id} = useParams();

  useEffect(() => {
    RickAndMortyService.getCharaterById(id)
    .then((data) => setPersonaje(data))
  }, [id])

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">{personaje.species}</strong>
            <h3 className="mb-0 text-dark">{personaje.name}</h3>
            <h4 className="mb-0 text-dark">{personaje.gender}</h4>
            <div className="mb-1 text-muted">{new Date(personaje.created).toLocaleDateString()}</div>
            <div className="mb-1 text-muted"></div>
            <Link to={"/"} className="mt-3 btn btn-secondary btn-sm">Return</Link>
          </div>
          <img className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={personaje.image}
              alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Detail;
