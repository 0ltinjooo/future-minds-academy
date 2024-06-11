import React from 'react';
export default function Hero (props) {   

    return (
        <main class="row">
            <div class="col">
                <h1 class="text-center">{props.title}</h1>
                <div>
                    <img class="img-xxl" src={"assets/images/"+ props.photo} alt="Spring" />
                </div>
            </div>
        </main>
    )
    }


