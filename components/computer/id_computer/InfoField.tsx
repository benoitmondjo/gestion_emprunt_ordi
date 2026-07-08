
// Composant InfoField : affiche les différents champs (un label et une valeur)
type InfoFieldProps = {
  label: string;
  value: string;
};

export default function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}
