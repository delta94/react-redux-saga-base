import React, {Component} from 'react';

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">REDUX SAGA BASE</h1>
                </div>
            </section>
        );
    }
}
