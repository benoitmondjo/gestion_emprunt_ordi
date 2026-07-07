interface PageBreadcrumbProps {
  title: string;
  parent: string;
}

export default function PageBreadcrumb({ title, parent }: PageBreadcrumbProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl md:text-3xl font-bold font-roboto mb-1">
        {title}
      </h1>
      <p className="text-sm">
        <span className="text-primary">{parent}</span>
        <span className="text-(--texte-gray-1)"> &gt; {title}</span>
      </p>
    </div>
  );
}