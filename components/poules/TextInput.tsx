interface TextInputProps {
  label: string;
  type?: "text" | "number";
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

export default function TextInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-(--texte-gray-1) mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}