import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <p>All phones :{phones.length} </p>
            {
                phones.map(phone => <li>
                    <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Phones;