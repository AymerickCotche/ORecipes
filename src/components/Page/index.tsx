import * as React from 'react';
import * as PropTypes from 'prop-types';

interface PageProps {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => (
  <main className="page">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
