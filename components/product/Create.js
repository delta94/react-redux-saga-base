import React, {Component} from 'react';
import Main from './../Main'
import ActiveLink from './../ActiveLink';
import { withRouter } from 'next/router'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const { name, description, price } = this.state;
        const params = {name, description, price};
        this.props.createProduct(params, this.props.router)
    };

    render() {
        const { name, description, price } = this.state;

        return (
            <Main>
                <div className="container mb-4">
                    <div className="row">
                        <form onSubmit={this.onSubmit}>
                            <div className="">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        placeholder="Name Product"
                                        className="form-control"
                                        value={name}
                                        onChange={this.onChange}
                                        />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" rows="3" placeholder="Description Product" name="description" value={description} onChange={this.onChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="Price Product"
                                        className="form-control"
                                        value={price}
                                        onChange={this.onChange}
                                        />
                                </div>
                                <div className="clearfix"></div>
                                <div className="">
                                    <div className="row">
                                        <div className="col-sm-12  col-md-6">
                                            <ActiveLink name='products' className='btn btn-block btn-light'>Back</ActiveLink>
                                            <br/>
                                        </div>
                                        <div className="col-sm-12 col-md-6 text-right">
                                            <button className="btn btn-lg btn-block btn-primary text-uppercase">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Main>
        );
    }
}

export default withRouter(Create);
