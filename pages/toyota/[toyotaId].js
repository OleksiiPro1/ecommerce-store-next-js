import { useRouter } from 'next/router';
import { toyotaDatabase } from '../../util/database';

export default function Toyota(props) {
  const router = useRouter();
  const { toyotaId } = router.query;

  return (
    <div>
      All cars profiles
      <div>id: {props.toyota.id}</div>
      <div>accessory: {props.toyota.accessory}</div>
    </div>
  );
}

export function getServerSideProps(context) {
  console.log(context.query);
  const toyotaId = context.query.toyotaId;
  const toyota = toyotaDatabase.find((toyota) => {
    return toyota.id === toyotaId;
  });
  return {
    props: {
      // toyotaId: context.query.toyotaId
      toyota: toyota,
    },
  };
}
