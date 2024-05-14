import { useParams } from 'react-router-dom';

export default function FeatureA() {
  const params = useParams<{ id: string }>();

  return <div>Feature A - id: {params?.id}</div>;
}
