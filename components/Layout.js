import { css } from '@emotion/react';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {
        //Page content
        props.children
      }

      <Footer />
    </div>
  );
}
