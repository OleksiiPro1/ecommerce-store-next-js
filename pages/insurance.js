import Link from 'next/link';
import { toyotaDatabase6 } from '../util/database';

export default function Insurance(props) {
  return (
    <ul>
      {props.insurance.map((insurance) => {
        return (
          <li key={`insurance-${insurance.id}`}>
            <Link href={`/insurance/${insurance.id}`}>{insurance.model}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export function getServerSideProps() {
  return {
    props: {
      insurance: toyotaDatabase6,
    },
  };
}
