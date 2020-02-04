import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage: FunctionComponent = (): ReactElement => (
    <Layout>
        <SEO title="Page two" />
        <h1 className="text-3xl">Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link className="underline text-blue-500" to="/">
            Go back to the homepage
        </Link>
    </Layout>
);

export default SecondPage;
