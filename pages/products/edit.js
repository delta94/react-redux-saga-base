import React from 'react'
import {connect} from 'react-redux'
import Edit from './../../components/product/Edit'
import Head from './../../components/Seo';

class EditPage extends React.Component {
    static async getInitialProps ({ctx}) {
        const { query } = ctx;
        return query.id
    }

    render (props) {
        const {product} = this.props.products;
        const renderHead = product && Object.keys(product).length > 0 && (
            <Head 
                object={
                    [
                        {
                            key: 'title',
                            content: product.name
                        },
                        {
                            key: 'description',
                            title: 'name',
                            content: product.name
                        },
                        {
                            key: 'og:title',
                            title: 'property',
                            content: product.name
                        },
                        {
                            key: 'og:description',
                            title: 'property',
                            content: product.description
                        },
                        {
                            key: 'site_name',
                            title: 'property',
                            content: 'anything',
                        },
                        {
                            key: 'og:type',
                            title: 'property',
                            content: 'anything'
                        },
                        {
                            key: 'og:image',
                            title: 'property',
                            content: 'anything'
                        }
                    ]
                }
            ></Head>
        );

        return (
            <div>
                {renderHead}
                <Edit id={this.props[0]} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps)(EditPage);
