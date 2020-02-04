import { Link } from 'gatsby';
import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

interface HeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({
    siteTitle,
}: HeaderProps): ReactElement => (
    <header className="bg-purple-800 mb-6">
        <div className="mx-auto max-w-4xl py-6 px-4">
            <h1 className="text-4xl">
                <Link to="/" className="text-white">
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

export default Header;
