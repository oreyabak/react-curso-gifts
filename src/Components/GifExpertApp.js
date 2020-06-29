import React, { useState } from 'react';
import AddCategorias from './AddCategorias';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
	//const categorias = ['Filemon', 'Girl', 'she'];
	const [categorias, setCategorias] = useState([
		{ name: 'Girl', key: 34 }
	]);

	//const handleAdd = () => {
	//setCategorias ([...categorias, 'UE4']); // Último puesto.
	//	setCategorias([{ name: 'UE4', key: 333 }, ...categorias]); // Primer puesto.
	//}

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategorias setCategorias={setCategorias} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar</button> */}

			<ol>
				{
					//categorias.map((c, i) => { return <li key={i}>{c}</li> })
					//categorias.map((c) => { return <li key={c.key}>{c.name}</li> })
					categorias.map((c) => <GifGrid key={c.key} categoria={c} />)
				}
			</ol>
		</>
	);
}

export default GifExpertApp;