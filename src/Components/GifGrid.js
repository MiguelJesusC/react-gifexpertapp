import React, { Fragment } from 'react';
import { useFetch } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data:images,loading } = useFetch(category)

    return (
        <Fragment>
            <h2 className="animate__animated animate__fadeIn">{category}</h2>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol>
            </div>
        </Fragment>
    )
}